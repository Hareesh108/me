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
      className="max-w-screen-lg  mx-4 lg:mx-auto mt-8 md:mt-12"
    >
      <h1 className="text-center col-span-1 md:col-span-2 text-xl sm:text-3xl font-bold tracking-tight mb-5 sm:mb-15 dark:text-zinc-300 text-zinc-700">
        Projects
      </h1>
      <div className="grid gap-12 items-center justify-center md:grid-cols-3">
        {PROJECT_INFO.map((project) => (
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 4px 20px rgba(152, 152, 152, 0.2)",
            }}
            transition={{ duration: 0.3 }}
            key={project.id}
            className="w-full p-4 shadow-lg rounded-xl bg-#c86f6f  relative overflow-hidden"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-xl border-4"></div>

            <Card className="overflow-hidden rounded-lg w-full relative h-full lg:h-[400px]">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.name}
                  height={400}
                  width={400}
                  className="w-full object-cover transition-transform duration-300 transform hover:scale-110"
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
