"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Why Us", href: "#why-us" },
  { name: "Showcase", href: "#showcase" },
  { name: "Location", href: "#location" },
  { name: "Reviews", href: "#reviews" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent",
      )}
      initial={false}
      animate={isScrolled ? { y: -2 } : { y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-heading text-xl md:text-2xl font-bold tracking-tight text-primary">
            SERENE HOMES
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent">
            Membley
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/254725896947"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-primary hover:bg-primary/90 h-10 px-6",
            )}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b"
          >
            <div className="flex flex-col p-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://wa.me/254725896947"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full bg-primary py-3 text-base h-auto rounded-full",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
