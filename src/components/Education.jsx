import { GraduationCap, Briefcase, Calendar } from "lucide-react";

export default function Education() {
  const educationItems = [
    {
      type: "education",
      title: "Bachelor of Engineering",
      major: "Information Science and Engineering",
      institution: "AMC Engineering College, Bangalore",
      duration: "2022 – 2026",
      metric: "CGPA: 7.7/10",
      description: "Studied core computing sciences, systems analysis, databases, software engineering, web architectures, and algorithms. Actively participated in technical clubs and projects focusing on Full Stack web development and AI."
    },
    {
      type: "education",
      title: "Pre-University Course (PUC)",
      major: "Science Stream",
      institution: "St. Joseph's Pre-University College",
      duration: "Completed 2022",
      metric: "Percentage: 83%",
      description: "Focused on Physics, Chemistry, Mathematics, and Computer Science. Laid strong foundational skills in scientific logic, mathematical reasoning, and basic coding paradigms."
    }
  ];

  const experienceItems = [
    {
      type: "experience",
      title: "Python Full Stack Development Intern",
      institution: "Dhee Coding Lab, Bangalore",
      duration: "2026",
      description: "Hands-on experience developing end-to-end Python web applications. Designed Django MVC architectures, integrated RESTful APIs, constructed relational database schemas with MySQL/SQLite, and built dynamic React views. Collaborated on code reviews, Git version control workflows, and deployment cycles."
    }
  ];

  return (
    <section id="education" style={{ position: "relative" }}>
      <div className="container">
        <h2 className="section-title">My Journey</h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "-1.5rem auto 3rem auto",
            fontSize: "1rem"
          }}
        >
          My education and professional full-stack training milestones.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem"
          }}
          className="journey-grid"
        >
          {/* Left Column - Internships / Experience */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem"
              }}
            >
              <Briefcase size={26} style={{ color: "var(--secondary)" }} />
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Professional Training</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {experienceItems.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card journey-card glow-card"
                  style={{
                    padding: "2rem",
                    position: "relative"
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem"
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
                        {item.title}
                      </h4>
                      <p style={{ color: "var(--secondary)", fontSize: "0.95rem", fontWeight: 600 }}>
                        {item.institution}
                      </p>
                    </div>
                    
                    <span
                      className="tag-badge"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        borderRadius: "9999px"
                      }}
                    >
                      <Calendar size={12} />
                      {item.duration}
                    </span>
                  </div>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem"
              }}
            >
              <GraduationCap size={28} style={{ color: "var(--primary)" }} />
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Academic Foundation</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {educationItems.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card journey-card glow-card"
                  style={{
                    padding: "2rem",
                    position: "relative"
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem"
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>
                        {item.title}
                      </h4>
                      {item.major && (
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", fontWeight: 500 }}>
                          {item.major}
                        </p>
                      )}
                      <p style={{ color: "var(--primary)", fontSize: "0.95rem", fontWeight: 600 }}>
                        {item.institution}
                      </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
                      <span
                        className="tag-badge"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          borderRadius: "9999px"
                        }}
                      >
                        <Calendar size={12} />
                        {item.duration}
                      </span>
                      {item.metric && (
                        <span
                          className="tag-badge"
                          style={{
                            background: "rgba(59, 130, 246, 0.12)",
                            color: "var(--primary)",
                            fontWeight: 750
                          }}
                        >
                          {item.metric}
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .journey-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: transparent;
          border-radius: 4px 0 0 4px;
          transition: background 0.3s ease;
        }
        .journey-card:hover::before {
          background: var(--accent-gradient);
        }
        @media (max-width: 768px) {
          .journey-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
