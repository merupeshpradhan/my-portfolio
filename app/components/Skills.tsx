"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLayerGroup,
  FaServer,
  FaTools,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
} from "react-icons/si";

// Grouping skills into functional categories
const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: <FaLayerGroup className="text-cyan-400" />,
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
    ],
  },
  {
    title: "Backend & Database",
    icon: <FaServer className="text-indigo-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-emerald-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "REST APIs", icon: <FaServer className="text-teal-400" /> },
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: <FaTools className="text-fuchsia-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto relative z-10 w-full"
    >
      {/* 1. SECTION TITLE WITH GLOW ACCENT */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          My Tech Stack
        </h2>
        <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
      </div>

      {/* 2. RESPONSIVE CATEGORY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="p-6 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 shadow-2xl relative overflow-hidden group hover:border-white/10 transition-all duration-300"
          >
            {/* Soft Ambient Corner Glow inside each block */}
            <div className="absolute -right-12 -top-12 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-cyan-500/5 transition-colors" />

            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
              <div className="text-xl p-2 bg-white/5 rounded-lg">
                {category.icon}
              </div>
              <h3 className="font-bold text-white tracking-wide text-sm sm:text-base">
                {category.title}
              </h3>
            </div>

            {/* Tags Grid Layout inside the card */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 text-xs font-semibold text-gray-300 hover:text-white transition-all duration-200 hover:scale-102 cursor-default"
                >
                  <span className="text-sm shrink-0">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
