import React from "react";
import { motion } from "framer-motion";
import  hero  from "../assests/hero.png"

export default function Hero({ darkMode }) {
  const lightColors = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    button:
      "bg-orange-500 text-white hover:bg-orange-600",
  };

  const darkColors = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    button:
      "bg-orange-500 text-white hover:bg-orange-600",
  };

  const theme = darkMode ? darkColors : lightColors;

  return (
   <section className="min-h-[90vh] flex items-center justify-center px-6 md:px-20">
  <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

    {/* LEFT SIDE */}
    <div className="text-center md:text-left">
      <motion.h1
        className={`text-4xl md:text-6xl font-bold leading-tight ${theme.textPrimary}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Abiya L.S
      </motion.h1>

      <motion.h2
        className={`text-xl md:text-3xl mt-4 font-semibold ${theme.textSecondary}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        I am a{" "}
        <span className="text-orange-500">
          Full Stack Developer (MERN)
        </span>
      </motion.h2>

      <motion.p
        className={`mt-5 max-w-xl mx-auto md:mx-0 ${theme.textSecondary}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I build modern web applications with great user experience using
        React, Node.js, and Tailwind CSS.
      </motion.p>

      <motion.button
        className={`mt-7 px-6 py-3 rounded-lg font-medium ${theme.button}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Projects
      </motion.button>
    </div>

    {/* RIGHT SIDE */}
    <motion.div
      className="flex justify-center md:justify-end mt-15"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={hero}
        alt="developer illustration"
        className="w-[280px] md:w-[420px] object-contain md:[500px]"
      />
    </motion.div>

  </div>
</section>
  );
}