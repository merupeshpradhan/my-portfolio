"use client";

import { motion, useAnimationFrame, useMotionValue, wrap } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { useRef } from "react";

const projects = [
  {
    title: "Chronos Engine (Timer)",
    desc: "A futuristic dark theme Stopwatch + Timer application with animated circular progress indicators.",
    image: "/projects/StopwatchTimer.png",
    live: "",
    github: "https://github.com/merupeshpradhan/Stopwatch-and-Timer-App",
  },
  {
    title: "Tic Tac Toe Grid",
    desc: "Classic interactive Tic Tac Toe game built with vector layouts and smart local state machines.",
    image: "/projects/TicTacToe.png",
    live: "",
    github: "https://github.com/merupeshpradhan/Tic-Tac-Toe",
  },
  {
    title: "Location Tracker",
    desc: "Real-time location tracking app with live map updates, accurate geolocation, and interactive route visualization.",
    image: "/projects/locationtracker.png",
    live: "",
    github: "https://github.com/merupeshpradhan/Location-Tracker",
  },
  {
    title: "1 Million Checkboxes",
    desc: "Scalable real-time checkbox application built with WebSockets, Redis Pub/Sub, authentication, and optimized state synchronization.",
    image: "/projects/WebCheckbox.png",
    live: "",
    github: "https://github.com/merupeshpradhan/1-Million-Checkboxes",
  },
];

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const isHovered = useRef(false);

  // Triple the array to create a seamless loop structure
  const endlessProjects = [...projects, ...projects, ...projects];

  useAnimationFrame(() => {
    // Stop the auto-movement if the user drags or hovers
    if (isDragging.current || isHovered.current) return;

    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth;
      const baseWidth = totalWidth / 3;

      // Continuous auto slow-crawl movement
      let currentX = x.get() - 1.1;

      // Mathematically wraps values seamlessly between -baseWidth and 0
      const wrappedX = wrap(-baseWidth, 0, currentX);
      x.set(wrappedX);
    }
  });

  // Central loop engine that forces position bounds
  const enforceLoopBounds = () => {
    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth;
      const baseWidth = totalWidth / 3;
      const currentX = x.get();

      // Lock the value inside the middle repetition window
      const wrappedDragX = wrap(-baseWidth * 2, -baseWidth, currentX);
      x.set(wrappedDragX);
    }
  };

  return (
    <section
      id="projects"
      className="py-10 sm:py-28 overflow-hidden text-white relative z-10 w-full"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        </div>

        {/* Outer view container window */}
        <div
          className="overflow-hidden relative w-full cursor-grab active:cursor-grabbing select-none [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
          onMouseEnter={() => {
            isHovered.current = true;
          }}
          onMouseLeave={() => {
            isHovered.current = false;
          }}
        >
          {/* Truly Unlimited Moving Track */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            onDragStart={() => {
              isDragging.current = true;
            }}
            onDrag={enforceLoopBounds}
            onDragEnd={() => {
              isDragging.current = false;
            }}
            // This event catches fast momentum glides so they don't break the layout loop
            onUpdate={enforceLoopBounds}
            dragTransition={{ power: 0.05, timeConstant: 300 }}
            className="flex gap-6 sm:gap-8 py-4 w-max pr-6 sm:pr-8"
          >
            {endlessProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
                image={project.image}
                live={project.live}
                github={project.github}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
