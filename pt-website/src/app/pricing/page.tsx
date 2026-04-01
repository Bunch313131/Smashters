import type { Metadata } from "next";
import PricingTable from "@/components/sections/PricingTable";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Affordable personal training packages. Choose from Starter, Pro, Elite, or Unlimited options.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Pricing & Packages</h1>
          <p className="mt-4 text-lg text-gray-300">
            Invest in yourself. Choose the package that fits your goals and budget.
          </p>
        </div>
      </section>

      <PricingTable />

      <CTABanner
        title="Need a Custom Package?"
        subtitle="We offer flexible options for teams, couples, and special programs. Let's talk."
        ctaText="Contact Us"
      />
    </>
  );
}
