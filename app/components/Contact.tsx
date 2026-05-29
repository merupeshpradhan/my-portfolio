"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";

export default function Contact() {
  const onSubmit = async (event: any) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // VALIDATION
    if (!name) {
      toast.error("Please enter your name");
      return;
    }

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!message) {
      toast.error("Please enter your message");
      return;
    }

    // LOADING TOAST
    toast.loading("Sending message...", {
      id: "contact",
    });

    // FORM DATA
    const formData = new FormData(form);

    formData.append("access_key", "43ba2bb9-140f-46a7-9e3e-91b1cee20c0b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀", {
          id: "contact",
        });

        form.reset();
      } else {
        toast.error("Something went wrong ❌", {
          id: "contact",
        });
      }
    } catch (error) {
      toast.error("Network error ❌", {
        id: "contact",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-28 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto relative z-10 w-full"
    >
      {/* SECTION TITLE */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        <div className="w-12 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mt-5 text-sm sm:text-base font-medium max-w-md mx-auto leading-relaxed"
        >
          Let's connect and build something amazing together 🚀
        </motion.p>
      </div>

      {/* SOCIAL BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-4 sm:gap-6 mb-16"
      >
        <a
          href="https://github.com/merupeshpradhan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/merupeshpradhan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 hover:border-indigo-500/30 text-gray-400 hover:text-indigo-400 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://x.com/RUPESHP94337497"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 hover:border-fuchsia-500/30 text-gray-400 hover:text-fuchsia-400 hover:scale-110 transition-all duration-300 shadow-xl"
        >
          <FaXTwitter size={24} />
        </a>
      </motion.div>

      {/* CONTACT FORM */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="p-6 sm:p-10 rounded-2xl bg-[#05050a]/40 backdrop-blur-md border border-white/5 shadow-2xl relative overflow-hidden group w-full"
      >
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/5 transition-colors duration-500" />

        <form
          onSubmit={onSubmit}
          noValidate
          className="flex flex-col gap-5 sm:gap-6 relative z-10"
        >
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
          />

          {/* SUBMIT BUTTON */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black font-black px-8 py-4 rounded-xl text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] cursor-pointer"
            >
              Send Message
              <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
