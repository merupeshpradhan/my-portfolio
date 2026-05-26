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
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
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
    </section>
  );
}
