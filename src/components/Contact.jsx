import { useState } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Linkedin } from "./Icons";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setStatus("sending");
    
    // Simulate API call for premium interaction feel
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Phone size={20} style={{ color: "#06b6d4" }} />,
      label: "Phone",
      value: "+91 9353293224",
      href: "tel:+919353293224"
    },
    {
      icon: <Mail size={20} style={{ color: "#8b5cf6" }} />,
      label: "Email",
      value: "gdlion123@email.com",
      href: "mailto:gdlion123@email.com"
    },
    {
      icon: <Linkedin size={20} style={{ color: "#6366f1" }} />,
      label: "LinkedIn",
      value: "giridharan-r-93a024316",
      href: "https://www.linkedin.com/in/giridharan-r-93a024316"
    }
  ];

  return (
    <section id="contact" style={{ position: "relative" }}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "-1.5rem auto 3rem auto",
            fontSize: "1rem"
          }}
        >
          Have a question or want to work together? Drop me a line!
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "3rem",
            alignItems: "stretch"
          }}
          className="contact-grid"
        >
          {/* Left Side: Contact Information Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {contactDetails.map((detail, idx) => (
              <a
                key={idx}
                href={detail.href}
                target={detail.label === "LinkedIn" ? "_blank" : "_self"}
                rel="noreferrer"
                className="glass-card contact-card glow-card"
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  transition: "all 0.3s ease"
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
              >
                <div className="card-icon-wrapper">
                  {detail.icon}
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      display: "block",
                      marginBottom: "0.2rem"
                    }}
                  >
                    {detail.label}
                  </span>
                  <span
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--text-primary)"
                    }}
                  >
                    {detail.value}
                  </span>
                </div>
              </a>
            ))}

            {/* Creative glowing box */}
            <div
              className="glass-card glow-card"
              style={{
                padding: "2rem",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)",
                border: "1px solid var(--card-border)"
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Let's Build Something Awesome
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: "250px" }}>
                Open to full-stack roles, freelance opportunities, and interesting AI collaborations.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div
            className="glass-card glow-card"
            style={{ padding: "2.5rem", position: "relative", overflow: "hidden" }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            {status !== "success" ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="form-row">
                  {/* Name field */}
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="input-field"
                    />
                  </div>

                  {/* Email field */}
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="input-field"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="input-group">
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="input-field"
                    />
                </div>

                {/* Message field */}
                <div className="input-group">
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="input-field"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="primary-button"
                  style={{
                    alignSelf: "flex-start",
                    marginTop: "0.5rem",
                    gap: "0.75rem",
                    minWidth: "150px",
                    justifyContent: "center"
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <div className="spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Panel animation */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  minHeight: "300px",
                  textAlign: "center",
                  gap: "1.5rem"
                }}
              >
                <div style={{ color: "#10b981", animation: "float 4s ease-in-out infinite" }}>
                  <CheckCircle size={64} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      marginBottom: "0.5rem"
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--text-secondary)", maxWidth: "320px", fontSize: "0.95rem" }}>
                    Thank you, Giridharan here! I have received your message and will respond as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="glass-button"
                  style={{ fontSize: "0.9rem" }}
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-card:hover {
          border-color: var(--card-border-hover);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(6, 182, 212, 0.1);
        }
        
        /* Input group styles */
        .input-group {
          position: relative;
          width: 100%;
        }
        .input-group input, .input-group textarea {
          width: 100%;
        }
        .input-group textarea {
          resize: none;
        }

        /* CSS Spinner */
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
