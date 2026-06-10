"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ROOMS = [
  {
    id: "living",
    label: "Living Room",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2070&auto=format&fit=crop",
    description:
      "Spacious executive living area with premium furniture and smart TV.",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop",
    description: "Cozy sanctuary with high-quality linens for a restful sleep.",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
    description: "Fully equipped modern kitchen for all your culinary needs.",
  },
  {
    id: "workspace",
    label: "Workspace",
    image:
      "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=2054&auto=format&fit=crop",
    description: "Dedicated desk area with high-speed fiber internet.",
  },
  {
    id: "exterior",
    label: "Building",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    description: "Secure, modern apartment building with lift access.",
  },
];

export function PropertyShowcase() {
  const [activeTab, setActiveTab] = useState("living");

  return (
    <motion.section
      id="showcase"
      className="py-24 bg-white px-6"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary">
              Inside the Apartment
            </h2>
            <p className="text-muted-foreground">
              Every corner of Serene Homes Membley is designed for comfort,
              productivity, and luxury.
            </p>
          </div>

          <Tabs
            defaultValue="living"
            className="w-full md:w-auto"
            onValueChange={setActiveTab}
          >
            <TabsList className="bg-muted p-1 rounded-full h-auto flex flex-wrap justify-start">
              {ROOMS.map((room) => (
                <TabsTrigger
                  key={room.id}
                  value={room.id}
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  {room.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-muted max-w-full">
          <AnimatePresence mode="wait">
            {ROOMS.map(
              (room) =>
                activeTab === room.id && (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={room.image}
                      alt={room.label}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-4 right-4 md:bottom-10 md:left-10 md:right-10">
                      <h3 className="text-white font-heading text-3xl font-bold mb-2">
                        {room.label}
                      </h3>
                      <p className="text-white/80 max-w-lg">
                        {room.description}
                      </p>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
