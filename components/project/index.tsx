"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { Card, CardHeader, CardFooter, CardContent } from "../ui/card";
import { PROJECT_INFO } from "@/lib/utils";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <div
      id="projects"
      className="min-h-screen max-w-screen-xl mx-4 xl:mx-auto m-8 md:mt-12"
    >
      <div className="flex justify-center">
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
          {/* Text */}
          <text
            x="10"
            y="40"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            stroke="currentColor"
            fill="none"
          >
            Featured Projects
          </text>

          {/* Gradient Definition */}
          <defs>
            <linearGradient
              id="glowing-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#EB8317" stopOpacity="1">
                <animate
                  attributeName="stop-color"
                  values="#EB8317; #F4F6FF; #EB8317"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#F4F6FF" stopOpacity="1">
                <animate
                  attributeName="stop-color"
                  values="#F4F6FF; #EB8317; #F4F6FF"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          {/* Glowing Gradient Line */}
          <rect
            x="10"
            y="50"
            width="200"
            height="4"
            fill="url(#glowing-gradient)"
          />
        </svg>
      </div>

      <div className="grid gap-12 items-center justify-center md:grid-cols-3">
        {PROJECT_INFO.map((project) => (
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            key={project.id}
            className="w-full p-4 shadow-lg bg-#c86f6f hover:bg-muted relative overflow-hidden"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-lg animate-gradient-border-before pointer-events-none"></div>

            <Card className="overflow-hidden rounded-lg w-full relative h-[450px]">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.name}
                  height={160}
                  width={400}
                  className="w-full h-40 object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </CardHeader>

              <CardContent className="p-4 text-left">
                <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
                <p className="text-sm">{project.description}</p>

                {/* Bullet Points */}
                {/* <ul className="list-disc list-inside space-y-1">
                  {project.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul> */}
              </CardContent>

              {/* Footer with Link */}
              <CardFooter className="pt-2 text-right">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-yellow-800 flex items-center gap-1"
                >
                  <Link size={16} />
                  View Project
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
