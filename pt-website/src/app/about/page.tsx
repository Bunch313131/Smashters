import type { Metadata } from "next";
import TrainerBio from "@/components/sections/TrainerBio";
import StatsBar from "@/components/sections/StatsBar";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our certified personal trainer, their experience, certifications, and training philosophy.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-lg text-gray-300">
            The story, credentials, and philosophy behind your training.
          </p>
        </div>
      </section>

      <TrainerBio />
      <StatsBar />
      <CTABanner />
    </>
  );
}
