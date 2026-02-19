import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { Button } from "../components/ui/button";

export default function Navbar() {
  return (
      <header className="bg-navy text-white py-4 px-4 md:px-12 border-b border-white/10 sticky top-0 z-50">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <img
            src="/images/professor-portrait.png"
            alt="Prof. Touhid Bhuiyan"
            className="w-12 h-12 rounded-full border-2 border-gold object-cover"
          />
          <div>
            <h1 className="text-base md:text-lg font-serif font-bold leading-tight">
              PROF. TOUHID BHUIYAN, PhD
            </h1>
            <p className="text-xs text-gray-300 uppercase tracking-wider">
              Professor | Cybersecurity & AI Governance
            </p>
          </div>
        </div>
    
        {/* Right Side */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="text-white border-white/30 hover:bg-white/10 hover:text-white rounded-none px-4 md:px-6 w-full sm:w-auto"
            >
              Request a Talk
            </Button>
    
            <Button 
              variant="outline" 
              className="text-white border-white/30 hover:bg-white/10 hover:text-white rounded-none px-4 md:px-6 w-full sm:w-auto"
            >
              Policy Consultation
            </Button>
          </div>
    
          {/* Social Icons */}
          <div className="flex gap-2 justify-center sm:ml-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
              <FaFacebook className="text-white text-sm" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
              <FaTwitter className="text-white text-sm" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
              <FaLinkedin className="text-white text-sm" />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
              <FaEnvelope className="text-white text-sm" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
