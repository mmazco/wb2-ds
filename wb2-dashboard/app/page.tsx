"use client";

import { useState, useMemo } from "react";
import { apps } from "./data/apps";
import { TabType, Category } from "./types";
import ScatterChart from "./components/ScatterChart";
import Modal from "./components/Modal";

const tabs: TabType[] = [
  "All Apps",
  "Financial & Asset Management",
  "Prediction & Data Markets",
  "Gaming, Entertainment & Education",
  "Social & Identity Tools",
  "Commerce & Attention",
  "Utility vs Rewards"
];

// External link icon
const ExternalIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <path d="M10.5 1.5L4.5 7.5M10.5 1.5H6.75M10.5 1.5V5.25M10.5 10.5H1.5V1.5H5.25" 
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("All Apps");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const filteredApps = useMemo(() => {
    if (activeTab === "All Apps" || activeTab === "Utility vs Rewards") {
      return apps;
    }
    return apps.filter(app => app.category === activeTab);
  }, [activeTab]);

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header */}
      <header className="header">
        <h1>WB2 BA DEMO DAY 11.15.2025</h1>
        <div className="header-right">
          <span>APPS: {apps.length}</span>
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`nav-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="main-container">
        {activeTab === "Utility vs Rewards" ? (
          <ScatterChart apps={apps} onOpenModal={() => setIsModalOpen(true)} theme={theme} />
        ) : (
          <>
            <div className="section-header">
              <h2 className="section-title">{activeTab}</h2>
              <span className="section-count">{filteredApps.length}</span>
            </div>

            <div className="apps-grid">
              {filteredApps.map((app) => (
                <article key={app.name} className="app-card">
                  <div className="app-card-header">
                    <h3 className="app-name">{app.name}</h3>
                    <div className="app-status">
                      <span className="status-dot"></span>
                      <span>LIVE</span>
                    </div>
                  </div>
                  
                  <span className="app-tag">{app.tag}</span>
                  
                  <p className="app-desc">{app.description}</p>
                  
                  {(app.appLink || app.demoLink) && (
                    <div className="app-links">
                      {app.appLink && (
                        <a href={app.appLink} target="_blank" rel="noopener noreferrer" className="app-link">
                          App <ExternalIcon />
                        </a>
                      )}
                      {app.demoLink && (
                        <a href={app.demoLink} target="_blank" rel="noopener noreferrer" className="app-link">
                          Demo <ExternalIcon />
                        </a>
                      )}
                    </div>
                  )}
                  
                  <div className="metrics-section">
                    <div className="metrics-label">Suggested Key Metrics for Growth</div>
                    <div className="metrics-value">{app.metric}</div>
                  </div>

                  {app.team && (
                    <div className="metrics-section">
                      <div className="metrics-label">Team</div>
                      <div className="metrics-value">{app.team}</div>
                    </div>
                  )}
                  
                  <div className="scores">
                    <div className="score-item">
                      <span className="score-label">Utility</span>
                      <span className="score-value">{app.utilityScore}%</span>
                    </div>
                    <div className="score-item">
                      <span className="score-label">Rewards</span>
                      <span className="score-value">{app.rewardsScore}%</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
