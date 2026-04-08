import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={
        darkMode
          ? "bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] min-h-screen"
          : "bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fef3c7] min-h-screen"
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
       <Projects darkMode={darkMode} />
       <Contact  darkMode={darkMode} />
       <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;