"use client";

import React from "react";
import type { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillCloudsFill } from "react-icons/bs";
import { DiRedis } from "react-icons/di";
import {
  FaAngular,
  FaAws,
  FaJenkins,
  FaGitSquare,
  FaRust,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiJavaLine, RiNodejsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiReacthookform,
  SiEslint,
  SiReactrouter,
  SiGooglecloud,
  SiGithubactions,
  SiSpringboot,
} from "react-icons/si";
import { TbBrandReact, TbBrandRedux } from "react-icons/tb";
import InfiniteCarousel from "./carousel";

// Decorative marquee of the tech stack. Icons are hidden from assistive tech
// (aria-hidden) since the technologies are also listed as text in the About
// section and the carousel duplicates items for the scrolling animation.
const TECH_ICONS: { icon: IconType; sizeClass?: string }[] = [
  { icon: SiTypescript, sizeClass: "h-[34px] w-[34px]" },
  { icon: IoLogoJavascript },
  { icon: TbBrandReact },
  { icon: RiNextjsFill },
  { icon: TbBrandRedux },
  { icon: SiReacthookform },
  { icon: SiEslint },
  { icon: SiReactrouter },
  { icon: FaAngular },
  { icon: FaAws },
  { icon: BsFillCloudsFill },
  { icon: SiGooglecloud },
  { icon: FaJenkins },
  { icon: SiGithubactions },
  { icon: FaGitSquare },
  { icon: RiJavaLine },
  { icon: SiSpringboot },
  { icon: BiLogoPostgresql },
  { icon: DiRedis },
  { icon: RiNodejsLine },
  { icon: FaGolang },
  { icon: FaRust },
];

export default function Tech() {
  return (
    <div className="max-w-screen-lg mx-5 lg:mx-auto flex justify-center items-center mt-6 relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-background before:to-transparent before:z-10 after:content-[''] after:absolute after:right-0 after:top-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-background after:to-transparent after:z-10">
      <InfiniteCarousel
        items={TECH_ICONS.map(({ icon: Icon, sizeClass }, index) => (
          <Icon
            key={index}
            aria-hidden="true"
            className={`text-primary hover:text-destructive ${
              sizeClass ?? "h-10 w-10"
            }`}
          />
        ))}
      />
    </div>
  );
}
