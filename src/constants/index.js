//Instead of putting of all our in our code we have kept it in a single file..... Isn't that a good idea Easy peasy lemons squeezy😊

import {
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    bookshop,
    cell,
    bot,
    typescript,
    quiz
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Competitive Programmer",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    // Reactjs, MaterialUI, Node.js, Express.js, Mongodb
    {
      name: "College Placement Cell Platform",
      description:
        "Developed an AI Chatbot application with a seamless user experience using the Gemini API, featuring strong authentication mechanisms and optimized backend processes for enhanced security and performance.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "blue-text-gradient",
        },
      ],
      image: cell,
      source_code_link: "https://placement-cell-project-sigma.vercel.app",
    },
    // Technologies used – Reactjs, MaterialUI, Node.js, Express.js, Mongodb
    {
      name: "AI-ChatBot",
      description:
        "This AI Chatbot application, inspired by Gemini, is built using the MERN stack. It’s a highly customized chatbot where each user's message is securely stored in a database, with options to retrieve and delete messages.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: bot,
      source_code_link: "https://github.com/Shreya-Joshi23/AI-ChatBot---MERN",
    }, {
      name: "QuiZio - A Quiz Application",
      description:"A quiz application with role-based dashboards: Admins can create, edit, and manage quizzes and questions, while users can attempt quizzes hosted by different admins and view their scores. The application ensures secure authentication and validation for all users",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/Shreya-Joshi23/QuiZio---A-Quiz-Application",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };