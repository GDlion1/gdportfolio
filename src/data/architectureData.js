export const architectureSystems = [
  {
    id: "rag",
    title: "Context-Grounded RAG Pipeline",
    systemType: "Generative AI System",
    description: "How document chunking, semantic vector search, and context-constrained prompting prevent model hallucination.",
    nodes: [
      {
        id: "upload",
        name: "01. Document Ingestion",
        tag: "Client Layer",
        tech: "React 19 / PyPDF",
        summary: "Ingests PDF documents, parses raw character streams, and sanitizes file metadata.",
        inputs: "PDF file stream (.pdf), user authentication token",
        outputs: "Normalized raw text string, document page-map dictionary",
        details: "Extracts text across multi-column academic and commercial layouts. Strips corrupted control characters and preserves section headers for downstream chunking."
      },
      {
        id: "chunking",
        name: "02. Semantic Chunking",
        tag: "Text Processing",
        tech: "RecursiveCharacterSplitter",
        summary: "Divides long documents into overlapping segments to preserve contextual continuity.",
        inputs: "Raw extracted text string",
        outputs: "Array of text chunks (chunk_size: 1000 chars, overlap: 150 chars)",
        details: "Overlap prevents critical thoughts from being bisected across chunk boundaries. Ensures each segment maintains coherent semantic meaning for vector representation."
      },
      {
        id: "embedding",
        name: "03. Vector Embedding",
        tag: "Representation",
        tech: "Gemini Embedding API",
        summary: "Transforms discrete textual passages into high-dimensional numerical coordinates.",
        inputs: "Text chunk strings",
        outputs: "768-dimensional dense float32 vector arrays",
        details: "Captures conceptual relationships so that synonyms and related technical phrases occupy proximate coordinate space in vector geometry."
      },
      {
        id: "vector_search",
        name: "04. FAISS Similarity Search",
        tag: "Vector Index",
        tech: "FAISS IndexFlatL2",
        summary: "Calculates L2 Euclidean / Cosine distances to isolate top-K most relevant chunks in sub-milliseconds.",
        inputs: "Embedded user query vector, k=4 nearest neighbors",
        outputs: "Indices of top 4 matching document chunks with distance scores",
        details: "Runs locally in server memory without cloud database roundtrip latency, drastically reducing API costs and maintaining strict document privacy."
      },
      {
        id: "context_assembly",
        name: "05. Bounded Context Prompt",
        tag: "Orchestration",
        tech: "FastAPI / LangChain",
        summary: "Constructs an immutable context cage containing solely the retrieved passages.",
        inputs: "User question + Retrieved Top-K passage texts",
        outputs: "Rigid system prompt with explicit guardrails against hallucination",
        details: "Explicit prompt directive: 'Answer the question using strictly the excerpts provided. If the excerpt does not contain the answer, state that explicitly.'"
      },
      {
        id: "llm_synthesis",
        name: "06. Grounded Gemini Response",
        tag: "Inference",
        tech: "Gemini 1.5 / Flash LLM",
        summary: "Synthesizes an accurate, readable response cited against the provided source passages.",
        inputs: "Bounded prompt containing user query and validated context",
        outputs: "Factual answer JSON with source chunk references",
        details: "Leverages the model's linguistic prowess for synthesis rather than factual recall, ensuring answers are 100% faithful to the uploaded PDF."
      }
    ]
  },
  {
    id: "fullstack",
    title: "Commercial Full Stack Platform",
    systemType: "Production Web Architecture (Aura X Fitness)",
    description: "How a high-traffic athletic facility platform coordinates front-end booking, student verifications, and serverless webhooks.",
    nodes: [
      {
        id: "ui_layer",
        name: "01. Reactive Single-Page App",
        tag: "Frontend",
        tech: "React 19 / Vite / Vanilla CSS",
        summary: "High-performance interface rendering facility floor plans, class schedules, and pass tiers.",
        inputs: "User mouse/touch interactions, route requests",
        outputs: "Interactive DOM, validated form payloads",
        details: "Built with pure Vanilla CSS and custom Neo-Brutalist design tokens. Achieves sub-second initial paint times and zero UI library runtime overhead."
      },
      {
        id: "client_compression",
        name: "02. Client-Side Image Pre-processor",
        tag: "Optimization",
        tech: "HTML5 Canvas API",
        summary: "Resizes and compresses student ID photos in-browser before transmission.",
        inputs: "High-resolution camera capture / photo upload (up to 15MB)",
        outputs: "Compressed Base64 JPEG (< 400KB)",
        details: "Crucial engineering measure that prevents serverless webhook payload timeouts and saves mobile user cellular bandwidth."
      },
      {
        id: "payment_intent",
        name: "03. UPI QR & Intent Engine",
        tag: "Payment Flow",
        tech: "UPI Deep Links / Dynamic QR",
        summary: "Generates real-time UPI payment QR code and 1-tap mobile intents for Indian payment apps.",
        inputs: "Pass selection amount (INR) + verification token",
        outputs: "UPI payment intent URI (upi://pay?...) and SVG QR display",
        details: "Supports Google Pay, PhonePe, and Paytm with zero intermediary merchant gateway transaction percentage fees."
      },
      {
        id: "webhook_bridge",
        name: "04. Serverless Webhook Bridge",
        tag: "Serverless Integration",
        tech: "Google Apps Script HTTP POST",
        summary: "Processes transaction payloads, parses student verification cards, and logs entries.",
        inputs: "JSON payload: token, buyer details, base64 ID card, timestamp",
        outputs: "HTTP 200 OK with digital receipt signature",
        details: "Acts as a zero-cost serverless backend microservice handling file storage in Google Drive and structured record append in Google Sheets."
      },
      {
        id: "token_and_qr",
        name: "05. Verification & Check-in Pass",
        tag: "Access Control",
        tech: "Crypto Token / QR Generator",
        summary: "Creates an encrypted access pass with scannable entry QR code for the front desk scanner.",
        inputs: "Approved transaction ID and membership validity window",
        outputs: "One Day Pass modal with scannable digital barcode & token",
        details: "Desk attendant scans the visitor's screen to validate admission status and mark the pass consumed in real time."
      },
      {
        id: "messaging_dispatch",
        name: "06. Automated WhatsApp Receipt",
        tag: "Notification",
        tech: "WhatsApp Cloud API Webhook",
        summary: "Dispatches instant booking confirmation, QR pass, and tax invoice directly to attendee phone.",
        inputs: "Attendee phone number + verification URL",
        outputs: "WhatsApp template message with entry directions",
        details: "Replaces traditional printed paper tickets with an instant smartphone record that visitors can show at the gym entrance."
      }
    ]
  },
  {
    id: "voice_agent",
    title: "Voice-First Automotive AI Agent",
    systemType: "Real-Time Agentic Architecture (V.E.R.A.)",
    description: "Separating natural language conversation from deterministic vehicle safety workflows and memory triggers.",
    nodes: [
      {
        id: "voice_stream",
        name: "01. Cockpit Audio Transport",
        tag: "Streaming",
        tech: "WebRTC Audio / Opus",
        summary: "Bi-directional low-latency audio pipe between driver cockpit and processing backend.",
        inputs: "Hands-free microphone raw audio stream (16kHz PCM)",
        outputs: "Decoded voice packets transmitted over UDP WebRTC channel",
        details: "WebRTC delivers under 120ms roundtrip latency, essential for natural in-cabin driving conversations without awkward waiting pauses."
      },
      {
        id: "telemetry_bus",
        name: "02. Real-time Telemetry Ingestion",
        tag: "IoT Protocol",
        tech: "MQTT Broker / Mosquitto",
        summary: "Streams state-of-charge, tire pressure, internal cabin temperature, and GPS coordinates.",
        inputs: "Vehicle CAN-bus sensor telemetry packets",
        outputs: "Normalized vehicle state dictionary in memory cache",
        details: "Subscribes to topic `vehicle/telemetry/{vin}` to ensure the AI assistant is permanently aware of current vehicle mechanical state."
      },
      {
        id: "orchestrator",
        name: "03. FastAPI Agent State Coordinator",
        tag: "Core Service",
        tech: "FastAPI / Python AsyncIO",
        summary: "Correlates driver voice intent with real-time telemetry before querying reasoning models.",
        inputs: "Audio stream + Live telemetry snapshot + Active trip route",
        outputs: "Structured context bundle sent to reasoning model",
        details: "Prevents conversational hallucinations by injecting factual telemetry directly into the agent's immediate operational state."
      },
      {
        id: "memory_engine",
        name: "04. Context & Routine Memory",
        tag: "Persistent Store",
        tech: "PostgreSQL / JSONB",
        summary: "Maintains driver preferences, passenger memory, geofence pins, and scheduled future messages.",
        inputs: "Driver queries, calendar sync, habitual morning routes",
        outputs: "Relevant past preferences ('Prefers 21°C cabin temperature')",
        details: "Enables proactive assistance like: 'You have a meeting in Whitefield at 10 AM, but current battery is 24%. Recommend charging for 12 minutes at Koramangala Supercharger.'"
      },
      {
        id: "action_controller",
        name: "05. Deterministic Safety Controller",
        tag: "Safety Boundary",
        tech: "Deterministic Python Services",
        summary: "Executes verified vehicle actions (climate control, route recalculation) with strict safety boundaries.",
        inputs: "Tool-call intents emitted by reasoning model",
        outputs: "Signed CAN/MQTT command published to vehicle control unit",
        details: "Safety-critical rule: The LLM suggests or initiates actions, but strict deterministic validation rules guarantee vehicle physical safety parameters can never be breached."
      }
    ]
  }
];

