import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Cards from "../components/home/Cards";
import StatsSection from "../components/home/StatsSection";
import SocialImpact from "../components/home/SocialImpact";
import CallToAction from "../components/home/CallToAction";
import VideoSlider from "../components/home/VideoSlider";
import LatestPublicationPro from "../components/home/LatestPublicationPro";





export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Hero />
      <About />
      <Cards />
      <LatestPublicationPro />
      <VideoSlider/>
      <StatsSection />
      <SocialImpact/>
      <CallToAction />
    </div>
  );
}
