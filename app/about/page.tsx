"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const stats = [
    { num: 50, label: "Projects", suffix: "+" },
    { num: 30, label: "Clients", suffix: "+" },
    { num: 3, label: "Years", suffix: "+" },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-28 bg-transparent text-white relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* 🖼️ الصورة */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-[80%] sm:w-[70%] md:w-full max-w-[480px] rounded-2xl overflow-hidden shadow-lg shadow-[#2a74ff40] hover:shadow-[#2a74ff80] transition-all duration-500">
            <Image
              src="/images/logo.png"
              alt="About TEKRA"
              width={600}
              height={450}
              className="object-cover w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>

        {/* ✨ النص */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            About <span className="text-[#2a74ff]">TEKRA</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-10 text-base sm:text-lg">
            We’re a creative tech agency passionate about innovation, design, and
            building experiences that make brands stand out. Founded by{" "}
            <span className="text-[#2a74ff] font-semibold">Mohamed Al Aswad</span> and{" "}
            <span className="text-[#2a74ff] font-semibold">Ahmed Abu Elnin</span>, TEKRA
            transforms bold ideas into powerful digital realities — from websites and
            systems to complete digital branding.
          </p>

          {/* 🔢 العدادات */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 text-center md:text-left">
            {stats.map((item, i) => (
              <Counter
                key={i}
                num={item.num}
                label={item.label}
                suffix={item.suffix}
                delay={i * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================
   🎛 Counter Component (فعلي)
   =============================== */
function Counter({
  num,
  label,
  suffix,
  delay,
}: {
  num: number;
  label: string;
  suffix: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const end = num;
          const duration = 2000; // 2 ثانية
          const stepTime = 20;
          const increment = (end - start) / (duration / stepTime);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCount(Math.floor(start));
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, hasStarted]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="p-4 rounded-xl bg-[#0b1020]/40 border border-[#2a74ff]/10"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a74ff] drop-shadow-[0_0_15px_rgba(42,116,255,0.3)]">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-400 text-xs sm:text-sm mt-1">{label}</p>
    </motion.div>
  );
}
