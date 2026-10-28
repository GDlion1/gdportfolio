import { ArrowUp, Mail, Download } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-charcoal)",
        color: "var(--color-white)",
        borderTop: "var(--border-thick)",
        padding: "3.5rem 0 2.5rem 0",
        position: "relative"
      }}
    >
      <div className="container">
        {/* Top Footer Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)"
          }}
        >
          {/* Brand Info */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                backgroundColor: "var(--color-black)",
                border: "2px solid var(--color-yellow)",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "3px 3px 0 #000000"
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.4rem",
                  color: "var(--color-yellow)",
                  letterSpacing: "-0.05em"
                }}
              >
                GD
              </span>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.35rem",
                  color: "var(--color-white)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.15rem"
                }}
              >
                GIRIDHARAN R
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--color-sage)",
                  letterSpacing: "0.04em"
                }}
              >
                FULL STACK DEVELOPER &amp; GENERATIVE AI ENGINEER
              </p>
            </div>
          </div>

          {/* Direct Social / Destination Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1.5px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-white)",
                transition: "var(--transition-tactile)"
              }}
              className="footer-icon-link"
            >
              <Github size={18} />
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1.5px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-white)",
                transition: "var(--transition-tactile)"
              }}
              className="footer-icon-link"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send Email"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1.5px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-white)",
                transition: "var(--transition-tactile)"
              }}
              className="footer-icon-link"
            >
              <Mail size={18} />
            </a>

            <a
              href={siteConfig.resumeUrl}
              download="Giridharan_R_Resume.pdf"
              className="btn-brutal btn-yellow"
              style={{ padding: "0.5rem 0.95rem", fontSize: "0.8rem", boxShadow: "3px 3px 0 #000000" }}
            >
              <Download size={14} /> Resume
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 0.9rem",
                backgroundColor: "var(--color-white)",
                color: "var(--color-black)",
                border: "2px solid #000000",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "0.8rem",
                cursor: "pointer",
                boxShadow: "3px 3px 0 #000000",
                transition: "var(--transition-tactile)"
              }}
            >
              Top <ArrowUp size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            color: "var(--color-sage)"
          }}
        >
          <div>
            &copy; {currentYear} Giridharan R. Built with React &amp; Lumina Neo-Brutalism.
          </div>
          <div>
            Information Science &amp; Engineering &bull; Bangalore, India
          </div>
        </div>
      </div>

      <style>{`
        .footer-icon-link:hover {
          background-color: var(--color-yellow) !important;
          color: var(--color-black) !important;
          border-color: #000000 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
