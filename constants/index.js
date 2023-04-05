import web from '../public/web.png'
import backend from '../public/backend.png'
import mobile from '../public/mobile.png'
import creator from '../public/creator.png'
import meta from '../public/company/meta.png'
import starbucks from '../public/company/starbucks.png'
import tesla from '../public/company/tesla.png'
import shopify from '../public/company/shopify.png'
import DDS from '../public/company/diligentDeliverySystemsLogo.png'
import NeonFlux from '../public/company/hdrlogo.svg'
import javascript from '../public/technologies/javascript.png'
import typescript from '../public/technologies/typescript.png'
import html from '../public/technologies/html.png'
import css from '../public/technologies/css.png'
import reactjs from '../public/technologies/reactjs.png'
import redux from '../public/technologies/redux.png'
import tailwind from '../public/technologies/tailwind.png'
import nodejs from '../public/technologies/nodejs.png'
import mongodb from '../public/technologies/mongodb.png'
import git from '../public/technologies/git.png'
import figma from '../public/technologies/figma.png'
import docker from '../public/technologies/docker.png'
import threejs from '../public/technologies/threejs.svg'

import camify from '../public/projects/campify.jpg'
import mazeRunner from '../public/projects/maze-runner.jpg'
import naphtha from '../public/projects/naphtha-oil.jpg'

import {
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "TypeScript Enthusiast",
      icon: creator,
    },
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
      name: "TypeScript",
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Diligent Delivery Systems",
      icon: DDS,
      iconBg: "#383E56",
      date: "October 2020 - May 2022",
      points: [
        "Developed an intuitive and efficient search tool for internal employees using React. The tool empowers users toselect a specific database field, operator, search value, and execute a query on the database, yielding relevant and accurate results.",
        "As a proficient React developer, I incorporated a suite of dynamic UI tables with advanced functionality to manipulate column attributes and execute seamless data search operations within each table.",
        "Contributed to the development of a client portal, responsible for 35% of the product. This intuitive platform streamlined client-shipment interaction, providing users with the ability to perform essential shipping actions through an intuitive interface.",
        "Revamped numerous internal software form pages utilizing the Formik library, alongside custom React hooks, and industry-grade validation tools, such as yup/custom validation.",
        "Played a key role in designing and developing 50% of the UI for a healthcare ordering portal. This user-friendly interface enabled clients to submit special health orders streamlining the process and making it more efficient."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Neon Flux",
      icon: NeonFlux,
      iconBg: "#383E56",
      date: "May 2022 - Present",
      points: [
        "Responsible for implementing features for a drag-and-drop webpage builder/editor using Craft.js, which included building components, configuring page layouts, and handling data storage.",
        "Built multiple product landing pages for clients using modern technologies such as Tailwind CSS, Next.js, Swiper.js",
        "Maintained and improved an existing codebase by refactoring large files into smaller reusable components and implementing new functions, contributing to the overall success of the product.",
        "Helped transition the application from REST API to GraphQL API to ensure a defined contract between the FE and BE teams. Collaborated with the backend team to define the GraphQL schema.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: DDS,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Campify",
      description:
        "Campify is for the camping enthusiast who want to share where they have stayed around the World, and learn about new campground gems. This is a Fullstack JavaScript application. I used Node.js, Express.js, EJS, Bootstrap and others. Please go explore the campgrounds!",
      tags: [
        {
          name: "nodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "expressJS",
          color: "pink-text-gradient",
        },
      ],
      image: camify,
      source_code_link: "https://github.com/Hudson35/Campify",
      liveUrl: "#"
    },
    {
      name: "Maze Runner",
      description:
        'The Maze Runner game was built using HTML, CSS and JavaScript. I used the Canvas API - a Web API - along with Matter.js - 2D physics engine - to create this application and build the maze. Launch the game to see if you can solve the maze! To play press these keys to move: "a" "w" "s" "d".',
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "canvas API",
          color: "green-text-gradient",
        },
        {
          name: "matterJS",
          color: "pink-text-gradient",
        },
      ],
      image: mazeRunner,
      source_code_link: "https://github.com/Hudson35/Maze-Runner",
      liveUrl: "https://maze-runner-hudsonbirdsong.vercel.app/"
    },
    {
      name: "Naphtha Oil",
      description:
        "Naphtha Oil is a fullstack application built with JavaScript, Node.js, Express.js, EJS and Semantic UI. Overview: After a user signs up, they can input the amount of Gallons needed, specify the deliver date and then recieve a quote back before placing the order.",
      tags: [
        {
          name: "semanticUI",
          color: "blue-text-gradient",
        },
        {
          name: "expressJS",
          color: "green-text-gradient",
        },
        {
          name: "nodeJS",
          color: "pink-text-gradient",
        },
      ],
      image: naphtha,
      source_code_link: "https://github.com/Hudson35/Naphtha-Oil",
      liveUrl: "#"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };