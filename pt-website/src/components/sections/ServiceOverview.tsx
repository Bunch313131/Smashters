import { Dumbbell, Users, Monitor, Apple } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { services } from "../../../content/services";
import { formatCurrency } from "@/lib/utils";

const iconMap = {
  dumbbell: Dumbbell,
  users: Users,
  monitor: Monitor,
  apple: Apple,
};

interface ServiceOverviewProps {
  showFull?: boolean;
}

export default function ServiceOverview({ showFull = false }: ServiceOverviewProps) {
  return (
    <section className="py-20 bg-brand-light">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive fitness solutions tailored to your goals and lifestyle."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.id} className="flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-gray flex-grow mb-4">
                  {showFull ? service.fullDescription : service.shortDescription}
                </p>
                {showFull && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-brand-gray">
                        <span className="text-brand-primary mt-0.5">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto">
                  <p className="text-sm text-brand-gray mb-3">
                    Starting at{" "}
                    <span className="text-lg font-bold text-brand-dark">
                      {formatCurrency(service.startingPrice)}
                    </span>
                    /{service.priceUnit}
                  </p>
                  <Button
                    href={service.stripePaymentLink}
                    variant="outline"
                    size="sm"
                    className="w-full"
                    external
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
