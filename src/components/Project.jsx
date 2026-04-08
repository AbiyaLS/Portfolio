import React from "react";
import { motion } from "framer-motion";
import projects from "../configs/projectData.js";

export default function Projects({ darkMode = true }) {
  const theme = darkMode
    ? {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        card: "bg-white/5 border-white/10",
        accent: "text-orange-400",
        borderAccent: "border-orange-400",
      }
    : {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
        card: "bg-black/5 border-black/10",
        accent: "text-orange-600",
        borderAccent: "border-orange-600",
      };

  return (
    <section id="projects" className="min-h-[80vh] px-6 md:px-20 py-14 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* HEADING */}
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-left ${theme.textPrimary}`}>
          My Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl border ${theme.card} 
              shadow-md shadow-orange-400/20 hover:shadow-orange-400/40 hover:shadow-lg
              transition duration-300`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* IMAGE */}
              <div className="w-full h-52 flex items-center justify-center bg-black/30 rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className={`text-xl font-semibold ${theme.textPrimary}`}>
                  {project.title}
                </h3>

                <p className={`mt-2 text-sm ${theme.textSecondary}`}>
                  {project.description}
                </p>

                {/* STACK */}
                <div className="flex gap-3 mt-4 flex-wrap">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full border ${theme.borderAccent} ${theme.accent}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* LIVE LINK */}
                <div className="flex gap-4 mt-5">
                  {/* LIVE BUTTON */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium ${theme.accent} hover:underline`}
                    >
                      Live Demo →
                    </a>
                  )}

                  {/* GITHUB BUTTON */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium ${theme.accent} hover:underline`}
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
