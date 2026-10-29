import { useState, useEffect } from "react";
import { Cpu } from "lucide-react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const totalDuration = 2400; // 2.4 seconds - perfectly moderate (2-3 seconds)
    const intervalTime = 30;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 350); // allow fadeout animation to complete
      }, 200);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  // Derived status text and step based on progress
  let statusText;
  let statusStep;
  if (progress < 25) {
    statusText = "BOOTING SYSTEM RUNTIME...";
    statusStep = 1;
  } else if (progress < 55) {
    statusText = "INDEXING RAG PIPELINE & FAISS...";
    statusStep = 2;
  } else if (progress < 85) {
    statusText = "CONNECTING FASTAPI SERVICES...";
    statusStep = 3;
  } else {
    statusText = "SYSTEM READY // LAUNCHING EXPERIENCE";
    statusStep = 4;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "var(--color-yellow)",
        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.12) 1.5px, transparent 1.5px)",
        backgroundSize: "32px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.25rem",
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? "translateY(-12px)" : "none",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        pointerEvents: isFadingOut ? "none" : "auto"
      }}
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Central Neo-Brutalist Loading Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          backgroundColor: "var(--color-charcoal)",
          border: "var(--border-thick)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "8px 8px 0 #000000",
          overflow: "hidden",
          color: "var(--color-white)",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Terminal Window Header Bar */}
        <div
          style={{
            backgroundColor: "#111713",
            borderBottom: "var(--border-thick)",
            padding: "0.75rem 1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#FF5F56", border: "1px solid #E0443E" }} />
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#FFBD2E", border: "1px solid #DEA123" }} />
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#27C93F", border: "1px solid #1AAB29" }} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--color-sage)",
                marginLeft: "0.4rem"
              }}
            >
              SYS_INIT // GD_KERNEL
            </span>
          </div>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              fontWeight: 700,
              backgroundColor: "rgba(255, 225, 124, 0.15)",
              color: "var(--color-yellow)",
              padding: "0.15rem 0.5rem",
              borderRadius: "2px",
              border: "1px solid rgba(255, 225, 124, 0.3)"
            }}
          >
            v2.6.0
          </span>
        </div>

        {/* Card Body */}
        <div style={{ padding: "2rem 1.75rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Brand Monogram & Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                backgroundColor: "var(--color-black)",
                border: "2px solid var(--color-yellow)",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "4px 4px 0 #FFE17C",
                flexShrink: 0
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.65rem",
                  color: "var(--color-yellow)",
                  letterSpacing: "-0.05em"
                }}
              >
                GD
              </span>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.45rem",
                  color: "var(--color-white)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em"
                }}
              >
                GIRIDHARAN R
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--color-sage)",
                  marginTop: "0.25rem",
                  letterSpacing: "0.02em"
                }}
              >
                FULL STACK &amp; GENERATIVE AI
              </p>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.6rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem"
              }}
            >
              <span style={{ color: "var(--color-sage)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <Cpu size={14} color="var(--color-yellow)" />
                INITIALIZING...
              </span>
              <span style={{ color: "var(--color-yellow)", fontWeight: 800 }}>
                {Math.round(progress)}%
              </span>
            </div>

            {/* Brutalist Progress Track */}
            <div
              style={{
                width: "100%",
                height: "16px",
                backgroundColor: "#111713",
                border: "2px solid #000000",
                borderRadius: "3px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "2px 2px 0 #000000"
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "var(--color-yellow)",
                  transition: "width 0.08s ease-out",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 8px, transparent 8px, transparent 16px)"
                }}
              />
            </div>
          </div>

          {/* Status Step Ticker */}
          <div
            style={{
              backgroundColor: "#111713",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "4px",
              padding: "0.75rem 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.5rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: progress >= 100 ? "#27C93F" : "#FFBD2E",
                  display: "inline-block"
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "#E2E8F0",
                  letterSpacing: "0.03em"
                }}
              >
                {statusText}
              </span>
            </div>

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--color-sage)"
              }}
            >
              0{statusStep}/04
            </span>
          </div>
        </div>

        {/* Footer Strip */}
        <div
          style={{
            backgroundColor: "#111713",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "0.5rem 1.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "var(--color-sage)"
          }}
        >
          <span>BANGALORE // 2026 GRAD</span>
          <button
            onClick={() => {
              setIsFadingOut(true);
              setTimeout(() => onComplete && onComplete(), 200);
            }}
            style={{
              color: "var(--color-yellow)",
              textDecoration: "underline",
              fontSize: "0.68rem",
              fontFamily: "inherit",
              cursor: "pointer"
            }}
          >
            Skip &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
