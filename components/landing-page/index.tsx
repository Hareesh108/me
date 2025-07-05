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
        <div className="absolute inset-0 opacity-15">
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
            className="absolute top-8 left-1/4 w-16 h-16 border border-primary/30 animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-8 right-1/4 w-16 h-16 border border-primary/25 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-8 left-1/2 w-16 h-16 border border-primary/35 animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Middle Row Grids */}
          <div
            className="absolute top-1/2 left-8 w-16 h-16 border border-primary/40 animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
          <div
            className="absolute top-1/2 right-8 w-16 h-16 border border-primary/30 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-16 h-16 border border-primary/25 animate-pulse"
            style={{ animationDelay: "1.3s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 border border-primary/35 animate-pulse"
            style={{ animationDelay: "1.8s" }}
          />

          {/* Bottom Row Grids */}
          <div
            className="absolute bottom-8 left-1/4 w-16 h-16 border border-primary/30 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="absolute bottom-8 right-1/4 w-16 h-16 border border-primary/25 animate-pulse"
            style={{ animationDelay: "0.7s" }}
          />
          <div
            className="absolute bottom-8 left-1/2 w-16 h-16 border border-primary/40 animate-pulse"
            style={{ animationDelay: "1.2s" }}
          />
        </div>

        {/* Traversing Color Lines - Middle Areas */}
        <div className="absolute inset-0">
          {/* Vertical Traversing Lines in Middle */}
          <div
            className="absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-traverse-vertical"
            style={{ animationDelay: "0s", animationDuration: "4s" }}
          />
          <div
            className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-traverse-vertical"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          />
          <div
            className="absolute right-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/45 to-transparent animate-traverse-vertical"
            style={{ animationDelay: "1s", animationDuration: "4.5s" }}
          />
          <div
            className="absolute right-1/3 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/35 to-transparent animate-traverse-vertical"
            style={{ animationDelay: "3s", animationDuration: "6s" }}
          />

          {/* Horizontal Traversing Lines in Middle */}
          <div
            className="absolute left-0 top-1/4 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-traverse-horizontal-middle"
            style={{ animationDelay: "0.5s", animationDuration: "4s" }}
          />
          <div
            className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-traverse-horizontal-middle"
            style={{ animationDelay: "2.5s", animationDuration: "5s" }}
          />
          <div
            className="absolute left-0 top-3/4 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/45 to-transparent animate-traverse-horizontal-middle"
            style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
          />
          <div
            className="absolute left-0 top-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/35 to-transparent animate-traverse-horizontal-middle"
            style={{ animationDelay: "3.5s", animationDuration: "6s" }}
          />
        </div>

        {/* Diagonal Traversing Lines */}
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 w-1 h-1 bg-primary/60 animate-traverse-diagonal"
            style={{ animationDelay: "0s", animationDuration: "8s" }}
          />
          <div
            className="absolute top-0 right-0 w-1 h-1 bg-primary/50 animate-traverse-diagonal-reverse"
            style={{ animationDelay: "4s", animationDuration: "8s" }}
          />
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
                firstImage="/profile/resume.png"
                secondImage="/profile/harsh01.jpg"
                firstImageClassName="object-fill"
                secondImageClassname="object-fit object-left-top"
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
