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

export default function Home() {
  return (
    <>
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
