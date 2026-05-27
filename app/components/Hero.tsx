"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white px-6 pt-20 overflow-hidden">
      {/* Main Responsive Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10 w-full py-12">
        {/* Left Column: Typography Content (Spans 7 blocks on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 flex flex-col text-center md:text-left items-center md:items-start"
        >
          {/* Top Mini Cyber Tag */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-bold tracking-widest uppercase text-cyan-400 mb-6">
            <FaCode className="animate-pulse" /> Welcome to my space
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Rupesh
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-xl font-medium">
            Full Stack Developer passionate about building modern web
            applications using <span className="text-white">React</span>,{" "}
            <span className="text-white">Next.js</span>,{" "}
            <span className="text-white">Node.js</span>, and{" "}
            <span className="text-white">MongoDB</span>.
          </p>

          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-103 active:scale-98"
          >
            Explore My Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
          </a>
        </motion.div>

        {/* Right Column: Giant Glow Frame (Spans 5 blocks on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 flex justify-center relative"
        >
          {/* Giant Background Aura Shield */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60" />

          {/* Framed Glass Showcase Box */}
          <div className="relative p-3 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl group">
            <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[320px] lg:h-[320px] rounded-[2rem] overflow-hidden relative">
              <Image
                src="/projects/profile.jpg"
                alt="Rupesh Pradhan"
                width={220}
                height={220}
                priority
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
