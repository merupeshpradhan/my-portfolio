"use client";

export default function Footer() {
  // Get the current year automatically so you never have to change it
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#05050a]/40 backdrop-blur-md border-t border-white/5 relative z-10">
      {/* 
        Container padding changes based on device sizes:
        - Mobile: px-6 py-8
        - Laptop/Desktop: sm:px-12 sm:py-10
      */}
      <div className="max-w-6xl mx-auto px-6 py-8 sm:px-12 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Logo Brand text layout with soft cyber neon glow */}
        <div className="text-center md:text-left">
          <span className="text-base font-black tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            RUPESH PRADHAN
          </span>
          <p className="text-xs text-gray-500 tracking-wide mt-1">
            Full Stack Web Architect
          </p>
        </div>

        {/* 
          Middle: Quick Navigation Links
          - Stacks vertically in a neat line on Mobile phones.
          - Opens up into a clean row layout on Tablets and Laptops (sm:flex-row).
        */}
        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs font-semibold tracking-wider uppercase text-gray-400">
          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side: Copyright Text */}
        <div className="text-xs text-gray-500 font-medium tracking-wide text-center md:text-right">
          &copy; {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
