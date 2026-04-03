// src/data/projectsData.js

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

// (optional — only if you still want icons later)
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/node.png";
import mongoIcon from "../assets/mongodb.png";

const projects = [
  {
    title: "AuraWear - E-commerce App",
    description:
      "A full-stack service booking platform with authentication, admin panel, and real-time features.",
    image: project1,
    stack: [
      { name: "React" },
      { name: "Node" },
      { name: "MongoDB" },
      { name: "tailwind.css" },
    ],
    live: "https://aurawear-frontend.vercel.app/",
  },
  {
    title: "Thumlify - AI Thumbnail Generator",
    description:
      "Fashion e-commerce platform with cart, payment integration, and responsive UI.",
    image: project2,
    stack: [
        { name: "Typescript" },
      { name: "React" },
      { name: "Node" },
      { name: "MongoDB" },
      { name: "tailwind.css" },
      
    ],
    live: "#",
  },
  {
    title: "Thumlify - AI Thumbnail Generator",
    description:
      "Fashion e-commerce platform with cart, payment integration, and responsive UI.",
    image: project2,
    stack: [
        { name: "Typescript" },
      { name: "React" },
      { name: "Node" },
      { name: "MongoDB" },
      { name: "tailwind.css" },
      
    ],
    live: "#",
  },
  {
    title: "Thumlify - AI Thumbnail Generator",
    description:
      "Fashion e-commerce platform with cart, payment integration, and responsive UI.",
    image: project2,
    stack: [
        { name: "Typescript" },
      { name: "React" },
      { name: "Node" },
      { name: "MongoDB" },
      { name: "tailwind.css" },
      
    ],
    live: "#",
  },
];

export default projects;