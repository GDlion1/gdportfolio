import { Compass, Code, Cpu, Rocket } from "lucide-react";

export default function WorkflowTimeline() {
  const steps = [
    {
      number: "01",
      title: "UNDERSTAND",
      icon: Compass,
      focus: "Requirements & User Journey",
      description: "Analyze the core user problem, business bottlenecks, and success metrics before writing a single line of code."
    },
    {
      number: "02",
      title: "ARCHITECT",
      icon: Cpu,
      focus: "Stack & Schema Design",
      description: "Select appropriate frameworks, map REST API endpoints, design relational or vector schemas, and define boundaries."
    },
    {
      number: "03",
      title: "BUILD",
      icon: Code,
      focus: "Full-Stack Implementation",
      description: "Implement responsive React UIs, resilient FastAPI endpoints, vector indexing with FAISS, and serverless webhooks."
    },
    {
      number: "04",
      title: "TEST & DEPLOY",
      icon: Rocket,
      focus: "Production Release",
      description: "Validate edge cases, test latency under realistic loads, configure custom DNS, and deploy on Vercel or containerized hosts."
    }
  ];

  return (
    <section id="workflow" className="section-wrapper bg-white">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">05 / HOW I BUILD</div>
          <h2 className="section-headline">FROM AN IDEA TO A WORKING APPLICATION.</h2>
          <p className="section-desc" style={{ color: "#333333" }}>
            A disciplined engineering lifecycle turning concepts into maintainable, observable software without skipping architectural fundamentals.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            position: "relative"
          }}
          className="workflow-step-grid"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isFirstOrLast = idx === 0 || idx === 3;

            return (
              <div
                key={step.number}
                className="brutal-card workflow-card"
                style={{
                  backgroundColor: isFirstOrLast ? "var(--color-yellow)" : "var(--color-neutral)",
                  padding: "2rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1.25rem",
                  position: "relative"
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.25rem"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 900,
                        fontSize: "1.75rem",
                        color: "var(--color-black)",
                        letterSpacing: "-0.05em"
                      }}
                    >
                      {step.number}
                    </span>

                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "var(--color-white)",
                        border: "var(--border-thick)",
                        borderRadius: "var(--radius-sm)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "2px 2px 0 #000000"
                      }}
                    >
                      <Icon size={20} strokeWidth={2.5} color="var(--color-charcoal)" />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "1.35rem",
                      textTransform: "uppercase",
                      color: "var(--color-charcoal)",
                      marginBottom: "0.4rem"
                    }}
                  >
                    {step.title}
                  </h3>

                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#4A5568",
                      marginBottom: "0.85rem"
                    }}
                  >
                    // {step.focus}
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.55,
                      color: "#2D3748"
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1.5px dashed rgba(0, 0, 0, 0.2)",
                    paddingTop: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700
                  }}
                >
                  <span>Deliverable</span>
                  <span>Phase {step.number} Ready &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
