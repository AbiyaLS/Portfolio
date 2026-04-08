import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";

export default function Hero({ darkMode }) {
  const lightColors = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    button: "bg-orange-500 text-white hover:bg-orange-600",
  };

  const darkColors = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    button: "bg-orange-500 text-white hover:bg-orange-600",
  };

  const theme = darkMode ? darkColors : lightColors;

  return (
    <section
      id="home"
      className="pt-24 min-h-[85vh] flex items-center justify-center px-4 sm:px-6 md:px-20 scroll-mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl w-full">

        {/* LEFT SIDE */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* TAGLINE */}
          <p className="text-orange-500 font-medium text-xs sm:text-sm md:text-base">
            Crafting Scalable & Seamless Web Experiences
          </p>

          {/* NAME */}
          <motion.h1
            className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mt-2 leading-snug ${theme.textPrimary}`}
          >
            Hi, I’m Abiya L.S
          </motion.h1>

          {/* ROLE + LOCATION */}
          <motion.h2
            className={`text-base sm:text-lg md:text-2xl mt-2 font-semibold ${theme.textSecondary}`}
          >
            Full Stack (MERN) Developer from{" "}
            <span className="text-orange-500">Kerala, India</span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className={`mt-4 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0 ${theme.textSecondary}`}
          >
            I build scalable web applications with clean UI and powerful backend
            systems, delivering smooth and efficient user experiences.
          </motion.p>

          {/* BUTTON */}
          <a href="#projects">
            <motion.button
              className={`mt-5 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg font-medium ${theme.button}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center md:justify-end mt-6 md:mt-0"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={hero}
            alt="developer illustration"
            className="w-[180px] sm:w-[240px] md:w-[360px] lg:w-[420px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}