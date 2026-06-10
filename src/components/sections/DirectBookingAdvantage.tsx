import { CheckCircle, ShieldCheck, Zap, HeartHandshake, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BRAND } from "@/constants/brand";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BENEFITS = [
  { icon: <Zap size={24} />, title: "Best Rates Guaranteed", desc: "Save up to 15% compared to Airbnb or Booking.com by booking directly." },
  { icon: <ShieldCheck size={24} />, title: "Flexible Requests", desc: "Need early check-in or late check-out? Direct guests get priority." },
  { icon: <HeartHandshake size={24} />, title: "Personalized Support", desc: "Direct communication with Paul for any special requirements." },
];

export function DirectBookingAdvantage() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-0" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20 space-y-8">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest border border-accent/20">
                Direct Booking Benefits
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
                Why Book Directly With Us?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Enjoy exclusive benefits, the lowest possible rates, and a more personal hospitality experience when you book your stay directly through our platform.
              </p>

              <div className="space-y-6">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-4 group">
                    <div className="p-3 bg-white/5 rounded-xl text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                      <p className="text-sm text-white/50">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, "")}`}
                  className={cn(buttonVariants({ variant: "default" }), "bg-accent hover:bg-accent/90 text-primary font-bold h-14 px-8 rounded-full text-lg shadow-xl shadow-accent/20")}
                >
                  Book Now & Save
                </Link>
                <Link 
                  href={`tel:${BRAND.phone}`} 
                  className={cn(buttonVariants({ variant: "outline" }), "border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-full text-lg flex items-center justify-center")}
                >
                  <Phone className="mr-2" size={20} /> Call for Inquiries
                </Link>
              </div>
            </div>

            <div className="hidden lg:block relative min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Hospitality" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
