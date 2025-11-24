export type Category = 
  | "Financial & Asset Management"
  | "Prediction & Data Markets"
  | "Gaming, Entertainment & Education"
  | "Social & Identity Tools"
  | "Commerce & Attention";

export interface App {
  name: string;
  category: Category;
  description: string;
  tag: string;
  metric: string;
  utilityScore: number;
  rewardsScore: number;
  appLink: string | null;
  demoLink: string | null;
  team: string;
}

export type TabType = "All Apps" | Category | "Utility vs Rewards";

export interface ChartDataPoint {
  x: number;
  y: number;
  label: string;
  category: Category;
}

