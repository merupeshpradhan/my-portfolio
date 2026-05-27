"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Timer App",
    desc: "Stopwatch and timer app built with React.",
    image: "/projects/StopwatchTimer.png",
    live: "https://timer.rupeshpradhan.com",
    github: "https://github.com/merupeshpradhan/Stopwatch-and-Timer-App",
  },

  {
    title: "Tic Tac Toe",
    desc: "Classic Tic Tac Toe game built with React.",
    image: "/projects/TicTacToe.png",
    live: "http://tictactoe.rupeshpradhan.com",
    github: "https://github.com/merupeshpradhan/tic-tac-toe",
  },

  {
    title: "Tic Tac Toe",
    desc: "Classic Tic Tac Toe game built with React.",
    image: "/projects/TicTacToe.png",
    live: "http://tictactoe.rupeshpradhan.com",
    github: "https://github.com/merupeshpradhan/tic-tac-toe",
  },
  {
    title: "Tic Tac Toe",
    desc: "Classic Tic Tac Toe game built with React.",
    image: "/projects/TicTacToe.png",
    live: "http://tictactoe.rupeshpradhan.com",
    github: "https://github.com/merupeshpradhan/tic-tac-toe",
  },
  {
    title: "Tic Tac Toe",
    desc: "Classic Tic Tac Toe game built with React.",
    image: "/projects/TicTacToe.png",
    live: "http://tictactoe.rupeshpradhan.com",
    github: "https://github.com/merupeshpradhan/tic-tac-toe",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 overflow-hidden text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        {/* Auto Moving Slider */}
        <div className="overflow-hidden">
          <div className="flex gap-8 w-max animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
                image={project.image}
                live={project.live}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
