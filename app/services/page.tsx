"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGlobe, FaPaintBrush, FaBullhorn } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={22} />,
      title: "Educational Platforms",
      desc: "Custom LMS platforms for teachers & academies to manage students, courses, and exams.",
      features: [
        "Course management (videos, quizzes).",
        "Dashboards for teachers & students.",
        "Payment gateway integration.",
        "Analytics & reports.",
      ],
      deliverables: [
        "Requirements analysis.",
        "Custom UI/UX design.",
        "LMS development.",
        "Admin training.",
      ],
    },
    {
      icon: <FaGlobe size={22} />,
      title: "Brand & Business Websites",
      desc: "Fast, elegant websites that turn visitors into loyal clients — optimized for SEO and conversions.",
      features: [
        "Responsive design.",
        "SEO optimization.",
        "Contact forms & analytics.",
        "CMS integration.",
      ],
      deliverables: [
        "Site map & copywriting.",
        "Full development.",
        "Hosting setup.",
        "Documentation.",
      ],
    },
    {
      icon: <FaPaintBrush size={22} />,
      title: "Graphic Design & Branding",
      desc: "From logos to full identity systems — we craft consistent, standout visuals for your brand.",
      features: [
        "Logo design & guidelines.",
        "Social media templates.",
        "Marketing materials.",
      ],
      deliverables: [
        "3 design concepts.",
        "Final logo pack.",
        "Full brand book.",
      ],
    },
    {
      icon: <FaBullhorn size={22} />,
      title: "Digital Marketing & Ads",
      desc: "We manage and optimize ad campaigns that drive measurable growth and engagement.",
      features: [
        "Content strategy & planning.",
        "Creative ad designs.",
        "Campaign setup.",
        "Performance tracking.",
      ],
      deliverables: [
        "KPI plan.",
        "A/B testing setup.",
        "Monthly reports.",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0a153a] via-[#050a25] to-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-14"
        >
          Our <span className="text-[#2a74ff]">Services</span>
        </motion.h2>

        {/* ✅ شبكة الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-gray-300">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-5 sm:p-6 border border-[#2a74ff30] rounded-xl
                         hover:border-[#2a74ff80] hover:shadow-[0_0_25px_#2a74ff30]
                         transition-all duration-300 hover:-translate-y-2
                         bg-[#0b1020]/40 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3 text-[#2a74ff] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#4c8dff]">
                  {service.title}
                </h3>
              </div>

              <p className="mb-4 text-sm leading-relaxed">{service.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <h4 className="text-[#2a74ff] font-semibold mb-1">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {service.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#2a74ff] font-semibold mb-1">
                    Deliverables
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {service.deliverables.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
