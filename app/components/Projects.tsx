export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto text-white"
    >
      <h2 className="text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Project 1 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:scale-[1.02] transition">

          <h3 className="text-2xl font-semibold">
            Timer App
          </h3>

          <p className="mt-4 text-zinc-400">
            A modern stopwatch and timer application built using
            React, TypeScript, and Tailwind CSS.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="https://timer.rupeshpradhan.com"
              target="_blank"
              className="px-4 py-2 bg-white text-black rounded-lg"
            >
              Live
            </a>

            <a
              href="https://github.com/merupeshpradhan"
              target="_blank"
              className="px-4 py-2 border border-zinc-700 rounded-lg"
            >
              GitHub
            </a>
          </div>

        </div>

        {/* Project 2 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:scale-[1.02] transition">

          <h3 className="text-2xl font-semibold">
            Tic Tac Toe
          </h3>

          <p className="mt-4 text-zinc-400">
            A classic Tic Tac Toe game built using React and TypeScript.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="https://tictactoe.rupeshpradhan.com/"
              target="_blank"
              className="px-4 py-2 bg-white text-black rounded-lg"
            >
              Live
            </a>

            <a
              href="https://github.com/merupeshpradhan/Tic-Tac-Toe-Game"
              target="_blank"
              className="px-4 py-2 border border-zinc-700 rounded-lg"
            >
              GitHub
            </a>
          </div>

        </div>

        {/* Project 3 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:scale-[1.02] transition">

          <h3 className="text-2xl font-semibold">
            PicNote
          </h3>

          <p className="mt-4 text-zinc-400">
            A modern note-taking application with image upload support.
          </p>

          <div className="flex gap-4 mt-6">
            {/* <a
              href="#"
              className="px-4 py-2 bg-white text-black rounded-lg"
            >
              Live
            </a> */}

            <a
              href="https://github.com/merupeshpradhan/PicNote"
              target="_blank"
              className="px-4 py-2 border border-zinc-700 rounded-lg"
            >
              GitHub
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}