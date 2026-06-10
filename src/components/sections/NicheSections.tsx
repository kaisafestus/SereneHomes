import { Laptop, Wifi, Coffee, Plane, School, GraduationCap, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NicheSections() {
  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Business Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Business Workspace" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold">
              <Laptop size={16} />
              <span>Built For Productivity</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-primary">Corporate & Business Travel</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We understand the needs of the modern professional. Our apartment is optimized for remote work and corporate stays with everything you need to stay productive.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Wifi size={20} />, text: "Fast Internet" },
                { icon: <Laptop size={20} />, text: "Dedicated Desk" },
                { icon: <Coffee size={20} />, text: "Coffee Nearby" },
                { icon: <Plane size={20} />, text: "Airport Access" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-primary/80">
                  <div className="text-accent">{item.icon}</div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <Link 
              href="https://wa.me/254725896947"
              className={cn(buttonVariants({ variant: "default" }), "bg-primary hover:bg-primary/90 h-14 px-8 rounded-full text-lg flex items-center justify-center")}
            >
              Book Corporate Stay
            </Link>
          </div>
        </div>

        {/* University Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold">
              <School size={16} />
              <span>Academic Visitor Hub</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-primary">University & Research Visits</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ideally located for visitors to Kenyatta University, JKUAT, Zetech, and NIBS. The perfect home for lecturers, researchers, and graduation guests.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <GraduationCap size={20} />, text: "Graduation Guests" },
                { icon: <Users size={20} />, text: "Visiting Parents" },
                { icon: <BookOpen size={20} />, text: "Researchers" },
                { icon: <School size={20} />, text: "Visiting Lecturers" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-primary/80">
                  <div className="text-accent">{item.icon}</div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <Link 
              href="https://wa.me/254725896947"
              className={cn(buttonVariants({ variant: "outline" }), "border-primary text-primary hover:bg-primary hover:text-white h-14 px-8 rounded-full text-lg flex items-center justify-center")}
            >
              Inquire for Groups
            </Link>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl border">
            <img 
              src="/university.png" 
              alt="University Campus" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>

      </div>
    </section>
  );
}
