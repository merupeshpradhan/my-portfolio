import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">

      <Image
        src="/projects/StopwatchTimer.png"
        alt="Timer App"
        width={600}
        height={400}
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">Timer App</h3>
        <p className="text-zinc-400 mt-2">
          A modern stopwatch and timer app.
        </p>
      </div>

    </div>
  );
}