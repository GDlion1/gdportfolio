import { useState } from "react";
import { Mail, Phone, ExternalLink, Download, Copy, Check, Send } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [composerState, setComposerState] = useState({
    name: "",
    email: "",
    subject: "Full Stack / AI Opportunity",
    message: ""
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  const handleLaunchEmail = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Portfolio] ${composerState.subject || "Full Stack / AI Opportunity"}`);
    const mailtoBody = encodeURIComponent(
      `Hi Giridharan,\n\nName: ${composerState.name || "A recruiter / collaborator"}\nContact: ${composerState.email || "Not specified"}\n\nMessage:\n${composerState.message || "I came across your portfolio and would like to discuss an opportunity."}\n\nBest regards.`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="section-wrapper bg-yellow-dots">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">07 / LET'S CONNECT</div>
          <h2 className="section-headline">LET'S BUILD SOMETHING MEANINGFUL.</h2>
          <p className="section-desc" style={{ color: "var(--color-charcoal)" }}>
            I'm interested in opportunities where I can build useful software, develop backend systems, and apply Generative AI to practical problems.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem"
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Direct Recruiter Channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Direct Email Card */}
            <div
              className="brutal-card"
              style={{
                backgroundColor: "var(--color-white)",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "var(--color-yellow)",
                    border: "var(--border-thick)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "2px 2px 0 #000000"
                  }}
                >
                  <Mail size={22} color="var(--color-black)" strokeWidth={2.5} />
                </div>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#666666", fontWeight: 700 }}>
                    DIRECT EMAIL
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 850,
                      fontSize: "1.1rem",
                      color: "var(--color-charcoal)",
                      display: "block"
                    }}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(siteConfig.email, "email")}
                className="btn-brutal btn-secondary"
                style={{ padding: "0.5rem 0.85rem", fontSize: "0.78rem" }}
              >
                {copiedType === "email" ? <Check size={14} color="#16A34A" /> : <Copy size={14} />}
                {copiedType === "email" ? "Copied!" : "Copy Email"}
              </button>
            </div>

            {/* Direct Phone Card */}
            <div
              className="brutal-card"
              style={{
                backgroundColor: "var(--color-white)",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "var(--color-sage)",
                    border: "var(--border-thick)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "2px 2px 0 #000000"
                  }}
                >
                  <Phone size={20} color="var(--color-black)" strokeWidth={2.5} />
                </div>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#666666", fontWeight: 700 }}>
                    DIRECT PHONE / WHATSAPP
                  </span>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 850,
                      fontSize: "1.1rem",
                      color: "var(--color-charcoal)",
                      display: "block"
                    }}
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(siteConfig.phone, "phone")}
                className="btn-brutal btn-secondary"
                style={{ padding: "0.5rem 0.85rem", fontSize: "0.78rem" }}
              >
                {copiedType === "phone" ? <Check size={14} color="#16A34A" /> : <Copy size={14} />}
                {copiedType === "phone" ? "Copied!" : "Copy Phone"}
              </button>
            </div>

            {/* LinkedIn & GitHub Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="brutal-card"
                style={{
                  backgroundColor: "var(--color-white)",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 800, color: "#0077B5" }}>
                    LINKEDIN
                  </span>
                  <ExternalLink size={14} />
                </div>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>
                  Connect on LinkedIn &rarr;
                </strong>
                <span style={{ fontSize: "0.78rem", color: "#666666" }}>
                  View full recommendations &amp; posts
                </span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="brutal-card"
                style={{
                  backgroundColor: "var(--color-white)",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 800, color: "#171E19" }}>
                    GITHUB
                  </span>
                  <ExternalLink size={14} />
                </div>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}>
                  Inspect Codebase &rarr;
                </strong>
                <span style={{ fontSize: "0.78rem", color: "#666666" }}>
                  Public repositories &amp; commits
                </span>
              </a>
            </div>

            {/* Resume Download Action Banner */}
            <div
              className="brutal-card"
              style={{
                backgroundColor: "var(--color-charcoal)",
                color: "var(--color-white)",
                padding: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem"
              }}
            >
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-yellow)", fontWeight: 700 }}>
                  OFFICIAL RESUME
                </span>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 850, fontSize: "1.15rem", marginTop: "0.2rem" }}>
                  Giridharan_R_Resume.pdf
                </div>
                <span style={{ fontSize: "0.78rem", color: "var(--color-sage)" }}>
                  Verified 2026 ISE Graduate &bull; Bangalore
                </span>
              </div>

              <a
                href={siteConfig.resumeUrl}
                download="Giridharan_R_Resume.pdf"
                className="btn-brutal btn-yellow"
                style={{ padding: "0.6rem 1.15rem", fontSize: "0.85rem" }}
              >
                <Download size={16} strokeWidth={2.5} />
                Download PDF
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Composer (100% Functional Native Mailto) */}
          <div
            className="brutal-card-lg"
            style={{
              backgroundColor: "var(--color-white)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span
                  style={{
                    backgroundColor: "var(--color-yellow)",
                    border: "1px solid #000",
                    padding: "0.15rem 0.45rem",
                    borderRadius: "2px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    fontWeight: 800
                  }}
                >
                  DIRECT CLIENT DISPATCH
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#666666" }}>
                  // Zero-Spam / Verified Delivery
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.5rem", textTransform: "uppercase" }}>
                Send A Quick Message
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#4A5568" }}>
                Draft your inquiry below to trigger a pre-filled email directly to <strong>{siteConfig.email}</strong>.
              </p>
            </div>

            <form onSubmit={handleLaunchEmail} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }} className="composer-row">
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                    YOUR NAME:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hiring Manager"
                    value={composerState.name}
                    onChange={(e) => setComposerState({ ...composerState, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      border: "var(--border-thick)",
                      borderRadius: "var(--radius-sm)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      backgroundColor: "var(--color-neutral)"
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                    YOUR EMAIL:
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. recruiter@company.com"
                    value={composerState.email}
                    onChange={(e) => setComposerState({ ...composerState, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.85rem",
                      border: "var(--border-thick)",
                      borderRadius: "var(--radius-sm)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      backgroundColor: "var(--color-neutral)"
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                  SUBJECT:
                </label>
                <input
                  type="text"
                  value={composerState.subject}
                  onChange={(e) => setComposerState({ ...composerState, subject: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.85rem",
                    border: "var(--border-thick)",
                    borderRadius: "var(--radius-sm)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    backgroundColor: "var(--color-neutral)"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                  MESSAGE:
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about the engineering role, team, or project requirements..."
                  value={composerState.message}
                  onChange={(e) => setComposerState({ ...composerState, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.85rem",
                    border: "var(--border-thick)",
                    borderRadius: "var(--radius-sm)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    backgroundColor: "var(--color-neutral)",
                    resize: "vertical"
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-brutal btn-primary"
                style={{ width: "100%", padding: "0.85rem" }}
              >
                <Send size={16} />
                Launch In Default Email Client
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-layout-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .composer-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
