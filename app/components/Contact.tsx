import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

      <p className="text-center text-zinc-400 mb-12">
        Let's connect and build something amazing together 🚀
      </p>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-6 mb-16">

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

</div>

      {/* Contact Form */}
      <form
        action="https://formsubmit.co/merupeshpradhan@gmail.com"
        method="POST"
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
      </form>
    </section>
  );
}
