import { HeroSection } from "@/app/components/aboutpage/hero-section";
import { OurApproachSection } from "@/app/components/aboutpage/our-approach-section";
import { OurTeamSection } from "@/app/components/aboutpage/our-team-section";
import { OurExpertiseSection } from "@/app/components/homepage/our-expertise-section";
import { WhyUsSection } from "@/app/components/aboutpage/why-us-section";
import { AwardSection } from "../components/aboutpage/award-section";
import { GetInTouchSection } from "../components/homepage/get-in-touch-section";
import { NewsSection } from "../components/homepage/news-section";

export const metadata = {
    title: "About - Troscan",
};

const About = () => {
    return (
        <div>
            <HeroSection/>
            <OurApproachSection/>
            <OurTeamSection/>
            <OurExpertiseSection/>
            <WhyUsSection/>
            <AwardSection/>
            <GetInTouchSection/>
            <NewsSection/>
        </div>
    )
};

export default About;