import GetStarted from "@/sections/GetStarted";
import TopNav from "@/components/TopNav";
import HeroSection from "@/sections/HeroSection";
import Image from "next/image";
import ExperienceAdvantageSection from "@/sections/ExperienceAdvantageSection";
import DiscountSection from "@/sections/DiscountSection";
import PopularPosts from "@/components/PopularPosts";
import SectionWrapper from "@/components/SectionWrapper";
import LatestNewsSection from "@/sections/LatestNewsSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import PlansDisplay from "@/sections/PlansDisplay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <TopNav />
      <HeroSection />
      <GetStarted />
      <ExperienceAdvantageSection />
      <DiscountSection />
      <WhyChooseUs />
      <PlansDisplay />
      <SectionWrapper pad={false}>
        <LatestNewsSection heading="Latest news" />
      </SectionWrapper>
      <Footer />
    </div>
  );
}
