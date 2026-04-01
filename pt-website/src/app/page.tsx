import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServiceOverview from "@/components/sections/ServiceOverview";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import CTABanner from "@/components/sections/CTABanner";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { trainer } from "../../content/trainer";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServiceOverview />

      {/* About Preview */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-brand-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-brand-primary">
                    {trainer.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <p className="text-sm text-brand-gray">Trainer photo</p>
              </div>
            </div>
            <div>
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wide mb-2">
                About Your Trainer
              </p>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">
                Meet {trainer.name}
              </h2>
              <p className="text-brand-gray leading-relaxed mb-6">
                {trainer.bio.split("\n\n")[0]}
              </p>
              <Button href="/about" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <TestimonialCarousel limit={3} />
      <CTABanner />
    </>
  );
}
