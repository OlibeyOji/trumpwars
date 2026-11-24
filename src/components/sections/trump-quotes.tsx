"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Flame, Coins, ChevronLeft, ChevronRight } from "lucide-react";

const trumpQuotes = [
  {
    text: "We're going to make the galaxy great again. Believe me.",
    source: "President Donald Trump, Address to the Galactic Senate",
  },
  {
    text: "This coin is huge. Tremendous. The best coin, folks. Nobody has better coins.",
    source: "Trump on ",
  },
  {
    text: "I alone can fix the blockchain. I know the best developers. The best.",
    source: "Trump White Paper",
  },
  {
    text: "We're going to drain the swamp on Coruscant. Believe me, it's going to be beautiful.",
    source: "Trump Campaign Rally, Tatooine",
  },
  {
    text: "The force is strong with this one. Very strong. Tremendous force.",
    source: "Trump meets Obi-Wan",
  },
  {
    text: "No Dream is too big. No challenge is too great. Nothing we want for the future is beyond our reach.",
    source: "Trump Inaugural Address",
  },
];

export function TrumpQuotes() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? trumpQuotes.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === trumpQuotes.length - 1 ? 0 : i + 1));

  const quote = trumpQuotes[index];

  return (
    <section className="py-20 relative overflow-hidden retro-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.03)_0%_,transparent_70%)]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-6 gap-2">
          {trumpQuotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="w-2 h-2 rounded-full transition-colors duration-300 hover:bg-trump-gold/50"
              aria-label={`Quote ${i + 1}`}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="retro-card p-8">
              <div className="absolute -top-4 -left-4 text-trump-gold/30 text-6xl font-black">
                "
              </div>
              <p className="text-2xl md:text-3xl font-black text-white italic mb-4 relative z-10 leading-relaxed">
                {quote.text}
              </p>
              <p className="text-sm text-trump-gold font-mono tracking-widest uppercase">
                — {quote.source}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between items-center mt-10 px-4">
          <button
            onClick={prev}
            className="retro-btn px-6 py-3 bg-trump-gold text-star-black font-black hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" /> PREV
          </button>
          <div className="text-xs text-trump-gold font-mono tracking-widest uppercase">
            QUOTE {index + 1} / {trumpQuotes.length}
          </div>
          <button
            onClick={next}
            className="retro-btn px-6 py-3 bg-trump-gold text-star-black font-black hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            NEXT <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
