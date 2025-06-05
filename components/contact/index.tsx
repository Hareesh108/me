import React from "react";
import { Button } from "../ui/button";

export default function ContactPage() {
  return (
    <div className="max-w-screen-lg mt-6 md:mt-10 mb-5 mx-4 lg:mx-auto bg-muted rounded-xl">
      <div className="flex flex-col items-center py-10 px-6 text-center">
        <div className="flex justify-center">
          <svg width="145" height="100" xmlns="http://www.w3.org/2000/svg">
            {/* Text */}
            <text
              x="10"
              y="40"
              fontFamily="Arial, sans-serif"
              fontSize="24"
              stroke="currentColor"
              fill="none"
            >
              Get in Touch
            </text>

            {/* Gradient Definition */}
            <defs>
              <linearGradient
                id="glowing-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#EB8317" stopOpacity="1">
                  <animate
                    attributeName="stop-color"
                    values="#EB8317; #F4F6FF; #EB8317"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#F4F6FF" stopOpacity="1">
                  <animate
                    attributeName="stop-color"
                    values="#F4F6FF; #EB8317; #F4F6FF"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            {/* Glowing Gradient Line */}
            <rect
              x="10"
              y="50"
              width="200"
              height="4"
              fill="url(#glowing-gradient)"
            />
          </svg>
        </div>

        <h5 className="-mt-4">
          Interested in working together or have a question? Feel free to reach
          out!
        </h5>
        <a href="mailto:hareeshbhittam@email.com">
          <Button className="w-32 font-bold mt-5" variant="default" size="lg">
            {" "}
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
}
