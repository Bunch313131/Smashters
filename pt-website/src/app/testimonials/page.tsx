import type { Metadata } from "next";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read success stories from our clients. Real results, real transformations.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Client Testimonials</h1>
          <p className="mt-4 text-lg text-gray-300">
            Real stories from real people who transformed their lives through training.
          </p>
        </div>
      </section>

      <TestimonialCarousel />

      <CTABanner
        title="Start Your Success Story"
        subtitle="Join hundreds of clients who have achieved their fitness goals. Your transformation starts today."
      />
    </>
  );
}
