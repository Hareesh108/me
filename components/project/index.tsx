"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GithubIcon, Globe } from "lucide-react";
import { Card, CardFooter, CardContent } from "../ui/card";
import { PROJECT_INFO } from "@/lib/utils";

export default function ProjectPage() {
  return (
    <div
      id="projects"
      className="max-w-screen-lg lg:mx-auto mt-8 md:mt-12 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
          Featured Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          passion for development.
        </p>
      </motion.div>

      <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {PROJECT_INFO.map((project, index) => {
          return (
            <motion.div
              key={project.description}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div
                  className="absolute top-4 left-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse group-hover:animate-bounce"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="absolute top-8 right-6 w-1 h-1 bg-primary/40 rounded-full animate-pulse group-hover:animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse group-hover:animate-bounce"
                  style={{ animationDelay: "1s" }}
                />
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl pointer-events-none" />

              <Card className="relative overflow-hidden rounded-3xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 h-full backdrop-blur-sm group flex flex-col">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    {/* Project title with glow effect */}
                    <h2 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 relative">
                      {project.name}
                      <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </h2>

                    {/* Project description with fixed height and ellipsis */}
                    <div className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300 h-40 overflow-hidden">
                      <div className="line-clamp-6">{project.description}</div>
                    </div>

                    {/* Tech stack with staggered animation - aligned at bottom */}
                    <div className="flex flex-wrap gap-2">
                      {project?.tech?.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Footer with flexible buttons */}
                <CardFooter className="p-6 pt-0 mt-auto">
                  <div
                    className={`w-full flex gap-3 ${
                      project?.live ? "" : "justify-center"
                    }`}
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                      className={`flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-xl transition-all duration-300 group-hover:shadow-lg cursor-pointer ${
                        project?.live ? "flex-1" : "w-full"
                      }`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </motion.a>

                    {project?.live && (
                      <motion.a
                        href={project?.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium rounded-xl transition-all duration-300 group-hover:shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Globe className="w-4 h-4" />
                        <span>Live</span>
                      </motion.a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* See More Button with enhanced effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <motion.a
          href="https://github.com/Hareesh108"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 border border-border relative overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

          <GithubIcon className="w-5 h-5 relative z-10" />
          <span className="relative z-10">See More Projects</span>
          <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>
      </motion.div>
    </div>
  );
}
