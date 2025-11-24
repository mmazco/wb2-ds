"use client";

import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { App, Category } from "../types";
import { useIsMobile } from "../hooks/useMediaQuery";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ScatterChartProps {
  apps: App[];
  onOpenModal: () => void;
  theme: "dark" | "light";
}

// Category colors
const categoryColors: Record<Category, string> = {
  "Financial & Asset Management": "#10b981", // green
  "Prediction & Data Markets": "#3b82f6", // blue
  "Gaming, Entertainment & Education": "#f59e0b", // orange
  "Social & Identity Tools": "#ec4899", // pink
  "Commerce & Attention": "#8b5cf6", // purple
};

export default function ScatterChart({ apps, onOpenModal, theme }: ScatterChartProps) {
  const isMobile = useIsMobile();
  const [chartKey, setChartKey] = useState(0);

  // Force re-render when theme changes
  useEffect(() => {
    setChartKey(prev => prev + 1);
  }, [theme]);

  const categories = Array.from(new Set(apps.map(app => app.category)));

  const datasets = categories.map(category => {
    const categoryApps = apps.filter(app => app.category === category);
    return {
      label: category,
      data: categoryApps.map(app => ({
        x: app.utilityScore,
        y: app.rewardsScore,
        label: app.name,
      })),
      backgroundColor: categoryColors[category],
      borderColor: categoryColors[category],
      pointRadius: isMobile ? 5 : 6,
      pointHoverRadius: isMobile ? 8 : 10,
      pointBorderWidth: 0,
    };
  });

  const gridColor = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "#e5e5e5";
  const axisColor = theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "#999";
  const textColor = theme === "dark" ? "#ffffff" : "#666";
  const labelColor = theme === "dark" ? "#ffffff" : "#333";

  const options: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "linear",
        min: 0,
        max: 100,
        border: {
          color: axisColor,
        },
        title: {
          display: true,
          text: "Utility Score",
          color: labelColor,
          font: {
            size: isMobile ? 12 : 14,
            weight: 600,
          },
        },
        grid: {
          color: gridColor,
        },
        ticks: {
          color: textColor,
          font: {
            size: isMobile ? 10 : 12,
          },
          callback: function(value) {
            return value + "%";
          },
        },
      },
      y: {
        type: "linear",
        min: 0,
        max: 100,
        border: {
          color: axisColor,
        },
        title: {
          display: true,
          text: "Rewards Dependency",
          color: labelColor,
          font: {
            size: isMobile ? 12 : 14,
            weight: 600,
          },
        },
        grid: {
          color: gridColor,
        },
        ticks: {
          color: textColor,
          font: {
            size: isMobile ? 10 : 12,
          },
          callback: function(value) {
            return value + "%";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          color: labelColor,
          font: {
            size: isMobile ? 10 : 12,
          },
          padding: isMobile ? 10 : 15,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: theme === "dark" ? "#141414" : "#ffffff",
        titleColor: theme === "dark" ? "#e5e5e5" : "#1a1a1a",
        bodyColor: theme === "dark" ? "#e5e5e5" : "#1a1a1a",
        borderColor: theme === "dark" ? "#1f1f1f" : "#e5e5e5",
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          title: function(context) {
            const dataPoint = context[0].raw as { label: string };
            return dataPoint.label;
          },
          label: function(context) {
            const dataPoint = context.raw as { x: number; y: number };
            return [
              `Utility: ${dataPoint.x}%`,
              `Rewards: ${dataPoint.y}%`
            ];
          },
        },
      },
    },
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          Utility vs Rewards Matrix
        </h2>
        <button
          onClick={onOpenModal}
          className="text-sm text-accent hover:text-accent/80 underline"
        >
          What does this mean?
        </button>
      </div>
      
      <div style={{ padding: "20px 0" }}>
        <div style={{ height: isMobile ? "400px" : "600px" }}>
          <Scatter key={chartKey} options={options} data={{ datasets }} />
        </div>
      </div>
    </div>
  );
}

