"use client";

import React from "react";

import { Skills } from "./skills";
import { BACKEND_SKILLS, DEVOPS_SKILLS, FRONTEND_SKILLS } from "@/lib/utils";
export default function AboutMePage() {
  return (
    <div
      id="about-me"
      className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center md:items-start justify-center max-w-screen-xl mx-4 lg:mx-auto bg-muted p-3 py-5 md:p-10 md:py-8 rounded-xl dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
    >
      <div className="flex flex-col gap-2 items-center md:items-start ">
        <p className="text-lg md:text-xl text-center">
          I’m a Software Engineer at{" "}
          <a href="https://reldyn.co" target="_black">
            <span className="text-primary hover:text-pink-600 font-bold">
              RELDYN.
            </span>
          </a>
        </p>

        <div className="space-y-4 mx-2 lg:mx-auto">
          <h3 className="text-lg ">Expertise</h3>
          <Skills skills={FRONTEND_SKILLS} />
          <Skills skills={DEVOPS_SKILLS} />
          <Skills skills={BACKEND_SKILLS} />
        </div>
      </div>

      <div className="flex flex-col gap-2 items-start mx-2 lg:mx-auto">
        <h1 className="text-lg md:text-3xl font-bold">Hire me as developer.</h1>

        <p className="opacity-70">
          With extensive experience in building production ready applications.{" "}
          <br /> I am well equipped to bring your next project to life with
          precision and care. Let’s work together to create something
          exceptional.
        </p>

        <h1 className="text-lg md:text-3xl font-bold">Book a consultation.</h1>

        <p className="opacity-70">
          Looking for guidance on your project? Book a consultation to gain
          valuable insights and clarity for your next steps.{" "}
        </p>
      </div>
    </div>
  );
}
