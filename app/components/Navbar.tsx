"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaTerminal } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#05050a]/40 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      {/* Top Border Neon Light Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo with Cyber Tag */}
        <a href="#" className="group relative flex items-center gap-2 sm:gap-3">
          {/* Neon Line */}
          <div className="absolute -left-3 sm:-left-4 h-8 sm:h-10 w-[2px] rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />

          {/* Logo */}
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.35)] group-hover:scale-110 transition duration-300">
            <div className="absolute inset-[2px] rounded-xl bg-[#05050a]" />

            <span className="relative text-white font-black text-xs tracking-widest">
              RP
            </span>
          </div>

          {/* Name */}
          <div className="relative">
            <h1 className="text-white text-sm sm:text-base lg:text-lg font-black tracking-[0.12em] sm:tracking-[0.18em] leading-none">
              RUPESH
            </h1>

            <p className="mt-1 text-[7px] sm:text-[8px] uppercase tracking-[0.18em] sm:tracking-[0.3em] text-zinc-500 group-hover:text-cyan-400 transition duration-300">
              Full Stack Engineer
            </p>
          </div>

          {/* Hover Shine */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition duration-1000" />
          </div>
        </a>

        {/* Desktop Navigation Links with Animated Bottom Lines */}
        <ul className="hidden md:flex gap-10 text-xs font-bold tracking-widest uppercase text-gray-400">
          <li className="relative group py-2">
            <a
              href="#about"
              className="group-hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 rounded-full group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#22d3ee]" />
          </li>
          <li className="relative group py-2">
            <a
              href="#skills"
              className="group-hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 rounded-full group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#22d3ee]" />
          </li>
          <li className="relative group py-2">
            <a
              href="#projects"
              className="group-hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 rounded-full group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#22d3ee]" />
          </li>
          <li className="relative group py-2">
            <a
              href="#contact"
              className="group-hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 rounded-full group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#22d3ee]" />
          </li>
        </ul>

        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="text-xs font-bold tracking-widest uppercase bg-white/5 hover:bg-cyan-400 hover:text-black border border-white/5 hover:border-cyan-400 px-4 py-2 rounded-lg transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-gray-300 hover:text-white transition-colors p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Hover Blocks */}
      {isOpen && (
        <ul className="md:hidden bg-[#05050a]/98 backdrop-blur-xl border-b border-white/5 flex flex-col gap-2 p-4 text-center text-gray-400 text-sm font-semibold tracking-wider uppercase">
          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 hover:bg-white/5 block py-3 rounded-xl transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 hover:bg-white/5 block py-3 rounded-xl transition-all"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 hover:bg-white/5 block py-3 rounded-xl transition-all"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 hover:bg-white/5 block py-3 rounded-xl transition-all"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
