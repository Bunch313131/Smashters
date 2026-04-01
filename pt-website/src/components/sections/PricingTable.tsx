import { Check } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { packages } from "../../../content/packages";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function PricingTable() {
  return (
    <section className="py-20 bg-brand-light">
      <Container>
        <SectionHeading
          title="Training Packages"
          subtitle="Choose the package that fits your goals. All packages include a complimentary fitness assessment."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={cn(
                "flex flex-col relative",
                pkg.popular && "border-brand-primary border-2 shadow-lg"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-brand-dark mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-brand-gray mb-4">{pkg.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-brand-dark">
                    {formatCurrency(pkg.price)}
                  </span>
                  {pkg.sessions > 0 && (
                    <span className="text-sm text-brand-gray ml-1">
                      / {pkg.sessions} sessions
                    </span>
                  )}
                  {pkg.sessions === -1 && (
                    <span className="text-sm text-brand-gray ml-1">/ month</span>
                  )}
                </div>
                {pkg.perSession > 0 && (
                  <p className="text-xs text-brand-primary font-medium">
                    {formatCurrency(pkg.perSession)} per session
                  </p>
                )}
              </div>

              <ul className="space-y-3 flex-grow mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-brand-gray">
                    <Check className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href={pkg.stripePaymentLink}
                variant={pkg.popular ? "primary" : "outline"}
                className="w-full mt-auto"
                external
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-brand-gray mt-8">
          All packages are non-refundable. Sessions expire 90 days after purchase.
          <br />
          Not sure which package is right for you?{" "}
          <a href="/contact" className="text-brand-primary hover:underline font-medium">
            Book a free consultation
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
