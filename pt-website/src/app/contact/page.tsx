import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { siteConfig } from "../../../content/site";
import { availability } from "../../../content/availability";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to book your free consultation. We're here to help you start your fitness journey.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300">
            Ready to get started? Reach out and let&apos;s talk about your goals.
          </p>
        </div>
      </section>

      <ContactForm />

      {/* Contact Info Cards */}
      <section className="pb-20 bg-brand-light pt-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-8">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Call Us</h3>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-brand-gray hover:text-brand-primary transition-colors"
              >
                {siteConfig.phone}
              </a>
            </Card>

            <Card className="text-center p-8">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Email Us</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-gray hover:text-brand-primary transition-colors text-sm"
              >
                {siteConfig.email}
              </a>
            </Card>

            <Card className="text-center p-8">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-bold text-brand-dark mb-2">Visit Us</h3>
              <p className="text-brand-gray text-sm">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
            </Card>
          </div>

          {/* Hours */}
          <div className="mt-12">
            <Card className="max-w-lg mx-auto p-8">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <Clock className="h-5 w-5 text-brand-primary" />
                <h3 className="font-bold text-brand-dark">Hours of Operation</h3>
              </div>
              <div className="space-y-2">
                {availability.map((slot) => (
                  <div key={slot.day} className="flex justify-between text-sm">
                    <span className="font-medium text-brand-dark">{slot.day}</span>
                    <span className={slot.hours === "Closed" ? "text-red-500" : "text-brand-gray"}>
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
