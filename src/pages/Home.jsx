import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Cards from "../components/home/Cards";
import Publication from "../components/home/Publication";
import StatsSection from "../components/home/StatsSection";
import SocialImpact from "../components/home/SocialImpact";
import CallToAction from "../components/home/CallToAction";
import LatestPublicationSlider from "../components/home/LatestPublicationSlider";
import VideoSlider from "../components/home/VideoSlider";




export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Hero />
      <About />
      <Cards />
      <LatestPublicationSlider/>
      <VideoSlider/>
      <StatsSection />
      <SocialImpact/>
      <CallToAction />
    </div>
  );
}
