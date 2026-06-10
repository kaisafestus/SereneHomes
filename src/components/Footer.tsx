import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { Phone, Mail, MapPin, Share2, Globe, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <Link href="/" className="flex flex-col">
            <span className="font-heading text-2xl font-bold tracking-tight text-white">
              SERENE HOMES
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent">
              Membley
            </span>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            {BRAND.tagline} {BRAND.alternativeTaglines[1]}
          </p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
              <Globe size={18} />
            </Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
              <Share2 size={18} />
            </Link>
            <Link href={`https://wa.me/${BRAND.phone.replace(/[^0-9]/g, "")}`} className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors">
              <MessageSquare size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-accent">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#why-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
            <li><Link href="#showcase" className="hover:text-white transition-colors">Apartment Gallery</Link></li>
            <li><Link href="#location" className="hover:text-white transition-colors">Location Guide</Link></li>
            <li><Link href="#reviews" className="hover:text-white transition-colors">Guest Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-accent">Contact Information</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>{BRAND.location.address}, {BRAND.location.street}, {BRAND.location.city}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>{BRAND.phone} / {BRAND.altPhone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>bookings@serenehomesmembley.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold mb-6 text-accent">Our Promise</h4>
          <p className="text-sm text-white/70 leading-relaxed italic">
            "We provide more than just a place to sleep. We provide a sanctuary where business, travel, and comfort meet seamlessly."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
