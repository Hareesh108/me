import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-screen-lg mt-6 md:mt-10 mb-5 mx-4 lg:mx-auto">
      <footer
        className="w-full py-4 text-center flex md:flex-row flex-col md:justify-between justify-start gap-4"
        style={{
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
        }}
      >
        <div className="flex space-x-4 justify-center">
          <Link
            href="https://www.linkedin.com/in/hareeshbhittam/"
            target="_blank"
          >
            <FaLinkedin
              size={24}
              className="text-primary hover:text-destructive"
            />
          </Link>
          <Link href="https://x.com/hareesh_bhittam" target="_blank">
            <FaTwitter
              size={24}
              className="text-primary hover:text-destructive"
            />
          </Link>
          <Link href="https://github.com/Hareesh108" target="_blank">
            <FaGithub
              size={24}
              className="text-primary hover:text-destructive"
            />
          </Link>
          <Link href="https://www.instagram.com/_harsh_20.6/" target="_blank">
            <FaInstagram
              size={24}
              className="text-primary hover:text-destructive"
            />
          </Link>
        </div>
        <div>
          Created by{" "}
          <a href="https://www.linkedin.com/in/hareeshbhittam/" target="_black">
            <span className="font-bold text-primary hover:text-destructive">
              Me
            </span>
          </a>{" "}
          | © 2025 All rights reserved.
        </div>
      </footer>
    </div>
  );
}
