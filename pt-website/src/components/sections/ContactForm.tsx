"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { siteConfig } from "../../../content/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to start your fitness journey? Fill out the form below and we'll get back to you within 24 hours."
        />

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center p-12 bg-brand-light rounded-2xl">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                Message Sent!
              </h3>
              <p className="text-brand-gray">
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              action={siteConfig.formspreeEndpoint}
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-brand-dark mb-2">
                  I&apos;m interested in...
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors bg-white"
                >
                  <option value="personal-training">1-on-1 Personal Training</option>
                  <option value="group-classes">Group Classes</option>
                  <option value="online-coaching">Online Coaching</option>
                  <option value="nutrition">Nutrition Coaching</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
