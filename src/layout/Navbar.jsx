import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router";

export default function PremiumNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Research & Innovation", path: "/research" },
  { name: "Policy & Governance", path: "/policy" },
  { name: "Cybersecurity Practice", path: "/cybersecurity" },
  { name: "Social Impact", path: "/social-impact" },
  { name: "Newsroom/Media", path: "/news" },
];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "shadow-[0_4px_32px_rgba(0,0,0,0.6)] border-b border-[#c9a84c]/30"
            : "border-b border-white/5"
        }`}
        style={{
          background: scrolled
            ? "rgba(6,10,26,0.92)"
            : "rgba(6,10,26,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-3.5">

          {/* Left Side — Profile */}
        <Link to="/">

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[#c9a84c] via-[#f5d98a] to-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <img
                src="/images/touhid-11.png"
                alt="Prof. Touhid Bhuiyan"
                className="relative w-11 h-11 rounded-full border-2 border-[#c9a84c]/60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-[0.88rem] font-bold tracking-wide text-white uppercase font-['Playfair_Display'] whitespace-nowrap">
                Prof. Touhid Bhuiyan, PhD
              </h1>
              <span className="text-[#c9a84c]/40 text-xs hidden md:inline">|</span>
              <p className="text-[0.68rem] text-[#c9a84c]/80 uppercase tracking-[0.12em] font-medium whitespace-nowrap hidden md:block">
                Professor · Cybersecurity & AI Governance
              </p>
            </div>
          </div>
        
        </Link>

          {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 ml-8 xl:ml-16">
  {navLinks.map((link, index) => {
    const isActive = location.pathname === link.path;

    return (
      <Link
        key={index}
        to={link.path}
        className={`relative px-3 py-2 text-[0.78rem] font-medium tracking-wide transition-all duration-300 whitespace-nowrap group ${
          isActive
            ? "text-[#c9a84c]"
            : "text-white/70 hover:text-[#c9a84c]"
        }`}
      >
        {link.name}

        {/* underline */}
        <span
          className={`absolute bottom-1 left-3 right-3 h-px bg-gradient-to-r from-[#c9a84c] to-[#f5d98a] transition-transform duration-300 origin-left rounded-full ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>
    );
  })}
</nav>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-white/70 hover:text-[#c9a84c] rounded-md hover:bg-white/5 transition-all duration-200"
              aria-label="Open menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-400 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          background: "rgba(2,5,15,0.75)",
          backdropFilter: isOpen ? "blur(8px)" : "none",
        }}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 transform transition-transform duration-350 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "linear-gradient(160deg, #0d1529 0%, #060a1a 100%)",
          borderRight: "1px solid rgba(201,168,76,0.12)",
          boxShadow: isOpen ? "8px 0 48px rgba(0,0,0,0.6)" : "none",
        }}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <FaShieldAlt size={14} className="text-[#c9a84c]" />
            <span className="text-[0.7rem] text-[#c9a84c]/70 uppercase tracking-[0.2em] font-medium">
              Navigation
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-white/50 hover:text-[#c9a84c] rounded-md hover:bg-white/5 transition-all duration-200"
            aria-label="Close menu"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Profile in sidebar */}
        <div className="px-5 py-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <img
              src="/images/touhid-11.png"
              alt="Prof. Touhid Bhuiyan"
              className="w-10 h-10 rounded-full border border-[#c9a84c]/40 object-cover"
            />
            <div>
              <p className="text-[0.8rem] font-semibold text-white leading-tight">
                Prof. Touhid Bhuiyan
              </p>
              <p className="text-[0.62rem] text-[#c9a84c]/70 tracking-wide mt-0.5">
                PhD · Cybersecurity & AI
              </p>
            </div>
          </div>
        </div>

        {/* Links with stagger animation */}
               <nav className="flex flex-col px-3 py-4 gap-0.5">
  {navLinks.map((link, index) => {
    const isActive = location.pathname === link.path;

    return (
      <Link
        key={index}
        to={link.path}
        onClick={() => setIsOpen(false)}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[0.875rem] transition-all duration-200 group ${
          isActive
            ? "text-[#c9a84c] bg-[#c9a84c]/10"
            : "text-white/70 hover:text-[#c9a84c] hover:bg-[#c9a84c]/5"
        }`}
        style={{
          transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateX(0)" : "translateX(-12px)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/0 group-hover:bg-[#c9a84c] transition-colors duration-200 flex-shrink-0" />
        {link.name}
      </Link>
    );
  })}
</nav>

        {/* Decorative glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
    </>
  );
}
