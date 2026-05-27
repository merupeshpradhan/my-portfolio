"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      transition={{ duration: 0.3 }}
      className="max-w-[350px] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group"
    >

      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">

          {/* Live Button */}
          {live && (
            <a
              href={live}
              target="_blank"
              className="px-4 py-2 bg-white text-black rounded-lg font-semibold"
            >
              Live
            </a>
          )}

          {/* GitHub Button */}
          {github && (
            <a
              href={github}
              target="_blank"
              className="px-4 py-2 border border-white text-white rounded-lg font-semibold"
            >
              GitHub
            </a>
          )}

        </div>
      </div>

      {/* Text */}
      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-zinc-400 mt-3 leading-7">
          {desc}
        </p>

      </div>
    </motion.div>
  );
}