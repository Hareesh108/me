"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Briefcase, Sparkles } from "lucide-react";
import { Skills } from "./skills";
import { BACKEND_SKILLS, DEVOPS_SKILLS, FRONTEND_SKILLS } from "@/lib/utils";

export default function AboutMePage() {
  return (
    <div
      id="about-me"
      className="max-w-screen-lg lg:mx-auto mt-8 md:mt-12 px-1 md:px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
          About Me
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate software engineer crafting exceptional digital experiences
          with modern technologies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div
            className="absolute top-8 left-8 w-3 h-3 bg-primary/20 rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-16 right-12 w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-2.5 h-2.5 bg-primary/15 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 hover:opacity-100 transition-all duration-700 blur-xl pointer-events-none" />

        <div className="relative bg-card border border-border rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-all duration-700 pointer-events-none" />

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

          <div className="relative p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Current Role & Skills */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Current Role Section */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">
                      Current Role
                    </h2>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-muted-foreground leading-relaxed"
                  >
                    I&#39;m a Software Engineer at{" "}
                    <motion.a
                      href="https://reldyn.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-semibold transition-colors duration-300 inline-flex items-center gap-1 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span>RELDYN</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.a>
                    , where I craft innovative solutions and bring ideas to
                    life.
                  </motion.p>
                </div>

                {/* Skills Section */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Technical Expertise
                    </h3>
                  </motion.div>

                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="space-y-3"
                    >
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Frontend
                      </h4>
                      <Skills skills={FRONTEND_SKILLS} />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="space-y-3"
                    >
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Backend
                      </h4>
                      <Skills skills={BACKEND_SKILLS} />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="space-y-3"
                    >
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        DevOps
                      </h4>
                      <Skills skills={DEVOPS_SKILLS} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Call to Action */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Let&#39;s Build Something Amazing
                  </h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-muted-foreground leading-relaxed space-y-4"
                >
                  <span className="block">
                    With extensive experience in building production-ready
                    applications, I am well-equipped to bring your next project
                    to life with precision and care.
                  </span>
                  <span className="block">
                    From concept to deployment, I ensure every detail is crafted
                    with excellence. Let&#39;s work together to create something
                    truly exceptional.
                  </span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <motion.a
                    href="#contact"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get In Touch</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>

                  <motion.a
                    href="#projects"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium rounded-xl transition-all duration-300 border border-border"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
