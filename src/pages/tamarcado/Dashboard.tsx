import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import { supabase } from "../../lib/supabase";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { useToast } from "../../hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Calendar, Clock, Copy, Link as LinkIcon, Plus, Users, Globe } from "lucide-react";

export default function TamarcadoDashboard() {
  const { user, isLoading: authLoading, loginMutation, registerMutation } = useAuth();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    if (user) {
      loadData();
    } else {
      setLoading(false);
    }
  }, [user, authLoading]);

  async function loadData() {
    setLoading(true);
    try {
      // Load Profile
      const { data: profileData, error: profileError } = await supabase
        .from('tamarcado_profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();
        
      if (profileData) {
        setProfile(profileData);
        setSlug(profileData.slug || "");
        setDisplayName(profileData.display_name || "");
        setDescription(profileData.description || "");
        
        // Load Event Types
        const { data: eventsData } = await supabase
          .from('tamarcado_event_types')
          .select('*')
          .eq('profile_id', profileData.id)
          .order('created_at', { ascending: false });
          
        if (eventsData) setEventTypes(eventsData);
        
        // Load Bookings
        const { data: bookingsData } = await supabase
          .from('tamarcado_bookings')
          .select('*, tamarcado_event_types(title)')
          .eq('profile_id', profileData.id)
          .order('start_time', { ascending: true });
          
        if (bookingsData) setBookings(bookingsData);

        // Load Availability
        const { data: availabilityData } = await supabase
          .from('tamarcado_availability')
          .select('*')
          .eq('profile_id', profileData.id)
          .single();

        if (availabilityData) {
          setAvailability(availabilityData);
        } else {
          // Default availability setup
          const defaultAvailability = {
            profile_id: profileData.id,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            monday: { active: true, start: "09:00", end: "17:00" },
            tuesday: { active: true, start: "09:00", end: "17:00" },
            wednesday: { active: true, start: "09:00", end: "17:00" },
            thursday: { active: true, start: "09:00", end: "17:00" },
            friday: { active: true, start: "09:00", end: "17:00" },
            saturday: { active: false, start: "09:00", end: "12:00" },
            sunday: { active: false, start: "09:00", end: "12:00" }
          };
          const { data: newAvail } = await supabase.from('tamarcado_availability').insert([defaultAvailability]).select().single();
          if (newAvail) setAvailability(newAvail);
        }
      }
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function saveProfile() {
    if (!slug || !displayName) {
      toast({ title: "Erro", description: "Preencha o link e seu nome.", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      const profileData = {
        user_id: user?.id,
        slug: slug.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
        display_name: displayName,
        description
      };

      if (profile) {
        await supabase.from('tamarcado_profiles').update(profileData).eq('id', profile.id);
      } else {
        const { data } = await supabase.from('tamarcado_profiles').insert([profileData]).select().single();
        if (data) setProfile(data);
      }
      toast({ title: "Sucesso", description: "Perfil salvo com sucesso!" });
    } catch (error: any) {
      toast({ title: "Erro", description: error.message || "Erro ao salvar perfil", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  }

  async function saveAvailability() {
    setSaving(true);
    try {
      await supabase.from('tamarcado_availability').update(availability).eq('id', availability.id);
      toast({ title: "Sucesso", description: "Disponibilidade salva com sucesso!" });
    } catch (error: any) {
      toast({ title: "Erro", description: "Não foi possível salvar a disponibilidade.", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  }

  async function createDefaultEventType() {
    if (!profile) return;
    try {
      const { data } = await supabase.from('tamarcado_event_types').insert([{
        profile_id: profile.id,
        title: "Bate-papo de 30 min",
        description: "Uma conversa rápida para alinhamento.",
        duration_minutes: 30
      }]).select().single();
      
      if (data) {
        setEventTypes([...eventTypes, data]);
        toast({ title: "Sucesso", description: "Evento criado!" });
      }
    } catch (error) {
      toast({ title: "Erro", description: "Não foi possível criar o evento", variant: "destructive" });
    }
  }

  const [authTab, setAuthTab] = useState<"login" | "register">("login");
  const [registerUsername, setRegisterUsername] = useState("");

  if (loading || authLoading) return <div className="p-8 text-center">Carregando...</div>;

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-lg border border-slate-200">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              📅
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900">TáMarcado</CardTitle>
            <CardDescription className="text-slate-500">
              Gerencie sua agenda e receba agendamentos de forma simples.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex border-b mb-4">
              <button
                className={`flex-1 py-2 text-center border-b-2 font-medium text-sm transition-colors ${
                  authTab === "login" 
                    ? "border-blue-600 text-blue-600 font-semibold" 
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
                onClick={() => setAuthTab("login")}
              >
                Entrar
              </button>
              <button
                className={`flex-1 py-2 text-center border-b-2 font-medium text-sm transition-colors ${
                  authTab === "register" 
                    ? "border-blue-600 text-blue-600 font-semibold" 
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
                onClick={() => setAuthTab("register")}
              >
                Criar Conta
              </button>
            </div>

            {authTab === "login" ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">E-mail</Label>
                  <Input 
                    id="login-email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    value={loginEmail} 
                    onChange={e => setLoginEmail(e.target.value)} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Senha</Label>
                  <Input 
                    id="login-password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={loginPassword} 
                    onChange={e => setLoginPassword(e.target.value)} 
                  />
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium" 
                  disabled={loginMutation.isPending}
                  onClick={() => {
                    if (!loginEmail || !loginPassword) {
                      toast({ title: "Erro", description: "Preencha e-mail e senha.", variant: "destructive" });
                      return;
                    }
                    loginMutation.mutate({ email: loginEmail, password: loginPassword });
                  }}
                >
                  {loginMutation.isPending ? "Entrando..." : "Entrar no TáMarcado"}
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-username">Nome Completo</Label>
                  <Input 
                    id="register-username" 
                    type="text" 
                    placeholder="Seu nome" 
                    value={registerUsername} 
                    onChange={e => setRegisterUsername(e.target.value)} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">E-mail</Label>
                  <Input 
                    id="register-email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    value={loginEmail} 
                    onChange={e => setLoginEmail(e.target.value)} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Senha</Label>
                  <Input 
                    id="register-password" 
                    type="password" 
                    placeholder="Mínimo 6 caracteres" 
                    value={loginPassword} 
                    onChange={e => setLoginPassword(e.target.value)} 
                  />
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium" 
                  disabled={registerMutation.isPending}
                  onClick={() => {
                    if (!loginEmail || !loginPassword || !registerUsername) {
                      toast({ title: "Erro", description: "Preencha todos os campos.", variant: "destructive" });
                      return;
                    }
                    registerMutation.mutate({ 
                      email: loginEmail, 
                      username: registerUsername, 
                      password: loginPassword 
                    });
                  }}
                >
                  {registerMutation.isPending ? "Criando conta..." : "Criar Conta e Acessar"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">TáMarcado</h1>
        <p className="text-muted-foreground">Gerencie sua disponibilidade e agendamentos.</p>
      </div>

      <Tabs defaultValue="events" className="w-full">
        <TabsList>
          <TabsTrigger value="events">Tipos de Evento</TabsTrigger>
          <TabsTrigger value="availability">Disponibilidade</TabsTrigger>
          <TabsTrigger value="bookings">Agendamentos</TabsTrigger>
          <TabsTrigger value="profile">Meu Perfil</TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-4 mt-4">
          {!profile ? (
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <p>Você precisa configurar seu perfil antes de criar eventos.</p>
                <Button onClick={() => document.querySelector<HTMLButtonElement>('[value="profile"]')?.click()}>
                  Configurar Perfil
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Seus Eventos</h2>
                <Button onClick={createDefaultEventType}>
                  <Plus className="mr-2 h-4 w-4" /> Novo Evento
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {eventTypes.map(event => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>{event.duration_minutes} minutos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" className="w-full" onClick={() => {
                          navigator.clipboard.writeText(`${window.location.origin}/book/${profile.slug}`);
                          toast({ title: "Link copiado!" });
                        }}>
                          <Copy className="mr-2 h-4 w-4" /> Copiar Link
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {eventTypes.length === 0 && (
                  <div className="col-span-full text-center p-8 border rounded-lg border-dashed">
                    Nenhum evento configurado. Crie seu primeiro tipo de evento para receber agendamentos.
                  </div>
                )}
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="bookings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Próximos Agendamentos</CardTitle>
            </CardHeader>
            <CardContent>
              {bookings.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="mx-auto h-12 w-12 opacity-20 mb-4" />
                  <p>Nenhum agendamento recebido ainda.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map(booking => (
                    <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold">{booking.guest_name}</p>
                        <p className="text-sm text-muted-foreground">{booking.tamarcado_event_types?.title}</p>
                        <p className="text-sm text-blue-600">
                          {new Date(booking.start_time).toLocaleString('pt-BR')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{booking.guest_email}</p>
                        <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full mt-1">
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="availability" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Disponibilidade Semanal</CardTitle>
              <CardDescription>Defina seus horários padrão de trabalho.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {availability && (
                <>
                  <div className="space-y-2">
                    <Label>Fuso Horário Padrão</Label>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <Input 
                        value={availability.timezone} 
                        onChange={e => setAvailability({...availability, timezone: e.target.value})}
                        className="max-w-xs"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => {
                      const dayName = {
                        monday: 'Segunda-feira', tuesday: 'Terça-feira', wednesday: 'Quarta-feira',
                        thursday: 'Quinta-feira', friday: 'Sexta-feira', saturday: 'Sábado', sunday: 'Domingo'
                      }[day as keyof typeof availability];
                      
                      const dayConfig = availability[day as keyof typeof availability];
                      if (typeof dayConfig !== 'object' || dayConfig === null) return null;
                      
                      return (
                        <div key={day} className="flex items-center gap-4">
                          <label className="flex items-center gap-2 w-32">
                            <input 
                              type="checkbox" 
                              checked={dayConfig.active}
                              onChange={(e) => setAvailability({
                                ...availability,
                                [day]: { ...dayConfig, active: e.target.checked }
                              })}
                            />
                            <span className="text-sm font-medium">{dayName}</span>
                          </label>
                          <div className={`flex items-center gap-2 ${!dayConfig.active && 'opacity-50 pointer-events-none'}`}>
                            <Input 
                              type="time" 
                              value={dayConfig.start}
                              onChange={(e) => setAvailability({
                                ...availability,
                                [day]: { ...dayConfig, start: e.target.value }
                              })}
                              className="w-32"
                            />
                            <span>até</span>
                            <Input 
                              type="time" 
                              value={dayConfig.end}
                              onChange={(e) => setAvailability({
                                ...availability,
                                [day]: { ...dayConfig, end: e.target.value }
                              })}
                              className="w-32"
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <Button onClick={saveAvailability} disabled={saving}>
                    {saving ? "Salvando..." : "Salvar Disponibilidade"}
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Perfil</CardTitle>
              <CardDescription>
                Seu link público será: <strong>{window.location.origin}/book/{slug || 'seu-link'}</strong>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="slug">Link Personalizado (Slug)</Label>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">/book/</span>
                  <Input 
                    id="slug" 
                    value={slug} 
                    onChange={e => setSlug(e.target.value)} 
                    placeholder="seu-nome"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="displayName">Nome de Exibição</Label>
                <Input 
                  id="displayName" 
                  value={displayName} 
                  onChange={e => setDisplayName(e.target.value)} 
                  placeholder="Seu nome ou nome da empresa"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Input 
                  id="description" 
                  value={description} 
                  onChange={e => setDescription(e.target.value)} 
                  placeholder="Mensagem de boas-vindas..."
                />
              </div>
              <Button onClick={saveProfile} disabled={saving}>
                {saving ? "Salvando..." : "Salvar Perfil"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
