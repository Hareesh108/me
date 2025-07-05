"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaPlay,
  FaPause,
  FaStar,
} from "react-icons/fa";
import { ThemeToggle } from "../theme";

interface SocialDialogProps {
  className?: string;
}

export function SocialDialog({ className }: SocialDialogProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative"
      >
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          <div
            className="absolute top-2 left-2 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-3 right-3 w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-2 left-3 w-1 h-1 bg-primary/25 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 hover:opacity-100 transition-all duration-700 blur-md pointer-events-none" />

        <div className="relative bg-background/90 backdrop-blur-md border border-border/50 rounded-2xl transition-all duration-500 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-all duration-700 pointer-events-none" />

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

          <div className="relative px-6 py-3">
            <div className="flex items-center gap-4">
              {/* Music Player */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <audio
                  ref={audioRef}
                  src="/music/SHAED-ZAYN-Trampoline.mp3"
                  loop
                >
                  <track kind="captions" src="" label="Music captions" />
                </audio>
                <motion.button
                  onClick={togglePlay}
                  onKeyDown={(e) => e.key === "Enter" && togglePlay()}
                  aria-label={isPlaying ? "Pause music" : "Play music"}
                  title={
                    isPlaying
                      ? "Shhh... Let's pause the beats! 🛑"
                      : "Hit play for some good vibes! 🎵"
                  }
                  className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <FaPause className="w-4 h-4" />
                  ) : (
                    <FaPlay className="w-4 h-4" />
                  )}
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {[
                  {
                    href: "https://www.linkedin.com/in/hareeshbhittam/",
                    icon: FaLinkedin,
                    label: "LinkedIn",
                    title: "Connect with me on LinkedIn!",
                  },
                  {
                    href: "https://x.com/hareesh_bhittam",
                    icon: FaTwitter,
                    label: "Twitter",
                    title: "Follow me on Twitter!",
                  },
                  {
                    href: "https://github.com/Hareesh108",
                    icon: FaGithub,
                    label: "GitHub",
                    title: "Check out my GitHub projects!",
                  },
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-accent transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.title}
                    >
                      <social.icon
                        size={18}
                        className="text-primary group-hover:text-primary/80 transition-colors duration-300"
                      />
                    </motion.a>
                  </motion.div>
                ))}
              </div>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex items-center justify-center w-10 h-10 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThemeToggle />
              </motion.div>

              {/* Decorative Star */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-center justify-center w-8 h-8"
              >
                <FaStar className="w-4 h-4 text-primary/60 animate-pulse" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
