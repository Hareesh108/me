"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDarkMode = resolvedTheme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      title={
        isDarkMode
          ? "Switch to light mode! Let there be light! ☀️"
          : "Embrace the dark side! We have cookies! 🌙"
      }
      className="h-45 w-45 p-1.5"
    >
      {isDarkMode ? (
        <Moon className="h-45 w-45" />
      ) : (
        <Sun className="h-45 w-45" />
      )}
    </button>
  );
}
