import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GlitchText from "./GlitchText";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education & Experience", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section occupies center of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "skills", "projects", "education", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.4rem",
            letterSpacing: "-0.03em",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          <span
            style={{
              background: "var(--accent-gradient)",
              padding: "0.2rem 0.6rem",
              borderRadius: "8px",
              color: "white",
              fontSize: "1.1rem"
            }}
          >
            G
          </span>
          <span className="text-gradient" style={{ fontWeight: 800 }}>
            <GlitchText text="GIRIDHARAN R" />
          </span>
        </a>

        {/* Desktop Navigation */}
        <div
          style={{
            display: "none",
            gap: "2rem",
            alignItems: "center",
          }}
          className="desktop-menu"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: isActive ? "var(--secondary)" : "var(--text-secondary)",
                  transition: "color 0.3s ease",
                  position: "relative",
                  padding: "0.25rem 0"
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "var(--accent-gradient)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="glass-button"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.9rem" }}
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer"
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="glass-panel"
          style={{
            position: "fixed",
            top: "70px",
            left: "1.5rem",
            right: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            padding: "2rem",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
            zIndex: 49
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: isActive ? "var(--secondary)" : "var(--text-secondary)",
                }}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="primary-button"
            style={{ justifyContent: "center" }}
          >
            Let's Talk
          </a>
        </div>
      )}

      {/* Adding helper CSS for navbar responsive styles directly inline so it doesn't break */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-menu {
            display: flex !important;
          }
        }
        @media (max-width: 768px) {
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
