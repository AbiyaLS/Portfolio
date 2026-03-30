import React from "react";
import { motion } from "framer-motion";
import project1 from "../assests/project1.png"

export default function Projects({ darkMode }) {
  const theme = darkMode
    ? {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        card: "bg-white/5 border-white/10",
      }
    : {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
        card: "bg-black/5 border-black/10",
      };

  const projects = [
    {
      title: "Service Connect",
      description:
        "A full-stack service booking platform where users can find and book services easily. Includes authentication, admin panel, and real-time data handling.",
      image: project1,
      stack: ["React", "Node", "MongoDB"],
      link: "#",
    },
    {
      title: "E-commerce App",
      description:
        "Fashion e-commerce platform with product listing, cart, payment integration, and responsive UI for better user experience.",
      image: "/project2.png",
      stack: ["React", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with modern UI, animations, and responsive design to showcase projects and skills effectively.",
      image: "/project3.png",
      stack: ["React", "Tailwind"],
      link: "#",
    },
    {
      title: "Task Manager",
      description:
        "Task management app with CRUD operations, authentication, and clean UI for productivity tracking.",
      image: "/project4.png",
      stack: ["Node", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-4 sm:px-6 md:px-20 py-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center ${theme.textPrimary}`}
        >
          My Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden border ${theme.card} hover:scale-[1.02] transition`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4">

                {/* Title */}
                <h3 className={`text-lg font-semibold ${theme.textPrimary}`}>
                  {project.title}
                </h3>

                {/* Description (3 lines clamp) */}
                <p
                  className={`mt-2 text-sm ${theme.textSecondary} line-clamp-3`}
                >
                  {project.description}
                </p>

                {/* Stack + Link */}
                <div className="flex items-center justify-between mt-4">

                  {/* Stack */}
                  <div className="flex gap-2 text-xs">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-orange-500 text-sm hover:underline"
                  >
                    View →
                  </a>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}