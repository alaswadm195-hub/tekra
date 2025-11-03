"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ✅ Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setIsMenuOpen(false);
      setShowDropdown(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // ✅ Projects filter logic
  const triggerFilter = (filterId: string) => {
    setShowDropdown(false);
    window.dispatchEvent(new CustomEvent("filterProjects", { detail: filterId }));
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Smooth scroll (global)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-3 flex justify-between items-center transition-all ${
        scrolled ? "bg-[#050811]/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      {/* 🔹 Logo */}
      <motion.a
        href="#home"
        whileHover={{ scale: 1.12 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0b1128] border border-[#2a74ff70]
                   hover:border-[#2a74ff] hover:shadow-[0_0_25px_#2a74ff80] transition-all duration-500 overflow-hidden"
      >
        <Image
          src="/images/logo.png"
          alt="TEKRA Logo"
          width={50}
          height={50}
          className="object-contain rounded-full drop-shadow-[0_0_8px_#2a74ff70]"
        />
      </motion.a>

      {/* 🔹 Desktop Menu */}
      <div className="hidden md:flex gap-8 text-gray-300 font-medium items-center relative">
        <a href="#home" className="hover:text-[#2a74ff] transition">Home</a>
        <a href="#about" className="hover:text-[#2a74ff] transition">About</a>
        <a href="#why" className="hover:text-[#2a74ff] transition">Why TEKRA</a>
        <a href="#services" className="hover:text-[#2a74ff] transition">Services</a>

        {/* 🔸 Dropdown Projects */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1 hover:text-[#2a74ff] transition"
          >
            Projects <ChevronDown size={16} />
          </button>

          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-8 left-0 bg-[#0b1020]/95 border border-[#2a74ff40] rounded-lg shadow-lg py-2 px-4 w-56 z-50 backdrop-blur-md"
              >
                {[
                  { id: "all", label: "All Projects" },
                  { id: "edu", label: "Educational Platforms" },
                  { id: "brand", label: "Brand Websites" },
                  { id: "design", label: "Graphic Design" },
                  { id: "marketing", label: "Marketing & Ads" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => triggerFilter(item.id)}
                    className="block w-full text-left py-2 px-2 text-gray-300 hover:text-white hover:bg-[#2a74ff]/20 rounded-md transition"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="#contact" className="hover:text-[#2a74ff] transition">Contact</a>
      </div>

      {/* 🔹 Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-gray-300 hover:text-[#2a74ff] transition-all duration-300"
      >
        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* 🔹 Mobile Menu (Floating) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-16 right-6 bg-[#0b1020]/95 border border-[#2a74ff]/30 rounded-xl shadow-lg p-4 flex flex-col items-start gap-3 text-gray-300 text-sm md:hidden z-40 w-44"
          >
            {["Home", "About", "Why TEKRA", "Services", "Projects", "Contact"].map(
              (name) => (
                <a
                  key={name}
                  href={`#${name === "Why TEKRA" ? "why" : name.toLowerCase().replace(" ", "")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full hover:text-[#2a74ff] hover:bg-[#2a74ff]/10 rounded-md px-3 py-2 transition"
                >
                  {name}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
