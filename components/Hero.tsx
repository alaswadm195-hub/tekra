"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const phrases = [
    "Web Experiences",
    "Brand Systems",
    "Creative Platforms",
    "Digital Growth",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % phrases.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#050811]">
      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#081435] via-[#0a1a4d] to-[#2a74ff] animate-gradientMove opacity-60"></div>

      {/* ✨ Floating Light Overlay */}
      <div className="absolute w-[60vw] h-[60vw] bg-[#2a74ff]/20 blur-[150px] rounded-full -top-40 left-1/2 transform -translate-x-1/2 animate-pulse-slow"></div>

      {/* 🔹 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(42,116,255,0.4)]"
        >
          We Build{" "}
          <motion.span
            key={phrases[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a74ff] to-[#79a3ff]"
          >
            {phrases[index]}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 mt-2 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Empowering brands and innovators through world-class digital design,
          web experiences, and creative technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-4 mt-8"
        >
          <Link href="#about">
            <button className="bg-[#2a74ff] hover:bg-[#1f5ddd] px-8 py-3 rounded-full text-white font-medium transition-all shadow-[0_0_25px_rgba(42,116,255,0.3)] hover:shadow-[0_0_35px_rgba(42,116,255,0.6)]">
              About Us
            </button>
          </Link>

          <Link href="#projects">
            <button className="border border-gray-500 hover:border-[#2a74ff] px-8 py-3 rounded-full font-medium text-gray-300 hover:text-[#2a74ff] transition-all hover:shadow-[0_0_20px_rgba(42,116,255,0.3)]">
              View Projects
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* 🔻 Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-gray-400 text-sm z-10 tracking-widest"
      >
        <span className="inline-block animate-pulse">Scroll Down ↓</span>
      </motion.div>
    </section>
  );
}