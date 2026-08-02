import { addMinutes, isBefore, isSameDay, parseISO, parse, format, addDays } from 'date-fns';
import { formatInTimeZone, fromZonedTime, toZonedTime } from 'date-fns-tz';

export interface DailyAvailability {
  active: boolean;
  start: string; // "HH:mm"
  end: string;   // "HH:mm"
}

export interface AvailabilityConfig {
  timezone: string;
  monday: DailyAvailability;
  tuesday: DailyAvailability;
  wednesday: DailyAvailability;
  thursday: DailyAvailability;
  friday: DailyAvailability;
  saturday: DailyAvailability;
  sunday: DailyAvailability;
}

export interface EventType {
  id: string;
  duration_minutes: number;
  buffer_before_minutes: number;
  buffer_after_minutes: number;
}

export interface Booking {
  start_time: string; // ISO string UTC
  end_time: string;   // ISO string UTC
  status: string;
}

export interface Slot {
  startTime: Date; // local date object (will be used to format string for UI)
  endTime: Date;
  startTimeUtc: string; // ISO string for saving in DB
}

export class SchedulingEngine {
  
  /**
   * Pega os horários de funcionamento do dia específico da semana,
   * de acordo com a configuração global.
   */
  static getDailyAvailability(date: Date, config: AvailabilityConfig): DailyAvailability | null {
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday...
    switch (dayOfWeek) {
      case 0: return config.sunday.active ? config.sunday : null;
      case 1: return config.monday.active ? config.monday : null;
      case 2: return config.tuesday.active ? config.tuesday : null;
      case 3: return config.wednesday.active ? config.wednesday : null;
      case 4: return config.thursday.active ? config.thursday : null;
      case 5: return config.friday.active ? config.friday : null;
      case 6: return config.saturday.active ? config.saturday : null;
      default: return null;
    }
  }

  /**
   * Gera os slots possíveis para um dado dia no fuso horário do host.
   */
  static getAvailableSlots(
    date: Date, // Date is expected to represent a day in the host's timezone
    eventType: EventType,
    availability: AvailabilityConfig,
    bookings: Booking[],
    guestTimezone: string
  ): Slot[] {
    const dailyConfig = this.getDailyAvailability(date, availability);
    if (!dailyConfig) return [];

    // Parse start and end times in the host's timezone
    const dateString = format(date, 'yyyy-MM-dd'); // Host's local date string
    const hostTimezone = availability.timezone;
    
    // We create the actual Date object representing the host's start time and end time
    // fromZonedTime converts the local time in that timezone to actual UTC Date
    const dayStartUtc = fromZonedTime(`${dateString} ${dailyConfig.start}:00`, hostTimezone);
    const dayEndUtc = fromZonedTime(`${dateString} ${dailyConfig.end}:00`, hostTimezone);
    
    const nowUtc = new Date();
    
    const slots: Slot[] = [];
    let currentSlotStart = dayStartUtc;

    // Loop through the day generating slots
    while (isBefore(currentSlotStart, dayEndUtc)) {
      const currentSlotEnd = addMinutes(currentSlotStart, eventType.duration_minutes);
      
      // Stop if the slot exceeds the day's end time
      if (currentSlotEnd.getTime() > dayEndUtc.getTime()) {
        break;
      }

      // 1. Minimum Notice: Cannot book in the past (adding 1 hour minimum notice for safety, optional but good for MVP)
      const minimumNoticeTime = addMinutes(nowUtc, 60);
      if (isBefore(currentSlotStart, minimumNoticeTime)) {
        currentSlotStart = addMinutes(currentSlotStart, eventType.duration_minutes); // you can use a fixed interval like 30 mins instead
        continue;
      }

      // 2. Calculate conflicts (anti-double booking)
      const isConflict = bookings.some(booking => {
        if (booking.status === 'canceled') return false;
        
        const bookingStart = parseISO(booking.start_time);
        const bookingEnd = parseISO(booking.end_time);

        // Add buffers
        const bufferedStart = addMinutes(currentSlotStart, -eventType.buffer_before_minutes);
        const bufferedEnd = addMinutes(currentSlotEnd, eventType.buffer_after_minutes);

        // Overlap logic: (Start A < End B) && (End A > Start B)
        return (bufferedStart.getTime() < bookingEnd.getTime()) && (bufferedEnd.getTime() > bookingStart.getTime());
      });

      if (!isConflict) {
        slots.push({
          startTime: toZonedTime(currentSlotStart, guestTimezone),
          endTime: toZonedTime(currentSlotEnd, guestTimezone),
          startTimeUtc: currentSlotStart.toISOString(),
        });
      }

      // Step for the next slot. Standard is to step by the event duration (or a fixed step like 15 min / 30 min)
      // For a Calendly-like experience, stepping by duration or 30 mins is common.
      // We will step by 30 mins if duration >= 30, else 15 mins.
      const stepInterval = eventType.duration_minutes >= 60 ? 30 : (eventType.duration_minutes === 30 ? 30 : 15);
      currentSlotStart = addMinutes(currentSlotStart, stepInterval);
    }

    return slots;
  }
}
