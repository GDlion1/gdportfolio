import { useState } from "react";
import { ExternalLink, ArrowRight, Cpu, ChevronRight } from "lucide-react";
import { Github } from "./Icons";
import { projectsData } from "../data/projectsData";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [viewFilter, setViewFilter] = useState("priority"); // "priority" or "all"
  const [activeRagStep, setActiveRagStep] = useState(0);

  const additionalProjects = projectsData.filter((p) => !p.featured);

  const auraProject = projectsData.find((p) => p.id === "auraxfitness");
  const ragProject = projectsData.find((p) => p.id === "rag-document-qa");
  const veraProject = projectsData.find((p) => p.id === "vera-ai-agent");

  return (
    <section id="projects" className="section-wrapper bg-white">
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.5rem"
          }}
        >
          <div>
            <div className="section-label">03 / SELECTED BUILDS</div>
            <h2 className="section-headline">REAL PROJECTS. PRACTICAL ENGINEERING.</h2>
            <p className="section-desc" style={{ color: "#333333" }}>
              Production deployments, Generative AI pipelines, and event-driven architectures built with Python, React, FastAPI, and modern LLMs.
            </p>
          </div>

          {/* Toggle between Resume Priority Projects and All Builds */}
          <div
            className="project-filter-toggle"
            style={{
              display: "inline-flex",
              border: "var(--border-thick)",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--color-neutral)",
              padding: "4px",
              boxShadow: "var(--shadow-sm)"
            }}
          >
            <button
              onClick={() => setViewFilter("priority")}
              style={{
                padding: "0.5rem 1rem",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "0.82rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: viewFilter === "priority" ? "var(--color-black)" : "transparent",
                color: viewFilter === "priority" ? "var(--color-yellow)" : "var(--color-charcoal)",
                transition: "var(--transition-tactile)"
              }}
            >
              ★ Top Priority (Resume)
            </button>
            <button
              onClick={() => setViewFilter("all")}
              style={{
                padding: "0.5rem 1rem",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "0.82rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: viewFilter === "all" ? "var(--color-black)" : "transparent",
                color: viewFilter === "all" ? "var(--color-yellow)" : "var(--color-charcoal)",
                transition: "var(--transition-tactile)"
              }}
            >
              All Builds ({projectsData.length})
            </button>
          </div>
        </div>

        {/* ---------------- PROJECT 01: AURA X FITNESS ---------------- */}
        {auraProject && (viewFilter === "priority" || viewFilter === "all") && (
          <div
            className="brutal-card-lg"
            style={{
              backgroundColor: "var(--color-white)",
              marginBottom: "3.5rem",
              overflow: "hidden"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem"
              }}
              className="featured-project-grid"
            >
              {/* Left Details */}
              <div
                className="project-details-body"
                style={{
                  padding: "clamp(1.25rem, 3.5vw, 2.25rem)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.5rem"
                }}
              >
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        backgroundColor: "var(--color-yellow)",
                        color: "var(--color-black)",
                        padding: "0.2rem 0.55rem",
                        border: "1.5px solid #000000",
                        borderRadius: "2px"
                      }}
                    >
                      PROJECT 01 // {auraProject.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        backgroundColor: "#16A34A",
                        color: "#FFFFFF",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "2px"
                      }}
                    >
                      ● LIVE PRODUCTION
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                      lineHeight: 1.05,
                      marginBottom: "0.5rem"
                    }}
                  >
                    {auraProject.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", fontWeight: 600, color: "#4A5568", marginBottom: "1rem" }}>
                    {auraProject.subtitle}
                  </p>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#2D3748", marginBottom: "1.25rem" }}>
                    {auraProject.description}
                  </p>

                  {/* Architecture Mini Flow */}
                  <div
                    style={{
                      backgroundColor: "var(--color-neutral)",
                      border: "1.5px solid #000000",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.85rem",
                      marginBottom: "1.25rem"
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 800, marginBottom: "0.4rem" }}>
                      TRANSACTION &amp; VERIFICATION PIPELINE:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.4rem", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                      <span style={{ backgroundColor: "#FFFFFF", padding: "0.2rem 0.45rem", border: "1px solid #000" }}>REACT UI</span>
                      <span>→</span>
                      <span style={{ backgroundColor: "#FFFFFF", padding: "0.2rem 0.45rem", border: "1px solid #000" }}>UPI QR ENGINE</span>
                      <span>→</span>
                      <span style={{ backgroundColor: "var(--color-yellow)", padding: "0.2rem 0.45rem", border: "1px solid #000", fontWeight: 700 }}>APPS SCRIPT WEBHOOK</span>
                      <span>→</span>
                      <span style={{ backgroundColor: "#FFFFFF", padding: "0.2rem 0.45rem", border: "1px solid #000" }}>ENTRY QR &amp; WHATSAPP</span>
                    </div>
                  </div>

                  {/* Tech stack chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {auraProject.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", paddingTop: "0.5rem", borderTop: "1.5px solid #E2E8F0" }}>
                  <a
                    href={auraProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-brutal btn-primary"
                  >
                    View Live Website
                    <ExternalLink size={16} strokeWidth={2.5} />
                  </a>

                  <button
                    onClick={() => setSelectedCaseStudy(auraProject)}
                    className="btn-brutal btn-secondary"
                  >
                    Read Case Study
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Right UI Preview Panel (Interactive CSS Mockup) */}
              <div
                style={{
                  backgroundColor: "var(--color-sage)",
                  borderLeft: "var(--border-thick)",
                  padding: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                className="preview-panel-sage"
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "460px",
                    backgroundColor: "var(--color-white)",
                    border: "var(--border-thick)",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "6px 6px 0 #000000",
                    overflow: "hidden"
                  }}
                >
                  {/* Browser Bar */}
                  <div
                    style={{
                      backgroundColor: "#171E19",
                      padding: "0.6rem 0.85rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "2px solid #000000"
                    }}
                  >
                    <div style={{ display: "flex", gap: "5px" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#27C93F" }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-yellow)" }}>
                      https://auraxfitness.in
                    </span>
                    <span style={{ fontSize: "0.65rem", color: "#8E9E99" }}>SSL</span>
                  </div>

                  {/* Mockup Screen Content */}
                  <div style={{ padding: "1.25rem", backgroundColor: "#0F1411", color: "#FFFFFF" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1rem", color: "#FFE17C", letterSpacing: "0.05em" }}>
                        AURA X ATHLETIC CLUB
                      </span>
                      <span style={{ fontSize: "0.7rem", backgroundColor: "rgba(255,255,255,0.1)", padding: "0.2rem 0.5rem", borderRadius: "2px" }}>
                        2,500 SQ.FT
                      </span>
                    </div>

                    {/* Booking Sub-app Preview */}
                    <div
                      style={{
                        backgroundColor: "#1A221D",
                        border: "1.5px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "4px",
                        padding: "0.85rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                        <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>ONE DAY PASS BOOKING</span>
                        <span style={{ fontSize: "0.75rem", color: "#FFE17C", fontWeight: 800 }}>LIVE UPI QR</span>
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#9CA3AF", marginBottom: "0.6rem" }}>
                        Student verification engine with base64 ID upload &amp; instant WhatsApp check-in dispatch.
                      </div>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <span style={{ fontSize: "0.7rem", backgroundColor: "#27342C", padding: "0.25rem 0.5rem", borderRadius: "2px" }}>
                          ✓ Token: AX-7892
                        </span>
                        <span style={{ fontSize: "0.7rem", backgroundColor: "#27342C", padding: "0.25rem 0.5rem", borderRadius: "2px" }}>
                          ✓ QR Check-in
                        </span>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.72rem", color: "#A0AEC0" }}>
                      <span>Vercel Edge &bull; Custom DNS</span>
                      <span style={{ color: "#27C93F" }}>● Production Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- PROJECT 02: AI PDF RAG SYSTEM ---------------- */}
        {ragProject && (viewFilter === "priority" || viewFilter === "all") && (
          <div
            className="brutal-card-lg"
            style={{
              backgroundColor: "var(--color-white)",
              marginBottom: "3.5rem",
              overflow: "hidden"
            }}
          >
            <div
              className="project-details-body"
              style={{ padding: "clamp(1.25rem, 3.5vw, 2.25rem)" }}
            >
              {/* Header Info */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        backgroundColor: "var(--color-charcoal)",
                        color: "var(--color-sage)",
                        padding: "0.2rem 0.55rem",
                        border: "1.5px solid #000000",
                        borderRadius: "2px"
                      }}
                    >
                      PROJECT 02 // {ragProject.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        backgroundColor: "var(--color-yellow)",
                        color: "var(--color-black)",
                        padding: "0.2rem 0.5rem",
                        border: "1px solid #000",
                        borderRadius: "2px"
                      }}
                    >
                      OPEN SOURCE PIPELINE
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                      lineHeight: 1.05,
                      marginBottom: "0.4rem"
                    }}
                  >
                    {ragProject.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", fontWeight: 600, color: "#4A5568" }}>
                    {ragProject.subtitle}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {ragProject.githubUrl && (
                    <a
                      href={ragProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-brutal btn-primary"
                    >
                      <Github size={16} />
                      Explore GitHub
                    </a>
                  )}
                  {ragProject.liveUrl && (
                    <a
                      href={ragProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-brutal btn-secondary"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCaseStudy(ragProject)}
                    className="btn-brutal btn-yellow"
                  >
                    Read Case Study
                  </button>
                </div>
              </div>

              {/* Technical Description */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem",
                  marginBottom: "2rem"
                }}
                className="rag-problem-expl"
              >
                <div style={{ backgroundColor: "var(--color-neutral)", padding: "1.25rem", border: "1.5px solid #000", borderRadius: "var(--radius-sm)" }}>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 800, color: "#C53030", marginBottom: "0.3rem" }}>
                    TECHNICAL PROBLEM STATEMENT:
                  </span>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.55, color: "#2D3748" }}>
                    "How can an application answer questions about a specific document rather than relying only on a language model's general knowledge?"
                  </p>
                </div>

                <div style={{ backgroundColor: "var(--color-neutral)", padding: "1.25rem", border: "1.5px solid #000", borderRadius: "var(--radius-sm)" }}>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 800, color: "#276749", marginBottom: "0.3rem" }}>
                    TECHNICAL EXPLANATION:
                  </span>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.55, color: "#2D3748" }}>
                    "The application extracts and segments document text, retrieves relevant chunks using vector similarity in FAISS, and supplies the retrieved context to Gemini when generating a response."
                  </p>
                </div>
              </div>

              {/* Interactive Horizontal RAG Architecture Pipeline */}
              <div
                style={{
                  backgroundColor: "var(--color-charcoal)",
                  color: "var(--color-white)",
                  border: "var(--border-thick)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  boxShadow: "var(--shadow-md)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Cpu size={17} color="var(--color-yellow)" />
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.95rem", color: "var(--color-yellow)" }}>
                      END-TO-END RAG RETRIEVAL PIPELINE
                    </span>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-sage)" }}>
                    Click a phase to explore
                  </span>
                </div>

                {/* Horizontal / Wrapped Step Flow */}
                <div
                  className="rag-steps-track"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                    gap: "0.5rem",
                    marginBottom: "1.25rem"
                  }}
                >
                  {ragProject.architecture.map((item, idx) => {
                    const isSelected = activeRagStep === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveRagStep(idx)}
                        style={{
                          textAlign: "left",
                          padding: "0.75rem 0.6rem",
                          borderRadius: "4px",
                          backgroundColor: isSelected ? "var(--color-yellow)" : "rgba(255,255,255,0.06)",
                          color: isSelected ? "var(--color-black)" : "var(--color-white)",
                          border: isSelected ? "2px solid #000000" : "1px solid rgba(255,255,255,0.15)",
                          cursor: "pointer",
                          transition: "var(--transition-tactile)"
                        }}
                      >
                        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 800, opacity: 0.8 }}>
                          0{idx + 1}
                        </span>
                        <strong style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "0.78rem", fontWeight: 850 }}>
                          {item.step}
                        </strong>
                      </button>
                    );
                  })}
                </div>

                {/* Active Step Detailed Explanation */}
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "4px",
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem"
                  }}
                >
                  <div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-yellow)", display: "block", marginBottom: "0.2rem" }}>
                      STEP 0{activeRagStep + 1}: {ragProject.architecture[activeRagStep].step}
                    </span>
                    <p style={{ fontSize: "0.85rem", color: "#E2E8F0", lineHeight: 1.45 }}>
                      {ragProject.architecture[activeRagStep].desc}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      backgroundColor: "rgba(255, 225, 124, 0.15)",
                      color: "var(--color-yellow)",
                      padding: "0.3rem 0.6rem",
                      border: "1px solid rgba(255, 225, 124, 0.3)",
                      borderRadius: "2px"
                    }}
                  >
                    Deterministic Pre-Retrieval
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---------------- PROJECT 03: V.E.R.A. (DARK CARD) ---------------- */}
        {veraProject && (viewFilter === "priority" || viewFilter === "all") && (
          <div
            className="brutal-card-lg"
            style={{
              backgroundColor: "var(--color-charcoal)",
              color: "var(--color-white)",
              marginBottom: "3.5rem",
              overflow: "hidden"
            }}
          >
            <div
              className="project-details-body"
              style={{ padding: "clamp(1.25rem, 3.5vw, 2.5rem)" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        backgroundColor: "var(--color-yellow)",
                        color: "var(--color-black)",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "2px"
                      }}
                    >
                      PROJECT 03 // {veraProject.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        backgroundColor: "rgba(255,255,255,0.1)",
                        color: "var(--color-sage)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "2px"
                      }}
                    >
                      {veraProject.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                      lineHeight: 1.05,
                      color: "var(--color-white)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    {veraProject.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", fontWeight: 600, color: "var(--color-sage)" }}>
                    {veraProject.subtitle}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <button
                    onClick={() => setSelectedCaseStudy(veraProject)}
                    className="btn-brutal btn-yellow"
                  >
                    Explore Project &amp; Architecture
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </button>
                  <a
                    href={veraProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-brutal btn-secondary"
                  >
                    <Github size={15} />
                    View GitHub
                  </a>
                </div>
              </div>

              <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#D1D5DB", maxWidth: "800px", marginBottom: "2rem" }}>
                {veraProject.description}
              </p>

              {/* VERA Capabilities Bento */}
              <div
                className="vera-capabilities-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
                  gap: "1.25rem",
                  marginBottom: "2rem"
                }}
              >
                {[
                  { title: "Voice-First Interaction", desc: "Low-latency WebRTC audio streaming to avoid cockpit touchscreen distraction." },
                  { title: "Real-time Telemetry Loop", desc: "Ingests battery SoC, geofences, and temperature via simulated MQTT broker." },
                  { title: "Contextual & People Memory", desc: "Remembers past driver preferences, passenger routines, and future messages." },
                  { title: "Proactive 'Before You Leave'", desc: "Calculates required battery charge against scheduled navigation routes." }
                ].map((cap, cIdx) => (
                  <div
                    key={cIdx}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1.5px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.15rem"
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-yellow)", display: "block", marginBottom: "0.3rem" }}>
                      0{cIdx + 1} // CAPABILITY
                    </span>
                    <strong style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--color-white)", display: "block", marginBottom: "0.35rem" }}>
                      {cap.title}
                    </strong>
                    <p style={{ fontSize: "0.82rem", color: "var(--color-sage)", lineHeight: 1.45 }}>
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips (Dark Theme) */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {veraProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      padding: "0.3rem 0.65rem",
                      backgroundColor: "var(--color-dark-surface)",
                      color: "var(--color-sage)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "var(--radius-sm)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ---------------- ADDITIONAL EXISTING BUILDS ---------------- */}
        {viewFilter === "all" && additionalProjects.length > 0 && (
          <div style={{ marginTop: "4rem" }}>
            <div style={{ marginBottom: "1.75rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 800, color: "#666666" }}>
                EXTENDED REPOSITORY BUILDS
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 850, fontSize: "1.75rem", textTransform: "uppercase" }}>
                ADDITIONAL ENGINEERING CREATIONS
              </h3>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem"
              }}
            >
              {additionalProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="brutal-card"
                  style={{
                    backgroundColor: "var(--color-white)",
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "1.25rem"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          backgroundColor: "var(--color-neutral)",
                          padding: "0.2rem 0.5rem",
                          border: "1px solid #000"
                        }}
                      >
                        {proj.category}
                      </span>
                      {proj.liveUrl && (
                        <span style={{ fontSize: "0.7rem", color: "#16A34A", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                          ● Live
                        </span>
                      )}
                    </div>

                    <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 850, fontSize: "1.35rem", marginBottom: "0.3rem" }}>
                      {proj.title}
                    </h4>
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#4A5568", marginBottom: "0.75rem" }}>
                      {proj.subtitle}
                    </p>
                    <p style={{ fontSize: "0.88rem", color: "#2D3748", lineHeight: 1.5, marginBottom: "1rem" }}>
                      {proj.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {proj.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-chip" style={{ fontSize: "0.72rem" }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "0.85rem" }}>
                    <button
                      onClick={() => setSelectedCaseStudy(proj)}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                        color: "var(--color-charcoal)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}
                    >
                      Details <ChevronRight size={15} />
                    </button>

                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            padding: "0.35rem 0.65rem",
                            border: "1.5px solid #000",
                            borderRadius: "2px",
                            backgroundColor: "var(--color-yellow)",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem"
                          }}
                        >
                          <ExternalLink size={12} /> Demo
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            padding: "0.35rem 0.65rem",
                            border: "1.5px solid #000",
                            borderRadius: "2px",
                            backgroundColor: "var(--color-white)",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem"
                          }}
                        >
                          <Github size={12} /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      <style>{`
        @media (min-width: 960px) {
          .featured-project-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
          .rag-problem-expl {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 959px) {
          .preview-panel-sage {
            border-left: none !important;
            border-top: var(--border-thick) !important;
            padding: clamp(1rem, 3vw, 1.75rem) !important;
          }
        }

        @media (max-width: 768px) {
          .rag-steps-track {
            display: flex !important;
            overflow-x: auto !important;
            white-space: nowrap !important;
            padding-bottom: 0.5rem !important;
            -webkit-overflow-scrolling: touch !important;
          }
          .rag-steps-track > button {
            min-width: 140px !important;
            flex-shrink: 0 !important;
          }
        }

        @media (max-width: 520px) {
          .project-filter-toggle {
            width: 100% !important;
            display: flex !important;
          }
          .project-filter-toggle button {
            flex: 1 !important;
            padding: 0.45rem 0.5rem !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
