import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, MessageCircle } from "lucide-react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import whatsapp from "../assets/whatsapp.png";
import cv from "../assets/AbiyaLS.pdf"

export default function Contact({ darkMode = true }) {
  const theme = darkMode
    ? {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        input: "bg-white/10 text-white placeholder-gray-400",
        accent: "bg-orange-500 hover:bg-orange-600",
      }
    : {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
        input: "bg-black/5 text-black placeholder-gray-500",
        accent: "bg-orange-600 hover:bg-orange-700",
      };

  return (
    <section id="contact" className="min-h-[80vh] px-6 md:px-20 py-14 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${theme.textPrimary}`}>
            Contact Me
          </h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500 text-xl" />
              <p className={theme.textSecondary}>abiyals9876@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-orange-500 text-xl" />
              <p className={theme.textSecondary}>7736581960</p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/abiyals/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-8 h-8 cursor-pointer hover:scale-110 transition"
                />
              </a>
              {/* <Linkedin className="cursor-pointer text-blue-500 hover:scale-110 transition" /> */}
              {/* <a
                href="https://github.com/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-8 h-8 cursor-pointer hover:scale-110 transition"
                />
              </a> */}
              <a
                href="https://wa.me/917736581960"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className="w-8 h-8 cursor-pointer hover:scale-110 transition"
                />
              </a>
            </div>
          </div>

          {/* DOWNLOAD CV */}
          <a
            href={cv}
            download
            className={`inline-block mt-8 px-6 py-3 rounded-lg text-white font-medium ${theme.accent}`}
          >
            Download CV
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className={`w-full p-3 rounded-md outline-none ${theme.input}`}
          />

          <input
            type="email"
            placeholder="Your Email"
            className={`w-full p-3 rounded-md outline-none ${theme.input}`}
          />

          <textarea
            rows="5"
            placeholder="your message"
            className={`w-full p-3 rounded-md outline-none ${theme.input}`}
          />

          <button
            type="submit"
            className={`px-6 py-3 rounded-lg text-white font-medium ${theme.accent}`}
          >
            submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}
