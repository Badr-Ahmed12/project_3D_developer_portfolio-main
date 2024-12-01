import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  }
];

const experiences = [
  {
    "title": "Frontend Learning Journey",
    "date": "March 2020 - April 2021",
    "points": [
      "Started learning frontend development with HTML, CSS, and JavaScript.",
      "Explored using libraries and frameworks like React.js to build interactive interfaces.",
      "Gained knowledge in responsive design and ensuring cross-browser compatibility.",
      "Worked on personal projects to apply learned concepts and enhance skills."
    ],
  },  
  {
    "title": "Learning Journey: React Native, Ionic, and Electron",
    "date": "May 2021 - December 2022",
    "points": [
      "Started exploring cross-platform mobile and desktop application development.",
      "Learned React Native to build mobile applications for both iOS and Android platforms.",
      "Studied Ionic for creating hybrid mobile apps with a single codebase using web technologies.",
      "Delved into Electron.js to develop desktop applications with JavaScript, HTML, and CSS.",
      "Applied these technologies in small-scale projects to understand their strengths and limitations."
    ],
  },  
  {
    "title": "Learning Journey: Tailwind CSS, Next.js, and Web App Development",
    "date": "Jan 2022 - Jan 2023",
    "points": [
      "Explored building modern web applications using Next.js and React.js.",
      "Learned Tailwind CSS for efficient styling and responsive design.",
      "Studied popular JavaScript libraries to enhance application functionality and user experience.",
      "Understood the principles of creating full-stack web applications, including backend integration.",
      "Worked on personal projects to practice and refine skills in building scalable web apps."
    ],
  }, 
  {
    "title": "Learning Journey: MongoDB, Appwrite, Firebase, Express, and Node.js",
    "date": "Jan 2023 - Present",
    "points": [
      "Started learning backend development with Node.js and Express to build server-side applications.",
      "Explored MongoDB for database management and understanding NoSQL concepts.",
      "Learned Firebase for real-time database integration, authentication, and hosting.",
      "Delved into Appwrite to create secure and scalable backend services for applications.",
      "Worked on building full-stack projects to combine frontend and backend skills, focusing on RESTful APIs and efficient data handling."
    ],
  },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
