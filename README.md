# Giridharan R — Full Stack & Generative AI Developer Portfolio

An editorial, engineering-driven personal portfolio designed and engineered with **Lumina Neo-Brutalism + Dark Developer Workspace**.

Built for Giridharan R, Information Science and Engineering graduate (2026), pursuing entry-level opportunities in Full Stack Development, Backend Engineering, Generative AI Engineering, RAG Systems, and AI Application Development.

---

## 🎨 Visual Identity & System Architecture

- **Design System:** Lumina Neo-Brutalism + Dark Developer Workspace.
- **Color Palette:**
  - Primary Yellow: `#FFE17C`
  - Charcoal: `#171E19`
  - Sage: `#B7C6C2`
  - White: `#FFFFFF`
  - Black: `#000000`
  - Neutral Light: `#F4F4F5`
  - Muted Dark Surface: `#272727`
- **Typography:**
  - Display: Cabinet Grotesk (700–900) via Fontshare CDN
  - Body: Satoshi (400–700) via Fontshare CDN
  - Monospace: JetBrains Mono via Google Fonts
- **Micro-Interactions:** Tactile Neo-Brutalist push buttons (`transform: translate(2px, 2px)` on hover, zero-blur hard offset shadows `4px 4px 0 #000`, `8px 8px 0 #000`, `10px 10px 0 #000`).
- **Backgrounds:** 32px × 32px subtle radial dot pattern on yellow sections.

---

## 🚀 Sections & Features

1. **Sticky Header & Brand Monogram:** Geometric `GD` mark, section jumps with scroll offset, resume download, and mobile drawer.
2. **Hero & Dark Developer Workspace:**
   - Left: Availability badge (`OPEN TO ENTRY-LEVEL OPPORTUNITIES`), Cabinet Grotesk typography, CTAs, core technology chips.
   - Right: Interactive Dark Developer Workspace with 4 switchable tabs:
     - `api_service.py`: Syntax-colored FastAPI endpoint (`POST /api/v1/query-doc`) with copy support.
     - `client_preview`: Miniaturized document QA interface.
     - `rag_pipeline.flow`: Step-by-step interactive RAG pipeline.
     - `system_status`: Real-time deployment health indicators.
3. **Technology Marquee Strip:** Charcoal strip with continuous smooth scrolling in sage typography, pausing on hover, respecting `prefers-reduced-motion`.
4. **About Me (`01 / ABOUT`):** Practical engineering philosophy, 5-phase engineering lifecycle (`IDEA → ARCHITECTURE → IMPLEMENTATION → INTEGRATION → DEPLOYMENT`), and 6 bento focus tiles.
5. **Engineering Toolkit (`02 / ENGINEERING TOOLKIT`):** 6 bento cards covering Backend, Frontend, Generative AI, Databases, Developer Tools, and CS Fundamentals.
6. **Featured Builds (`03 / SELECTED BUILDS`):**
   - **AURA X FITNESS:** Full Stack Commercial Platform (Live at [auraxfitness.in](https://auraxfitness.in)) featuring React 19, Google Apps Script webhooks, UPI QR payment flow, and WhatsApp check-in receipts.
   - **AI-Powered PDF Question Answering & RAG System:** RAG pipeline with FastAPI, FAISS, Gemini API, PyPDF, and LangChain (GitHub: [GDlion1/RagSys](https://github.com/GDlion1/RagSys)).
   - **V.E.R.A.:** Voice-Enabled EV Intelligence & Personal AI Agent with WebRTC, MQTT, PostgreSQL, and Gemini reasoning.
   - **Extended Builds Filter:** Retains Smart Power Distribution Simulator (KSPDB) and StudySync AI with full technical case studies.
7. **Interactive Architecture Lab (`04 / SYSTEM DESIGN`):** Interactive blueprints for Full-Stack, RAG, and Voice AI systems with clickable nodes inspecting inputs, outputs, and engineering trade-offs.
8. **Development Workflow (`05 / HOW I BUILD`):** 4-stage engineering progression (`UNDERSTAND → ARCHITECT → BUILD → TEST & DEPLOY`).
9. **Background (`06 / BACKGROUND`):** Education at AMC Engineering College (B.E. ISE 2022–2026, CGPA 7.7/10), Dhee Coding Lab Internship (2026), and HackerRank Certifications.
10. **Contact & Final CTA (`07 / LET'S CONNECT`):** 1-click email and phone copying, direct links, and a functional Native Mailto Composer.
11. **Footer:** Monogram, back-to-top control, dynamic copyright year.

---

## 🛠️ Prerequisites & Tech Stack

- **Node.js:** v18.0.0 or higher
- **Package Manager:** npm or yarn
- **Core Frameworks:**
  - React 19
  - Vite 8
  - Lucide React (Icons)
  - Vanilla CSS with CSS custom properties

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Lint Codebase
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```
The optimized static build will be generated in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customization Guide

### How to Update Personal Details
Edit `src/data/siteConfig.js` to change your name, title, email, phone number, location, or social links:
```javascript
export const siteConfig = {
  name: "Giridharan R",
  email: "giridharanraja7@gmail.com",
  phone: "+91 9353293224",
  github: "https://github.com/GDlion1",
  linkedin: "https://www.linkedin.com/in/giridharan-r-93a024316",
  ...
};
```

### How to Update or Add Projects
Edit `src/data/projectsData.js` to update project descriptions, live URLs, GitHub links, architecture steps, or technical case study stories.

### How to Replace the Resume File
Place your updated PDF file in `public/giri_resume.pdf`. The resume download buttons throughout the site automatically point to this path.

---

## 🚢 Deployment

The project is built as a static Single Page Application (SPA), deployable on **Vercel**, **Netlify**, or **GitHub Pages**.

### Deploying on Vercel
1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.
