import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const PROJECT_INFO = [{
  id: 0,
  name: "E-Commerce Website",
  image: "/assets/project/project01.png",
  description: "A complete e-commerce platform built with React, allowing users to browse products, add items to cart, and checkout. This project demonstrates my abilities in frontend development and state management.",
  link: "https://github.com/Hareesh108/E-Commerce-Website",
  bullets: [
    "Fully responsive shopping cart and checkout flow",
    "Integrated product catalog with filter options"
  ]
},
{
  id: 1,
  name: "Twitter Clone",
  image: "/assets/project/project02.png",
  description: "A clone of Twitter's interface and basic functionalities, including user authentication, posting, and commenting. This project highlights my backend skills and experience with API integration.",
  link: "https://github.com/Hareesh108/Twitter-Clone-App",
  bullets: [
    "Real-time feed updates",
    "User authentication and profile management"
  ]
},
// {
//   id: 2,
//   name: "JavaScript Quiz Game",
//   image: "/assets/project/project00.png",
//   description: "An interactive quiz game built with JavaScript, offering users a fun way to test their knowledge on various topics. This project showcases my skills in DOM manipulation and responsive design.",
//   link: "https://github.com/Hareesh108/JavaScript_Quiz",
//   bullets: [
//     "Dynamic question generation",
//     "Real-time score tracking and feedback"
//   ]
// },
{
  id: 2,
  name: "Customer Sentiment Prediction using ML",
  image: "/assets/project/project03.png",
  description: "This project explores data preprocessing, model training, and sentiment analysis using natural language processing.",
  link: "https://github.com/Hareesh108/Sentiment-Prediction",
  bullets: [
    "Text preprocessing and data cleaning",
    "Sentiment prediction with high accuracy"
  ]
}];


  export const FRONTEND_SKILLS = [
    {
      name: "React",
      color: "rgb(219 234 254)",
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "Next.js",
      color: "rgb(224 231 255)",
      darkColor: "rgba(99, 102, 241, 0.2)",
    },
    {
      name: "TypeScript",
      color: "rgb(219 234 254)",
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "Tailwind CSS",
      color: "rgb(207 250 254)",
      darkColor: "rgba(6, 182, 212, 0.2)",
    },
    {
      name: "Redux",
      color: "rgb(237 233 254)",
      darkColor: "rgba(124, 58, 237, 0.2)",
    },
    {
      name: "UI/UX",
      color: "rgb(254 226 226)",
      darkColor: "rgba(239, 68, 68, 0.2)",
    },
    {
      name: "Responsive Design",
      color: "rgb(220 252 231)",
      darkColor: "rgba(16, 185, 129, 0.2)",
    },
    {
      name: "Performance Optimization",
      color: "rgb(254 243 199)",
      darkColor: "rgba(245, 158, 11, 0.2)",
    },
  ];


  export const DEVOPS_SKILLS = [
    {
      name: "AWS",
      color: "rgb(219 234 254)",
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "Docker",
      color: "rgb(224 231 255)",
      darkColor: "rgba(99, 102, 241, 0.2)",
    },
    {
      name: "Kubernetes",
      color: "rgb(219 234 254)",
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "CI/CD Pipeline",
      color: "rgb(207 250 254)",
      darkColor: "rgba(6, 182, 212, 0.2)",
    }
  ];

  export const BACKEND_SKILLS = [
    {
      name: "Java",
      color: "rgb(219 234 254)",
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "SpringBoot",
      color: "rgb(224 231 255)",
      darkColor: "rgba(99, 102, 241, 0.2)",
    },
    {
      name: "Postgres",
      color: "rgb(219 234 254)",
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "Redis",
      color: "rgb(207 250 254)",
      darkColor: "rgba(6, 182, 212, 0.2)",
    }
  ];