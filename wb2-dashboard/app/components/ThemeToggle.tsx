"use client";

import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button className="px-3 py-1.5 text-sm border border-border rounded-md">
        Loading...
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`
        px-4 py-2 text-[13px] rounded-md transition-all
        ${theme === "dark" 
          ? "bg-[#1f1f1f] border border-[#2f2f2f] text-foreground hover:bg-[#2f2f2f]" 
          : "bg-[#f5f5f5] border border-[#e5e5e5] text-foreground hover:bg-[#e5e5e5]"
        }
      `}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

