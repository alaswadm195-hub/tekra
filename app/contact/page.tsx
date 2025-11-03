"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const sendToTelegram = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    setPhoneError("");

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.message.value.trim();

    // ✅ Validate phone number
    const phoneRegex = /^[0-9+ ]{8,}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("⚠️ Please enter a valid phone number (digits only).");
      setLoading(false);
      return;
    }

    const token = "8289636873:AAHnWeEmTXfJfmTq28d9hXXNqT7ZimN6f8g";
    const chatId = "1673014288";

    const text = `
📩 New Message from TEKRA Website
👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
💬 Message: ${message}
`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      if (res.ok) {
        setStatusMessage("✅ Message sent successfully!");
      } else {
        setStatusMessage("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatusMessage("⚠️ Network error. Please try again.");
    }

    e.target.reset();
    setLoading(false);
  };

  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-br from-[#0a153a] via-[#050a25] to-[#020617] text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-16"
        >
          Get <span className="text-[#2a74ff]">In Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ✅ Contact Form */}
          <form
            onSubmit={sendToTelegram}
            className="bg-[#0b1128]/70 p-8 rounded-2xl shadow-lg border border-[#2a74ff30] hover:border-[#2a74ff80] transition-all duration-300"
          >
            <div className="grid gap-6">
              <div>
                <label className="block text-sm mb-2 text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-[#050a25] text-white border border-gray-700 focus:border-[#2a74ff] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-[#050a25] text-white border border-gray-700 focus:border-[#2a74ff] outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  pattern="[0-9+ ]*"
                  className={`w-full p-3 rounded-lg bg-[#050a25] text-white border ${
                    phoneError ? "border-red-500" : "border-gray-700"
                  } focus:border-[#2a74ff] outline-none`}
                  required
                />
                {phoneError && (
                  <p className="text-red-400 text-xs mt-1">{phoneError}</p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">Your Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-lg bg-[#050a25] text-white border border-gray-700 focus:border-[#2a74ff] outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#2a74ff] hover:bg-[#1f5ddd] py-3 rounded-full font-semibold transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: statusMessage ? 1 : 0, y: statusMessage ? 0 : 10 }}
                transition={{ duration: 0.4 }}
                className={`text-sm mt-3 text-center ${
                  statusMessage.includes("✅")
                    ? "text-green-400"
                    : statusMessage.includes("❌")
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {statusMessage}
              </motion.p>
            </div>
          </form>

          {/* ✅ Contact Info */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-[#2a74ff]">
              Let’s Build Something Great Together
            </h3>
            <p className="text-gray-300 max-w-md">
              Have a project in mind? We’d love to hear from you.
            </p>

            <div className="flex flex-col gap-4 mt-6 text-gray-300">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#2a74ff]" />
                <span>trkra2510@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#2a74ff]" />
                <span>+20 127 630 1996</span>
              </div>
            </div>

            {/* ✅ Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.facebook.com/share/1AHPcrFPex/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2a74ff50] text-[#2a74ff] hover:bg-[#2a74ff] hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/tekra.am?igsh=MXRqajJzZ2Nxb2k1Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2a74ff50] text-[#2a74ff] hover:bg-[#2a74ff] hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/tekra-company-4686a1395"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2a74ff50] text-[#2a74ff] hover:bg-[#2a74ff] hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
