import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyMarquee from "./components/TechnologyMarquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ArchitectureLab from "./components/ArchitectureLab";
import WorkflowTimeline from "./components/WorkflowTimeline";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="portfolio-app" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* 2. Hero & Developer Workspace */}
        <Hero />

        {/* 3. Technology Marquee Strip */}
        <TechnologyMarquee />

        {/* 4. About & Lifecycle */}
        <About />

        {/* 5. Technical Skills (Engineering Toolkit) */}
        <Skills />

        {/* 6. Featured Builds (Projects Showcase) */}
        <Projects />

        {/* 7. Interactive Architecture Lab */}
        <ArchitectureLab />

        {/* 8. Development Workflow */}
        <WorkflowTimeline />

        {/* 9. Education, Training & Certifications */}
        <Education />

        {/* 10. Contact & Final CTA */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
