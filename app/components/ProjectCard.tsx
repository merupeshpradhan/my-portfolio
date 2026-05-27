"use client";

import { motion } from "framer-motion";

import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  image: string;
  live: string;
  github: string;
};

export default function ProjectCard({
  title,
  desc,
  image,
  live,
  github,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden"
    >
      <div className="relative w-full h-56">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-zinc-400 mt-2">{desc}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href={live}
            target="_blank"
            className="px-4 py-2 bg-white text-black rounded-lg font-medium"
          >
            Live
          </a>

          <a
            href={github}
            target="_blank"
            className="px-4 py-2 border border-zinc-700 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
