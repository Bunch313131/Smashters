import type { Metadata } from "next";
import ServiceOverview from "@/components/sections/ServiceOverview";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Personal training, group classes, online coaching, and nutrition guidance. Explore our comprehensive fitness services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
          <p className="mt-4 text-lg text-gray-300">
            Comprehensive fitness solutions tailored to every goal and lifestyle.
          </p>
        </div>
      </section>

      <ServiceOverview showFull />

      <CTABanner
        title="Not Sure Where to Start?"
        subtitle="Book a free consultation and we'll help you find the perfect program for your goals."
      />
    </>
  );
}
