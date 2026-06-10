"use client";

import {
  Star,
  ShieldCheck,
  Car,
  Key,
  Wifi,
  Laptop,
  PawPrint,
} from "lucide-react";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  {
    icon: <Star className="text-accent fill-accent" />,
    label: "★★★★★ Guest Rating",
  },
  { icon: <Car />, label: "Free Parking" },
  { icon: <ShieldCheck />, label: "24/7 Security" },
  { icon: <Key />, label: "Self Check-In" },
  { icon: <Wifi />, label: "Fast WiFi" },
  { icon: <Laptop />, label: "Dedicated Workspace" },
  { icon: <PawPrint />, label: "Pet Friendly" },
];

export function TrustBar() {
  return (
    <div className="bg-white border-b py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:justify-between">
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="flex items-center space-x-3 text-primary/70 hover:text-primary transition-colors group"
            >
              <span className="text-accent group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
