// ============================================================
// GROUP CLASS SCHEDULE
// Update with your weekly class timetable.
// ============================================================

export interface ClassSlot {
  day: string;
  time: string;
  className: string;
  duration: number; // minutes
  spots: number;
  intensity: "Low" | "Medium" | "High";
  description: string;
  stripePaymentLink: string;
}

export const weeklySchedule: ClassSlot[] = [
  {
    day: "Monday",
    time: "6:00 AM",
    className: "HIIT Bootcamp",
    duration: 45,
    spots: 12,
    intensity: "High",
    description: "High-intensity interval training to torch calories and build endurance.",
    stripePaymentLink: "#",
  },
  {
    day: "Monday",
    time: "12:00 PM",
    className: "Strength & Sculpt",
    duration: 50,
    spots: 10,
    intensity: "Medium",
    description: "Full-body strength training with dumbbells, kettlebells, and bodyweight.",
    stripePaymentLink: "#",
  },
  {
    day: "Tuesday",
    time: "6:00 AM",
    className: "Core & Cardio",
    duration: 40,
    spots: 12,
    intensity: "Medium",
    description: "Focused core work paired with heart-pumping cardio intervals.",
    stripePaymentLink: "#",
  },
  {
    day: "Tuesday",
    time: "5:30 PM",
    className: "Total Body Burn",
    duration: 50,
    spots: 12,
    intensity: "High",
    description: "A challenging full-body workout combining strength and conditioning.",
    stripePaymentLink: "#",
  },
  {
    day: "Wednesday",
    time: "6:00 AM",
    className: "HIIT Bootcamp",
    duration: 45,
    spots: 12,
    intensity: "High",
    description: "High-intensity interval training to torch calories and build endurance.",
    stripePaymentLink: "#",
  },
  {
    day: "Wednesday",
    time: "12:00 PM",
    className: "Yoga Flow",
    duration: 50,
    spots: 15,
    intensity: "Low",
    description: "Restorative yoga flow focusing on flexibility, balance, and mindfulness.",
    stripePaymentLink: "#",
  },
  {
    day: "Thursday",
    time: "6:00 AM",
    className: "Strength & Sculpt",
    duration: 50,
    spots: 10,
    intensity: "Medium",
    description: "Full-body strength training with dumbbells, kettlebells, and bodyweight.",
    stripePaymentLink: "#",
  },
  {
    day: "Thursday",
    time: "5:30 PM",
    className: "HIIT Bootcamp",
    duration: 45,
    spots: 12,
    intensity: "High",
    description: "High-intensity interval training to torch calories and build endurance.",
    stripePaymentLink: "#",
  },
  {
    day: "Friday",
    time: "6:00 AM",
    className: "Total Body Burn",
    duration: 50,
    spots: 12,
    intensity: "High",
    description: "A challenging full-body workout combining strength and conditioning.",
    stripePaymentLink: "#",
  },
  {
    day: "Friday",
    time: "12:00 PM",
    className: "Core & Cardio",
    duration: 40,
    spots: 12,
    intensity: "Medium",
    description: "Focused core work paired with heart-pumping cardio intervals.",
    stripePaymentLink: "#",
  },
  {
    day: "Saturday",
    time: "8:00 AM",
    className: "Weekend Warrior",
    duration: 60,
    spots: 15,
    intensity: "High",
    description: "The ultimate weekend workout — a full hour of mixed training to start your Saturday strong.",
    stripePaymentLink: "#",
  },
  {
    day: "Saturday",
    time: "9:30 AM",
    className: "Yoga Flow",
    duration: 50,
    spots: 15,
    intensity: "Low",
    description: "Restorative yoga flow focusing on flexibility, balance, and mindfulness.",
    stripePaymentLink: "#",
  },
];

export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
