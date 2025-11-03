"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#2a74ff]/20 py-10 bg-[#050811]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-400">
        {/* Left */}
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#2a74ff] font-semibold">TEKRA</span> — All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-5 text-gray-300">
          <a
            href="https://www.facebook.com/share/1AHPcrFPex/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2a74ff] transition-all"
          >
            <Facebook size={18} />
          </a>

          <a
            href="https://www.instagram.com/tekra.am?igsh=MXRqajJzZ2Nxb2k1Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2a74ff] transition-all"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/tekra-company-4686a1395"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2a74ff] transition-all"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://wa.me/+201276301996" // ← غيّر الرقم هنا لرقمك الفعلي بدون +
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-all"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
