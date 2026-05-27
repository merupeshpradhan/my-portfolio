"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/projects/profile.jpg"
          alt="Rupesh Pradhan"
          width={150}
          height={150}
          priority
          className="rounded-tl-2xl object-cover w-[150px] h-[150px]"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl font-bold mt-6"
      >
        Hi, I'm Rupesh 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 text-zinc-400 text-center max-w-2xl text-lg"
      >
        Full Stack Developer passionate about building modern web applications
        using React, Next.js, Node.js, and MongoDB.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
      >
        View Projects
      </motion.a>
    </section>
  );
}
