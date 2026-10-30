export const projectsData = [
  {
    id: "auraxfitness",
    title: "AURA X FITNESS",
    category: "FULL STACK WEB PLATFORM",
    subtitle: "Commercial Web Platform & Membership Engine",
    description:
      "A responsive commercial fitness platform with membership workflows, student verification engines, and automated digital pass booking.",
    featured: true,
    badge: "PRODUCTION DEPLOYMENT",
    liveUrl: "https://auraxfitness.in",
    githubUrl: null, // Private commercial client codebase
    repoStatus: "Client / Commercial Deployment",
    theme: {
      accentColor: "#FFE17C",
      badgeBg: "#171E19",
      badgeColor: "#FFE17C",
      borderAccent: "#000000"
    },
    technologies: [
      "React 19",
      "Vite",
      "JavaScript (ES6+)",
      "Vanilla CSS",
      "Google Apps Script",
      "Schema.org JSON-LD",
      "Vercel",
      "DNS Configuration"
    ],
    architecture: [
      { step: "User Visit", desc: "User loads responsive platform with interactive gym floor previews and pricing tiers." },
      { step: "React Interface", desc: "Dynamic membership checkout and student verification upload modal." },
      { step: "Booking Workflow", desc: "One Day Pass booking captures attendee info, triggers UPI QR code payment, and 1-tap intent." },
      { step: "Apps Script Webhook", desc: "Serverless webhook processes base64 student ID cards, validates payments, and records to database." },
      { step: "Pass & Receipt Dispatch", desc: "Generates unique verification token, entry check-in QR code, and triggers instant WhatsApp receipt." }
    ],
    keyFeatures: [
      "Responsive commercial web platform engineered for a 2,500+ sq.ft. athletic facility in Bangalore.",
      "Custom glassmorphism design system built with lightweight vanilla CSS and zero heavy UI libraries.",
      "Tiered membership portal featuring an automated Student Verification engine.",
      "Serverless webhook integration using Google Apps Script to process base64 ID uploads without dedicated servers.",
      "One Day Pass booking sub-app supporting live UPI QR code payments and 1-tap mobile intents.",
      "Automated verification token generation producing entry check-in QR codes.",
      "Instant WhatsApp booking confirmation and receipt dispatch via automated API flow."
    ],
    technicalStory: {
      problem:
        "A premier 2,500+ sq.ft. athletic facility needed a fast, high-converting commercial web platform without the overhead and hosting costs of a heavyweight backend database server for handling student membership verifications and single-day pass sales.",
      solution:
        "Architected a high-speed React 19 single-page platform on Vercel paired with custom DNS. Built an event-driven booking and student verification workflow leveraging Google Apps Script webhooks as a secure serverless transaction bridge.",
      engineeringDecisions: [
        "Chose Vanilla CSS over Tailwind to achieve zero-runtime stylesheet bloat and custom Neo-Brutalist glass aesthetic.",
        "Integrated Schema.org JSON-LD structured data for athletic facility discovery and local SEO positioning.",
        "Engineered base64 client-side compression before dispatching ID cards to prevent webhook timeout limits."
      ],
      limitations:
        "Currently uses Google Apps Script as the webhook backend; scalable for high-volume local traffic, with migration path to FastAPI & PostgreSQL planned as facility expands to multiple branches."
    }
  },
  {
    id: "rag-document-qa",
    title: "AI-Powered PDF Question Answering & RAG System",
    category: "GENERATIVE AI APPLICATION",
    subtitle: "Retrieval-Augmented Generation (RAG) Document QA",
    description:
      "An intelligent AI application that answers questions about uploaded PDF documents by extracting text, indexing chunks in FAISS, and constraining Gemini LLM responses to retrieved context.",
    featured: true,
    badge: "OPEN SOURCE / AI SYSTEM",
    liveUrl: "https://rag-ai-3enp.onrender.com/",
    githubUrl: "https://github.com/GDlion1/RagSys",
    repoStatus: "Public GitHub Repository",
    theme: {
      accentColor: "#B7C6C2",
      badgeBg: "#171E19",
      badgeColor: "#B7C6C2",
      borderAccent: "#000000"
    },
    technologies: [
      "FastAPI",
      "React.js",
      "Gemini API",
      "FAISS",
      "LangChain",
      "PyPDF",
      "Python 3.11",
      "Vector Embeddings"
    ],
    architecture: [
      { step: "PDF Upload", desc: "User submits document via React drag-and-drop file uploader." },
      { step: "Text Extraction", desc: "PyPDF extracts raw textual content from document pages and headers." },
      { step: "Document Chunking", desc: "LangChain RecursiveCharacterTextSplitter slices text with overlap (chunk_size=1000, overlap=150)." },
      { step: "Embedding Generation", desc: "Gemini embedding models convert text chunks into dense 768-dim semantic vectors." },
      { step: "FAISS Vector Search", desc: "FAISS IndexFlatL2 indexes vectors for sub-millisecond cosine/L2 nearest neighbor lookup." },
      { step: "Retrieved Context", desc: "Top-K most relevant chunks retrieved and combined into a context-constrained prompt." },
      { step: "Gemini Response", desc: "Gemini generates an answer strictly grounded in the extracted document context." }
    ],
    keyFeatures: [
      "Retrieval-Augmented Generation (RAG) pipeline preventing general LLM hallucination on proprietary documents.",
      "High-throughput PDF parsing with PyPDF handling multi-page academic papers and documentation.",
      "Intelligent text chunking with semantic overlap ensuring contextual continuity across chunk boundaries.",
      "Local vector similarity search powered by FAISS for sub-millisecond retrieval without costly managed vector databases.",
      "FastAPI REST endpoints with typed Pydantic models for PDF upload, indexing status, and streaming QA.",
      "Responsive React.js document workspace with real-time query interface and contextual citation displays."
    ],
    technicalStory: {
      problem:
        "General-purpose Large Language Models suffer from hallucination and lack visibility into specific, proprietary, or newly updated private PDF documents not present in their training datasets.",
      solution:
        "Engineered an end-to-end RAG architecture that segments uploaded PDFs into overlapping chunks, generates semantic vector embeddings using Google's Gemini API, stores and queries them via FAISS, and passes top retrieved passages into the LLM system prompt.",
      engineeringDecisions: [
        "Implemented FAISS over hosted cloud vector DBs to eliminate per-query latency and maintain complete local container isolation.",
        "Selected FastAPI for asynchronous request handling during computationally intensive document parsing and embedding batches.",
        "Enforced strict prompt boundaries instructions ('Answer only using the provided document excerpts; state clearly if the answer is not contained')."
      ],
      codeSnippet: `@app.post("/api/v1/query-doc")
async def query_document(payload: QueryRequest):
    # 1. Embed incoming user question
    query_vector = embed_model.embed_query(payload.question)
    
    # 2. Vector similarity search in local FAISS index
    distances, indices = faiss_index.search(
        np.array([query_vector]).astype("float32"), k=4
    )
    
    # 3. Assemble retrieved chunks into bounded context
    retrieved_chunks = [documents[i] for i in indices[0]]
    context_text = "\\n\\n".join(retrieved_chunks)
    
    # 4. Generate grounded response via Gemini LLM
    prompt = f"""You are a document assistant. Answer using ONLY this context:
    {context_text}
    Question: {payload.question}"""
    
    response = gemini_client.generate_content(prompt)
    return {"answer": response.text, "sources": len(retrieved_chunks)}`,
      limitations:
        "The free demo instance on Render may spin down during idle periods (cold start latency); source repository is fully reproducible via Docker."
    }
  },
  {
    id: "vera-ai-agent",
    title: "V.E.R.A. — Voice-Enabled EV Intelligence & Personal AI Agent",
    category: "VOICE AI AGENT",
    subtitle: "Voice-First Automotive AI Assistant & Telemetry Loop (Ongoing Project)",
    description:
      "An ongoing voice-first AI assistant and telemetry intelligence project combining LLM reasoning, real-time vehicle telemetry, contextual memory, and event-driven automation for personalized driver assistance.",
    featured: true,
    isOngoing: true,
    badge: "ONGOING PROJECT · ACTIVE DEVELOPMENT",
    liveUrl: null, // Ongoing Development / Architecture prototype
    githubUrl: "https://github.com/GDlion1",
    repoStatus: "Active Ongoing Project · Development In Progress",
    currentSprint:
      "Phase 2: Integrating real-time bi-directional audio streaming via WebRTC with Gemini Live API, alongside an MQTT message broker for simulated vehicle CAN bus telemetry.",
    ongoingMilestones: [
      {
        phase: "Phase 01",
        title: "Architecture & Telemetry Specs",
        status: "COMPLETED",
        desc: "Designed state machine, safety boundaries separating deterministic commands from LLM outputs, and MQTT telemetry schema for battery SoC and cabin climate."
      },
      {
        phase: "Phase 02",
        title: "WebRTC Audio & Gemini Agent",
        status: "IN PROGRESS",
        desc: "Currently implementing low-latency bi-directional voice streaming via WebRTC, conversational turn-taking, and prompt-grounded tool execution."
      },
      {
        phase: "Phase 03",
        title: "Memory Graph & Vehicle Hardware Sim",
        status: "UPCOMING",
        desc: "Building persistent driver preferences in PostgreSQL with JSONB schema, proactive route triggers, and simulated CAN bus test harness."
      }
    ],
    theme: {
      accentColor: "#FFE17C",
      badgeBg: "#FFE17C",
      badgeColor: "#171E19",
      borderAccent: "#FFE17C"
    },
    technologies: [
      "Python",
      "FastAPI",
      "Gemini API",
      "MQTT Broker",
      "PostgreSQL",
      "WebRTC",
      "GPS Telemetry",
      "Event-Driven Architecture"
    ],
    architecture: [
      { step: "Voice Interface", desc: "Driver initiates natural hands-free voice query via microphone or in-cockpit trigger." },
      { step: "WebRTC Audio Stream", desc: "Low-latency bi-directional WebRTC connection streams voice packets to backend." },
      { step: "FastAPI Orchestrator", desc: "Coordinates voice transcription, telemetry ingestion, and agent state machines." },
      { step: "AI Reasoning & Memory", desc: "Gemini agent analyzes driver intent alongside location, charging status, and user habits." },
      { step: "Context / Memory Tools", desc: "PostgreSQL holds persistent driver preferences, passenger memory, and scheduled geofence triggers." },
      { step: "Event-Driven MQTT", desc: "Publishes machine commands to vehicle bus (pre-cooling cabin, charging alerts, proactive reminders)." }
    ],
    keyFeatures: [
      "Ongoing development: Phase 2 active sprint combining real-time speech-to-speech WebRTC with Gemini.",
      "Voice-first natural interaction loop minimizing driver cockpit distraction.",
      "Real-time vehicle telemetry ingestion (State of Charge, temperature, geofence, tire pressure).",
      "Persistent contextual memory capable of remembering passengers, routine routes, and future tasks.",
      "Proactive 'Before You Leave' intelligence that checks battery range against scheduled destinations.",
      "Event-driven architecture separating deterministic safety logic from model-generated conversational outputs.",
      "Simulated MQTT message broker mimicking vehicle CAN bus events and battery telemetry."
    ],
    technicalStory: {
      problem:
        "Current in-car infotainment voice assistants are rigid, rule-bound, and unaware of holistic driver context, while generic LLMs cannot safely interact with deterministic automotive constraints or real-time telemetry.",
      solution:
        "Architecting an ongoing voice-first intelligence system that decouples conversational reasoning (Gemini LLM via WebRTC) from deterministic vehicle actuation (FastAPI & MQTT services). A memory engine correlates calendar events with battery state to deliver proactive driver advice.",
      engineeringDecisions: [
        "Isolated vehicle event triggers (MQTT) from generative language generation to ensure vehicle safety commands are strictly deterministic.",
        "Employed WebRTC for ultra-low latency voice packet transport compared to HTTP polling.",
        "Modeled persistent passenger profiles and geo-triggers in PostgreSQL using relational schema with JSONB metadata."
      ],
      limitations:
        "Active ongoing engineering project in Phase 2 development. Validated against simulated vehicle telemetry feeds using an MQTT broker prior to physical hardware head-unit integration."
    }
  },
  {
    id: "kspdb-fault-simulator",
    title: "Smart Power Distribution Simulator (KSPDB)",
    category: "DISTRIBUTED SYSTEMS & SIMULATION",
    subtitle: "Real-time Fault Localization & Outage Detection System",
    description:
      "A smart fault localization system to detect grid power outages, suppress false alarms, and stream real-time telemetry to an interactive map dashboard.",
    featured: false,
    badge: "ENGINEERING BUILD",
    liveUrl: null,
    githubUrl: "https://github.com/GDlion1",
    repoStatus: "Public GitHub Repository",
    theme: {
      accentColor: "#F59E0B",
      badgeBg: "#171E19",
      badgeColor: "#F59E0B",
      borderAccent: "#000000"
    },
    technologies: [
      "ReactJS",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "Docker",
      "Leaflet",
      "Gemini AI"
    ],
    architecture: [
      { step: "Hardware Simulators", desc: "5 custom fault nodes simulate feeder line trips, surge currents, and load shedding." },
      { step: "WebSocket Stream", desc: "Socket.io pushes real-time telemetry packets to backend event processors." },
      { step: "Fault Suppression", desc: "Backend algorithms suppress duplicate transient alerts and identify true outage locations." },
      { step: "Leaflet Dashboard", desc: "React interactive map auto-centers and pinpoints faulty substations." },
      { step: "AI Incident Summary", desc: "Gemini AI analyzes error codes to generate natural language incident summaries for dispatch crews." }
    ],
    keyFeatures: [
      "Real-time data streaming from 5 custom fault simulator nodes via WebSockets.",
      "Interactive map-based dispatch dashboard engineered with React and Leaflet.",
      "Intelligent incident summaries powered by Gemini AI explaining root causes.",
      "Scalable Node.js & PostgreSQL architecture with Prisma ORM for structured audit logging."
    ],
    technicalStory: {
      problem:
        "Electric power distribution utilities waste critical technician hours responding to transient faults and uncoordinated false alarms during routine load shedding.",
      solution:
        "Built a localized simulation and telemetry engine that ingests substation line statuses over WebSockets, correlates fault signatures, and flags real outages on an operator map.",
      engineeringDecisions: [
        "Implemented WebSockets for live telemetry to eliminate latency during cascade blackout events.",
        "Integrated Gemini AI to transform complex raw diagnostic codes into structured technician briefings."
      ],
      limitations:
        "Built for simulation testbeds with 5 hardware simulator feeds."
    }
  },
  {
    id: "studysync-ai",
    title: "StudySync AI",
    category: "FULL STACK WEB APP",
    subtitle: "AI-Powered Personalized Learning & Roadmap Generator",
    description:
      "An AI-powered learning platform that generates tailored curriculum roadmaps, automated topic summaries, and tracking dashboards for students.",
    featured: false,
    badge: "LIVE DEMO AVAILABLE",
    liveUrl: "https://studysync-ten-xi.vercel.app/",
    githubUrl: "https://github.com/GDlion1",
    repoStatus: "Public GitHub Repository",
    theme: {
      accentColor: "#8B5CF6",
      badgeBg: "#171E19",
      badgeColor: "#8B5CF6",
      borderAccent: "#000000"
    },
    technologies: [
      "Python",
      "Django",
      "SQLite",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Vercel"
    ],
    architecture: [
      { step: "Topic Input", desc: "Student inputs learning objective or course syllabus." },
      { step: "Curriculum Engine", desc: "Django backend constructs modular step-by-step learning milestones." },
      { step: "Automated Summaries", desc: "Generates concise conceptual summaries and study flash points." },
      { step: "Student Dashboard", desc: "Interactive frontend tracks completion status, test scores, and retention." }
    ],
    keyFeatures: [
      "Personalized AI-generated study roadmaps tailored to specific academic timelines.",
      "Modular progress tracking allowing students to check off mastered concepts.",
      "Responsive web interface built with modern vanilla CSS and JavaScript.",
      "Optimized Django backend modules with structured database persistence."
    ],
    technicalStory: {
      problem:
        "Students preparing for complex technical subjects often struggle to break dense syllabi into actionable day-by-day study plans.",
      solution:
        "Constructed a full-stack Django learning platform that analyzes study goals and automatically structures milestone-driven roadmaps with self-paced checkpoints.",
      engineeringDecisions: [
        "Kept the frontend lightweight without heavy framework dependencies for instant page loads.",
        "Structured modular Django apps separating auth, curriculum generation, and progress tracking."
      ],
      limitations:
        "Roadmaps are currently stored locally in SQLite for fast development iteration."
    }
  }
];

