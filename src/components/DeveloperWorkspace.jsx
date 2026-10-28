import { useState } from "react";
import { Terminal, Layout, Cpu, Server, CheckCircle2, Copy, Check, Play } from "lucide-react";

export default function DeveloperWorkspace() {
  const [activeTab, setActiveTab] = useState("code"); // code, ui, pipeline, deployment
  const [copied, setCopied] = useState(false);
  const [activePipelineStep, setActivePipelineStep] = useState(2);

  const tabs = [
    { id: "code", label: "api_service.py", icon: Terminal },
    { id: "ui", label: "client_preview", icon: Layout },
    { id: "pipeline", label: "rag_pipeline.flow", icon: Cpu },
    { id: "deployment", label: "system_status", icon: Server }
  ];

  const codeString = `from fastapi import FastAPI, UploadFile
from rag_engine import FAISSIndex, GeminiEmbeddings, LLMSynthesizer

app = FastAPI(title="RAG Document QA Service")
vector_store = FAISSIndex.load_local("indexes/faiss_docs")
embedder = GeminiEmbeddings(model="models/embedding-001")

@app.post("/api/v1/query-doc")
async def query_document(question: str, top_k: int = 4):
    """Retrieve relevant chunks and synthesize grounded answer"""
    # 1. Transform question into semantic vector
    query_vector = embedder.embed_query(question)
    
    # 2. Sub-millisecond similarity search in FAISS
    chunks, distances = vector_store.similarity_search(query_vector, k=top_k)
    
    # 3. Assemble bounded context cage for Gemini LLM
    context = "\\n\\n".join([chunk.text for chunk in chunks])
    
    # 4. Synthesize context-grounded response
    answer = LLMSynthesizer.generate(prompt=question, context=context)
    return {"answer": answer, "retrieved_chunks": len(chunks)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pipelineSteps = [
    { title: "USER QUESTION", sub: "Natural language query", color: "#FFE17C" },
    { title: "EMBEDDING", sub: "768-dim float vector", color: "#B7C6C2" },
    { title: "FAISS VECTOR SEARCH", sub: "Sub-ms index match", color: "#FFE17C" },
    { title: "RETRIEVED CONTEXT", sub: "Top-4 document chunks", color: "#B7C6C2" },
    { title: "LLM RESPONSE", sub: "Context-constrained synthesis", color: "#FFFFFF" }
  ];

  return (
    <div
      className="developer-workspace"
      style={{
        backgroundColor: "var(--color-charcoal)",
        border: "var(--border-thick)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-xl)",
        overflow: "hidden",
        color: "var(--color-white)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Window Title Bar */}
      <div
        style={{
          backgroundColor: "#111713",
          borderBottom: "var(--border-thick)",
          padding: "0.65rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Three Window Control Dots */}
          <div style={{ display: "flex", gap: "6px" }}>
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#FF5F56", border: "1px solid #E0443E" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#FFBD2E", border: "1px solid #DEA123" }} />
            <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27C93F", border: "1px solid #1AAB29" }} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--color-sage)",
              marginLeft: "0.5rem"
            }}
          >
            giridharan-workspace // v2.6.0
          </span>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: isSelected ? 700 : 500,
                  padding: "0.3rem 0.6rem",
                  borderRadius: "var(--radius-sm)",
                  border: isSelected ? "1.5px solid var(--color-yellow)" : "1.5px solid transparent",
                  backgroundColor: isSelected ? "var(--color-charcoal)" : "transparent",
                  color: isSelected ? "var(--color-yellow)" : "#8E9E99",
                  cursor: "pointer",
                  transition: "var(--transition-tactile)"
                }}
              >
                <Icon size={13} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Workspace Body */}
      <div style={{ minHeight: "340px", position: "relative" }}>
        {/* VIEW A: CODE EDITOR */}
        {activeTab === "code" && (
          <div style={{ padding: "1rem", position: "relative" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.75rem",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    backgroundColor: "rgba(255, 225, 124, 0.15)",
                    color: "var(--color-yellow)",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "2px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    border: "1px solid rgba(255, 225, 124, 0.3)"
                  }}
                >
                  FASTAPI / PYTHON
                </span>
                <span style={{ fontSize: "0.75rem", color: "#8E9E99", fontFamily: "var(--font-mono)" }}>
                  POST /api/v1/query-doc
                </span>
              </div>
              <button
                onClick={handleCopy}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: copied ? "#27C93F" : "var(--color-sage)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                  border: "1px solid rgba(255, 255, 255, 0.15)"
                }}
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <pre
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                lineHeight: "1.55",
                color: "#E2E8F0",
                overflowX: "auto",
                margin: 0,
                maxHeight: "300px"
              }}
            >
              <code>{codeString}</code>
            </pre>
          </div>
        )}

        {/* VIEW B: FRONTEND PREVIEW */}
        {activeTab === "ui" && (
          <div style={{ padding: "1.25rem" }}>
            <div
              style={{
                backgroundColor: "var(--color-white)",
                color: "var(--color-black)",
                borderRadius: "var(--radius-md)",
                border: "var(--border-thick)",
                padding: "1rem",
                boxShadow: "4px 4px 0 #000000"
              }}
            >
              {/* Mini App Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "2px solid #000000",
                  paddingBottom: "0.6rem",
                  marginBottom: "1rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "16px", height: "16px", backgroundColor: "var(--color-yellow)", border: "1.5px solid #000000" }} />
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.85rem" }}>
                    RAG.DOCS // KNOWLEDGE BASE
                  </span>
                </div>
                <span
                  style={{
                    backgroundColor: "#171E19",
                    color: "var(--color-yellow)",
                    fontSize: "0.68rem",
                    padding: "0.15rem 0.45rem",
                    borderRadius: "2px",
                    fontWeight: 700
                  }}
                >
                  INDEX ACTIVE: 14 PAGES
                </span>
              </div>

              {/* Mini Document Query Card */}
              <div
                style={{
                  backgroundColor: "var(--color-neutral)",
                  border: "1.5px solid #000000",
                  borderRadius: "4px",
                  padding: "0.85rem",
                  marginBottom: "0.75rem"
                }}
              >
                <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, fontFamily: "var(--font-mono)", marginBottom: "0.3rem" }}>
                  ASK A QUESTION ABOUT THE UPLOADED PDF:
                </label>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="text"
                    readOnly
                    value="What is the student verification criteria for gym memberships?"
                    style={{
                      flex: 1,
                      padding: "0.45rem 0.65rem",
                      border: "1.5px solid #000000",
                      borderRadius: "2px",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      backgroundColor: "var(--color-white)"
                    }}
                  />
                  <button
                    style={{
                      backgroundColor: "var(--color-yellow)",
                      color: "var(--color-black)",
                      border: "1.5px solid #000000",
                      padding: "0.45rem 0.75rem",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      boxShadow: "2px 2px 0 #000000"
                    }}
                  >
                    <Play size={12} fill="#000000" /> Query
                  </button>
                </div>
              </div>

              {/* Synthesized Output Preview */}
              <div
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1.5px solid #000000",
                  borderRadius: "4px",
                  padding: "0.75rem",
                  boxShadow: "2px 2px 0 #000000"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.35rem" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#27C93F" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", fontWeight: 700, color: "#171E19" }}>
                    GROUNDED ANSWER · GEMINI 1.5 PRO · 4 CHUNKS CITED
                  </span>
                </div>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.45, color: "#222222" }}>
                  "According to Section 3.2, valid college identification with expiry date or active semester fee slip qualifies students for the 25% discount tier via the automated webhook."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW C: AI PIPELINE FLOW */}
        {activeTab === "pipeline" && (
          <div style={{ padding: "1.25rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-yellow)" }}>
                // INTERACTIVE RETRIEVAL-AUGMENTED GENERATION FLOW
              </span>
              <p style={{ fontSize: "0.82rem", color: "var(--color-sage)", marginTop: "0.25rem" }}>
                Click any step to inspect how context is retrieved before model generation.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {pipelineSteps.map((step, idx) => {
                const isSelected = activePipelineStep === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActivePipelineStep(idx)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.65rem 0.85rem",
                      backgroundColor: isSelected ? "rgba(255, 225, 124, 0.12)" : "rgba(255, 255, 255, 0.04)",
                      border: isSelected ? "1.5px solid var(--color-yellow)" : "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "var(--radius-sm)",
                      cursor: "pointer",
                      transition: "var(--transition-tactile)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: step.color,
                          width: "20px"
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.85rem", color: step.color }}>
                          {step.title}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "#A0AEC0", fontFamily: "var(--font-mono)" }}>
                          {step.sub}
                        </div>
                      </div>
                    </div>

                    <div style={{ color: "var(--color-sage)", fontSize: "0.75rem" }}>
                      {isSelected ? "Active Step" : "Inspect →"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW D: DEPLOYMENT PANEL */}
        {activeTab === "deployment" && (
          <div style={{ padding: "1.25rem" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "0.75rem",
                marginBottom: "1rem"
              }}
            >
              {[
                { label: "GATEWAY", val: "FastAPI Async", status: "Healthy" },
                { label: "FRONTEND", val: "React 19 / Vercel", status: "Live" },
                { label: "AI INFERENCE", val: "Gemini API", status: "Connected" },
                { label: "VECTOR STORE", val: "FAISS IndexFlatL2", status: "Sub-ms" }
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.75rem"
                  }}
                >
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-sage)" }}>
                    {item.label}
                  </span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.85rem", color: "var(--color-white)", margin: "0.2rem 0" }}>
                    {item.val}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.68rem", color: "#27C93F", fontFamily: "var(--font-mono)" }}>
                    <CheckCircle2 size={11} /> {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: "#111713",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "var(--radius-sm)",
                padding: "0.85rem"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-yellow)" }}>
                  SERVICE ORCHESTRATION SUMMARY
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#27C93F" }}>
                  100% UPTIME (VERCEL &amp; RENDER)
                </span>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--color-sage)", lineHeight: 1.5 }}>
                Production-verified builds with decoupled microservice routing, isolated vector similarity indexes, and SSL-secured custom DNS endpoints.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Workspace Footer Strip */}
      <div
        style={{
          backgroundColor: "#111713",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "0.5rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--color-sage)"
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>● UTF-8</span>
          <span>● Python 3.11</span>
          <span>● FAISS-CPU</span>
        </div>
        <div style={{ color: "var(--color-yellow)" }}>
          READY // ZERO LOG ERRORS
        </div>
      </div>
    </div>
  );
}

