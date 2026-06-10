"use client";

import { motion } from "framer-motion";
import { Moon, Coffee, Shield, Armchair, Plane } from "lucide-react";

const REASONS = [
  {
    icon: <Moon className="w-8 h-8" />,
    title: "Quiet Nights",
    description: "Nestled in the controlled development of Membley, enjoy peaceful sleep away from the city's noise.",
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Productive Workdays",
    description: "High-speed fiber internet and a dedicated workspace designed for digital nomads and corporate travelers.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Safe Environment",
    description: "Your safety is our priority with 24/7 soldier-manned security and a controlled access building.",
  },
  {
    icon: <Armchair className="w-8 h-8" />,
    title: "Modern Comfort",
    description: "Executive interiors featuring premium furniture, smart entertainment, and a fully equipped kitchen.",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Stress-Free Travel",
    description: "Strategically located with quick access to the Eastern Bypass, Thika Road, Tatu City, and JKIA Airport.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary">
            Why Guests Choose Serene Homes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of hospitality and modern living in one of Nairobi's most strategic locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 text-primary">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
