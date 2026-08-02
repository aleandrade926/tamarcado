import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster.tsx";
import NotFound from "./pages/not-found";

// Rotas do TáMarcado (Calendly Clone MVP)
import TamarcadoDashboard from "./pages/tamarcado/Dashboard";
import PublicBooking from "./pages/tamarcado/PublicBooking";

function Router() {
  return (
    <Switch>
      <Route path="/" component={TamarcadoDashboard} />
      <Route path="/book/:id" component={PublicBooking} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [wouterLocation] = useLocation();
  const location = typeof window !== "undefined" ? window.location.pathname : wouterLocation;

  // Rota pública de agendamento do TáMarcado
  if (location.startsWith("/book/")) return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <PublicBooking />
    </QueryClientProvider>
  );

  // Dashboard do TáMarcado
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <TamarcadoDashboard />
    </QueryClientProvider>
  );
}

export default App;
