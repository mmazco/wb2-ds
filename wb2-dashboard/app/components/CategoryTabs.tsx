"use client";

import { TabType } from "../types";

interface CategoryTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  categoryCounts: Record<string, number>;
}

const tabs: TabType[] = [
  "All Apps",
  "Financial & Asset Management",
  "Prediction & Data Markets",
  "Gaming, Entertainment & Education",
  "Social & Identity Tools",
  "Commerce & Attention",
  "Utility vs Rewards"
];

export default function CategoryTabs({ activeTab, onTabChange, categoryCounts }: CategoryTabsProps) {
  return (
    <nav className="border-b border-border bg-background">
      <div className="max-w-[1400px] mx-auto pl-10 pr-10">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`
                  py-3 px-4 text-sm whitespace-nowrap transition-all
                  bg-transparent border-b-2 -mb-[1px]
                  ${isActive 
                    ? "border-accent text-foreground font-medium" 
                    : "border-transparent text-muted hover:text-foreground"
                  }
                `}
                role="tab"
                aria-selected={isActive}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

