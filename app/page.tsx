import { HeroSection } from "@/app/components/homepage/hero-section";
import { AboutUsSection } from "@/app/components/homepage/about-us-section";
import { FeaturedSection } from "@/app/components/homepage/featured-section";
import { OurExpertiseSection } from "@/app/components/homepage/our-expertise-section";
import { GetInTouchSection } from "@/app/components/homepage/get-in-touch-section";
import { NewsSection } from "@/app/components/homepage/news-section";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutUsSection/>
      <FeaturedSection/>
      <OurExpertiseSection/>
      <GetInTouchSection/>
      <NewsSection/>
    </div>
  )
};

export default Home;