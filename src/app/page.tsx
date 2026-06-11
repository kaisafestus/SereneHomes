import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PropertyShowcase } from "@/components/sections/PropertyShowcase";
import { GuestJourney } from "@/components/sections/GuestJourney";
import { LocationAdvantage } from "@/components/sections/LocationAdvantage";
import { NicheSections } from "@/components/sections/NicheSections";
import { LongStayAndExperiences } from "@/components/sections/LongStayAndExperiences";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { DirectBookingAdvantage } from "@/components/sections/DirectBookingAdvantage";

export default function Home() {
  return (
    <main className="relative flex-1 pt-20 md:pt-24">
      <Navbar />

      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <PropertyShowcase />
      <LocationAdvantage />
      <NicheSections />
      <LongStayAndExperiences />
      <GuestJourney />
      <Reviews />
      <FAQ />
      <DirectBookingAdvantage />

      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
