import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import BackgroundEffect from "./components/BackgroundEffect";

function App() {
  useEffect(() => {
    // Clean up any previously stored theme attributes
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");

    // Scroll reveal observer to fade in items as they appear
    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      threshold: 0.15, // Trigger when 15% of the element is visible
    });

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      {/* Background Interactive Particles */}
      <BackgroundEffect />

      {/* Dotted tech grid pattern */}
      <div className="tech-grid-bg" />

      {/* Header Sticky Navigation */}
      <Navbar />

      {/* Main content grid */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal">
          <Hero />
        </div>
        
        <div className="reveal">
          <Skills />
        </div>
        
        <div className="reveal">
          <Projects />
        </div>
        
        <div className="reveal">
          <Education />
        </div>
        
        <div className="reveal">
          <Contact />
        </div>
      </main>

      {/* Creative styled footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          background: "rgba(3, 7, 18, 0.6)",
          backdropFilter: "blur(12px)",
          padding: "3rem 0",
          textAlign: "center"
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem"
            }}
            className="footer-row"
          >
            <div style={{ textAlign: "left" }} className="footer-left">
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }} className="text-gradient">
                GIRIDHARAN R
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                Information Science Graduate & Full Stack Engineer
              </p>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              © {new Date().getFullYear()} Giridharan R. All rights reserved.
            </p>

            <div style={{ display: "flex", gap: "1rem" }} className="footer-links">
              <a
                href="https://github.com/GDlion1"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.target.style.color = "white"}
                onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}
              >
                GitHub
              </a>
              <span style={{ color: "rgba(255,255,255,0.1)" }}>|</span>
              <a
                href="https://www.linkedin.com/in/giridharan-r-93a024316"
                target="_blank"
                rel="noreferrer"
                style={{ color: "var(--text-secondary)", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.target.style.color = "white"}
                onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Extra layout style tweaks */}
      <style>{`
        @media (max-width: 600px) {
          .footer-row {
            flex-direction: column !important;
            text-align: center !important;
          }
          .footer-left {
            text-align: center !important;
          }
        }
      `}</style>
    </>
  );
}

export default App;
