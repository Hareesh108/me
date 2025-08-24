import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PROJECT_INFO = [
  {
    id: 0,
    name: "Harukit UI",
    image: "/assets/project/harukit-ui.png",
    description:
      "A modern, accessible React component library built with TypeScript and Tailwind CSS. Features a comprehensive CLI tool for component generation, interactive documentation, and a monorepo architecture for efficient development.",
    link: "https://github.com/Hareesh108/harukit-ui",
    live: "https://harukit-ui-docs.vercel.app",
    bullets: [
      "Modern React 19 components with full TypeScript support",
      "CLI tool for automated component generation",
      "Interactive documentation with Fumadocs and MDX",
      "Accessibility-first design following WCAG guidelines",
    ],
    tech: ["Component Library", "Tailwind CSS", "Next.js", "Turborepo"],
  },
  {
    id: 1,
    name: "Unify-JS",
    image: "/assets/project/unify-js.png",
    description:
      "A lightweight, experimental type checker for JavaScript that catches type mismatches before runtime. Works directly with plain JS code without requiring TypeScript setup, featuring zero configuration and clear CLI output.",
    link: "https://github.com/Hareesh108/unify-js",
    live: "https://www.npmjs.com/package/@hareesh108/unify-js",
    bullets: [
      "Detects type mismatches in variables, functions, and expressions",
      "Supports polymorphic functions adaptable to multiple types",
      "Zero configuration setup with clear CLI debugging output",
      "Built with modern compiler design principles and AST parsing",
    ],
    tech: ["Compiler", "JavaScript", "Node.js", "AST Parser", "Type Checker"],
  },
  {
    id: 2,
    name: "Next.js 15 Snippets",
    image: "/assets/project/nextjs-snippets.png",
    description:
      "A comprehensive collection of code snippets designed to supercharge productivity when building Next.js 15 applications. The Features snippets for App Router, Client & Server Components, Server Actions, and API Handlers.",
    link: "https://github.com/Hareesh108/nextjs-snippets",
    live: "https://marketplace.visualstudio.com/items?itemName=HareeshBhittam.next-js-snippets-latest&ssr=false#overview",
    bullets: [
      "Component snippets for Client & Server Components",
      "Server logic snippets for Actions and API Handlers",
      "Navigation hooks for routing and path management",
    ],
    tech: ["VS Code Extension", "Next.js", "App Router", "Server Actions"],
  },
  {
    id: 3,
    name: "Advanced React Snippets",
    image: "/assets/project/react-snippets.png",
    description:
      "A comprehensive VS Code extension that provides 30+ React code snippets to boost developer productivity. Features functional components, hooks, lifecycle methods, and TypeScript support with single-word prefixes for instant boilerplate generation.",
    link: "https://github.com/Hareesh108/reactcraft-snippets",
    live: "https://marketplace.visualstudio.com/items?itemName=HareeshBhittam.reactcraft-snippets&ssr=false#overview",
    bullets: [
      "30+ React snippets covering components, hooks, and lifecycle methods",
      "TypeScript and JavaScript support with auto-completion",
    ],
    tech: [
      "VS Code Extension",
      "React",
      "TypeScript",
      "JavaScript",
      "Snippets",
    ],
  },
  {
    id: 4,
    name: "E-Commerce Website",
    image: "/assets/project/project01.png",
    description:
      "A complete e-commerce platform built with React, allowing users to browse products, add items to cart, and checkout. This project demonstrates my abilities in frontend development and state management.",
    link: "https://github.com/Hareesh108/E-Commerce-Website",
    bullets: [
      "Fully responsive shopping cart and checkout flow",
      "Integrated product catalog with filter options",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  },
  // {
  //   id: 4,
  //   name: "Twitter Clone",
  //   image: "/assets/project/project02.png",
  //   description:
  //     "A clone of Twitter's interface and basic functionalities, including user authentication, posting, and commenting. This project highlights my backend skills and experience with API integration.",
  //   link: "https://github.com/Hareesh108/Twitter-Clone-App",
  //   bullets: [
  //     "Real-time feed updates",
  //     "User authentication and profile management",
  //   ],
  //   tech: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  // },
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
    id: 5,
    name: "Sentiment Prediction ML",
    image: "/assets/project/customer-sentiment-ml.png",
    description:
      "A comprehensive machine learning project that analyzes customer reviews and feedback to predict sentiment polarity. Implements advanced natural language processing techniques with data preprocessing, feature extraction, and multiple ML algorithms to achieve high-accuracy sentiment classification for business intelligence.",
    link: "https://github.com/Hareesh108/Sentiment-Prediction",
    live: null,
    bullets: [
      "Advanced text preprocessing with tokenization and lemmatization",
      "Multi-algorithm approach with SVM, Random Forest, and Naive Bayes",
      "Real-time sentiment analysis with confidence scoring",
      "Interactive data visualization and performance metrics dashboard",
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "NLTK", "NumPy", "Matplotlib"],
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
];

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
  },
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
  },
];
