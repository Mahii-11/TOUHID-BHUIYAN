import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Cards from "../components/home/Cards";
import Publication from "../components/home/Publication";
import StatsSection from "../components/home/StatsSection";
import SocialImpact from "../components/home/SocialImpact";
import CallToAction from "../components/home/CallToAction";



export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Cards Section */}
      <Cards />
      {/* Publication and Media Section */}
      <Publication />
      {/* Stats Section */}
      <StatsSection />
      {/* Social Impact Section */}
      <SocialImpact/>
      {/* Footer Call to Action */}
       <CallToAction />
    </div>
  );
}
