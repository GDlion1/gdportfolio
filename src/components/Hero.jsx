import { ArrowRight, Download, Terminal } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import DeveloperWorkspace from "./DeveloperWorkspace";

export default function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-yellow-dots hero-section"
      style={{
        position: "relative",
        paddingTop: "clamp(1.75rem, 4vw, 3.5rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 5rem)",
        borderBottom: "var(--border-thick)",
        overflow: "hidden",
        width: "100%"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2rem, 4vw, 3.5rem)",
            alignItems: "center",
            width: "100%",
            minWidth: 0
          }}
          className="hero-grid"
        >
          {/* Left Column: Personal Brand & Editorial Impact */}
          <div
            className="hero-left-col"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(1rem, 2.5vw, 1.35rem)",
              width: "100%",
              minWidth: 0
            }}
          >
            {/* Top Badges */}
            <div
              className="hero-badge-group"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                alignItems: "center",
                width: "100%"
              }}
            >
              <span
                className="hero-badge-item"
                style={{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: "0.4rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.68rem, 2.4vw, 0.75rem)",
                  fontWeight: 700,
                  backgroundColor: "var(--color-black)",
                  color: "var(--color-yellow)",
                  padding: "0.3rem 0.65rem",
                  borderRadius: "var(--radius-sm)",
                  border: "2px solid #000000",
                  boxShadow: "2px 2px 0 #000000",
                  letterSpacing: "0.02em",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                  lineHeight: 1.35
                }}
              >
                <Terminal size={12} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ wordBreak: "break-word" }}>{siteConfig.badge}</span>
              </span>

              {siteConfig.isAvailable && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(0.68rem, 2.4vw, 0.75rem)",
                    fontWeight: 700,
                    backgroundColor: "var(--color-white)",
                    color: "var(--color-charcoal)",
                    padding: "0.3rem 0.65rem",
                    borderRadius: "var(--radius-sm)",
                    border: "2px solid #000000",
                    boxShadow: "2px 2px 0 #000000",
                    maxWidth: "100%",
                    boxSizing: "border-box",
                    lineHeight: 1.35
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: "#16A34A",
                      display: "inline-block",
                      flexShrink: 0
                    }}
                  />
                  <span>{siteConfig.availability}</span>
                </span>
              )}
            </div>

            {/* Giant Editorial Headline - Mobile Responsive Lines */}
            <h1 className="hero-headline">
              <span className="hero-headline-row hero-line-1">
                BUILDING{" "}
                <span className="hero-useful-badge">
                  USEFUL
                </span>
              </span>{" "}
              <span className="hero-headline-row hero-line-2">
                SOFTWARE.
              </span>
              <br className="hero-desktop-break" />
              <span className="hero-headline-row hero-line-3">
                MAKING AI{" "}
                <span className="hero-practical-outline">
                  PRACTICAL.
                </span>
              </span>
            </h1>

            {/* Supporting Intro Text */}
            <p className="hero-intro-text">
              I'm <strong style={{ fontWeight: 800 }}>Giridharan</strong>, a Full Stack Developer and Generative AI enthusiast focused on building modern web applications, backend systems, and AI-powered experiences.
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-actions-row">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="btn-brutal btn-primary hero-btn"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={16} strokeWidth={2.5} style={{ flexShrink: 0 }} />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="btn-brutal btn-secondary hero-btn"
              >
                <span>Let's Connect</span>
              </a>

              <a
                href={siteConfig.resumeUrl}
                download="Giridharan_R_Resume.pdf"
                className="btn-brutal btn-outline hero-btn"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  border: "2px solid #000000"
                }}
              >
                <Download size={15} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span>Resume</span>
              </a>
            </div>

            {/* Quick Tech Labels */}
            <div style={{ marginTop: "0.25rem", width: "100%" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#3F4A42",
                  marginBottom: "0.45rem"
                }}
              >
                Core Engineering Stack:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {siteConfig.quickTech.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dark Developer Workspace */}
          <div
            className="hero-workspace-col"
            style={{
              width: "100%",
              maxWidth: "620px",
              justifySelf: "center",
              minWidth: 0
            }}
          >
            <DeveloperWorkspace />
          </div>
        </div>
      </div>

      <style>{`
        .hero-headline {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: clamp(2.3rem, 5.2vw, 4.4rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: var(--color-charcoal);
          text-transform: uppercase;
          word-break: break-word;
          overflow-wrap: break-word;
          margin: 0;
          width: 100%;
        }

        .hero-useful-badge {
          display: inline-block;
          background-color: var(--color-black);
          color: var(--color-yellow);
          padding: 0 0.4rem;
          border-radius: var(--radius-sm);
          box-shadow: 3px 3px 0 #000000;
          vertical-align: baseline;
        }

        .hero-practical-outline {
          color: transparent;
          -webkit-text-stroke: 2px #000000;
          text-shadow: 2px 2px 0 #FFE17C;
        }

        .hero-intro-text {
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          line-height: 1.6;
          color: var(--color-charcoal);
          font-weight: 500;
          max-width: 600px;
          margin: 0;
        }

        .hero-actions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
          padding-top: 0.25rem;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .hero-headline {
            font-size: clamp(1.75rem, 7.8vw, 2.35rem) !important;
            line-height: 1.14 !important;
            letter-spacing: -0.025em !important;
          }
          .hero-headline-row {
            display: block !important;
          }
          .hero-desktop-break {
            display: none !important;
          }
          .hero-useful-badge {
            padding: 0.05rem 0.35rem !important;
            box-shadow: 2px 2px 0 #000000 !important;
          }
          .hero-practical-outline {
            -webkit-text-stroke: 1.5px #000000 !important;
            text-shadow: 1.5px 1.5px 0 #FFE17C !important;
          }
          .hero-actions-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.65rem !important;
          }
          .hero-btn {
            width: 100% !important;
            box-sizing: border-box !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 0.8rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
