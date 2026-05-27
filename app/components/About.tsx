"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 max-w-5xl mx-auto text-white"
    >
      <h2 className="text-4xl font-bold mb-8">About Me</h2>

      <p className="text-zinc-400 leading-8 text-lg">
        I am a passionate Full Stack Developer currently learning and building
        modern web applications using React, Next.js, Node.js, Express, MongoDB,
        and Tailwind CSS.
      </p>
    </motion.section>
  );
}
