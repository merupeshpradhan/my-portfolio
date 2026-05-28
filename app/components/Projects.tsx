"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Chronos Engine (Timer)",
    desc: "A futuristic dark theme Stopwatch + Timer application with animated circular progress indicators.",
    image: "/projects/StopwatchTimer.png",
    live: "https://timer.rupeshpradhan.com",
    github: "https://github.com/merupeshpradhan/Stopwatch-and-Timer-App",
  },
  {
    title: "Tic Tac Toe Grid",
    desc: "Classic interactive Tic Tac Toe game built with vector layouts and smart local state machines.",
    image: "/projects/TicTacToe.png",
    live: "http://tictactoe.rupeshpradhan.com",
    github: "https://github.com/merupeshpradhan/Tic-Tac-Toe",
  },
  {
    title: "Location Tracker",
    desc: "Real-time location tracking app with live map updates, accurate geolocation, and interactive route visualization.",
    image: "/projects/locationtracker.png",
    live: "https://locationtracker.rupeshpradhan.com",
    github: "https://github.com/merupeshpradhan/Location-Tracker",
  },
  {
    title: "1 Million Checkboxes",
    desc: "Scalable real-time checkbox application built with WebSockets, Redis Pub/Sub, authentication, and optimized state synchronization.",
    image: "/projects/WebCheckbox.png",
    live: "https://webcheckbox.rupeshpradhan.com",
    github: "https://github.com/merupeshpradhan/1-Million-Checkboxes",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 overflow-hidden text-white relative z-10 w-full"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Glowing Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        </div>

        {/* Endless Moving Carousel Track with smooth fade edges */}
        <div className="overflow-hidden relative w-full select-none [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex gap-6 sm:gap-8 w-max animate-[scroll_35s_linear_infinite] hover:[animation-play-state:paused] py-4">
            {/* Multiplying the array to create a completely seamless infinite scroll loop */}
            {[...projects, ...projects, ...projects, ...projects].map(
              (project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  desc={project.desc}
                  image={project.image}
                  live={project.live}
                  github={project.github}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
