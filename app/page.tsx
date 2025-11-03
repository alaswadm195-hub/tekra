"use client";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./about/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main id="home" className="relative text-white overflow-hidden bg-[#050811] z-0">


      <AnimatedBackground />
      <Navbar />

      <Hero />

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <About />
        </div>
      </section>

    {/* WHY TEKRA */}
<section id="why" className="scroll-mt-24 py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-10">
      <span className="text-[#2a74ff]">Why</span> TEKRA
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="glass-card">
        <h3 className="glass-title">Innovation</h3>
        <p className="glass-text">
          We blend creativity with technology to build standout digital
          experiences that move audiences and grow businesses.
        </p>
      </div>

      <div className="glass-card">
        <h3 className="glass-title">Performance</h3>
        <p className="glass-text">
          Fast, secure, and scalable — every project we build is optimized for
          speed, reliability, and impact.
        </p>
      </div>

      <div className="glass-card">
        <h3 className="glass-title">Partnership</h3>
        <p className="glass-text">
          We don’t just build for you — we build with you, turning ideas into
          long-term success stories.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Services />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Projects />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Contact />
        </div>
      </section>
    </main>
  );
}
