import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { BRAND } from "@/constants/brand";

export function WhatsAppFloating() {
  const whatsappUrl = `https://wa.me/${BRAND.phone.replace(/[^0-9]/g, "")}`;
  
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-medium text-sm">
        Book on WhatsApp
      </span>
    </Link>
  );
}
