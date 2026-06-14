import { useState, useEffect, useRef } from "react";

export default function GlitchText({ text, speed = 30, className = "" }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@$%&*";

  const triggerGlitch = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    triggerGlitch();
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <span
      onMouseEnter={triggerGlitch}
      className={className}
      style={{ display: "inline-block" }}
    >
      {displayText}
    </span>
  );
}
