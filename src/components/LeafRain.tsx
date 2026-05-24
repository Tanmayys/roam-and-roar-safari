"use client";
import { useEffect, useState } from "react";

export default function LeafRain() {
  const [leaves, setLeaves] = useState<number[]>([]);

  useEffect(() => {
    // Generate 15 leaves with random horizontal positions and delays
    setLeaves(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden hidden md:block">
      {leaves.map((id) => (
        <div
          key={id}
          className="leaf opacity-0"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            transform: `scale(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg)`,
            backgroundImage: "url('/leaf.png')",
            filter: "hue-rotate(" + (Math.random() * 20 - 10) + "deg) brightness(" + (0.8 + Math.random() * 0.4) + ")"
          }}
        />
      ))}
    </div>
  );
}
