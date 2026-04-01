import { Star } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { testimonials } from "../../../content/testimonials";

interface TestimonialCarouselProps {
  limit?: number;
  showHeading?: boolean;
}

export default function TestimonialCarousel({
  limit,
  showHeading = true,
}: TestimonialCarouselProps) {
  const displayed = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <section className="py-20">
      <Container>
        {showHeading && (
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Real results from real people. Here's what our clients have to say about their transformation."
          />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((testimonial, i) => (
            <Card key={i} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-brand-secondary text-brand-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-brand-gray leading-relaxed flex-grow mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <p className="font-semibold text-brand-dark text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-brand-primary font-medium mt-0.5">
                  {testimonial.result}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
