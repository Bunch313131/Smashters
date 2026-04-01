"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";
import { siteConfig } from "../../../content/site";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Schedule", href: "/schedule" },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-brand-primary" />
            <span className="text-xl font-bold font-heading text-brand-dark">
              {siteConfig.businessName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-brand-gray hover:text-brand-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button href="/contact" size="sm">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-brand-gray hover:text-brand-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-100">
            <div className="flex flex-col gap-1 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-brand-gray hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button href="/contact" className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
