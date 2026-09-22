import { Hero } from "@/components/hero";
import { ServiceTimes } from "@/components/service-times";
import { AboutPreview } from "@/components/about-preview";
import { UpcomingEvents } from "@/components/upcoming-events";
import { GiveCta } from "@/components/give-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTimes />
      <AboutPreview />
      <UpcomingEvents />
      <GiveCta />
    </>
  );
}
