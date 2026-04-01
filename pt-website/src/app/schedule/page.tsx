import type { Metadata } from "next";
import { Clock, Calendar } from "lucide-react";
import ScheduleGrid from "@/components/sections/ScheduleGrid";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { availability, bookingNote } from "../../../content/availability";


export const metadata: Metadata = {
  title: "Schedule & Booking",
  description:
    "View our weekly class schedule and book your personal training sessions online.",
};

export default function SchedulePage() {
  return (
    <>
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Schedule & Booking</h1>
          <p className="mt-4 text-lg text-gray-300">
            View our group class timetable and book your 1-on-1 sessions.
          </p>
        </div>
      </section>

      {/* Group Classes */}
      <ScheduleGrid />

      {/* 1-on-1 Booking Section */}
      <section className="py-20 bg-brand-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Availability */}
            <div className="lg:col-span-1">
              <Card hover={false} className="h-full">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="h-5 w-5 text-brand-primary" />
                  <h3 className="text-lg font-bold text-brand-dark">
                    Availability
                  </h3>
                </div>
                <div className="space-y-3">
                  {availability.map((slot) => (
                    <div
                      key={slot.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="font-medium text-brand-dark">
                        {slot.day}
                      </span>
                      <span className={slot.hours === "Closed" ? "text-red-500" : "text-brand-gray"}>
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-brand-gray">{bookingNote}</p>
              </Card>
            </div>

            {/* Booking Calendar Placeholder */}
            <div className="lg:col-span-2">
              <Card hover={false} className="h-full">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="h-5 w-5 text-brand-primary" />
                  <h3 className="text-lg font-bold text-brand-dark">
                    Book a 1-on-1 Session
                  </h3>
                </div>

                {/* Cal.com embed placeholder */}
                <div className="bg-brand-light rounded-xl p-12 text-center border-2 border-dashed border-gray-200">
                  <Calendar className="h-16 w-16 text-brand-primary/30 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-brand-dark mb-2">
                    Booking Calendar
                  </h4>
                  <p className="text-sm text-brand-gray mb-6 max-w-md mx-auto">
                    Your Cal.com booking calendar will be embedded here. Set up
                    your free Cal.com account to manage availability, session
                    types, and automated confirmations.
                  </p>
                  <div className="space-y-2 text-sm text-brand-gray">
                    <p>
                      To embed your calendar, update{" "}
                      <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                        calcomUsername
                      </code>{" "}
                      in <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">content/site.ts</code>
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button href="/contact" variant="primary">
                      Request a Session
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
