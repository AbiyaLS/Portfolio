import React, { useState } from "react";
import { motion } from "framer-motion";

export default function About({ darkMode }) {
  const [activeTab, setActiveTab] = useState("skills");

  const theme = darkMode
    ? {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        card: "bg-white/5 border-white/10",
        active: "text-orange-400 border-orange-400",
      }
    : {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
        card: "bg-black/5 border-black/10",
        active: "text-orange-600 border-orange-600",
      };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-20 scroll-mt-24"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${theme.textPrimary}`}>
            About Me
          </h2>

          <p
            className={`mt-6 text-sm sm:text-base md:text-lg leading-relaxed ${theme.textSecondary}`}
          >
            I am a Full Stack Developer specializing in the MERN stack
            (MongoDB, Express.js, React.js, Node.js). I build scalable
            web applications with clean UI and strong backend logic.

            <br /><br />

            I have developed projects like a fashion e-commerce platform
            and gained real-world experience through internships as a MERN
            Stack Developer.

            <br /><br />

            I enjoy solving problems, learning new technologies, and building
            impactful digital products.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`p-5 sm:p-6 rounded-2xl border ${theme.card} shadow-md shadow-orange-400`}
        >

          {/* Tabs */}
          <div className="flex gap-6 border-b pb-2">
            {["skills", "experience", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize pb-1 border-b-2 transition ${
                  activeTab === tab
                    ? theme.active
                    : `${theme.textSecondary} border-transparent`
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-5 text-sm sm:text-base">

            {/* SKILLS */}
            {activeTab === "skills" && (
              <div className={`grid md:grid-cols-2 gap-6 ${theme.textSecondary}`}>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-orange-500 mb-2">Frontend</h3>
                  <p>React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Responsive Web Design</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-orange-500 mb-2">Backend & APIs</h3>
                  <p>Node.js, Express.js, MongoDB, JWT, RESTful APIs</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-orange-500 mb-2">Tools</h3>
                  <p>Git, GitHub, Postman</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-semibold text-orange-500 mb-2">Familiar</h3>
                  <p>Flutter, Dart, Python</p>
                </div>

              </div>
            )}

            {/* EXPERIENCE */}
            {activeTab === "experience" && (
              <div className="space-y-6">

                <div className="border-l-2 border-orange-500 pl-4">
                  <h3 className={`font-semibold text-base sm:text-lg ${theme.textPrimary}`}>
                    Junior MERN Stack Developer Intern
                  </h3>
                  <p className={`${theme.textSecondary} text-sm`}>
                    Druv 360 • 6 Months
                  </p>
                  <p className={`${theme.textSecondary} mt-2 text-sm sm:text-base leading-relaxed`}>
                    Worked on a client project <span className="text-orange-500 font-medium">Service Connect</span>. 
                    Built responsive UI, developed REST APIs, and handled backend integration using MERN stack.
                  </p>
                </div>

                <div className="border-l-2 border-orange-500 pl-4">
                  <h3 className={`font-semibold text-base sm:text-lg ${theme.textPrimary}`}>
                    MERN Stack Developer Intern
                  </h3>
                  <p className={`${theme.textSecondary} text-sm`}>
                    Edunet Foundation (EY, KASE)
                  </p>
                  <p className={`${theme.textSecondary} mt-2 text-sm sm:text-base leading-relaxed`}>
                    Worked on real-time projects and collaborated in building scalable web applications.
                  </p>
                </div>

              </div>
            )}

            {/* EDUCATION */}
            {activeTab === "education" && (
              <div className="border-l-2 border-orange-500 pl-4 space-y-2">

                <div className="flex justify-between">
                  <h3 className="font-semibold">BCA</h3>
                  <span className="text-orange-400">2020 - 2023</span>
                </div>

                <p>UIT Mukathala, Kollam, Kerala</p>
                <p className="text-orange-400">Kerala University</p>

              </div>
            )}

          </div>
        </motion.div>
      </div>
    </section>
  );
}