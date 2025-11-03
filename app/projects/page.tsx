"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const handleFilterEvent = (e: any) => setActiveFilter(e.detail);
    window.addEventListener("filterProjects", handleFilterEvent);
    return () => window.removeEventListener("filterProjects", handleFilterEvent);
  }, []);

  const projects = [
    // 🎓 Educational Platforms
    {
      id: "edu",
      title: "Al-Gafe Educational Platform",
      img: "/images/project1.png",
      desc: "A complete educational platform for teaching Arabic language to high school students — featuring interactive video lessons, quizzes, and student progress tracking.",
      tech: ["Next.js", "TailwindCSS", "Firebase"],
      link: "https://mogafe.com/",
    },
    {
      id: "edu",
      title: "Kandeel Learning Platform",
      img: "/images/project2.png",
      desc: "An online learning system for high school students with modern UI and smart tools for teachers and students.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://kandeell.com/",
    },
    {
      id: "edu",
      title: "Kandeel Dashboard System",
      img: "/images/project3.png",
      desc: "A management dashboard for tracking student progress, handling payments, and managing courses within the Kandeel ecosystem.",
      tech: ["Next.js", "TypeScript", "Supabase"],
      link: "https://dash.kandeell.com/",
    },

    // 💼 Brand Websites
    {
      id: "brand",
      title: "Personal Portfolio Website",
      img: "/images/project4.png",
      desc: "A modern personal portfolio showcasing development projects, designs, and web experiences built with smooth animations.",
      tech: ["Next.js", "Framer Motion", "Vercel"],
      link: "https://alaswadm195-hub.github.io/portfolio-v2/",
    },
    {
      id: "brand",
      title: "Fitness Gym Landing Page",
      img: "/images/project5.png",
      desc: "A professional gym landing page focused on engagement and strong visual branding with responsive design.",
      tech: ["Next.js", "TailwindCSS"],
      link: "https://alaswadm195-hub.github.io/fitness-gym/",
    },

    // 🎨 Graphic Design
    {
      id: "design",
      title: "Math Teacher Visual Identity",
      img: "/images/project7.png",
      desc: "A full visual identity project for an Arabic math teacher — featuring custom logo, typography, and marketing visuals.",
      tech: ["Figma", "Illustrator", "Photoshop"],
      link: "https://www.behance.net/gallery/231786039/Visual-Identity-for-math-techer",
    },
    {
      id: "design",
      title: "Tafweela Restaurant Branding",
      img: "/images/project8.png",
      desc: "A visual identity for 'Tafweela' – an authentic Egyptian Ful & Falafel restaurant brand with warm colors and classic type.",
      tech: ["Illustrator", "Photoshop"],
      link: "https://www.behance.net/gallery/227600673/Tafweela-Authentic-Egyptian-Ful-Falafel",
    },
    {
      id: "design",
      title: "Pizza Steve Mini Identity",
      img: "/images/project9.png",
      desc: "A playful mini branding concept for 'Pizza Steve' using vibrant colors and friendly design language.",
      tech: ["Illustrator", "Figma"],
      link: "https://www.behance.net/gallery/227664051/Mini-Identity-Concept-Pizza-Steve",
    },

    // 📈 Marketing & Ads
    {
      id: "marketing",
      title: "Promo Video Advertisement",
      img: "/images/project6.png",
      desc: "A short promotional video ad designed to boost engagement and showcase brand storytelling through motion design.",
      tech: ["After Effects", "Premiere Pro"],
      link: "https://www.facebook.com/share/v/1H4gFwXmP5/",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.id === activeFilter);

  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-br from-[#0a153a] via-[#050a25] to-[#020617] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 🔹 Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-16"
        >
          Our <span className="text-[#2a74ff]">Projects</span>
        </motion.h2>

        {/* 🔹 Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["all", "edu", "brand", "design", "marketing"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#2a74ff] text-white border-[#2a74ff] scale-110 shadow-lg shadow-[#2a74ff]/40"
                  : "text-gray-300 border-gray-500 hover:border-[#2a74ff] hover:text-white"
              }`}
            >
              {filter === "all"
                ? "All Projects"
                : filter === "edu"
                ? "Educational Platforms"
                : filter === "brand"
                ? "Brand Websites"
                : filter === "design"
                ? "Graphic Design"
                : "Marketing & Ads"}
            </button>
          ))}
        </div>

        {/* 🔹 Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="wait">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border border-[#2a74ff30] hover:border-[#2a74ff80] 
                           rounded-2xl overflow-hidden p-4 hover:-translate-y-2 
                           hover:shadow-[0_0_25px_#2a74ff50] transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-56 object-cover rounded-xl opacity-90 group-hover:opacity-100 transition duration-500"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#4c8dff] transition-all duration-300">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 mb-4">
                    {p.desc.length > 80 ? p.desc.slice(0, 80) + "..." : p.desc}
                  </p>

                  {/* ✅ Read More Button */}
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="text-[#2a74ff] font-semibold hover:text-[#4c8dff] transition-all duration-300 underline"
                  >
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* 🔹 Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0b1124] rounded-2xl p-6 max-w-lg w-full shadow-lg border border-[#2a74ff]/40 relative"
            >
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-[#2a74ff] mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4">{selectedProject.desc}</p>
              <h4 className="text-[#2a74ff] font-semibold mb-2">
                Technologies Used:
              </h4>
              <ul className="flex flex-wrap gap-2 text-sm text-gray-400 mb-6">
                {selectedProject.tech.map((t: string, i: number) => (
                  <li
                    key={i}
                    className="bg-[#2a74ff]/10 border border-[#2a74ff]/30 px-3 py-1 rounded-full"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a74ff] hover:bg-[#1f5ddd] px-6 py-2 rounded-full text-white transition"
                >
                  🔗 View Live
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition"
                >
                  Close ✖
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
