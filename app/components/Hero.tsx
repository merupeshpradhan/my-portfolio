import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-4">
      <Image
        src="/projects/profile.jpg"
        alt="Rupesh Pradhan"
        width={150}
        height={150}
        className="rounded-full object-cover"
      />
      <h1>Hi, I'm Rupesh 👋</h1>

      <p className="mt-6 text-zinc-400 text-center max-w-2xl text-lg">
        Full Stack Developer passionate about building modern web applications
        using React, Next.js, Node.js, and MongoDB.
      </p>

      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
      >
        View Projects
      </a>
    </section>
  );
}
