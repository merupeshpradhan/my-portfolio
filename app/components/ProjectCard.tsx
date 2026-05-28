"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  title: string;
  desc: string;
  image: string;
  live?: string;
  github?: string;
};

export default function ProjectCard({
  title,
  desc,
  image,
  live,
  github,
}: Props) {
  return (
    <motion.div className="w-[240px] sm:w-[280px] lg:w-[350px] bg-[#05050a]/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 shadow-2xl shrink-0 flex flex-col justify-between">
      <div>
        {/* Aspect Ratio Locked Image Box */}
        <div className="relative w-full h-40 sm:h-48 lg:h-56 overflow-hidden bg-white/5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 350px"
          />

          {/* Premium Glass Action Overlay on Hover */}
          <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 hover:scale-105 transition-all"
              >
                Live <FaExternalLinkAlt className="text-[10px]" />
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all"
              >
                GitHub <FaGithub className="text-sm" />
              </a>
            )}
          </div>
        </div>

        {/* Text Area */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-wide">
            {title}
          </h3>

          <p className="text-gray-400 mt-2.5 text-xs sm:text-sm leading-relaxed font-medium">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
