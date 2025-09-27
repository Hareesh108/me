import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WindowEventProvider } from "@/contexts/window-event-provider";
import { ThemeProvider } from "@/components/theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Hareesh Bhittam",
    template: "%s | Hareesh Bhittam",
  },
  description:
    "Full-stack developer specializing in React, Next.js, TypeScript, and Spring Boot.",
  keywords: [
    "Hareesh Bhittam",
    "React",
    "Next.js",
    "Spring Boot",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Hareesh Bhittam" }],
  openGraph: {
    title: "Hareesh Bhittam",
    description:
      "Full-stack developer specializing in modern web applications.",
    url: "https://hareesh.is-a.dev",
    siteName: "Hareesh Bhittam",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Hareesh Bhittam",
    description: "Full-stack developer portfolio",
    creator: "@hareesh_bhittam",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <WindowEventProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </WindowEventProvider>
      </body>
    </html>
  );
}
