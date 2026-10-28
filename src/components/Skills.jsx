import { skillCategories } from "../data/skillsData";
import { Server, Layout, Sparkles, Database, Wrench, Binary } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case "backend":
        return Server;
      case "frontend":
        return Layout;
      case "genai":
        return Sparkles;
      case "databases":
        return Database;
      case "tools":
        return Wrench;
      case "cs":
        return Binary;
      default:
        return Server;
    }
  };

  return (
    <section id="skills" className="section-wrapper bg-yellow-dots">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">02 / ENGINEERING TOOLKIT</div>
          <h2 className="section-headline">TOOLS I USE TO BUILD AND SHIP.</h2>
          <p className="section-desc" style={{ color: "var(--color-charcoal)" }}>
            A verified inventory of technologies, frameworks, and engineering competencies drawn directly from hands-on project implementations.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem"
          }}
        >
          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isHighlightCard = cat.id === "genai" || cat.id === "backend";

            return (
              <div
                key={cat.id}
                className="brutal-card skill-bento-card"
                style={{
                  backgroundColor: isHighlightCard ? "var(--color-white)" : "var(--color-white)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.25rem",
                  position: "relative"
                }}
              >
                <div>
                  {/* Card Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem"
                    }}
                  >
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
                        boxShadow: "3px 3px 0 #000000",
                        transition: "var(--transition-tactile)"
                      }}
                      className="skill-icon-box"
                    >
                      <Icon size={22} strokeWidth={2.2} color="var(--color-charcoal)" />
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        backgroundColor: "var(--color-neutral)",
                        border: "1.5px solid #000000",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "var(--radius-sm)"
                      }}
                    >
                      {cat.number}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 850,
                      fontSize: "1.35rem",
                      marginBottom: "0.45rem",
                      color: "var(--color-charcoal)"
                    }}
                  >
                    {cat.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#4A5568",
                      lineHeight: 1.5,
                      marginBottom: "1.25rem"
                    }}
                  >
                    {cat.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="skill-pill"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          padding: "0.3rem 0.6rem",
                          backgroundColor: "var(--color-neutral)",
                          border: "1.5px solid #000000",
                          borderRadius: "var(--radius-sm)",
                          boxShadow: "2px 2px 0 #000000",
                          transition: "var(--transition-tactile)",
                          display: "inline-block"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight Indicator */}
                <div
                  style={{
                    borderTop: "1.5px dashed rgba(0, 0, 0, 0.2)",
                    paddingTop: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem"
                  }}
                >
                  <span style={{ color: "#666666" }}>Key Focus:</span>
                  <span
                    style={{
                      fontWeight: 700,
                      backgroundColor: "var(--color-yellow)",
                      padding: "0.15rem 0.45rem",
                      border: "1px solid #000000",
                      borderRadius: "2px"
                    }}
                  >
                    {cat.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skill-bento-card:hover .skill-icon-box {
          background-color: var(--color-yellow) !important;
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0 #000000 !important;
        }

        .skill-bento-card:hover .skill-pill:hover {
          background-color: var(--color-yellow) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
