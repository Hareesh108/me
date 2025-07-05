"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
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
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl shadow-lg px-6 py-3">
        <div className="flex items-center gap-4">
          <div>
            <audio ref={audioRef} src="/music/SHAED-ZAYN-Trampoline.mp3" loop>
              <track kind="captions" src="" label="Music captions" />
            </audio>
            <button
              onClick={togglePlay}
              onKeyDown={(e) => e.key === "Enter" && togglePlay()}
              aria-label={isPlaying ? "Pause music" : "Play music"}
              title={
                isPlaying
                  ? "Shhh... Let's pause the beats! 🛑"
                  : "Hit play for some good vibes! 🎵"
              }
              className="p-2 rounded-lg hover:bg-accent transition-colors"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hover:text-primary"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
            </button>
          </div>
          <Link
            href="https://www.linkedin.com/in/hareeshbhittam/"
            target="_blank"
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            title="Connect with me on LinkedIn!"
          >
            <FaLinkedin size={20} className="hover:text-primary" />
          </Link>
          <Link
            href="https://x.com/hareesh_bhittam"
            target="_blank"
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            title="Follow me on Twitter!"
          >
            <FaTwitter size={20} className="hover:text-primary" />
          </Link>
          <Link
            href="https://github.com/Hareesh108"
            target="_blank"
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            title="Check out my GitHub projects!"
          >
            <FaGithub size={20} className="hover:text-primary" />
          </Link>
          <div className="rounded-lg hover:bg-accent transition-colors">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
