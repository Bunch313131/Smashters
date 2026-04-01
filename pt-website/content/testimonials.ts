// ============================================================
// TESTIMONIALS
// Update with real client testimonials (with their permission).
// ============================================================

export interface Testimonial {
  name: string;
  quote: string;
  result: string;
  rating: number;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    quote:
      "I never thought I could enjoy working out until I started training here. The personalized approach made all the difference. I've lost 30 pounds and gained so much confidence!",
    result: "Lost 30 lbs in 3 months",
    rating: 5,
  },
  {
    name: "James T.",
    quote:
      "The group classes are incredible — challenging but so much fun. The community keeps me coming back, and I'm in the best shape of my life at 45.",
    result: "Gained 15 lbs of muscle",
    rating: 5,
  },
  {
    name: "Maria L.",
    quote:
      "The online coaching program fits perfectly into my busy schedule. I get expert guidance without having to rearrange my whole day. My energy levels are through the roof.",
    result: "Completed first 5K",
    rating: 5,
  },
  {
    name: "David R.",
    quote:
      "The nutrition coaching completely changed my relationship with food. No more yo-yo dieting — I finally understand how to fuel my body properly.",
    result: "Dropped 4 pant sizes",
    rating: 5,
  },
  {
    name: "Emily K.",
    quote:
      "After my second pregnancy, I felt lost in the gym. The individualized programming helped me rebuild my strength safely and effectively. I'm stronger than I was before kids!",
    result: "Regained pre-baby strength",
    rating: 5,
  },
  {
    name: "Mike H.",
    quote:
      "I was skeptical about personal training but the results speak for themselves. Professional, knowledgeable, and genuinely invested in my success.",
    result: "Lost 40 lbs in 6 months",
    rating: 5,
  },
];
