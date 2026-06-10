import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MapPin, TreePine, ShoppingCart, Coffee, Waves } from "lucide-react";

const EXPERIENCES = [
  { name: "Tatu City", icon: <MapPin className="text-accent" />, desc: "Explore the futuristic city under development." },
  { name: "Karura Forest", icon: <TreePine className="text-accent" />, desc: "Cycling and hiking in Nairobi's green lung." },
  { name: "Two Rivers Mall", icon: <ShoppingCart className="text-accent" />, desc: "Kenya's premier shopping and entertainment destination." },
  { name: "Kamakis Dining", icon: <Coffee className="text-accent" />, desc: "The famous Eastern Bypass 'nyama choma' experience." },
];

export function LongStayAndExperiences() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Long Stay Section */}
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">Stay Longer, Save More</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Whether you're relocating, on a corporate assignment, or just need a long-term sanctuary, our monthly and weekly packages offer the best value.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-accent/20 bg-accent/5 overflow-hidden">
                  <CardContent className="p-8">
                    <Badge className="bg-accent text-primary mb-4">Best Value</Badge>
                    <h3 className="text-2xl font-bold text-primary mb-2">Monthly Stay</h3>
                    <p className="text-3xl font-bold text-accent mb-4">25% OFF</p>
                    <ul className="space-y-3 text-sm text-primary/70 mb-6">
                      <li className="flex items-center space-x-2"><CheckCircle2 size={16} /> <span>All utilities included</span></li>
                      <li className="flex items-center space-x-2"><CheckCircle2 size={16} /> <span>Weekly housekeeping</span></li>
                      <li className="flex items-center space-x-2"><CheckCircle2 size={16} /> <span>Dedicated support</span></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-8">
                    <Badge className="bg-primary text-white mb-4">Popular</Badge>
                    <h3 className="text-2xl font-bold text-primary mb-2">Weekly Stay</h3>
                    <p className="text-3xl font-bold text-primary mb-4">15% OFF</p>
                    <ul className="space-y-3 text-sm text-primary/70 mb-6">
                      <li className="flex items-center space-x-2"><CheckCircle2 size={16} /> <span>Perfect for business</span></li>
                      <li className="flex items-center space-x-2"><CheckCircle2 size={16} /> <span>High-speed WiFi</span></li>
                      <li className="flex items-center space-x-2"><CheckCircle2 size={16} /> <span>Full kitchen access</span></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="p-8 bg-muted rounded-3xl border">
              <h4 className="font-bold text-primary mb-4">Relocation Package</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Moving to Ruiru or Membley? Our relocation package provides a stress-free transition with local orientation and support while you find your permanent home."
              </p>
            </div>
          </div>

          {/* Neighborhood & Experiences */}
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">The Membley Experience</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Membley is one of Nairobi's best-kept secrets—a controlled, secure neighborhood that offers a perfect balance of tranquility and accessibility.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="flex items-start space-x-4 p-6 rounded-2xl border hover:shadow-lg transition-all duration-300">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{exp.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2074&auto=format&fit=crop" 
                alt="Nairobi Experience" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Weekend Escapes</span>
                <h4 className="text-white font-heading text-2xl font-bold">Discover Kenya's Best</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
