"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          maxWidth: "700px",
          width: "100%",
          maxHeight: "85vh",
          overflowY: "auto",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          padding: "20px 24px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}>
          <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#1a1a1a", margin: 0 }}>
            Understanding the Utility vs Rewards Matrix
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              color: "#888",
              cursor: "pointer",
              padding: 0,
              lineHeight: 1,
            }}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
          {/* What This Chart Shows */}
          <section style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1a1a1a", marginBottom: "12px" }}>
              What This Chart Shows
            </h3>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0 }}>
              This matrix maps every World Build app based on two critical dimensions: how much real utility 
              they provide, and how dependent they are on token rewards to drive user behavior.
            </p>
          </section>

          {/* The Axes Explained */}
          <section style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1a1a1a", marginBottom: "12px" }}>
              The Axes Explained
            </h3>
            
            <div style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "12px",
            }}>
              <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a1a", marginBottom: "8px" }}>
                X-Axis: Utility Score (0-100%)
              </h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.5, margin: 0 }}>
                How much real-world value does the app provide WITHOUT token rewards? Apps on the right solve 
                actual problems (lending, commerce, identity). Apps on the left only work if you pay users to engage.
              </p>
            </div>
            
            <div style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
              padding: "16px",
            }}>
              <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a1a", marginBottom: "8px" }}>
                Y-Axis: Rewards Dependency (0-100%)
              </h4>
              <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.5, margin: 0 }}>
                How dependent is the app on token incentives to drive behavior? Apps at the top are "earn-to-engage" 
                models requiring constant rewards. Apps at the bottom have organic usage patterns.
              </p>
            </div>
          </section>

          {/* The Four Quadrants */}
          <section style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1a1a1a", marginBottom: "12px" }}>
              The Four Quadrants
            </h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div style={{
                backgroundColor: "#f9f9f9",
                border: "1px solid #e5e5e5",
                borderLeft: "3px solid #10b981",
                borderRadius: "8px",
                padding: "16px",
              }}>
                <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#10b981", marginBottom: "8px" }}>
                  Bottom-Right: Sustainable
                </h4>
                <p style={{ fontSize: "12px", color: "#666", lineHeight: 1.5, margin: 0 }}>
                  High utility, low rewards dependency. These apps solve real problems and users come for 
                  the utility, not tokens. Most likely to succeed long-term.
                </p>
              </div>
              
              <div style={{
                backgroundColor: "#f9f9f9",
                border: "1px solid #e5e5e5",
                borderLeft: "3px solid #ef4444",
                borderRadius: "8px",
                padding: "16px",
              }}>
                <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#ef4444", marginBottom: "8px" }}>
                  Top-Left: Danger Zone
                </h4>
                <p style={{ fontSize: "12px", color: "#666", lineHeight: 1.5, margin: 0 }}>
                  Low utility, high rewards dependency. Token farming apps with no real value proposition. 
                  Will die when rewards dry up.
                </p>
              </div>
              
              <div style={{
                backgroundColor: "#f9f9f9",
                border: "1px solid #e5e5e5",
                borderLeft: "3px solid #f59e0b",
                borderRadius: "8px",
                padding: "16px",
              }}>
                <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#f59e0b", marginBottom: "8px" }}>
                  Top-Right: Hybrid Model
                </h4>
                <p style={{ fontSize: "12px", color: "#666", lineHeight: 1.5, margin: 0 }}>
                  High utility AND high rewards. Using tokens to bootstrap a genuinely useful product. Can 
                  work if they convert paid attention to organic behavior.
                </p>
              </div>
              
              <div style={{
                backgroundColor: "#f9f9f9",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
                padding: "16px",
              }}>
                <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#888", marginBottom: "8px" }}>
                  Bottom-Left: Rare
                </h4>
                <p style={{ fontSize: "12px", color: "#666", lineHeight: 1.5, margin: 0 }}>
                  Low utility, low rewards. These don&apos;t really exist - without utility OR rewards, 
                  there&apos;s no reason to use the app.
                </p>
              </div>
            </div>
          </section>

          {/* The Key Question */}
          <section style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1a1a1a", marginBottom: "12px" }}>
              The Key Question
            </h3>
            <p style={{ fontSize: "14px", color: "#1a1a1a", fontWeight: 500, marginBottom: "8px" }}>
              If token rewards went to zero tomorrow, would users still come back?
            </p>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0 }}>
              This is the ultimate test. Apps in the bottom-right pass this test. Apps in the top-left fail 
              spectacularly. The challenge for hybrid models is converting paid attention into lasting habits.
            </p>
          </section>

          {/* What This Means for Demo Day */}
          <section>
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1a1a1a", marginBottom: "12px" }}>
              What This Means for Demo Day
            </h3>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0 }}>
              Investors are looking for apps in the <span style={{ fontWeight: 600, color: "#10b981" }}>bottom-right quadrant</span> - 
              sustainable utility with token rewards as an accelerant, not a crutch. If your app is in the top-left, 
              you need to articulate a clear path to building real utility.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
