"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Git",
    "GitHub",
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 max-w-5xl mx-auto text-white"
    >
      <h2 className="text-4xl font-bold mb-8">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-3 rounded-xl bg-zinc-900 border border-zinc-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
