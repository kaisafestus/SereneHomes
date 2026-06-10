import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How far is Serene Homes from JKIA Airport?",
    a: "We are strategically located just 25-30 minutes away from JKIA via the Eastern Bypass, making it an ideal choice for transit guests and international travelers.",
  },
  {
    q: "How does the self check-in work?",
    a: "After confirmation, you will receive a secure digital code or key access instructions. This allows you to check in at any time after 2 PM, providing maximum flexibility for your arrival.",
  },
  {
    q: "Is parking available and secure?",
    a: "Yes, we provide free, secure parking within the building. The property is protected by 24/7 soldier-manned security and CCTV surveillance.",
  },
  {
    q: "Is the WiFi reliable for remote work?",
    a: "Absolutely. We provide high-speed fiber internet and a dedicated workspace, specifically designed to meet the needs of digital nomads and business travelers.",
  },
  {
    q: "Are pets allowed?",
    a: "Yes, we are pet-friendly! We just ask that you inform us in advance so we can ensure everything is ready for you and your furry friend.",
  },
  {
    q: "Can I pay through M-Pesa?",
    a: "Yes, we accept M-Pesa, bank transfers, and major credit cards for direct bookings.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about your stay at Serene Homes Membley.</p>
        </div>

        <Accordion className="w-full space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl bg-white px-6 overflow-hidden">
              <AccordionTrigger className="text-left font-bold text-primary hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
