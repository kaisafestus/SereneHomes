import { Star, ShieldCheck, Car, Key, Wifi, Laptop, PawPrint } from "lucide-react";

const TRUST_ITEMS = [
  { icon: <Star className="text-accent fill-accent" />, label: "★★★★★ Guest Rating" },
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
            <div 
              key={index} 
              className="flex items-center space-x-3 text-primary/70 hover:text-primary transition-colors group"
            >
              <span className="text-accent group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
