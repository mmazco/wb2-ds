"use client";

import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  appCount: number;
}

export default function Header({ appCount }: HeaderProps) {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto pl-10 pr-10">
        <div className="flex items-center justify-between py-5">
          <h1 className="text-lg font-semibold tracking-tight">
            WB2 BA DEMO DAY 11.15.2025
          </h1>
          
          <div className="flex items-center gap-5 text-[13px] text-muted">
            <span>APPS: {appCount}</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

