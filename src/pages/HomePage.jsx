import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { 
  Building, 
  TrendingUp, 
  Gem, 
  Settings, 
  Quote, 
  MapPin, 
  Building2, 
  Utensils, 
  Leaf, 
  Hotel 
} from "lucide-react";

import heroBg from '../assets/images/hero-bg.png';
import profileImg from '../assets/images/profile.png';
import mapBg from '../assets/images/map-bg.png';
import starsBg from '../assets/images/stars-bg.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 flex justify-end items-center text-sm tracking-wider uppercase font-light text-white/80">
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
          <a href="#expertise" className="hover:text-[#D4AF37] transition-colors">Expertise</a>
          <a href="#companies" className="hover:text-[#D4AF37] transition-colors">Companies</a>
          <a href="#global" className="hover:text-[#D4AF37] transition-colors">Global Experience</a>
          <a href="#media" className="hover:text-[#D4AF37] transition-colors">Media</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in zoom-in duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide uppercase">
            AZEEM SHAH
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
            Global Hospitality Strategist & 5-Star Hotel Management Expert
          </p>
          <p className="text-sm md:text-base text-white/60 font-light max-w-2xl mx-auto">
            Transforming Luxury Hospitality Brands Across Continents
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-none px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300">
              Explore My Journey
            </Button>
            <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300">
              View My Companies
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3 relative">
            <div className="absolute inset-0 bg-[#D4AF37] translate-x-4 translate-y-4 rounded-sm opacity-20"></div>
            <img 
              src={profileImg} 
              alt="Azeem Shah" 
              className="relative z-10 w-full rounded-sm shadow-2xl object-cover aspect-3/4"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-8">
            <h2 className="text-4xl font-serif text-gradient-gold">About Azeem Shah</h2>
            <div className="h-px w-24 bg-linear-to-r from-[#D4AF37] to-transparent"></div>
            <p className="text-white/70 font-light leading-relaxed text-lg">
              With over 20+ years in international hospitality leadership, Azeem Shah has managed and transformed world-class 5-star hotels across Asia, Middle East & Europe.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y border-white/10">
              <div>
                <div className="text-4xl font-serif text-[#D4AF37]">20+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider mt-2">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-[#D4AF37]">15+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider mt-2">Luxury Properties Managed</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-[#D4AF37]">6</div>
                <div className="text-sm text-white/50 uppercase tracking-wider mt-2">Sister Companies</div>
              </div>
            </div>

            <Button className="bg-[#D4AF37] hover:bg-[#b8952b] text-black rounded-none px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300">
              Download Full Profile &gt;
            </Button>
          </div>
        </div>
      </section>

      {/* Global Experience */}
      <section id="global" className="py-24 bg-[#E5E5E5] text-black relative">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#D4AF37]"></div>
            <h2 className="text-4xl font-serif font-semibold">Global Experience</h2>
            <div className="h-px w-16 bg-[#D4AF37]"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto py-12">
            <img src={mapBg} alt="World Map" className="w-full opacity-80 mix-blend-multiply" />
            
            {/* Map Pins */}
            <div className="absolute top-[30%] left-[25%] text-[#D4AF37] animate-pulse">
              <MapPin size={32} fill="#D4AF37" className="text-white" />
            </div>
            <div className="absolute top-[40%] right-[40%] text-[#D4AF37] animate-pulse">
              <MapPin size={32} fill="#D4AF37" className="text-white" />
            </div>
            <div className="absolute top-[45%] right-[30%] text-[#D4AF37] animate-pulse">
              <MapPin size={32} fill="#D4AF37" className="text-white" />
            </div>
            <div className="absolute top-[55%] right-[20%] text-[#D4AF37] animate-pulse">
              <MapPin size={32} fill="#D4AF37" className="text-white" />
            </div>
          </div>
          
          <p className="text-sm font-light uppercase tracking-widest text-black/60">
            Delivering Hospitality Leadership Worldwide
          </p>
        </div>
      </section>

      {/* Business Portfolio */}
      <section id="companies" className="py-24 bg-[#111] relative border-y border-white/5">
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16 text-center">
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Business Portfolio & Sister Concerns</h2>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'LuxuryStay Hotels', icon: <Hotel className="w-8 h-8 text-[#D4AF37]" />, desc: 'Premium accommodation solutions across major global destinations.' },
              { name: 'Elite Resorts', icon: <Building2 className="w-8 h-8 text-[#D4AF37]" />, desc: 'Exclusive resort management and development services.' },
              { name: 'Zenith Hospitality', icon: <Building className="w-8 h-8 text-[#D4AF37]" />, desc: 'Comprehensive hospitality consulting and strategic planning.' },
              { name: 'Gourmet Catering', icon: <Utensils className="w-8 h-8 text-[#D4AF37]" />, desc: 'High-end culinary experiences for luxury events and venues.' },
              { name: 'Spa Essence', icon: <Leaf className="w-8 h-8 text-[#D4AF37]" />, desc: 'Holistic wellness and luxury spa management.' },
            ].map((company, i) => (
              <Card key={i} className="bg-[#fcfcfc] border-none rounded-sm p-8 text-center flex flex-col items-center gap-4 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500 group">
                <div className="p-4 bg-[#f0f0f0] rounded-full group-hover:scale-110 transition-transform duration-500">
                  {company.icon}
                </div>
                <h3 className="text-black font-serif text-lg font-semibold">{company.name}</h3>
                <p className="text-xs text-black/60 font-light flex-1">{company.desc}</p>
                <Button variant="outline" className="w-full mt-4 rounded-none border-black text-black hover:bg-black hover:text-white text-xs tracking-widest uppercase">
                  Visit Website
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 bg-black relative">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-16">
          <div className="flex items-center justify-center gap-4">
            <h2 className="text-3xl md:text-4xl font-serif text-white">My Expertise</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 border-t border-b border-white/10 py-12">
            <div className="flex flex-col items-center gap-6 group px-4">
              <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Building className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-white/80">Hotel Pre-Opening</h3>
            </div>
            <div className="flex flex-col items-center gap-6 group px-4">
              <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-white/80">Revenue Management</h3>
            </div>
            <div className="flex flex-col items-center gap-6 group px-4">
              <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Gem className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-white/80">Luxury Brand Development</h3>
            </div>
            <div className="flex flex-col items-center gap-6 group px-4">
              <div className="p-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Settings className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-sm uppercase tracking-widest text-white/80">Operational Excellence</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></div>
            <h2 className="text-2xl font-serif text-white">Awards & Achievements</h2>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></div>
            <div className="h-px w-12 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-serif text-[#D4AF37]">2018</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Luxury Hotel Award</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-serif text-[#D4AF37]">2019</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Hospitality Leadership Award</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-serif text-[#D4AF37]">2021</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Featured in Travel Magazine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-32 px-6 relative flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${starsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#D4AF37]"></div>
            <h2 className="text-2xl font-serif text-white">Testimonials</h2>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#D4AF37]"></div>
          </div>

          <Quote className="w-12 h-12 text-[#D4AF37] mx-auto opacity-50" />
          
          <h3 className="text-2xl md:text-4xl font-serif italic text-white/90 leading-relaxed">
            "Azeem's leadership took our hotel to new heights of success."
          </h3>
          
          <div className="pt-6 space-y-1">
            <p className="text-[#D4AF37] font-semibold tracking-wider">— James Williams</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">General Manager, London</p>
          </div>

          <div className="pt-12">
            <Button className="bg-[#D4AF37] hover:bg-[#b8952b] text-black rounded-none px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300">
              Schedule a Consultation &gt;
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
