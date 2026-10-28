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
      className="bg-yellow-dots"
      style={{
        position: "relative",
        paddingTop: "3.5rem",
        paddingBottom: "5rem",
        borderBottom: "var(--border-thick)",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Column: Personal Brand & Editorial Impact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Top Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  backgroundColor: "var(--color-black)",
                  color: "var(--color-yellow)",
                  padding: "0.3rem 0.65rem",
                  borderRadius: "var(--radius-sm)",
                  border: "2px solid #000000",
                  boxShadow: "2px 2px 0 #000000",
                  letterSpacing: "0.04em"
                }}
              >
                <Terminal size={13} strokeWidth={2.5} />
                {siteConfig.badge}
              </span>

              {siteConfig.isAvailable && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    backgroundColor: "var(--color-white)",
                    color: "var(--color-charcoal)",
                    padding: "0.3rem 0.65rem",
                    borderRadius: "var(--radius-sm)",
                    border: "2px solid #000000",
                    boxShadow: "2px 2px 0 #000000"
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#16A34A",
                      display: "inline-block"
                    }}
                  />
                  {siteConfig.availability}
                </span>
              )}
            </div>

            {/* Giant Editorial Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
                color: "var(--color-charcoal)",
                textTransform: "uppercase"
              }}
            >
              BUILDING{" "}
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "var(--color-black)",
                  color: "var(--color-yellow)",
                  padding: "0 0.4rem",
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "4px 4px 0 #000000"
                }}
              >
                USEFUL
              </span>{" "}
              SOFTWARE.
              <br />
              MAKING AI{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2.5px #000000",
                  textShadow: "3px 3px 0 #FFE17C"
                }}
              >
                PRACTICAL.
              </span>
            </h1>

            {/* Supporting Intro Text */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
                lineHeight: 1.55,
                color: "var(--color-charcoal)",
                fontWeight: 500,
                maxWidth: "600px"
              }}
            >
              I'm <strong style={{ fontWeight: 800 }}>Giridharan</strong>, a Full Stack Developer and Generative AI enthusiast focused on building modern web applications, backend systems, and AI-powered experiences.
            </p>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.85rem",
                alignItems: "center",
                paddingTop: "0.5rem"
              }}
            >
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="btn-brutal btn-primary"
              >
                Explore My Projects
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="btn-brutal btn-secondary"
              >
                Let's Connect
              </a>

              <a
                href={siteConfig.resumeUrl}
                download="Giridharan_R_Resume.pdf"
                className="btn-brutal btn-outline"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  border: "2px solid #000000"
                }}
              >
                <Download size={16} strokeWidth={2.5} />
                Resume
              </a>
            </div>

            {/* Quick Tech Labels */}
            <div style={{ marginTop: "1rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "#3F4A42",
                  marginBottom: "0.5rem"
                }}
              >
                Core Engineering Stack:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {siteConfig.quickTech.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dark Developer Workspace */}
          <div style={{ width: "100%", maxWidth: "620px", justifySelf: "center" }}>
            <DeveloperWorkspace />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
