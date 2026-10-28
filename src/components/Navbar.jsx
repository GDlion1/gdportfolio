import { useState, useEffect } from "react";
import { Download, ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Background", href: "#background" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "var(--color-yellow)",
        borderBottom: "var(--border-thick)",
        transition: "box-shadow 0.2s ease",
        boxShadow: scrolled ? "0 4px 0 #000000" : "none"
      }}
    >
      <div
        className="container"
        style={{
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem"
        }}
      >
        {/* Monogram Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            textDecoration: "none"
          }}
          aria-label="Giridharan R Home"
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              backgroundColor: "var(--color-charcoal)",
              border: "var(--border-thick)",
              borderRadius: "var(--radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "3px 3px 0 #000000",
              transition: "var(--transition-tactile)"
            }}
            className="brand-logo-box"
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "1.25rem",
                color: "var(--color-yellow)",
                letterSpacing: "-0.05em"
              }}
            >
              GR
            </span>
          </div>

          <div className="brand-text-block">
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 850,
                fontSize: "1.05rem",
                color: "var(--color-charcoal)",
                display: "block",
                lineHeight: 1.1
              }}
            >
              GIRIDHARAN R
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                fontWeight: 700,
                color: "var(--color-charcoal)",
                letterSpacing: "0.04em",
                opacity: 0.8
              }}
            >
              DEV &amp; GEN AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "0.35rem"
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  padding: "0.45rem 0.8rem",
                  borderRadius: "var(--radius-sm)",
                  border: isActive ? "2px solid #000000" : "2px solid transparent",
                  backgroundColor: isActive ? "var(--color-black)" : "transparent",
                  color: isActive ? "var(--color-yellow)" : "var(--color-charcoal)",
                  boxShadow: isActive ? "2px 2px 0 #000000" : "none",
                  transition: "var(--transition-tactile)"
                }}
                className="nav-link-btn"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div
          className="desktop-cta"
          style={{
            display: "none",
            alignItems: "center",
            gap: "0.75rem"
          }}
        >
          <a
            href={siteConfig.resumeUrl}
            download="Giridharan_R_Resume.pdf"
            className="btn-brutal btn-secondary"
            style={{
              padding: "0.55rem 1rem",
              fontSize: "0.85rem",
              boxShadow: "3px 3px 0 #000000"
            }}
          >
            <Download size={15} strokeWidth={2.5} />
            Resume
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-brutal btn-primary"
            style={{
              padding: "0.55rem 1.15rem",
              fontSize: "0.85rem",
              boxShadow: "3px 3px 0 #000000"
            }}
          >
            Let's Talk
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42px",
            height: "42px",
            backgroundColor: "var(--color-black)",
            color: "var(--color-yellow)",
            border: "var(--border-thick)",
            borderRadius: "var(--radius-sm)",
            boxShadow: "3px 3px 0 #000000"
          }}
        >
          {mobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            backgroundColor: "var(--color-yellow)",
            borderTop: "var(--border-thick)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            boxShadow: "0 8px 0 #000000"
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.1rem",
                padding: "0.75rem 1rem",
                backgroundColor: activeSection === link.href.substring(1) ? "var(--color-black)" : "var(--color-white)",
                color: activeSection === link.href.substring(1) ? "var(--color-yellow)" : "var(--color-black)",
                border: "var(--border-thick)",
                borderRadius: "var(--radius-sm)",
                boxShadow: "3px 3px 0 #000000",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "0.5rem" }}>
            <a
              href={siteConfig.resumeUrl}
              download="Giridharan_R_Resume.pdf"
              className="btn-brutal btn-secondary"
              style={{ width: "100%", padding: "0.75rem" }}
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-brutal btn-primary"
              style={{ width: "100%", padding: "0.75rem" }}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
