"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { CgPentagonDown } from "react-icons/cg";
import { useTheme } from "next-themes";

export default function LandingPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === "dark" && mounted;
  const isLightMode = resolvedTheme === "light" && mounted;

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center justify-center min-h-screen max-w-screen-xl mt-16 md:mt-0 mx-4 xl:mx-auto">
      {isDarkMode && (
        <Image
          src="/assets/new.svg"
          alt="Background Image"
          fill
          priority
          quality={100}
          className="z-[-1] object-cover"
        />
      )}
      <div className="relative flex justify-center mx-24 sm:mx-32 md:mx-auto">
        <div className="relative">
          <Image
            src="/assets/hero-back.svg"
            alt="Overlay Image"
            loading="eager"
            width={500}
            height={500}
          />

          <Image
            src="/profile/harsh01.jpg"
            alt="Profile Picture"
            width={500}
            height={500}
            loading="lazy"
            className="rounded-full border-primary shadow-transparent absolute top-0 left-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2  md:items-start mx-4 md:mx-auto">
        <h1 className="text-4xl sm:text-6xl z-[50] font-bold text-center md:text-start">
          <span className="relative -z-10">
            Hi! I&apos;m Hareesh.
            {isDarkMode && (
              <img
                alt="Header underline"
                loading="lazy"
                width="300"
                height="24"
                src="assets/header-underline.svg"
                className="absolute -bottom-1 lg:bottom-0 lg:w-4/5 left-0 lg:left-14 -z-20"
              />
            )}
            {isLightMode && (
              <img
                alt="Header underline"
                loading="lazy"
                width="300"
                height="24"
                src="assets/header-underline-light.svg"
                className="absolute -bottom-1 lg:bottom-0 lg:w-4/5 left-0 lg:left-14 -z-20"
              />
            )}
          </span>
        </h1>

        <h2 className="text-2xl text-center md:text-start mt-2">
          Creating a brighter tomorrow with technology and innovation.
        </h2>
        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a href="#about-me" className="transition-transform hover:scale-105">
            <Button
              className="text-lg hover:opacity-90"
              variant="secondary"
              size="lg"
            >
              <CgPentagonDown size={50} className="animate-bounce" /> Know more
            </Button>
          </a>
          <a
            href="mailto:hareeshbhittam@email.com"
            className="transition-transform hover:scale-105"
          >
            <Button
              className="text-lg hover:opacity-90"
              variant="default"
              size="lg"
            >
              Get in touch
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
