import { MapPin, Plane, Building2, School, ShoppingBag, Utensils } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DESTINATIONS = [
  { name: "JKIA Airport", time: "25-30 mins", icon: <Plane size={20} />, category: "Travel" },
  { name: "Nairobi CBD", time: "30-40 mins", icon: <Building2 size={20} />, category: "Travel" },
  { name: "Tatu City", time: "10 mins", icon: <Building2 size={20} />, category: "Business" },
  { name: "Kenyatta University", time: "10 mins", icon: <School size={20} />, category: "Education" },
  { name: "JKUAT University", time: "15 mins", icon: <School size={20} />, category: "Education" },
  { name: "Two Rivers Mall", time: "20 mins", icon: <ShoppingBag size={20} />, category: "Shopping" },
  { name: "Garden City Mall", time: "15 mins", icon: <ShoppingBag size={20} />, category: "Shopping" },
  { name: "Kamakis District", time: "5 mins", icon: <Utensils size={20} />, category: "Dining" },
];

export function LocationAdvantage() {
  return (
    <section id="location" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="text-accent border-accent mb-4">Location Advantage</Badge>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary">
              The Smart Alternative To Expensive Nairobi Hotels
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Why stay stuck in Nairobi traffic? Stay in a peaceful, secure, premium apartment with direct access to everything that matters. We are strategically positioned along the Eastern Bypass for maximum convenience.
            </p>

            <div className="space-y-4">
              {DESTINATIONS.map((dest, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl border border-transparent hover:border-accent/20 hover:bg-accent/5 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {dest.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{dest.name}</h4>
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">{dest.category}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-accent font-bold">{dest.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border">
            {/* Placeholder for Interactive Map */}
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-80"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                <div className="relative bg-primary text-white p-6 rounded-2xl shadow-2xl border-2 border-accent flex flex-col items-center min-w-[200px]">
                  <MapPin className="text-accent mb-2" size={32} />
                  <span className="font-heading font-bold text-center">SERENE HOMES</span>
                  <span className="text-[10px] uppercase tracking-widest text-accent">Membley, Ruiru</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border">
              <h4 className="font-bold text-primary mb-2 flex items-center">
                <MapPin className="text-accent mr-2" size={18} />
                Devivi Apartment, 2nd Floor
              </h4>
              <p className="text-sm text-muted-foreground">
                Located right along the Eastern Bypass in the serene Membley Estate. Secure, accessible, and quiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
