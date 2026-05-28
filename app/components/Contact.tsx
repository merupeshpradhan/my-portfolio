"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto relative z-10 w-full"
    >
      {/* 1. GLOWING SECTION TITLE */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>
        <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mt-5 text-sm sm:text-base font-medium max-w-md mx-auto leading-relaxed"
        >
          Let's connect and build something amazing together 🚀
        </motion.p>
      </div>

      {/* 2. PREMIUM SOCIAL MEDIA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-4 sm:gap-6 mb-16"
      >
        <a
          href="https://github.com/merupeshpradhan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/merupeshpradhan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 text-gray-400 hover:text-indigo-400 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://x.com/RUPESHP94337497"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 hover:border-fuchsia-500/30 text-gray-400 hover:text-fuchsia-400 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <FaXTwitter size={24} />
        </a>
      </motion.div>

      {/* 3. TRANS-LUCENT GLASS FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="p-6 sm:p-10 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 shadow-2xl relative overflow-hidden group w-full"
      >
        {/* Soft interactive backlight mask effect */}
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/5 transition-colors duration-500" />

        <form
          action="https://formsubmit.co/merupeshpradhan@gmail.com"
          method="POST"
          className="flex flex-col gap-5 sm:gap-6 relative z-10"
        >
          {/* Top Form Input Row: Split Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
              />
            </div>
          </div>

          {/* Textarea Input Element */}
          <div className="flex flex-col gap-2">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
            />
          </div>

          {/* Glowing Animated Submit Action Trigger */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black font-black px-8 py-4 rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:scale-102 active:scale-98 cursor-pointer"
            >
              Send Message
              <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
