import { Code2, Layout, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={24} style={{ color: "#a78bfa" }} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout size={24} style={{ color: "#06b6d4" }} />,
      skills: [
        { name: "ReactJS", level: 85 },
        { name: "Django", level: 90 },
        { name: "FastAPI / Flask", level: 80 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "Databases",
      icon: <Database size={24} style={{ color: "#6366f1" }} />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 80 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} style={{ color: "#f43f5e" }} />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Power BI", level: 75 },
        { name: "Tableau", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" style={{ position: "relative" }}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginTop: "1rem"
          }}
        >
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card glow-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem"
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div className="card-icon-wrapper">
                  {category.icon}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills list inside category */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                      <span style={{ fontWeight: 500, color: "var(--text-primary)" }}>
                        {skill.name}
                      </span>
                      <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>
                        {skill.level}%
                      </span>
                    </div>
                    {/* Skill progress bar track */}
                    <div className="progress-track">
                      {/* Skill progress filler */}
                      <div
                        className="skill-progress-bar"
                        style={{
                          height: "100%",
                          width: `${skill.level}%`,
                          background: "var(--accent-gradient)",
                          borderRadius: "3px",
                          transformOrigin: "left center",
                          transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Optional hover effect triggers progress bars */
        .glass-card:hover .skill-progress-bar {
          filter: brightness(1.2);
          box-shadow: 0 0 8px rgba(6, 182, 212, 0.4);
        }
      `}</style>
    </section>
  );
}
