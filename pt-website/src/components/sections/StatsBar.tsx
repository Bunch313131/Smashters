import Container from "../ui/Container";
import { trainer } from "../../../content/trainer";

const stats = [
  { label: "Years Experience", value: trainer.stats.yearsExperience },
  { label: "Clients Served", value: trainer.stats.clientsServed },
  { label: "Satisfaction Rate", value: trainer.stats.satisfactionRate },
  { label: "Classes Per Week", value: trainer.stats.classesPerWeek },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-primary">
      <Container className="py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
