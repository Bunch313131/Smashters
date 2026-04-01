import Container from "../ui/Container";
import Button from "../ui/Button";
import { siteConfig } from "../../../content/site";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function Hero({
  title = siteConfig.tagline,
  subtitle = siteConfig.description,
  ctaText = "Start Your Transformation",
  ctaHref = "/contact",
  secondaryCtaText = "View Services",
  secondaryCtaHref = "/services",
}: HeroProps) {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent" />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {title.split(".").map((part, i) =>
              part.trim() ? (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === 1 ? (
                    <span className="text-brand-secondary">{part.trim()}.</span>
                  ) : (
                    <>{part.trim()}.</>
                  )}
                </span>
              ) : null
            )}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href={ctaHref} size="lg" variant="secondary">
              {ctaText}
            </Button>
            <Button href={secondaryCtaHref} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
              {secondaryCtaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
