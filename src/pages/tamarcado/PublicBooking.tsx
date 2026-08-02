import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { supabase } from "../../lib/supabase";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useToast } from "../../hooks/use-toast";
import { Clock, Calendar as CalendarIcon, User, ChevronLeft } from "lucide-react";
import { SchedulingEngine } from "../../lib/tamarcado/engine";
import type { Slot } from "../../lib/tamarcado/engine";
import { format } from "date-fns";

export default function PublicBooking() {
  const [, setLocation] = useLocation();
  const pathParts = window.location.pathname.split('/');
  const slug = pathParts[pathParts.length - 1] === 'book' ? undefined : pathParts[pathParts.length - 1];
  const { toast } = useToast();

  const [profile, setProfile] = useState<any>(null);
  const [eventTypes, setEventTypes] = useState<any[]>([]);
  const [availability, setAvailability] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [guestTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [step, setStep] = useState<"event" | "date" | "form" | "success">("event");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestNotes, setGuestNotes] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    if (slug) {
      loadProfile();
    } else {
      setError("Link inválido. Informe o nome de quem deseja agendar.");
      setLoading(false);
    }
  }, [slug]);

  async function loadProfile() {
    setLoading(true);
    try {
      const { data: profileData, error: profileError } = await supabase
        .from('tamarcado_profiles')
        .select('*')
        .eq('slug', slug)
        .single();

      if (profileError || !profileData) {
        setError("Perfil não encontrado.");
        setLoading(false);
        return;
      }

      setProfile(profileData);

      const { data: eventsData } = await supabase
        .from('tamarcado_event_types')
        .select('*')
        .eq('profile_id', profileData.id)
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (eventsData) setEventTypes(eventsData);

      const { data: availData } = await supabase
        .from('tamarcado_availability')
        .select('*')
        .eq('profile_id', profileData.id)
        .single();
        
      if (availData) setAvailability(availData);

      // Carrega os bookings futuros (para conflitos)
      const { data: bookingsData } = await supabase
        .from('tamarcado_bookings')
        .select('*')
        .eq('profile_id', profileData.id)
        .gte('end_time', new Date().toISOString());

      if (bookingsData) setBookings(bookingsData);

    } catch (err) {
      console.error(err);
      setError("Erro ao carregar os dados.");
    } finally {
      setLoading(false);
    }
  }

  // Generate time slots when date or event changes
  useEffect(() => {
    if (selectedDate && selectedEvent && availability) {
      const slots = SchedulingEngine.getAvailableSlots(
        selectedDate,
        selectedEvent,
        availability,
        bookings,
        guestTimezone
      );
      setAvailableSlots(slots);
    }
  }, [selectedDate, selectedEvent, availability, bookings, guestTimezone]);

  const handleBook = async () => {
    if (!guestName || !guestEmail || !selectedDate || !selectedSlot || !selectedEvent) {
      toast({ title: "Erro", description: "Preencha todos os campos obrigatórios.", variant: "destructive" });
      return;
    }
    setBookingLoading(true);

    try {
      const { error } = await supabase.from('tamarcado_bookings').insert([{
        event_type_id: selectedEvent.id,
        profile_id: profile.id,
        guest_name: guestName,
        guest_email: guestEmail,
        guest_notes: guestNotes,
        start_time: selectedSlot.startTimeUtc,
        end_time: new Date(new Date(selectedSlot.startTimeUtc).getTime() + selectedEvent.duration_minutes * 60000).toISOString(),
        guest_timezone: guestTimezone,
        meeting_url: selectedEvent.location_url || null,
        status: 'confirmed'
      }]);

      if (error) throw error;

      setStep("success");
    } catch (err: any) {
      toast({ title: "Erro ao agendar", description: err.message, variant: "destructive" });
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Card className="w-full max-w-md text-center p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Poxa!</h2>
        <p className="text-slate-600 mb-6">{error}</p>
        <Button onClick={() => setLocation("/")}>Ir para a Home</Button>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left Sidebar - Profile & Event Info */}
          <div className="bg-slate-50 p-6 md:p-8 md:w-1/3 border-r border-slate-200">
            {step !== "event" && (
              <button 
                onClick={() => setStep(step === "form" ? "date" : "event")}
                className="text-slate-500 hover:text-slate-900 mb-6 flex items-center text-sm font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Voltar
              </button>
            )}
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">{profile.display_name}</h2>
              <p className="text-slate-600 text-sm">{profile.description}</p>
              
              {selectedEvent && (
                <div className="mt-8 pt-8 border-t border-slate-200 space-y-4">
                  <h3 className="font-semibold text-slate-900">{selectedEvent.title}</h3>
                  <div className="flex items-center text-slate-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {selectedEvent.duration_minutes} minutos
                  </div>
                  {selectedDate && selectedSlot && step === "form" && (
                    <div className="flex items-center text-slate-600 text-sm text-blue-600 font-medium">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {selectedSlot.startTime.toLocaleDateString('pt-BR')} às {format(selectedSlot.startTime, 'HH:mm')}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="p-6 md:p-8 md:w-2/3 bg-white">
            
            {/* Step 1: Choose Event */}
            {step === "event" && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold mb-4">Escolha um tipo de evento</h3>
                {eventTypes.length === 0 ? (
                  <p className="text-slate-500">Nenhum evento disponível no momento.</p>
                ) : (
                  <div className="space-y-3">
                    {eventTypes.map(event => (
                      <div 
                        key={event.id}
                        onClick={() => {
                          setSelectedEvent(event);
                          setStep("date");
                        }}
                        className="p-4 border border-slate-200 rounded-lg cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{event.title}</h4>
                            <p className="text-sm text-slate-500 mt-1">{event.description}</p>
                          </div>
                          <div className="flex items-center text-slate-400 text-sm bg-slate-50 px-3 py-1 rounded-full">
                            <Clock className="w-3.5 h-3.5 mr-1" />
                            {event.duration_minutes}m
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Choose Date & Time */}
            {step === "date" && (
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4">Selecione uma Data e Horário</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      if (date) {
                        setSelectedDate(date);
                        setSelectedSlot(null);
                      }
                    }}
                    className="rounded-md border mx-auto"
                    disabled={(date) => {
                      if (date < new Date(new Date().setHours(0,0,0,0))) return true;
                      if (availability) {
                        const daily = SchedulingEngine.getDailyAvailability(date, availability);
                        if (!daily || !daily.active) return true;
                      }
                      return false;
                    }}
                  />
                  <p className="text-center text-sm text-slate-500 mt-4">
                    Fuso horário: {guestTimezone.replace('_', ' ')}
                  </p>
                </div>
                
                {selectedDate && (
                  <div className="w-full md:w-48 space-y-2 max-h-[350px] overflow-y-auto pr-2">
                    <p className="text-center font-medium text-slate-700 sticky top-0 bg-white py-2">
                      {selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric' })}
                    </p>
                    {availableSlots.length === 0 ? (
                      <p className="text-sm text-center text-slate-500 py-4">Nenhum horário disponível.</p>
                    ) : (
                      availableSlots.map((slot, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedSlot(slot);
                            setStep("form");
                          }}
                          className={`w-full py-3 rounded-md text-sm font-medium transition-colors ${
                            selectedSlot?.startTimeUtc === slot.startTimeUtc 
                              ? "bg-blue-600 text-white" 
                              : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                          }`}
                        >
                          {format(slot.startTime, 'HH:mm')}
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Guest Details Form */}
            {step === "form" && (
              <div className="max-w-md mx-auto space-y-6">
                <h3 className="text-lg font-semibold mb-4">Seus Detalhes</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input id="name" value={guestName} onChange={e => setGuestName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" type="email" value={guestEmail} onChange={e => setGuestEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Por favor, compartilhe qualquer detalhe que ajude a nos preparar para nossa reunião.</Label>
                    <textarea 
                      id="notes" 
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      value={guestNotes} 
                      onChange={e => setGuestNotes(e.target.value)} 
                    />
                  </div>
                  <Button className="w-full" size="lg" onClick={handleBook} disabled={bookingLoading}>
                    {bookingLoading ? "Agendando..." : "Confirmar Agendamento"}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Success */}
            {step === "success" && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CalendarIcon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Está marcado!</h2>
                <p className="text-slate-600 max-w-sm mx-auto">
                  Seu agendamento com {profile.display_name} foi confirmado para {selectedSlot && format(selectedSlot.startTime, 'dd/MM/yyyy')} às {selectedSlot && format(selectedSlot.startTime, 'HH:mm')}.
                </p>
                {selectedEvent?.location_url && (
                  <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                    <p className="text-sm font-medium text-slate-900 mb-1">Local da Reunião (Link)</p>
                    <a href={selectedEvent.location_url} target="_blank" rel="noreferrer" className="text-blue-600 break-all text-sm hover:underline">
                      {selectedEvent.location_url}
                    </a>
                  </div>
                )}
                <div className="mt-8">
                  <Button variant="outline" onClick={() => setStep("event")}>
                    Fazer outro agendamento
                  </Button>
                </div>
              </div>
            )}

          </div>
        </Card>
      </div>
    </div>
  );
}
