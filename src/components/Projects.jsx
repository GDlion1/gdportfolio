import { useState } from "react";
import { ExternalLink, ZoomIn, X, Info } from "lucide-react";
import { Github } from "./Icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: "StudySync AI",
      subtitle: "AI-Powered Personalized Learning",
      description: "An AI platform generating study roadmaps and summaries based on user topics. Features interactive progress tracking.",
      extendedDescription: "StudySync AI leverages AI engines to construct structured, step-by-step learning roadmaps. Users enter a topic, and the platform utilizes custom prompting models to chunk it into modules, complete with summaries, key concepts, and quiz prompts. Developed the complete Django backend, configured the SQLite database schema, designed clean frontend templates using CSS Grid/Flexbox, and integrated AJAX-based reactive updates.",
      tech: ["Python", "Django", "SQLite", "JavaScript", "CSS3", "AI Integration"],
      demoUrl: "https://studysync-ten-xi.vercel.app/",
      githubUrl: null,
      imageColor: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
      highlights: [
        "Dynamic roadmapping powered by LLM summaries",
        "Interactive module completion checkmarks and progress tracking",
        "Fully responsive dashboard layout styled with CSS3",
        "Asynchronous search and load via JavaScript Fetch API"
      ]
    },
    {
      title: "TripMate Travel Platform",
      subtitle: "All-in-One Booking Service",
      description: "A travel booking platform for hotels, transport, and holiday packages with user history tracking and dashboard utilities.",
      extendedDescription: "TripMate is a full-featured travel planner. It covers package searches, hotel availability checks, transit bookings, and payment routing mockups. The backend handles complex queries to aggregate travel options, tracks booking states per user session, and logs transactions safely. Engineered models, built template pages, and established a dashboard containing past receipts and upcoming plans.",
      tech: ["Python", "Django", "JavaScript", "SQLite", "CSS3", "Git"],
      demoUrl: null,
      githubUrl: "https://github.com/GDlion1/Tripmate",
      imageColor: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
      highlights: [
        "Structured relational SQLite database schema for hotels & transits",
        "Session-based booking checkout and history validation",
        "Clean filter UI to search travel packages by budget, region, and dates",
        "Comprehensive admin panel to manage inventory and user logs"
      ]
    },
    {
      title: "AI-Doc Extraction System",
      subtitle: "NLP-Based Document Classifier",
      description: "An enterprise document processing system to extract, classify, and summarize scanned PDF or image records.",
      extendedDescription: "This advanced system processes unstructured documents (invoices, receipts, legal texts) using Optical Character Recognition (OCR) and Natural Language Processing. Scanned images are run through Tesseract OCR, classified into templates using BERT tokenizers, and parsed with GPT-4 APIs to extract key-value data fields. FastAPI acts as the high-throughput bridge connecting the React frontend with backend deep learning nodes.",
      tech: ["ReactJS", "FastAPI", "BERT", "GPT-4", "OCR (Tesseract)", "SQL"],
      demoUrl: null,
      githubUrl: null,
      imageColor: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
      highlights: [
        "FastAPI backend optimizing asynchronous OCR processing pipelines",
        "Multi-class text classification using custom BERT embeddings",
        "JSON key-value validation on GPT-4 outputs to ensure database format matching",
        "React dashboard containing upload status bar, data diff-check viewer, and CSV exporter"
      ]
    }
  ];

  return (
    <section id="projects" style={{ position: "relative" }}>
      <div className="container">
        <h2 className="section-title">Featured Creations</h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "-1.5rem auto 3rem auto",
            fontSize: "1rem"
          }}
        >
          A selection of projects bridging AI, full-stack engineering, and modern web architectures.
        </p>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "2.5rem"
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="glass-card glow-card"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                cursor: "pointer"
              }}
              onClick={() => setSelectedProject(project)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              {/* Visual Card Top */}
              <div
                style={{
                  height: "200px",
                  background: project.imageColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Diagonal lines or accent overlays */}
                <div
                  style={{
                    position: "absolute",
                    width: "150%",
                    height: "100%",
                    background: "linear-gradient(rgba(255,255,255,0.05), transparent)",
                    transform: "rotate(-12deg) translateY(-30px)"
                  }}
                />
                
                {/* Floating Project Tag */}
                <span
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 600
                  }}
                >
                  {project.tech[0]}
                </span>

                <div
                  className="card-icon-overlay"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "white"
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      textShadow: "0 4px 12px rgba(0,0,0,0.25)",
                      textAlign: "center",
                      padding: "0 1rem"
                    }}
                  >
                    {project.title}
                  </h3>
                  <span style={{ fontSize: "0.85rem", opacity: 0.9, fontWeight: 500 }}>
                    {project.subtitle}
                  </span>
                </div>
                
                <div
                  className="card-hover-hint"
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <ZoomIn size={14} />
                  Click to Explore
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "space-between",
                  gap: "1.5rem"
                }}
              >
                <div>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      marginBottom: "1.25rem",
                      lineHeight: 1.5
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {project.tech.slice(0, 4).map((tech, tIdx) => (
                      <span key={tIdx} className="tag-badge">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span
                        className="tag-badge"
                        style={{
                          background: "rgba(59, 130, 246, 0.12)",
                          color: "var(--primary)",
                          fontWeight: 700
                        }}
                      >
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid var(--card-border)",
                    paddingTop: "1rem"
                  }}
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--secondary)",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      padding: 0
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <Info size={14} />
                    Project Details
                  </button>

                  <div style={{ display: "flex", gap: "0.75rem" }} onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link-btn"
                        title="View Source on GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link-btn"
                        title="Open Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive Glassmorphic Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(3, 7, 18, 0.8)",
            backdropFilter: "blur(8px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem"
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel modal-content"
            style={{
              width: "100%",
              maxWidth: "650px",
              maxHeight: "85vh",
              overflowY: "auto",
              position: "relative",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Cover Image */}
            <div
              style={{
                height: "180px",
                background: selectedProject.imageColor,
                position: "relative",
                padding: "2rem",
                display: "flex",
                alignItems: "flex-end"
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: "rgba(0, 0, 0, 0.4)",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}
                className="modal-close-btn"
              >
                <X size={18} />
              </button>
              
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "white",
                    fontWeight: 800,
                    lineHeight: 1.2
                  }}
                >
                  {selectedProject.title}
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.95rem", fontWeight: 500 }}>
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem", color: "#a78bfa" }}>
                  Project Overview
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {selectedProject.extendedDescription}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.75rem", color: "#a78bfa" }}>
                  Key Features & Implementation
                </h4>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem"
                  }}
                >
                  {selectedProject.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem"
                      }}
                    >
                      <span style={{ color: "var(--secondary)", fontWeight: "bold" }}>✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Utilized */}
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.75rem", color: "#a78bfa" }}>
                  Technologies Used
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedProject.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: "rgba(99, 102, 241, 0.08)",
                        border: "1px solid rgba(99, 102, 241, 0.15)",
                        color: "#a78bfa",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "6px",
                        fontSize: "0.8rem",
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project External Links */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  paddingTop: "1.5rem",
                  marginTop: "0.5rem"
                }}
              >
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                    style={{ fontSize: "0.9rem", padding: "0.6rem 1.25rem" }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-button"
                    style={{ fontSize: "0.9rem", padding: "0.6rem 1.25rem" }}
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .glass-card:hover .card-hover-hint {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .project-link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .project-link-btn:hover {
          color: white;
          background: rgba(6, 182, 212, 0.15);
          border-color: rgba(6, 182, 212, 0.3);
          transform: scale(1.05);
        }
        .modal-close-btn:hover {
          background: rgba(0, 0, 0, 0.6) !important;
        }
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }
        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
