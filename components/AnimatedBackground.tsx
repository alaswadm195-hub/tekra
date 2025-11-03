"use client";
import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050811]">
      {/* الموجة المتحركة */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#081435] via-[#0a1a4d] to-[#2a74ff] animate-gradientMove opacity-60"></div>

      {/* اللمعة المتوهجة */}
      <div className="absolute w-[70vw] h-[70vw] bg-[#2a74ff]/25 blur-[180px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
    </div>
  );
}
