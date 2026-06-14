import { useState, useEffect } from "react";
import { Mail, ArrowRight, Download } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import GlitchText from "./GlitchText";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Python Full Stack Developer",
    "Information Science Engineer",
    "AI Applications Developer"
  ];

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const currentIdx = loopNum % titles.length;
      const fullWord = titles[currentIdx];

      if (!isDeleting) {
        setText(fullWord.substring(0, text.length + 1));
        setTypingSpeed(100);

        if (text === fullWord) {
          setIsDeleting(true);
          setTypingSpeed(2000); // pause at full word
        }
      } else {
        setText(fullWord.substring(0, text.length - 1));
        setTypingSpeed(50);

        if (text === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500); // pause before starting next word
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
        overflow: "hidden"
      }}
    >
      {/* Decorative gradient blobs */}
      <div
        className="pulse-bg"
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />
      <div
        className="pulse-bg"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(50px)",
          zIndex: 0,
          pointerEvents: "none",
          animationDelay: "4s"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "3rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Content */}
          <div style={{ textAlign: "left" }}>
            <span
              style={{
                background: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                color: "#a78bfa",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                display: "inline-block",
                marginBottom: "1.5rem"
              }}
            >
              WELCOME TO MY PORTFOLIO
            </span>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
                marginBottom: "1rem",
                fontWeight: 900
              }}
            >
              Hi, I'm <br />
              <span className="text-gradient">
                <GlitchText text="GIRIDHARAN R" />
              </span>
            </h1>

            <h2
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                height: "2.4em", // preserve height for typing lines
                display: "flex",
                alignItems: "center"
              }}
            >
              <span>{text}</span>
              <span
                style={{
                  width: "3px",
                  height: "1.1em",
                  backgroundColor: "var(--secondary)",
                  marginLeft: "4px",
                  animation: "blink 1s step-end infinite"
                }}
                className="cursor-blink"
              />
            </h2>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
                marginBottom: "2.5rem",
                maxWidth: "600px"
              }}
            >
              An Information Science and Engineering graduate specializing in building creative, 
              scalable full-stack web applications with Python, Django, ReactJS, and AI integration. 
              I design modern, intuitive digital experiences with solid backend foundations.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                alignItems: "center",
                marginBottom: "3rem"
              }}
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="primary-button"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href="/giri_resume.pdf"
                download="GIRIDHARAN_R_Resume.pdf"
                className="glass-button"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 500 }}>
                CONNECT WITH ME:
              </span>
              <div style={{ display: "flex", gap: "1rem" }}>
                <a
                  href="https://github.com/GDlion1"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/giridharan-r-93a024316"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <Linkedin size={20} />
                </a>
                <a href="mailto:gdlion123@email.com" className="social-icon">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            className="hero-graphic-container"
          >
            {/* Glowing, floating creative element */}
            <div
              className="float"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "var(--accent-gradient)",
                boxShadow: "0 0 40px var(--primary-glow)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
              }}
            >
              <img
                src="/image.png"
                alt="Giridharan R"
                style={{
                  width: "290px",
                  height: "290px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid var(--bg-color)",
                  display: "block",
                  transition: "border-color 0.3s ease"
                }}
              />

              {/* Orbiting particles/nodes */}
              <div className="orbit-item" style={{ position: "absolute", top: "-10px", left: "20px" }}>
                <span className="dot-glow" style={{ backgroundColor: "#06b6d4" }} />
              </div>
              <div className="orbit-item" style={{ position: "absolute", bottom: "10px", right: "20px" }}>
                <span className="dot-glow" style={{ backgroundColor: "#8b5cf6" }} />
              </div>
              <div className="orbit-item" style={{ position: "absolute", bottom: "40px", left: "-10px" }}>
                <span className="dot-glow" style={{ backgroundColor: "#6366f1" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .social-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: white;
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.25);
        }
        .dot-glow {
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
          animation: float 4s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template_columns: 1fr !important;
            text-align: center !important;
          }
          .hero-grid > div {
            text-align: center !important;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid div {
            justify-content: center;
          }
          .hero-graphic-container {
            margin-top: 2rem;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
