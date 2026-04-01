import Container from "../ui/Container";
import Button from "../ui/Button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTABanner({
  title = "Ready to Transform Your Life?",
  subtitle = "Book your free consultation today and take the first step toward a stronger, healthier you.",
  ctaText = "Book Free Consultation",
  ctaHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-brand-primary">
      <Container className="py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        <Button href={ctaHref} variant="secondary" size="lg">
          {ctaText}
        </Button>
      </Container>
    </section>
  );
}
