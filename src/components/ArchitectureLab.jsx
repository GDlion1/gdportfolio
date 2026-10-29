import { useState } from "react";
import { architectureSystems } from "../data/architectureData";
import { ArrowRight, Layers, RefreshCw } from "lucide-react";

export default function ArchitectureLab() {
  const [selectedSystemId, setSelectedSystemId] = useState("rag");
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);

  const activeSystem = architectureSystems.find((s) => s.id === selectedSystemId) || architectureSystems[0];
  const activeNode = activeSystem.nodes[selectedNodeIndex] || activeSystem.nodes[0];

  const handleSystemChange = (sysId) => {
    setSelectedSystemId(sysId);
    setSelectedNodeIndex(0);
  };

  return (
    <section id="architecture" className="section-wrapper bg-charcoal" style={{ color: "var(--color-white)" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ backgroundColor: "var(--color-yellow)", color: "var(--color-black)" }}>
            04 / SYSTEM DESIGN
          </div>
          <h2 className="section-headline" style={{ color: "var(--color-white)" }}>
            UNDER THE HOOD.
          </h2>
          <p className="section-desc" style={{ color: "var(--color-sage)" }}>
            Interactive blueprint demonstrations exploring how full-stack platforms, vector retrieval pipelines, and voice agents operate at the systems level.
          </p>
        </div>

        {/* System View Switcher Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "2.5rem"
          }}
        >
          {architectureSystems.map((sys) => {
            const isSelected = selectedSystemId === sys.id;
            return (
              <button
                key={sys.id}
                onClick={() => handleSystemChange(sys.id)}
                className="btn-brutal"
                style={{
                  backgroundColor: isSelected ? "var(--color-yellow)" : "rgba(255, 255, 255, 0.06)",
                  color: isSelected ? "var(--color-black)" : "var(--color-white)",
                  border: isSelected ? "2px solid #000000" : "1.5px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: isSelected ? "4px 4px 0 #FFE17C" : "none",
                  padding: "0.75rem 1.4rem",
                  fontSize: "0.9rem"
                }}
              >
                <Layers size={16} />
                {sys.title}
              </button>
            );
          })}
        </div>

        {/* System Overview Card */}
        <div
          style={{
            backgroundColor: "#111713",
            border: "1.5px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "var(--radius-sm)",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-yellow)", display: "block", marginBottom: "0.25rem" }}>
              ACTIVE BLUEPRINT: {activeSystem.systemType}
            </span>
            <p style={{ fontSize: "0.95rem", color: "var(--color-sage)", margin: 0 }}>
              {activeSystem.description}
            </p>
          </div>

          <button
            onClick={() => setSelectedNodeIndex(0)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--color-yellow)",
              backgroundColor: "rgba(255, 225, 124, 0.1)",
              padding: "0.4rem 0.75rem",
              border: "1px solid rgba(255, 225, 124, 0.3)",
              borderRadius: "2px"
            }}
          >
            <RefreshCw size={13} />
            Reset Flow
          </button>
        </div>

        {/* Architecture Grid: Interactive Pipeline Flow (Left) + Node Inspector (Right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem"
          }}
          className="architecture-lab-grid"
        >
          {/* Nodes Pipeline */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--color-sage)", marginBottom: "0.75rem" }}>
              // SELECT ANY PIPELINE STAGE TO INSPECT DATA CONTRACTS:
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {activeSystem.nodes.map((node, nIdx) => {
                const isSelected = selectedNodeIndex === nIdx;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeIndex(nIdx)}
                    style={{
                      backgroundColor: isSelected ? "var(--color-yellow)" : "rgba(255, 255, 255, 0.04)",
                      color: isSelected ? "var(--color-black)" : "var(--color-white)",
                      border: isSelected ? "2px solid #000000" : "1.5px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1rem 1.25rem",
                      cursor: "pointer",
                      boxShadow: isSelected ? "5px 5px 0 #000000" : "none",
                      transform: isSelected ? "translateX(4px)" : "none",
                      transition: "var(--transition-tactile)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem"
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                            fontWeight: 800,
                            padding: "0.1rem 0.4rem",
                            borderRadius: "2px",
                            backgroundColor: isSelected ? "var(--color-black)" : "rgba(255, 255, 255, 0.1)",
                            color: isSelected ? "var(--color-yellow)" : "var(--color-sage)"
                          }}
                        >
                          {node.tag}
                        </span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", opacity: 0.8 }}>
                          {node.tech}
                        </span>
                      </div>
                      <strong style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 850 }}>
                        {node.name}
                      </strong>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.8rem", fontWeight: 700 }}>
                      {isSelected ? "Inspecting" : "Select"}
                      <ArrowRight size={15} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node Inspector Panel */}
          <div
            className="inspector-panel-container"
            style={{
              backgroundColor: "var(--color-dark-surface)",
              border: "var(--border-thick)",
              borderRadius: "var(--radius-md)",
              padding: "clamp(1.25rem, 3.5vw, 2rem)",
              boxShadow: "var(--shadow-xl)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.75rem"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    backgroundColor: "var(--color-yellow)",
                    color: "var(--color-black)",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "2px"
                  }}
                >
                  COMPONENT INSPECTOR
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-sage)" }}>
                  {activeNode.tag}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "1.65rem",
                  color: "var(--color-white)",
                  marginBottom: "0.35rem"
                }}
              >
                {activeNode.name}
              </h3>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-yellow)", marginBottom: "1.25rem" }}>
                Technology: {activeNode.tech}
              </div>

              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#E2E8F0", marginBottom: "1.5rem" }}>
                {activeNode.summary}
              </p>

              {/* Data Contracts */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.85rem"
                  }}
                >
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-yellow)", fontWeight: 700, marginBottom: "0.2rem" }}>
                    INPUT CONTRACT:
                  </span>
                  <code style={{ fontSize: "0.78rem", color: "#A0AEC0", wordBreak: "break-word" }}>
                    {activeNode.inputs}
                  </code>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.85rem"
                  }}
                >
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#27C93F", fontWeight: 700, marginBottom: "0.2rem" }}>
                    OUTPUT CONTRACT:
                  </span>
                  <code style={{ fontSize: "0.78rem", color: "#A0AEC0", wordBreak: "break-word" }}>
                    {activeNode.outputs}
                  </code>
                </div>
              </div>

              {/* Engineering Trade-offs / In-depth Detail */}
              <div
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                  paddingTop: "1rem"
                }}
              >
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-sage)", fontWeight: 700, marginBottom: "0.35rem" }}>
                  ENGINEERING CONSIDERATIONS:
                </span>
                <p style={{ fontSize: "0.88rem", color: "#CBD5E0", lineHeight: 1.55 }}>
                  {activeNode.details}
                </p>
              </div>
            </div>

            {/* Next Step Control */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                paddingTop: "1rem"
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-sage)" }}>
                Stage {selectedNodeIndex + 1} of {activeSystem.nodes.length}
              </span>

              <button
                onClick={() => {
                  setSelectedNodeIndex((prev) => (prev + 1) % activeSystem.nodes.length);
                }}
                className="btn-brutal btn-yellow"
                style={{ padding: "0.45rem 1rem", fontSize: "0.8rem", boxShadow: "3px 3px 0 #000000" }}
              >
                Next Step
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .architecture-lab-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
          .inspector-panel-container {
            position: sticky !important;
            top: 90px !important;
          }
        }
        @media (max-width: 991px) {
          .inspector-panel-container {
            position: relative !important;
            top: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
