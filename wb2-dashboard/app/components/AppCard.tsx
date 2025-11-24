"use client";

import { App } from "../types";

interface AppCardProps {
  app: App;
}

// External link icon SVG
const ExternalLinkIcon = () => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 12 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block ml-1 align-middle"
  >
    <path 
      d="M10.5 1.5L4.5 7.5M10.5 1.5H6.75M10.5 1.5V5.25M10.5 10.5H1.5V1.5H5.25" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function AppCard({ app }: AppCardProps) {
  return (
    <article className="bg-card border border-border rounded-lg p-5 transition-all hover:border-muted hover:-translate-y-0.5 cursor-pointer">
      {/* Header with name, arrow, tag, and LIVE status */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-base font-semibold text-foreground">
            {app.name}
          </h2>
          <span className="text-muted">→</span>
          <span className="text-tag-text font-medium text-sm">
            {app.tag}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-status shrink-0">
          <div className="w-1.5 h-1.5 bg-status rounded-full"></div>
          <span>LIVE</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[13px] leading-relaxed text-muted mb-2">
        {app.description}
      </p>

      {/* Buttons */}
      {(app.appLink || app.demoLink) && (
        <div className="flex gap-2 mb-4">
          {app.appLink && (
            <a
              href={app.appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent px-2.5 py-1.5 border border-accent rounded transition-all hover:bg-accent hover:text-white inline-flex items-center"
            >
              App
              <ExternalLinkIcon />
            </a>
          )}
          {app.demoLink && (
            <a
              href={app.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent px-2.5 py-1.5 border border-accent rounded transition-all hover:bg-accent hover:text-white inline-flex items-center"
            >
              Demo
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      )}

      {/* Metrics */}
      <div className="mb-3">
        <h3 className="text-[10px] uppercase text-muted font-semibold tracking-wide mb-1">
          Suggested Key Metrics for Growth
        </h3>
        <p className="text-xs text-foreground leading-relaxed">
          {app.metric}
        </p>
      </div>

      {/* Scores */}
      <div className="flex gap-6">
        <div>
          <div className="text-[10px] text-muted uppercase mb-0.5">
            Utility
          </div>
          <div className="text-base font-bold text-foreground">
            {app.utilityScore}%
          </div>
        </div>
        <div>
          <div className="text-[10px] text-muted uppercase mb-0.5">
            Rewards
          </div>
          <div className="text-base font-bold text-foreground">
            {app.rewardsScore}%
          </div>
        </div>
      </div>
    </article>
  );
}

