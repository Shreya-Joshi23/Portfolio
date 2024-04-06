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
    calci,
    tictactoe,
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
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    
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
   
    {
      name: "Calculator",
      description:
        "This project allows users to perform basic calculations of addition,subtraction,division,multiplication and percentage.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: calci,
      source_code_link: "https://github.com/Shreya-Joshi23/Calculator",
    },
    {
      name: "Tic-tac-toe",
      description:
        "This is basic game of X and O that can be played between two players.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/Shreya-Joshi23/Tic-Tac-Toe",
    }, {
      name: "BookShop Management System",
      description:
        "This Bookshop management system project allows booksellers to easily add,update,search,delete books in the bookstore and allows buyers to buy books.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: bookshop,
      source_code_link: "https://github.com/Shreya-Joshi23/Book_Shop_Management_System",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };