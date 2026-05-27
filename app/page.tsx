"use client";
import { useEffect, useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- Different State Setup ---
    let stars: Array<{
      x: number;
      y: number;
      r: number;
      alpha: number;
      speed: number;
    }> = [];
    let meteors: Array<{
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
    }> = [];

    const starCount = 80;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Generate Twinkling Stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: 0.01 + Math.random() * 0.02,
      });
    }

    // Generate Initial Meteors
    for (let i = 0; i < 2; i++) {
      meteors.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height / 3),
        len: Math.random() * 80 + 40,
        speed: Math.random() * 4 + 3,
        angle: Math.PI / 4, // diagonal fall
      });
    }

    // --- Core Master Animation Loop ---
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. DRAW GLOWING SPACE BACKGROUND (Nebula)
      let gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        10,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width,
      );
      gradient.addColorStop(0, "rgba(79, 70, 229, 0.06)"); // Deep Purple
      gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.04)"); // Deep Cyan
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. DRAW TWINKLING STARS
      stars.forEach((s) => {
        // Change brightness smoothly
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0.2) {
          s.speed = -s.speed;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fill();
      });

      // 3. DRAW FALLING METEORS
      meteors.forEach((m) => {
        ctx.beginPath();
        // Create tail gradient
        let meteorGlow = ctx.createLinearGradient(
          m.x,
          m.y,
          m.x - Math.cos(m.angle) * m.len,
          m.y - Math.sin(m.angle) * m.len,
        );
        meteorGlow.addColorStop(0, "rgba(34, 211, 238, 0.8)"); // Bright Cyan head
        meteorGlow.addColorStop(1, "transparent"); // Fading tail

        ctx.strokeStyle = meteorGlow;
        ctx.lineWidth = 1.5;
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(
          m.x - Math.cos(m.angle) * m.len,
          m.y - Math.sin(m.angle) * m.len,
        );
        ctx.stroke();

        // Move meteor
        m.x += m.speed;
        m.y += m.speed;

        // Reset if it goes off screen
        if (m.x > canvas.width || m.y > canvas.height) {
          m.x = Math.random() * (canvas.width / 2);
          m.y = -50;
          m.len = Math.random() * 80 + 40;
          m.speed = Math.random() * 4 + 3;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main className="relative bg-[#05050a] text-white min-h-screen overflow-x-hidden select-none">
      {/* New Space Nebula Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      />

      {/* Structured Sections Layer */}
      <div className="relative z-10 w-full flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
