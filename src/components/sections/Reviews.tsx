"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const REVIEWS = [
  {
    name: "Sarah W.",
    role: "Digital Nomad",
    text: "The WiFi was incredibly fast, and the workspace was perfect for my remote work needs. Paul was a great host!",
    rating: 5,
  },
  {
    name: "John M.",
    role: "Corporate Traveler",
    text: "Serene Homes is exactly as described—modern, clean, and very secure. The location near the bypass saved me so much time.",
    rating: 5,
  },
  {
    name: "Dr. Elizabeth",
    role: "Visiting Lecturer",
    text: "Stayed here for a week while visiting Kenyatta University. Much better and more private than any hotel in the area.",
    rating: 5,
  },
  {
    name: "Mark T.",
    role: "Transit Guest",
    text: "Easy access from JKIA. The self check-in was seamless even though I arrived late at night. Highly recommended.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-primary text-white overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Guest Experiences</h2>
            <p className="text-white/60">Hear from our community of business travelers, digital nomads, and families.</p>
          </div>
          <div className="flex items-center space-x-4 bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10">
            <div className="text-center px-4 border-r border-white/10">
              <span className="block text-3xl font-bold text-accent">4.98</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50">Overall Rating</span>
            </div>
            <div className="flex flex-col">
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs font-medium">120+ Verfied Reviews</span>
            </div>
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {REVIEWS.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 relative group hover:bg-white/10 transition-colors duration-500">
                  <Quote className="absolute top-10 right-10 text-accent/20 w-12 h-12" />
                  <div className="flex mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-8 italic text-white/80">"{review.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <span className="text-xs text-white/40">{review.role}</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12 space-x-4">
            <CarouselPrevious className="relative translate-y-0 left-0 bg-white/5 border-white/10 hover:bg-accent hover:text-primary transition-all" />
            <CarouselNext className="relative translate-y-0 right-0 bg-white/5 border-white/10 hover:bg-accent hover:text-primary transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
