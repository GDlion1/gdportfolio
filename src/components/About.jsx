import { CheckCircle } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function About() {
  const workflowTiles = [
    { step: "01", name: "IDEA", desc: "User needs & requirements" },
    { step: "02", name: "ARCHITECTURE", desc: "Data models & API boundaries" },
    { step: "03", name: "IMPLEMENTATION", desc: "Frontend & backend logic" },
    { step: "04", name: "INTEGRATION", desc: "Vector stores & webhooks" },
    { step: "05", name: "DEPLOYMENT", desc: "Vercel, Docker & monitoring" }
  ];

  return (
    <section id="about" className="section-wrapper bg-white">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">01 / ABOUT</div>
          <h2 className="section-headline">
            AN ENGINEER FOCUSED ON BUILDING THINGS THAT WORK.
          </h2>
          <p className="section-desc" style={{ color: "#333333" }}>
            {siteConfig.aboutText}
          </p>
        </div>

        {/* Visual Engineering Workflow Strip */}
        <div style={{ marginBottom: "4.5rem" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#555555",
              marginBottom: "1rem"
            }}
          >
            // ENGINEERING LIFECYCLE:
          </div>

          <div
            className="lifecycle-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
              gap: "1rem",
              position: "relative"
            }}
          >
            {workflowTiles.map((tile, idx) => (
              <div
                key={tile.step}
                className="brutal-card"
                style={{
                  backgroundColor: idx % 2 === 0 ? "var(--color-yellow)" : "var(--color-neutral)",
                  padding: "1.25rem",
                  position: "relative"
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--color-black)",
                    marginBottom: "0.35rem"
                  }}
                >
                  PHASE {tile.step}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    color: "var(--color-black)",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.25rem"
                  }}
                >
                  {tile.name}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#333333",
                    lineHeight: 1.4
                  }}
                >
                  {tile.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "WHAT I FOCUS ON" Bento Grid */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem"
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#555555",
                  letterSpacing: "0.08em",
                  display: "block",
                  marginBottom: "0.3rem"
                }}
              >
                CORE PRINCIPLES
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 850,
                  fontSize: "1.75rem",
                  textTransform: "uppercase"
                }}
              >
                WHAT I FOCUS ON
              </h3>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "#666666"
              }}
            >
              Practical Craft &bull; Zero Fluff
            </span>
          </div>

          <div
            className="focus-areas-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "1.25rem"
            }}
          >
            {siteConfig.focusAreas.map((focus, idx) => (
              <div
                key={idx}
                className="brutal-card focus-card"
                style={{
                  backgroundColor: "var(--color-white)",
                  padding: "clamp(1.15rem, 3vw, 1.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  position: "relative"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      backgroundColor: "var(--color-sage)",
                      border: "2px solid #000000",
                      borderRadius: "var(--radius-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "2px 2px 0 #000000",
                      transition: "var(--transition-tactile)"
                    }}
                    className="focus-icon-box"
                  >
                    <CheckCircle size={18} strokeWidth={2.5} color="#171E19" />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#888888"
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    color: "var(--color-charcoal)"
                  }}
                >
                  {focus.title}
                </h4>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#4A5568",
                    lineHeight: 1.55
                  }}
                >
                  {focus.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .focus-card:hover .focus-icon-box {
          background-color: var(--color-yellow) !important;
          transform: rotate(6deg);
        }
      `}</style>
    </section>
  );
}
