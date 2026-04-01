// ============================================================
// SERVICES
// Update with your service offerings, descriptions, and pricing.
// ============================================================

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: "dumbbell" | "users" | "monitor" | "apple";
  features: string[];
  startingPrice: number;
  priceUnit: string;
  stripePaymentLink: string;
}

export const services: Service[] = [
  {
    id: "personal-training",
    title: "1-on-1 Personal Training",
    shortDescription:
      "Customized workouts designed specifically for your goals, fitness level, and schedule.",
    fullDescription:
      "Get undivided attention with a fully personalized training program. Each session is tailored to your specific goals — whether that's fat loss, muscle building, athletic performance, or injury recovery. I'll guide your form, push you past plateaus, and adjust your program as you progress.",
    icon: "dumbbell",
    features: [
      "Customized workout programming",
      "Form correction & technique coaching",
      "Progress tracking & assessments",
      "Flexible scheduling",
      "Nutritional guidance included",
    ],
    startingPrice: 75,
    priceUnit: "session",
    stripePaymentLink: "#",
  },
  {
    id: "group-classes",
    title: "Group Fitness Classes",
    shortDescription:
      "High-energy group sessions that combine fun, community, and serious results.",
    fullDescription:
      "Join a motivating group environment with classes designed for all fitness levels. From HIIT bootcamps to strength circuits, each class delivers a full-body challenge. Limited class sizes ensure personalized attention while you feed off the energy of the group.",
    icon: "users",
    features: [
      "Small group sizes (max 12)",
      "Multiple class formats",
      "All fitness levels welcome",
      "Community & accountability",
      "Drop-in or class pack options",
    ],
    startingPrice: 25,
    priceUnit: "class",
    stripePaymentLink: "#",
  },
  {
    id: "online-training",
    title: "Online Coaching",
    shortDescription:
      "Expert programming and coaching delivered anywhere, on your schedule.",
    fullDescription:
      "Can't make it in person? Get a fully customized training program delivered through an easy-to-use app. Includes video demonstrations, weekly check-ins, program adjustments, and direct messaging access. Train on your schedule with expert guidance.",
    icon: "monitor",
    features: [
      "Custom program via training app",
      "Video exercise demonstrations",
      "Weekly check-ins & adjustments",
      "Direct messaging support",
      "Train anywhere, anytime",
    ],
    startingPrice: 149,
    priceUnit: "month",
    stripePaymentLink: "#",
  },
  {
    id: "nutrition-coaching",
    title: "Nutrition Coaching",
    shortDescription:
      "Sustainable nutrition strategies that fuel your training and your life.",
    fullDescription:
      "Nutrition is the foundation of every fitness goal. I'll create a personalized nutrition plan based on your lifestyle, preferences, and objectives. No extreme diets — just sustainable, evidence-based strategies that help you look and feel your best.",
    icon: "apple",
    features: [
      "Personalized meal planning",
      "Macro & calorie guidance",
      "Grocery lists & meal prep tips",
      "Bi-weekly plan adjustments",
      "Supplement recommendations",
    ],
    startingPrice: 99,
    priceUnit: "month",
    stripePaymentLink: "#",
  },
];
