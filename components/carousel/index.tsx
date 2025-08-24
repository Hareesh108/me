"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";

interface InfiniteCarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  speed?: number;
  showControls?: boolean;
  className?: string;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  autoPlay = true,
  speed = 15,
  showControls = true,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentSpeed, setCurrentSpeed] = useState(speed);

  useEffect(() => {
    setIsPlaying(autoPlay);
  }, [autoPlay]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setCurrentSpeed(newSpeed);
  };

  return (
    <div className={`relative w-full ${className}`}>
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl transition-all duration-500 overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-all duration-700 pointer-events-none" />

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

        <div className="relative p-6 md:p-8">
          {/* Carousel Container */}
          <div className="overflow-hidden w-full rounded-2xl">
            <div
              className="flex gap-4 carousel-track"
              style={{
                animationPlayState: isPlaying ? "running" : "paused",
                animationDuration: `${currentSpeed}s`,
              }}
            >
              {/* Create many copies for seamless infinite scroll */}
              {[...Array(10)].map((_, setIndex) => (
                <React.Fragment key={`set-${setIndex}`}>
                  {items.map((item, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="flex items-center justify-center mx-2 flex-shrink-0"
                    >
                      <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 transition-all duration-300 hover:bg-background/90">
                        {item}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Controls */}
          {showControls && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mt-6"
            >
              {/* Play/Pause Button */}
              <motion.button
                onClick={togglePlayPause}
                className="flex items-center justify-center w-10 h-10 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </motion.button>

              {/* Speed Controls */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Speed:</span>
                <div className="flex gap-1">
                  {[3, 5, 7, 10, 15].map((speed) => (
                    <motion.button
                      key={speed}
                      onClick={() => handleSpeedChange(speed)}
                      className={`px-2 py-1 text-xs rounded-md transition-all duration-300 ${
                        currentSpeed === speed
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {speed}s
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      <style jsx>{`
        .carousel-track {
          display: flex;
          animation: infinite-scroll linear infinite;
          width: calc(1000% + 80px); /* 10 sets of items */
        }

        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 10)); /* Move exactly one set */
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;
