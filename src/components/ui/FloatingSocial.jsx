import { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { getSocialData } from "../../services/api";



const iconMap = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  facebook: FaFacebook,
  github: FaGithub,
};


const normalizeSocials = (data) => {
  if (!Array.isArray(data)) return [];

  return data.map((item) => {
    const key = item.platform?.toLowerCase(); // important
    const Icon = iconMap[key] || FaGithub; // fallback

    return {
      icon: <Icon />,
      link: item.url || "#",
    };
  });
};







export default function FloatingSocial() {
  const [social, setSocial] = useState([]);
  const normalizedSocials = normalizeSocials(social);



   useEffect(() => {
      const fetchSocial = async () => {
        try {
          const res = await getSocialData();
          console.log("Fetched social data:", res);
          setSocial(res?.data || []);
        } catch (error) {
          console.error("Error fetching social data:", error);
        }
      };
  
      fetchSocial();
  
    }, [])
  

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      
      {/* Top Line */}
      <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-yellow-500 to-transparent mx-auto"></div>

      {normalizedSocials.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative flex items-center justify-center
            w-11 h-11 rounded-full
            bg-[#0b1d2a]/80 backdrop-blur-md   /* 👈 main fix */
            border border-white/20
            shadow-lg shadow-black/30
            text-gray-200
            hover:text-yellow-400
            hover:bg-yellow-500/20
            transition duration-300
          "
        >
          <span className="text-lg">{item.icon}</span>

          {/* Glow */}
          <span className="absolute inset-0 rounded-full bg-yellow-500/20 opacity-0 group-hover:opacity-100 blur-md transition"></span>
        </a>
      ))}

      {/* Bottom Line */}
      <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-yellow-500 to-transparent mx-auto"></div>
    </div>
  );
}