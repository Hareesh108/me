"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Cover } from "../ui/cover";
import { Compare } from "../ui/compare";
import AboutMePage from "../about-me";
import { SocialDialog } from "../ui/social-dialog";
import { useWindowEvent } from "@/contexts/window-event-provider";
import { ArrowDown, Sparkles, Code, Briefcase } from "lucide-react";

export default function LandingPage() {
  const { resolvedTheme } = useTheme();
  const { scrollY } = useWindowEvent();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === "dark" && mounted;
  const isNotTop = scrollY > 250;

  return (
    <div className="relative min-h-screen">
      {/* Background Images */}
      {isDarkMode && !isNotTop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/assets/home-left.svg"
            width={350}
            height={350}
            alt="left img"
            className="left-0 top-0 fixed h-[230px] md:h-[350px] w-[230px] md:w-[350px] z-10"
          />
        </motion.div>
      )}

      {isDarkMode && !isNotTop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="/assets/home-right.svg"
            width={350}
            height={350}
            alt="right img"
            className="right-0 top-0 fixed h-[230px] md:h-[350px] w-[230px] md:w-[350px] z-10"
          />
        </motion.div>
      )}

      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-15 animate-color-shift">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="5"
                height="5"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 5 0 L 0 0 0 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-muted-foreground/20"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Small Grid Boxes Scattered Across */}
        <div className="absolute inset-0">
          {/* Top Row Grids */}
          <div
            className="absolute top-8 left-1/4 w-16 h-16 border border-primary/30 animate-grid-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-8 right-1/4 w-16 h-16 border border-primary/25 animate-grid-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-8 left-1/2 w-16 h-16 border border-primary/35 animate-grid-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Middle Row Grids */}
          <div
            className="absolute top-1/2 left-8 w-16 h-16 border border-primary/40 animate-grid-pulse"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="absolute top-1/2 right-8 w-16 h-16 border border-primary/30 animate-grid-pulse"
            style={{ animationDelay: "0.8s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-16 h-16 border border-primary/25 animate-grid-pulse"
            style={{ animationDelay: "1.3s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-primary/35 animate-grid-pulse"
            style={{ animationDelay: "1.8s" }}
          />

          {/* Bottom Row Grids */}
          <div
            className="absolute bottom-8 left-1/4 w-16 h-16 border border-primary/30 animate-grid-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="absolute bottom-8 right-1/4 w-16 h-16 border border-primary/25 animate-grid-pulse"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="absolute bottom-8 left-1/2 w-16 h-16 border border-primary/40 animate-grid-pulse"
            style={{ animationDelay: "1.2s" }}
          />

          {/* Enhanced Rotating Grid Boxes */}
          <div
            className="absolute top-1/4 left-1/6 w-12 h-12 border border-primary/20 animate-grid-rotate"
            style={{ animationDelay: "0s", animationDuration: "15s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/6 w-12 h-12 border border-primary/20 animate-grid-rotate"
            style={{ animationDelay: "2s", animationDuration: "18s" }}
          />
        </div>

        {/* Enhanced Rotating Elements */}
        <div className="absolute inset-0">
          {/* Rotating Rectangles */}
          <div
            className="absolute top-1/4 left-1/8 w-8 h-8 border border-primary/25 animate-grid-rotate"
            style={{ animationDelay: "0s", animationDuration: "12s" }}
          />
          <div
            className="absolute top-1/3 right-1/8 w-6 h-6 border border-primary/30 animate-grid-rotate"
            style={{ animationDelay: "2s", animationDuration: "15s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/6 w-10 h-10 border border-primary/20 animate-grid-rotate"
            style={{ animationDelay: "4s", animationDuration: "18s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/6 w-7 h-7 border border-primary/35 animate-grid-rotate"
            style={{ animationDelay: "1s", animationDuration: "14s" }}
          />
          <div
            className="absolute top-2/3 left-1/4 w-5 h-5 border border-primary/25 animate-grid-rotate"
            style={{ animationDelay: "3s", animationDuration: "16s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-9 h-9 border border-primary/30 animate-grid-rotate"
            style={{ animationDelay: "5s", animationDuration: "20s" }}
          />

          {/* Pulsing Circles */}
          <div
            className="absolute top-1/6 left-1/3 w-3 h-3 bg-primary/20 rounded-full animate-grid-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-1/6 right-1/3 w-4 h-4 bg-primary/15 rounded-full animate-grid-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-3/4 left-1/5 w-2 h-2 bg-primary/25 rounded-full animate-grid-pulse"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-primary/20 rounded-full animate-grid-pulse"
            style={{ animationDelay: "4.5s" }}
          />

          {/* Floating Geometric Shapes */}
          <div
            className="absolute top-1/5 right-1/5 w-4 h-4 border border-primary/30 rotate-45 animate-float-up"
            style={{ animationDelay: "0s", animationDuration: "10s" }}
          />
          <div
            className="absolute bottom-1/5 left-1/4 w-3 h-3 border border-primary/25 rotate-45 animate-float-up"
            style={{ animationDelay: "5s", animationDuration: "12s" }}
          />

          {/* Stars in Middle 2/3 Area */}
          <div
            className="absolute top-1/6 left-1/2 w-2 h-2 text-primary/40 animate-pulse"
            style={{ animationDelay: "0s" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-1/3 right-1/4 w-1.5 h-1.5 text-primary/30 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-1/2 left-1/3 w-2.5 h-2.5 text-primary/35 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-2/3 right-1/3 w-1.5 h-1.5 text-primary/25 animate-pulse"
            style={{ animationDelay: "3s" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-5/6 left-1/4 w-2 h-2 text-primary/40 animate-pulse"
            style={{ animationDelay: "4s" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div
            className="absolute top-3/4 right-1/5 w-1.5 h-1.5 text-primary/30 animate-pulse"
            style={{ animationDelay: "5s" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-32 right-24 w-1 h-1 bg-primary/40 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-32 left-24 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-primary/20 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary/35 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />

        {/* Enhanced Floating Particles */}
        <div
          className="absolute bottom-0 left-1/5 w-1 h-1 bg-primary/40 rounded-full animate-float-up"
          style={{ animationDelay: "0s", animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float-up"
          style={{ animationDelay: "3s", animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary/25 rounded-full animate-float-up"
          style={{ animationDelay: "6s", animationDuration: "12s" }}
        />
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center justify-center min-h-screen max-w-screen-lg mt-16 md:mt-60 mx-4 xl:mx-auto relative z-20">
        {/* Left Column - Resume/Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center items-center lg:justify-end w-full mt-6"
        >
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />

            <motion.div
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative w-full rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute hidden md:block inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-full transition-transform duration-1000 rounded-3xl" />

              <Compare
                firstImage="/profile/resume4.png"
                secondImage="/profile/coder.jpg"
                firstImageClassName="object-cover"
                secondImageClassname="object-cover"
                className="h-[250px] sm:h-[250px] md:h-[400px] lg:h-[450px] w-[250px] md:w-[300px] lg:w-[450px] relative z-10"
                slideMode="hover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col gap-6 md:items-start mx-4 md:mx-auto"
        >
          <div className="text-2xl text-center md:text-start">
            <Title />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl md:text-2xl text-center md:text-start text-muted-foreground leading-relaxed"
          >
            Creating a brighter tomorrow with{" "}
            <span className="text-primary font-semibold">technology</span> and{" "}
            <span className="text-primary font-semibold">innovation</span>.
          </motion.h2>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4 w-full"
          >
            <motion.a
              href="#about-me"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300 w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                variant="secondary"
                size="lg"
              >
                <span>Know More</span>
                <ArrowDown className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-y-1" />
              </Button>
            </motion.a>

            <motion.a
              href="mailto:hareeshbhittam@email.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all duration-300 w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                variant="default"
                size="lg"
              >
                <span>Get In Touch</span>
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 mb-2"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Full Stack
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Production Ready
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full col-span-2"
        >
          <AboutMePage />
        </motion.div>
      </div>

      <SocialDialog />
    </div>
  );
}

export const Title = memo(() => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight sm:my-6 text-foreground"
    >
      Hi, I&apos;m{" "}
      <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Cover className="cursor-crosshair text-primary">Hareesh</Cover>
      </motion.span>
    </motion.h1>
  );
});

Title.displayName = "Title";

export function Resume() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ duration: 0.3 }}
      className="w-full rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <Compare
        firstImage="/profile/resume.png"
        secondImage="/profile/harsh01.jpg"
        firstImageClassName="object-fill"
        secondImageClassname="object-fit object-left-top"
        className="h-[250px] sm:h-[250px] md:h-[400px] lg:h-[450px] w-[250px] md:w-[300px] lg:w-[450px]"
        slideMode="hover"
      />
    </motion.div>
  );
}
