import { useEffect, useRef, useState } from "react";
import { Settings } from "lucide-react";

export default function BackgroundEffect() {
  const canvasRef = useRef(null);
  const [effectMode, setEffectMode] = useState("neural"); // neural, matrix, starfield
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Common Mouse tracker
    const mouse = { x: null, y: null, radius: 130 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (effectMode === "matrix") {
        initMatrix();
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // ==========================================
    // NEURAL CONNECTIONS EFFECT
    // ==========================================
    let neuralParticles = [];
    class NeuralParticle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.16 - 0.08;
        this.speedY = Math.random() * 0.16 - 0.08;
        this.baseColor = Math.random() > 0.5 ? "rgba(139, 92, 246, " : "rgba(6, 182, 212, ";
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 0.8;
            this.y -= (dy / distance) * force * 0.8;
          }
        }
      }
      draw() {
        ctx.fillStyle = `${this.baseColor}${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initNeural = () => {
      neuralParticles = [];
      const count = Math.min(Math.floor((width * height) / 11000), 120);
      for (let i = 0; i < count; i++) {
        neuralParticles.push(new NeuralParticle());
      }
    };

    const drawNeuralConnections = () => {
      for (let i = 0; i < neuralParticles.length; i++) {
        for (let j = i + 1; j < neuralParticles.length; j++) {
          const dx = neuralParticles[i].x - neuralParticles[j].x;
          const dy = neuralParticles[i].y - neuralParticles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < 110) {
            const alpha = ((110 - distance) / 110) * 0.15;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(neuralParticles[i].x, neuralParticles[i].y);
            ctx.lineTo(neuralParticles[j].x, neuralParticles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // ==========================================
    // MATRIX DIGITAL RAIN EFFECT
    // ==========================================
    const matrixChars = "0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*+=-";
    let fontSize = 14;
    let columns = [];
    const initMatrix = () => {
      const colsCount = Math.floor(width / fontSize) + 1;
      columns = [];
      for (let i = 0; i < colsCount; i++) {
        columns.push(Math.random() * -100); // randomize starting Y offset
      }
    };

    // ==========================================
    // STARFIELD WARP EFFECT
    // ==========================================
    let stars = [];
    const starsCount = 150;
    const initStarfield = () => {
      stars = [];
      for (let i = 0; i < starsCount; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * width,
          color: Math.random() > 0.5 ? "#8b5cf6" : "#06b6d4",
        });
      }
    };

    // Initialize Active Mode
    if (effectMode === "neural") initNeural();
    if (effectMode === "matrix") initMatrix();
    if (effectMode === "starfield") initStarfield();

    // ==========================================
    // MASTER ANIMATION LOOP
    // ==========================================
    const render = () => {
      if (effectMode === "neural") {
        ctx.clearRect(0, 0, width, height);

        // Radial hover overlay
        if (mouse.x !== null && mouse.y !== null) {
          const gradient = ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            mouse.radius * 2
          );
          gradient.addColorStop(0, "rgba(139, 92, 246, 0.05)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, width, height);
        }

        neuralParticles.forEach((p) => {
          p.update();
          p.draw();
        });
        drawNeuralConnections();
      } 
      else if (effectMode === "matrix") {
        // Semi-transparent overlay to create trailing fade effect
        ctx.fillStyle = "rgba(5, 7, 15, 0.08)";
        ctx.fillRect(0, 0, width, height);

        ctx.font = `${fontSize}px Courier New`;

        columns.forEach((y, xIdx) => {
          const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          const x = xIdx * fontSize;
          
          // Glow trailing colors near mouse
          let isNearMouse = false;
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - x;
            const dy = mouse.y - y * fontSize;
            if (Math.hypot(dx, dy) < 100) {
              isNearMouse = true;
            }
          }

          ctx.fillStyle = isNearMouse ? "#06b6d4" : (Math.random() > 0.95 ? "#a78bfa" : "rgba(99, 102, 241, 0.25)");
          
          ctx.fillText(text, x, y * fontSize);

          if (y * fontSize > height && Math.random() > 0.975) {
            columns[xIdx] = 0;
          } else {
            columns[xIdx] = y + 0.6; // fall rate
          }
        });
      } 
      else if (effectMode === "starfield") {
        ctx.fillStyle = "rgba(5, 7, 15, 0.2)"; // trail blur
        ctx.fillRect(0, 0, width, height);

        // Center perspective translate
        ctx.save();
        ctx.translate(width / 2, height / 2);

        stars.forEach((star) => {
          // move star closer
          star.z -= 1.8;

          // if too close, reset to far distance
          if (star.z <= 0) {
            star.x = Math.random() * width - width / 2;
            star.y = Math.random() * height - height / 2;
            star.z = width;
          }

          // perspective map
          const k = 150 / star.z;
          const px = star.x * k;
          const py = star.y * k;

          // check boundaries
          if (Math.abs(px) < width / 2 && Math.abs(py) < height / 2) {
            const size = (1 - star.z / width) * 3 + 0.5;
            
            // Interaction warp: speed up stars near mouse angle
            let color = star.color === "#8b5cf6" || star.color === "#4f46e5" ? "#8b5cf6" : "#06b6d4";

            if (mouse.x !== null && mouse.y !== null) {
              const mx = mouse.x - width / 2;
              const my = mouse.y - height / 2;
              const angleDiff = Math.abs(Math.atan2(py, px) - Math.atan2(my, mx));
              if (angleDiff < 0.2) {
                color = "#ffffff";
              }
            }

            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [effectMode]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Floating Canvas Mode Controller overlay */}
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "1.5rem",
          zIndex: 40,
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "flex-start",
          gap: "0.5rem"
        }}
      >
        <button
          onClick={() => setShowControls(!showControls)}
          className="glass-button interactive-item"
          style={{
            width: "42px",
            height: "42px",
            padding: 0,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)"
          }}
          title="Customize Background Style"
        >
          <Settings size={18} style={{ animation: "spin 12s linear infinite", display: "block" }} />
        </button>

        {showControls && (
          <div
            className="glass-panel"
            style={{
              padding: "0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              animation: "fadeInUp 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--text-muted)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "0 0.5rem 0.2rem 0.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              Background Engine
            </span>
            <button
              onClick={() => {
                setEffectMode("neural");
                setShowControls(false);
              }}
              style={{
                background: effectMode === "neural" ? "rgba(59, 130, 246, 0.15)" : "transparent",
                color: effectMode === "neural" ? "white" : "var(--text-secondary)",
                border: "none",
                textAlign: "left",
                padding: "0.4rem 0.75rem",
                borderRadius: "6px",
                fontSize: "0.85rem",
                cursor: "pointer",
                fontWeight: effectMode === "neural" ? 600 : 400
              }}
              className="interactive-item"
            >
              Neural Network
            </button>
            <button
              onClick={() => {
                setEffectMode("matrix");
                setShowControls(false);
              }}
              style={{
                background: effectMode === "matrix" ? "rgba(59, 130, 246, 0.15)" : "transparent",
                color: effectMode === "matrix" ? "white" : "var(--text-secondary)",
                border: "none",
                textAlign: "left",
                padding: "0.4rem 0.75rem",
                borderRadius: "6px",
                fontSize: "0.85rem",
                cursor: "pointer",
                fontWeight: effectMode === "matrix" ? 600 : 400
              }}
              className="interactive-item"
            >
              Digital Matrix
            </button>
            <button
              onClick={() => {
                setEffectMode("starfield");
                setShowControls(false);
              }}
              style={{
                background: effectMode === "starfield" ? "rgba(59, 130, 246, 0.15)" : "transparent",
                color: effectMode === "starfield" ? "white" : "var(--text-secondary)",
                border: "none",
                textAlign: "left",
                padding: "0.4rem 0.75rem",
                borderRadius: "6px",
                fontSize: "0.85rem",
                cursor: "pointer",
                fontWeight: effectMode === "starfield" ? 600 : 400
              }}
              className="interactive-item"
            >
              Warp Starfield
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
