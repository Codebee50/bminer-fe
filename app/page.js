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
import FAQSection from "@/sections/FaqSection";
import { faqs } from "@/constants/constants";
import SimpleBitcoinMining from "@/sections/SimpleBitcoinMining";

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
      <div className="w-full bg-[#f8f8f8] mt-[100px]">
        <FAQSection faqs={faqs} />
      </div>

      <SectionWrapper pad={false}>
        <LatestNewsSection heading="Latest news" />
      </SectionWrapper>

      <SimpleBitcoinMining />
      <Footer marginTop={false} />
    </div>
  );
}
