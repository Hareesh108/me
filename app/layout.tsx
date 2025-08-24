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
  title: "Hareesh Bhittam",
  description: "",
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
          {/* <BottomNavbar /> */}
          <ThemeProvider>{children}</ThemeProvider>
        </WindowEventProvider>
      </body>
    </html>
  );
}
