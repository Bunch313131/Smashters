import Link from "next/link";
import { Dumbbell, Globe, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "../../../content/site";
import Container from "../ui/Container";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Schedule", href: "/schedule" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-7 w-7 text-brand-primary" />
              <span className="text-lg font-bold font-heading text-white">
                {siteConfig.businessName}
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {Object.entries(siteConfig.socials)
                .filter(([, url]) => url)
                .map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-primary transition-colors"
                    aria-label={name}
                  >
                    <Globe className="h-5 w-5" />
                  </a>
                ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-brand-primary transition-colors">
                  Personal Training
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-brand-primary transition-colors">
                  Group Classes
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-brand-primary transition-colors">
                  Online Coaching
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-brand-primary transition-colors">
                  Nutrition Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-brand-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-gray-400 hover:text-brand-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-brand-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-gray-400 hover:text-brand-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-primary flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
