import { GraduationCap, Award, Briefcase } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Education() {
  return (
    <section id="background" className="section-wrapper bg-yellow-dots">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">06 / BACKGROUND</div>
          <h2 className="section-headline">EDUCATION, TRAINING &amp; CERTIFICATIONS.</h2>
          <p className="section-desc" style={{ color: "var(--color-charcoal)" }}>
            Academic credentials, professional full-stack training, and verified technical assessments.
          </p>
        </div>

        {/* 3-Column Bento Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1.25rem, 3vw, 2rem)"
          }}
          className="background-grid"
        >
          {/* Card 1: Academic Degrees */}
          <div
            className="brutal-card"
            style={{
              backgroundColor: "var(--color-white)",
              padding: "clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.75rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: "var(--color-yellow)",
                  border: "var(--border-thick)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "3px 3px 0 #000000"
                }}
              >
                <GraduationCap size={22} color="var(--color-charcoal)" strokeWidth={2.5} />
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "#666666" }}>
                  FORMAL ACADEMICS
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 850, fontSize: "1.35rem" }}>
                  Engineering Degree
                </h3>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {siteConfig.education.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    borderLeft: "3px solid #000000",
                    paddingLeft: "1rem",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.25rem",
                      flexWrap: "wrap",
                      gap: "0.25rem"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        backgroundColor: "var(--color-neutral)",
                        padding: "0.15rem 0.45rem",
                        border: "1px solid #000",
                        borderRadius: "2px"
                      }}
                    >
                      {edu.period}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        backgroundColor: "var(--color-yellow)",
                        padding: "0.15rem 0.45rem",
                        border: "1px solid #000",
                        borderRadius: "2px"
                      }}
                    >
                      {edu.grade}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem", marginTop: "0.4rem" }}>
                    {edu.institution}
                  </h4>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#4A5568", marginBottom: "0.4rem" }}>
                    {edu.degree}
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "#666666", lineHeight: 1.45 }}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Professional Training & Internship */}
          <div
            className="brutal-card"
            style={{
              backgroundColor: "var(--color-white)",
              padding: "clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.75rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.5rem"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "var(--color-sage)",
                    border: "var(--border-thick)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "3px 3px 0 #000000"
                  }}
                >
                  <Briefcase size={20} color="var(--color-charcoal)" strokeWidth={2.5} />
                </div>
                <div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "#666666" }}>
                    HANDS-ON EXPERIENCE
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 850, fontSize: "1.35rem" }}>
                    Internship Training
                  </h3>
                </div>
              </div>

              {siteConfig.training.map((train, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--color-neutral)",
                    border: "1.5px solid #000000",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.25rem",
                    boxShadow: "3px 3px 0 #000000"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 800, backgroundColor: "#171E19", color: "#FFE17C", padding: "0.15rem 0.45rem", borderRadius: "2px" }}>
                      YEAR {train.year}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 700, color: "#16A34A" }}>
                      ● COMPLETED
                    </span>
                  </div>

                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 850, fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                    {train.title}
                  </h4>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#4A5568", marginBottom: "0.75rem" }}>
                    {train.organization}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#2D3748", lineHeight: 1.5 }}>
                    {train.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: "rgba(255, 225, 124, 0.2)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                padding: "0.85rem",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#2D3748"
              }}
            >
              <strong>Focus Areas:</strong> Python REST backends, schema design, database integration &amp; front-end wiring.
            </div>
          </div>

          {/* Card 3: HackerRank Verified Certifications */}
          <div
            className="brutal-card"
            style={{
              backgroundColor: "var(--color-white)",
              padding: "clamp(1.25rem, 3vw, 2rem) clamp(1rem, 2.5vw, 1.75rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: "var(--color-yellow)",
                  border: "var(--border-thick)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "3px 3px 0 #000000"
                }}
              >
                <Award size={22} color="var(--color-charcoal)" strokeWidth={2.5} />
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 700, color: "#666666" }}>
                  SKILL VALIDATION
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 850, fontSize: "1.35rem" }}>
                  Certifications
                </h3>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {siteConfig.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--color-neutral)",
                    border: "1.5px solid #000000",
                    borderRadius: "var(--radius-sm)",
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    boxShadow: "2px 2px 0 #000000"
                  }}
                >
                  <div>
                    <strong style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", display: "block" }}>
                      {cert.name}
                    </strong>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#666666" }}>
                      Issued by {cert.issuer}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      backgroundColor: "var(--color-yellow)",
                      color: "var(--color-black)",
                      padding: "0.2rem 0.5rem",
                      border: "1px solid #000",
                      borderRadius: "2px",
                      whiteSpace: "nowrap"
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "auto",
                borderTop: "1.5px dashed rgba(0, 0, 0, 0.2)",
                paddingTop: "1rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#666666"
              }}
            >
              Evaluated on standard algorithmic problem solving, relational SQL querying, and Python syntactical logic.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
