import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textActive: "text-orange-600",
  };

  const darkColors = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textActive: "text-orange-400",
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 w-[95%] max-w-4xl">
      
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex-1 flex items-center justify-between 
                   bg-white/10 dark:bg-black/15 
                   backdrop-blur-lg 
                   px-5 py-3 
                   rounded-full 
                   shadow-md border border-white/10
                   ${darkMode ? "shadow-blue-950" : "shadow-orange-400"}`}
      >

        {/* Logo */}
        <span className={`text-lg font-bold ${colors.textPrimary}`}>
          Portfolio
        </span>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
            >
              <motion.span
                className={`font-medium transition-colors duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? colors.textActive
                    : `${colors.textSecondary} hover:text-orange-500`
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.span>
            </a>
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-5 h-[2px] bg-white"></span>
          <span className="w-5 h-[2px] bg-white"></span>
          <span className="w-5 h-[2px] bg-white"></span>
        </button>
      </motion.nav>

      {/* 🌙 Toggle Button OUTSIDE */}
      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center 
                   w-10 h-10 
                   rounded-full 
                   bg-white/10 dark:bg-black/20 
                   backdrop-blur-lg 
                   border border-white/10 
                   shadow-lg hover:scale-105 transition"
      >
        {darkMode ? <Moon/> : <Sun className="text-yellow-600"/>}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full mt-3 flex flex-col items-center space-y-4 
                       bg-white/10 dark:bg-black/20 
                       backdrop-blur-lg 
                       rounded-2xl 
                       py-4 shadow-lg border border-white/10 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
              >
                <span
                  className={`text-base ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : colors.textSecondary
                  }`}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}