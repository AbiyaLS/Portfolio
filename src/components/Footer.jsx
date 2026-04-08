import React from "react";

export default function Footer({ darkMode = true }) {
  const theme = darkMode
    ? {
        text: "text-white",
        accent: "text-orange-400",
      }
    : {
        text: "text-gray-600",
        accent: "text-orange-600",
      };

  return (
    <footer className="pb-5">
      <div className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between ">
        
        {/* LEFT */}
        <p className={`sm:text-sm md:text-md ${theme.text}`}>
        Copyright © {new Date().getFullYear()} Abiya L.S
        </p>

      </div>
    </footer>
  );
}