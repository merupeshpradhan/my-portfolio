"use client";

import { motion } from "framer-motion";
import { FaUser, FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-10 sm:py-28 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto relative z-10 w-full"
    >
      {/* 1. SECTION TITLE WITH GLOW ACCENT */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
      </div>

      {/* 2. MAIN LAYOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Story Block (Spans 6 blocks on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-500" />

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <FaUser className="text-cyan-400 text-lg drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]" />
            My Journey
          </h3>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-medium mb-4">
            I am a passionate Full Stack Developer focused on building
            high-performance web applications. I love turning complex logic into
            beautiful, user-friendly layouts that look amazing on any device.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-medium">
            With a solid theoretical foundation in computer science and
            extensive practical stack experience, I connect clean server
            architectures with responsive user interfaces.
          </p>
        </motion.div>

        {/* Right Column: Premium Education Timeline (Spans 6 blocks on desktop) */}
        <div className="lg:col-span-6 flex flex-col gap-5 w-full">
          {/* Header for Education Timeline */}
          <div className="flex items-center gap-3 px-2 mb-1">
            <FaGraduationCap className="text-indigo-400 text-xl" />
            <h3 className="text-lg font-bold text-white tracking-wide">
              Education
            </h3>
          </div>

          {/* Timeline Degree Card 1 - MCA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-5 rounded-2xl bg-[#05050a]/30 backdrop-blur-md border border-white/5 relative hover:border-cyan-500/20 transition-all group shadow-lg"
          >
            {/* Year Tag on top right */}
            <span className="absolute top-4 right-5 text-[10px] sm:text-xs font-bold tracking-wider text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-800/30">
              2022 – 2024
            </span>

            <h4 className="text-base font-black text-white group-hover:text-cyan-400 transition-colors max-w-[70%]">
              Master of Computer Applications (MCA)
            </h4>
            <p className="text-sm font-semibold text-slate-300 mt-2">
              Silicon University
            </p>
            <p className="text-xs text-slate-500 mt-0.5">Bhubaneswar, India</p>
          </motion.div>

          {/* Timeline Degree Card 2 - BSc */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-5 rounded-2xl bg-[#05050a]/30 backdrop-blur-md border border-white/5 relative hover:border-indigo-500/20 transition-all group shadow-lg"
          >
            {/* Year Tag on top right */}
            <span className="absolute top-4 right-5 text-[10px] sm:text-xs font-bold tracking-wider text-indigo-400 bg-indigo-950/40 px-2.5 py-1 rounded-md border border-indigo-800/30">
              2019 – 2022
            </span>

            <h4 className="text-base font-black text-white group-hover:text-indigo-400 transition-colors max-w-[70%]">
              B.Sc. in Computer Science
            </h4>
            <p className="text-sm font-semibold text-slate-300 mt-2">
              Government Autonomous College
            </p>
            <p className="text-xs text-slate-500 mt-0.5">Angul, India</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
