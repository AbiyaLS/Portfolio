import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);

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
      
        <Hero darkMode={darkMode}/>

      
    </div>
  );
};

export default App;
