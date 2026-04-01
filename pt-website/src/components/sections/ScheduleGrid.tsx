import { Clock, Users } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { weeklySchedule, days } from "../../../content/schedule";
import { cn } from "@/lib/utils";

const intensityColors = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-red-100 text-red-700",
};

export default function ScheduleGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Class Schedule"
          subtitle="Join one of our group classes. All levels welcome. Drop in or use your class pack."
        />

        {/* Desktop table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-4 py-3 text-sm font-bold text-brand-dark bg-brand-light text-left border-b-2 border-brand-primary/20"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Find max classes per day */}
              {Array.from({
                length: Math.max(
                  ...days.map(
                    (d) => weeklySchedule.filter((c) => c.day === d).length
                  )
                ),
              }).map((_, rowIdx) => (
                <tr key={rowIdx}>
                  {days.map((day) => {
                    const dayClasses = weeklySchedule.filter(
                      (c) => c.day === day
                    );
                    const slot = dayClasses[rowIdx];
                    return (
                      <td
                        key={day}
                        className="px-4 py-3 align-top border-b border-gray-100"
                      >
                        {slot ? (
                          <div className="space-y-1">
                            <p className="font-semibold text-sm text-brand-dark">
                              {slot.className}
                            </p>
                            <p className="text-xs text-brand-gray flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {slot.time} &middot; {slot.duration}min
                            </p>
                            <div className="flex items-center gap-2">
                              <span
                                className={cn(
                                  "text-xs px-2 py-0.5 rounded-full font-medium",
                                  intensityColors[slot.intensity]
                                )}
                              >
                                {slot.intensity}
                              </span>
                              <span className="text-xs text-brand-gray flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {slot.spots}
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-6">
          {days.map((day) => {
            const dayClasses = weeklySchedule.filter((c) => c.day === day);
            if (dayClasses.length === 0) return null;
            return (
              <div key={day}>
                <h3 className="text-lg font-bold text-brand-dark mb-3">
                  {day}
                </h3>
                <div className="space-y-3">
                  {dayClasses.map((slot, i) => (
                    <Card key={i} className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-brand-dark">
                            {slot.className}
                          </p>
                          <p className="text-sm text-brand-gray mt-1 flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {slot.time} &middot; {slot.duration}min
                          </p>
                          <p className="text-xs text-brand-gray mt-1">
                            {slot.description}
                          </p>
                        </div>
                        <span
                          className={cn(
                            "text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap",
                            intensityColors[slot.intensity]
                          )}
                        >
                          {slot.intensity}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <span className="text-xs text-brand-gray flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          {slot.spots} spots
                        </span>
                        <Button
                          href={slot.stripePaymentLink}
                          variant="outline"
                          size="sm"
                          external
                        >
                          Book
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
