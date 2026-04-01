// ============================================================
// AVAILABILITY HOURS
// Update with your available hours for 1-on-1 sessions.
// These are displayed alongside the booking calendar.
// ============================================================

export interface AvailabilitySlot {
  day: string;
  hours: string;
}

export const availability: AvailabilitySlot[] = [
  { day: "Monday", hours: "6:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "6:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "6:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "6:00 AM – 8:00 PM" },
  { day: "Friday", hours: "6:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 12:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const bookingNote =
  "Book your 1-on-1 session using the calendar below. Sessions can be cancelled or rescheduled up to 24 hours in advance.";
