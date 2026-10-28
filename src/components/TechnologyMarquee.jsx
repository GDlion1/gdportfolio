import { siteConfig } from "../data/siteConfig";

export default function TechnologyMarquee() {
  const items = siteConfig.marqueeItems;

  return (
    <div
      className="marquee-strip"
      style={{
        backgroundColor: "var(--color-charcoal)",
        borderTop: "var(--border-thick)",
        borderBottom: "var(--border-thick)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "1.1rem 0",
        position: "relative",
        userSelect: "none"
      }}
      aria-label="Technologies Marquee"
    >
      <div className="marquee-track">
        {/* Render 3 copies to create an endless seamless loop */}
        {[0, 1, 2].map((loopIndex) => (
          <div key={loopIndex} className="marquee-group" aria-hidden={loopIndex > 0}>
            {items.map((tech, idx) => (
              <span key={idx} className="marquee-item">
                <span className="marquee-text">{tech}</span>
                <span className="marquee-separator">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }

        .marquee-strip:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          margin-right: 1.5rem;
        }

        .marquee-text {
          font-family: var(--font-display);
          font-weight: 850;
          font-size: clamp(1.15rem, 2vw, 1.45rem);
          color: var(--color-sage);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.15s ease;
        }

        .marquee-text:hover {
          color: var(--color-yellow);
        }

        .marquee-separator {
          color: var(--color-yellow);
          font-size: 0.95rem;
          display: inline-block;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
}

