import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UseMutationResult } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import { useToast } from "@/hooks/use-toast";

type User = {
  id: string;
  email: string;
  username: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: UseMutationResult<User, Error, any>;
  logoutMutation: UseMutationResult<void, Error, void>;
  registerMutation: UseMutationResult<User, Error, any>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || "",
          username: session.user.user_metadata?.username || session.user.email?.split("@")[0] || "",
        });
      }
      setIsLoading(false);
    });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || "",
          username: session.user.user_metadata?.username || session.user.email?.split("@")[0] || "",
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loginMutation = useMutation({
    mutationFn: async (credentials: any) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });
      if (error) throw error;
      if (!data.user) throw new Error("Usuário não encontrado.");
      return {
        id: data.user.id,
        email: data.user.email || "",
        username: data.user.user_metadata?.username || data.user.email?.split("@")[0] || "",
      };
    },
    onSuccess: (user) => {
      toast({ title: "Login realizado com sucesso!", description: "Bem-vindo de volta!" });
    },
    onError: (error: Error) => {
      toast({ title: "Erro no login", description: error.message, variant: "destructive" });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (credentials: any) => {
      const { data, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          data: { username: credentials.username },
        },
      });
      if (error) throw error;
      if (!data.user) throw new Error("Erro ao criar conta.");
      return {
        id: data.user.id,
        email: data.user.email || "",
        username: data.user.user_metadata?.username || data.user.email?.split("@")[0] || "",
      };
    },
    onSuccess: (user) => {
      toast({ title: "Conta criada!", description: "Sua conta foi criada com sucesso." });
    },
    onError: (error: Error) => {
      toast({ title: "Erro ao registrar", description: error.message, variant: "destructive" });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    onSuccess: () => {
      toast({ title: "Desconectado", description: "Até a próxima!" });
    },
    onError: (error: Error) => {
      toast({ title: "Erro ao sair", description: error.message, variant: "destructive" });
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error: null,
        loginMutation,
        logoutMutation,
        registerMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}