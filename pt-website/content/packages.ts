// ============================================================
// PRICING PACKAGES
// Update with your package offerings and Stripe Payment Links.
//
// To create Stripe Payment Links:
// 1. Go to https://dashboard.stripe.com/payment-links
// 2. Create a new payment link for each package
// 3. Paste the URL in the stripePaymentLink field below
// ============================================================

export interface Package {
  id: string;
  name: string;
  description: string;
  sessions: number;
  price: number;
  perSession: number;
  features: string[];
  popular: boolean;
  stripePaymentLink: string;
}

export const packages: Package[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for getting started on your fitness journey.",
    sessions: 4,
    price: 280,
    perSession: 70,
    features: [
      "4 personal training sessions",
      "Initial fitness assessment",
      "Custom workout plan",
      "Email support",
    ],
    popular: false,
    stripePaymentLink: "#",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Our most popular package for consistent progress.",
    sessions: 8,
    price: 520,
    perSession: 65,
    features: [
      "8 personal training sessions",
      "Fitness assessment & progress tracking",
      "Custom workout & nutrition plan",
      "Priority scheduling",
      "Text/email support",
    ],
    popular: true,
    stripePaymentLink: "#",
  },
  {
    id: "elite",
    name: "Elite",
    description: "Maximum results with our most comprehensive package.",
    sessions: 12,
    price: 720,
    perSession: 60,
    features: [
      "12 personal training sessions",
      "Comprehensive assessment & body composition",
      "Custom workout & nutrition plan",
      "Priority scheduling",
      "Unlimited messaging support",
      "Monthly progress review",
    ],
    popular: false,
    stripePaymentLink: "#",
  },
  {
    id: "unlimited",
    name: "Unlimited",
    description: "All-access for the fully committed.",
    sessions: -1,
    price: 399,
    perSession: 0,
    features: [
      "Unlimited group classes",
      "2 personal training sessions/month",
      "Full nutrition coaching",
      "Priority scheduling",
      "Unlimited messaging support",
      "Access to online training library",
    ],
    popular: false,
    stripePaymentLink: "#",
  },
];
