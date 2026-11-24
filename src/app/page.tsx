"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TokenStats } from "@/components/sections/token-stats";
import { MemeTicker } from "@/components/sections/meme-ticker";
import { MemeGallery } from "@/components/sections/meme-gallery";
import { TrumpQuotes } from "@/components/sections/trump-quotes";
import { HowToBuy } from "@/components/sections/how-to-buy";
import { Roadmap } from "@/components/sections/roadmap";
import { Tokenomics } from "@/components/sections/tokenomics";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Starfield() {
  const [stars, setStars] = useState<{ left: number; top: number; width: number; height: number; duration: number }[]>([]);

  useEffect(() => {
    const generated = [...Array(200)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 4,
      height: Math.random() * 4,
      duration: 2 + Math.random() * 5,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="fixed rounded-full bg-white opacity-50"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.width}px`,
            height: `${star.height}px`,
            animation: `twinkle ${star.duration}s infinite alternate`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes twinkle {
          from { opacity: 0.2; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [memeCount, setMemeCount] = useState(0);

  // Auto-increment meme counter
  useEffect(() => {
    const interval = setInterval(() => {
      setMemeCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Confetti on buy button click
  const triggerConfetti = () => {
    const container = document.getElementById("confetti-container");
    if (!container) return;
    const colors = ["#FFD700", "#DC143C", "#FFFFFF"];
    for (let i = 0; i < 100; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.top = "-10vh";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (2 + Math.random() * 2) + "s";
      piece.style.animationDelay = Math.random() * 0.5 + "s";
      container.appendChild(piece);
      setTimeout(() => piece.remove(), 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Starfield />

      <Navbar />

      <main className="flex-1 relative pt-20">
        <Hero />
        <MemeTicker />
        <TokenStats />
        <Tokenomics />
        <TrumpQuotes />
        <MemeGallery />
        <Roadmap />
        <HowToBuy />
      </main>

      <Footer />
    </div>
  );
}


