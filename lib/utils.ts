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
