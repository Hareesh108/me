"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Cover } from "../ui/cover";
import { Compare } from "../ui/compare";
import AboutMePage from "../about-me";
import { SocialDialog } from "../ui/social-dialog";
import { useWindowEvent } from "@/contexts/window-event-provider";

export default function LandingPage() {
  const { resolvedTheme } = useTheme();
  const { scrollY } = useWindowEvent();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === "dark" && mounted;

  const isNotTop = scrollY > 250;

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center justify-center min-h-screen max-w-screen-lg mt-16 md:mt-10 mx-4 xl:mx-auto">
      {isDarkMode && !isNotTop && (
        <Image
          src="/assets/home-left.svg"
          width={350}
          height={350}
          alt="left img"
          className="left-0 top-0 fixed h-[230px] md:h-[350px] w-[230px] md:w-[350px]"
        />
      )}

      {isDarkMode && !isNotTop && (
        <Image
          src="/assets/home-right.svg"
          width={350}
          height={350}
          alt="left img"
          className="right-0 top-0 fixed h-[230px] md:h-[350px] w-[230px] md:w-[350px]"
        />
      )}
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

      <div className="flex-1 flex justify-center items-center lg:justify-end w-full mt-6 ">
        <div className="text-2xl text-center md:text-start  md:mt-2">
          <Resume />
        </div>
      </div>

      <div className="flex flex-col gap-2  md:items-start mx-4 md:mx-auto">
        <div className="text-2xl text-center md:text-start ">
          <Title />
        </div>

        <h2 className="text-2xl text-center md:text-start">
          Creating a brighter tomorrow with <br /> technology and innovation.
        </h2>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <a href="#about-me" className="transition-transform hover:scale-105">
            <Button
              className="text-lg hover:opacity-90"
              variant="secondary"
              size="lg"
            >
              Know more
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
      <div className="w-full col-span-2">
        <AboutMePage />
      </div>
      <SocialDialog />
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

export function Resume() {
  return (
    <div className="w-full rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
      <Compare
        firstImage="/profile/resume.png"
        secondImage="/profile/harsh01.jpg"
        firstImageClassName="object-fill"
        secondImageClassname="object-fit object-left-top"
        className="h-[250px] sm:h-[250px] md:h-[400px] lg:h-[450px] w-[250px] md:w-[300px] lg:w-[450px]"
        slideMode="hover"
      />
    </div>
  );
}
