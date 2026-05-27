"use client";

import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 max-w-3xl mx-auto text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-zinc-400 mb-12"
      >
        Let's connect and build something amazing together 🚀
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-6 mb-16"
      >
        <a
          href="https://github.com/merupeshpradhan"
          target="_blank"
          className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:scale-110 transition"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/merupeshpradhan"
          target="_blank"
          className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:scale-110 transition"
        >
          <FaLinkedin size={28} />
        </a>

        <a
          href="https://x.com/RUPESHP94337497"
          target="_blank"
          className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:scale-110 transition"
        >
          <FaXTwitter size={28} />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        action="https://formsubmit.co/merupeshpradhan@gmail.com"
        method="POST"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 outline-none"
        />

        <button
          type="submit"
          className="px-6 py-4 bg-white text-black rounded-xl font-semibold hover:scale-[1.02] transition"
        >
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
}
