"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { CgPentagonDown } from "react-icons/cg";
import { useTheme } from "next-themes";
import { Cover } from "../ui/cover";

export default function LandingPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === "dark" && mounted;

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
        <Title />

        {/* <div className="px-3 py-2 hidden sm:block absolute bottom-36 right-2 sm:right-20 bg-yellow-500/20 rounded-[6px] w-max font-medium dark:text-yellow-300 text-yellow-500 border border-yellow-500/20 animate-wiggle duration-1000">
          Innovation
        </div> */}

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

export const Title = memo(() => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight sm:my-6 dark:text-zinc-300 text-zinc-700">
      Hi, I&apos;m <Cover className="cursor-crosshair">Hareesh</Cover>
    </h1>
  );
});

Title.displayName = "Title";
