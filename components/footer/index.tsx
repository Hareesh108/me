"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaHeart,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-screen-lg mx-4 lg:mx-auto mt-8 md:mt-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div
            className="absolute top-4 left-4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-8 right-6 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-4 left-6 w-1 h-1 bg-primary/25 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-6 right-4 w-2.5 h-2.5 bg-primary/15 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 hover:opacity-100 transition-all duration-700 blur-md sm:blur-lg md:blur-xl pointer-events-none" />

        <div className="relative transition-all duration-500 overflow-hidden">
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden md:flex items-center gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FaStar className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Connect with me
                  </span>
                </motion.div>

                <div className="flex gap-3">
                  {[
                    {
                      id: 0,
                      href: "https://www.linkedin.com/in/hareeshbhittam/",
                      icon: FaLinkedin,
                      label: "LinkedIn",
                    },
                    {
                      id: 1,
                      href: "https://x.com/hareesh_bhittam",
                      icon: FaTwitter,
                      label: "Twitter",
                    },
                    {
                      id: 2,
                      href: "https://github.com/Hareesh108",
                      icon: FaGithub,
                      label: "GitHub",
                    },
                    {
                      id: 3,
                      href: "https://www.instagram.com/_harsh_20.6/",
                      icon: FaInstagram,
                      label: "Instagram",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.id}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-accent transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <social.icon
                        size={18}
                        aria-hidden="true"
                        className="text-primary group-hover:text-primary/80 transition-colors duration-300"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Copyright & Back to Top */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 mb-20 md:mb-0"
              >
                {/* Copyright */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center sm:text-right"
                >
                  <p className="text-sm text-muted-foreground">
                    Created with{" "}
                    <FaHeart className="inline-block w-3 h-3 text-red-500 animate-pulse" />{" "}
                    by{" "}
                    <motion.a
                      href="https://www.linkedin.com/in/hareeshbhittam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center gap-1 group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span>Hareesh</span>
                      <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.a>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    © 2025 All rights reserved.
                  </p>
                </motion.div>

                {/* Back to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  key="back-to-top-button"
                  aria-label="Back to Top"
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
