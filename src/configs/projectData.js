// src/data/projectsData.js

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/finace.png"
import project4 from "../assets/thinkboard.png"


const projects = [
  {
    title: "AuraWear - E-commerce App",
    description:
      "Developed a full-stack fashion e-commerce application with user authentication, product browsing, and secure checkout. Implemented an admin dashboard for managing products, orders, and users, along with real-time updates for inventory and order status.",
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
      "An AI-powered application that generates high-quality thumbnails from text prompts. It helps content creators quickly design visually appealing thumbnails, improving workflow efficiency and content engagement.",
    image: project2,
    stack: [
        { name: "Typescript" },
      { name: "React" },
      { name: "Node" },
      { name: "MongoDB" },
      { name: "tailwind.css" },
      
    ],
    github: "https://github.com/AbiyaLS/Thumblify-AI-thumbnail-Generater",
  },
  {
    title: "ThinkBoard - Notes App",
    description:
      "An AI-powered application that generates high-quality thumbnails from text prompts. It helps content creators quickly design visually appealing thumbnails, improving workflow efficiency and content engagement.",
    image: project4,
    stack: [
        { name: "Typescript" },
      { name: "React" },
      { name: "Node" },
      { name: "MongoDB" },
      { name: "tailwind.css" },
      
    ],
    github: "https://github.com/AbiyaLS/mern-thinkboard",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A full-stack web application that helps users track income, expenses, and savings. It provides a clear overview of financial activity, enabling better budgeting and smarter financial decisions..",
    image: project3,
    stack: [
        { name: "Typescript" },
      { name: "React" },
      { name: "Node" },
      { name: "MongoDB" },
      { name: "tailwind.css" },
      
    ],
    github: "https://github.com/AbiyaLS/Personal_Finance_Tracker",
  },
];

export default projects;