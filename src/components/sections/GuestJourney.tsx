"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, MailCheck, Key, Smile, DoorOpen, Star } from "lucide-react";

const STEPS = [
  { icon: <Search size={24} />, title: "Discover", description: "Explore our premium apartment and its strategic location advantage." },
  { icon: <CalendarCheck size={24} />, title: "Book Online", description: "Secure your dates through our direct booking link or WhatsApp." },
  { icon: <MailCheck size={24} />, title: "Confirmation", description: "Receive instant confirmation and check-in instructions." },
  { icon: <Key size={24} />, title: "Self Check-In", description: "Access the apartment at your convenience with our secure system." },
  { icon: <Smile size={24} />, title: "Enjoy Stay", description: "Relax in luxury with fast WiFi, smart TV, and premium comfort." },
  { icon: <DoorOpen size={24} />, title: "Check-Out", description: "A simple, stress-free departure process when you're ready." },
  { icon: <Star size={24} />, title: "Review", description: "Share your experience and join our community of happy guests." },
];

export function GuestJourney() {
  return (
    <section className="py-24 bg-primary text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Your Seamless Journey</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From the moment you discover Serene Homes to the day you check out, we ensure every step is effortless and professional.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-12 relative z-10">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-2xl backdrop-blur-sm relative">
                  <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-[10px] font-bold text-accent">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
