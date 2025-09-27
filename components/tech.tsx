"use client";

import React from "react";
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

export default function Tech() {
  return (
    <div className="max-w-screen-lg mx-5 lg:mx-auto flex justify-center items-center mt-6 relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-background before:to-transparent before:z-10 after:content-[''] after:absolute after:right-0 after:top-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-background after:to-transparent after:z-10">
      <InfiniteCarousel
        items={[
          <SiTypescript
            key={0}
            className="text-primary hover:text-destructive h-[34px] w-[34px]"
          />,
          <IoLogoJavascript
            key={1}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <TbBrandReact
            key={2}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <RiNextjsFill
            key={3}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <TbBrandRedux
            key={4}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiReacthookform
            key={5}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiEslint
            key={6}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiReactrouter
            key={7}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <FaAngular
            key={8}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <FaAws
            key={9}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <BsFillCloudsFill
            key={10}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiGooglecloud
            key={11}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <FaJenkins
            key={12}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiGithubactions
            key={13}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <FaGitSquare
            key={14}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <RiJavaLine
            key={15}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <SiSpringboot
            key={16}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <BiLogoPostgresql
            key={17}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <DiRedis
            key={18}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <RiNodejsLine
            key={19}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <FaGolang
            key={20}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
          <FaRust
            key={21}
            className="text-primary hover:text-destructive h-10 w-10"
          />,
        ]}
      />
    </div>
  );
}
