import BannerSlider from "@/components/home/BannerSlider";
import Intro from "@/components/home/Intro";
import AtithiHomeContent from "@/components/home/AtithiHomeContent";
import HotelFacilities from "@/components/home/HotelFacilities";
import LocationSection from "@/components/home/LocationSection";
import SecuritySection from "@/components/home/SecuritySection";
import FAQSection from "@/components/home/FAQSection";
import RoomsGridSection from "@/components/home/RoomsGridSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import BlogSection from "@/components/home/BlogSection";
import Script from "next/script";

export default function Home() {
  const schema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Atithi Homestay",
  "alternateName": "Atithi Home",
  "url": "https://www.atithihome.com/",
  "telephone": "+91-6000891365",
  "priceRange": "₹₹",
  "description": "Affordable hotel and homestay near Pratiksha Hospital, VIP Road, Barbari, Guwahati. Open 24/7 with comfortable rooms, family-friendly accommodation, and emergency stay support.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Alokpur, Near Pratiksha Hospital, VIP Road, Barbari",
    "addressLocality": "Guwahati",
    "addressRegion": "Assam",
    "postalCode": "781036",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "areaServed": {
    "@type": "City",
    "name": "Guwahati"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "24/7 Check-in",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Air Conditioned Rooms",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Family Friendly",
      "value": true
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-6000891365",
    "contactType": "Reservations",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Assamese"]
  }
}
  return (
    <>
    <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <BannerSlider />
      <Intro />
      <AtithiHomeContent />
      <HotelFacilities />
      <LocationSection />
      <SecuritySection />
      <RoomsGridSection />
      <TestimonialSection />
      <BlogSection />
      <FAQSection />
    </>
  );
}
