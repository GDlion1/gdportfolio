import { useEffect, useRef } from "react";
import { X, ExternalLink, Code, CheckCircle, AlertTriangle, Layers } from "lucide-react";
import { Github } from "./Icons";

export default function CaseStudyModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        backgroundColor: "rgba(23, 30, 25, 0.8)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem"
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        ref={modalRef}
        style={{
          width: "100%",
          maxWidth: "860px",
          maxHeight: "90vh",
          backgroundColor: "var(--color-white)",
          border: "var(--border-thick)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "12px 12px 0 #000000",
          overflowY: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Modal Top Header Bar */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "var(--color-yellow)",
            borderBottom: "var(--border-thick)",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 800,
                backgroundColor: "var(--color-black)",
                color: "var(--color-yellow)",
                padding: "0.2rem 0.5rem",
                borderRadius: "2px"
              }}
            >
              TECHNICAL CASE STUDY
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#333333" }}>
              // {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study"
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "var(--color-black)",
              color: "var(--color-yellow)",
              border: "2px solid #000000",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "2px 2px 0 #000000"
            }}
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: "1.75rem 1.5rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Title & Value Proposition */}
          <div>
            <h2
              id="case-study-title"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)",
                lineHeight: 1.1,
                marginBottom: "0.4rem",
                color: "var(--color-charcoal)"
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#4A5568" }}>
              {project.subtitle}
            </p>
          </div>

          {/* Action Links Bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-brutal btn-primary"
                style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem" }}
              >
                <ExternalLink size={15} />
                View Live Platform
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-brutal btn-secondary"
                style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem" }}
              >
                <Github size={15} />
                Explore Source Code
              </a>
            ) : (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  padding: "0.55rem 1rem",
                  backgroundColor: "var(--color-neutral)",
                  border: "1.5px solid #000000",
                  borderRadius: "var(--radius-sm)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem"
                }}
              >
                🔒 {project.repoStatus}
              </span>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#666666",
                marginBottom: "0.5rem"
              }}
            >
              DEPLOYED TECHNOLOGIES:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          {project.architecture && (
            <div
              style={{
                backgroundColor: "var(--color-neutral)",
                border: "var(--border-thick)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.1rem"
                }}
              >
                <Layers size={18} />
                IMPLEMENTED ARCHITECTURE FLOW
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      backgroundColor: "var(--color-white)",
                      border: "1.5px solid #000000",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.75rem 1rem",
                      boxShadow: "2px 2px 0 #000000"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                        backgroundColor: "var(--color-yellow)",
                        padding: "0.1rem 0.4rem",
                        border: "1px solid #000000",
                        borderRadius: "2px",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Step 0{idx + 1}
                    </span>
                    <div>
                      <strong style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem" }}>
                        {item.step}
                      </strong>
                      <p style={{ fontSize: "0.85rem", color: "#4A5568", marginTop: "0.2rem" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }} className="problem-sol-grid">
            <div
              style={{
                backgroundColor: "var(--color-white)",
                border: "var(--border-thick)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
                boxShadow: "4px 4px 0 #000000"
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#C53030",
                  display: "block",
                  marginBottom: "0.3rem"
                }}
              >
                PROBLEM STATEMENT
              </span>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#2D3748" }}>
                {project.technicalStory.problem}
              </p>
            </div>

            <div
              style={{
                backgroundColor: "var(--color-white)",
                border: "var(--border-thick)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
                boxShadow: "4px 4px 0 #000000"
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#276749",
                  display: "block",
                  marginBottom: "0.3rem"
                }}
              >
                ENGINEERED SOLUTION
              </span>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#2D3748" }}>
                {project.technicalStory.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 850,
                fontSize: "1.25rem",
                marginBottom: "0.85rem",
                textTransform: "uppercase"
              }}
            >
              DOCUMENTED CAPABILITIES &amp; DELIVERABLES
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {project.keyFeatures.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    fontSize: "0.92rem",
                    lineHeight: 1.5,
                    color: "#2D3748"
                  }}
                >
                  <CheckCircle size={17} color="#16A34A" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet if applicable */}
          {project.technicalStory.codeSnippet && (
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem"
                }}
              >
                <Code size={15} />
                IMPLEMENTATION CODE SAMPLE:
              </div>
              <div
                style={{
                  backgroundColor: "var(--color-charcoal)",
                  color: "var(--color-white)",
                  border: "var(--border-thick)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1rem",
                  overflowX: "auto",
                  boxShadow: "4px 4px 0 #000000"
                }}
              >
                <pre style={{ margin: 0, fontSize: "0.78rem", lineHeight: 1.55 }}>
                  <code>{project.technicalStory.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Known Limitations / Transparent Engineering */}
          {project.technicalStory.limitations && (
            <div
              style={{
                backgroundColor: "#FFFBEB",
                border: "2px solid #D97706",
                borderRadius: "var(--radius-sm)",
                padding: "1rem",
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start"
              }}
            >
              <AlertTriangle size={20} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong style={{ display: "block", fontSize: "0.85rem", color: "#92400E", fontFamily: "var(--font-display)" }}>
                  ENGINEERING SCOPE &amp; BOUNDARIES:
                </strong>
                <p style={{ fontSize: "0.85rem", color: "#78350F", marginTop: "0.2rem", lineHeight: 1.5 }}>
                  {project.technicalStory.limitations}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Close Action */}
        <div
          style={{
            borderTop: "var(--border-thick)",
            backgroundColor: "var(--color-neutral)",
            padding: "1rem 1.5rem",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <button
            onClick={onClose}
            className="btn-brutal btn-secondary"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
