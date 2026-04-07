/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Link } from "react-router";
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getSettings, getSocialData } from "../services/api";


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





export const FooterSection = () => {
  const [data, setData] = useState([]);
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


  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await getSettings()
        setData(res)
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    }
    fetchData();
  }, [])


  const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Research & Innovation", path: "/research" },
  { name: "Policy & Governance", path: "/policy" },
  { name: "Cybersecurity Practice", path: "capabilities/cybersecurity-specialist" },
  { name: "Social Impact", path: "/social-impact" },
  { name: "Newsroom/Media", path: "/media" },
  ];


  return (
    <footer className="relative bg-[#071521] text-white border-t border-white/10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-1 h-8 bg-yellow-500 rounded-full" />
              <h3 className="text-2xl font-bold tracking-wide">
                {data.name}
              </h3>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
             {data.description}
            </p>

            {/* 🔥 Social Icons */}
            <div className="flex gap-4">
              {normalizedSocials.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/20 transition duration-300"
                >
                  <span className="text-lg">{item.icon}</span>

                  {/* Glow */}
                  <span className="absolute inset-0 rounded-full bg-yellow-500/20 opacity-0 group-hover:opacity-100 blur-md transition"></span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-yellow-400 mb-6">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {quickLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-yellow-400 transition duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs md:text-sm text-gray-400">
            © 2025 Prof. Touhid Bhuiyan |
            <Link to="/terms" className="ml-1 hover:text-yellow-400 transition">
              Terms of Service
            </Link>
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="mailto:contact@touhidbhuiyan.com"
              className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-500 text-black font-semibold rounded-full text-sm hover:bg-yellow-400 transition shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};