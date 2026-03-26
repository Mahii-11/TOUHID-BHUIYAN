import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function FloatingSocial() {
  const socials = [
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaFacebook />, link: "https://facebook.com" },
    { icon: <FaEnvelope />, link: "mailto:contact@example.com" },
  ];

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      
      {/* Top Line */}
      <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-yellow-500 to-transparent mx-auto"></div>

      {socials.map((item, index) => (
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