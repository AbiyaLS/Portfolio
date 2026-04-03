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
      id="home"   // ✅ important for navbar scroll
      className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 md:px-20 scroll-mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center max-w-6xl w-full">

        {/* LEFT SIDE */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${theme.textPrimary}`}
          >
            Hi, I’m Abiya L.S
          </motion.h1>

          <motion.h2
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 font-semibold ${theme.textSecondary}`}
          >
            I am a{" "}
            <span className="text-orange-500">
              Full Stack Developer (MERN)
            </span>
          </motion.h2>

          <motion.p
            className={`mt-5 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0 ${theme.textSecondary}`}
          >
            I build modern web applications with great user experience using
            React, Node.js, and Tailwind CSS.
          </motion.p>

          <motion.button
            className={`mt-6 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg font-medium ${theme.button}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center md:justify-end mt-10 md:mt-0"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={hero}
            alt="developer illustration"
            className="w-[220px] sm:w-[280px] md:w-[380px] lg:w-[450px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}