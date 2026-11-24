"use client";

import { motion } from "framer-motion";
import { PieChart, Flame, Users, Star } from "lucide-react";

const allocations = [
  { label: "Presale", value: 50, color: "bg-trump-gold" },
  { label: "Liquidity", value: 25, color: "bg-trump-red" },
  { label: "Marketing", value: 15, color: "bg-white/10" },
  { label: "Team", value: 10, color: "bg-white/5" },
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-glow-gold">
            Tokenomics
          </h2>
          <p className="text-white/60">
            Built for the people, by the people. No VCs, no insiders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {allocations.map((alloc, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div
                  className={`h-8 rounded-full transition-colors ${alloc.color}`}
                  style={{ width: `${alloc.value}%` }}
                />
                <div className="w-24">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70 font-medium">{alloc.label}</span>
                    <span className="text-trump-gold font-mono font-bold">
                      {alloc.value}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-trump-gold"
                      style={{ width: `${alloc.value}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="white/10"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="125.6"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#DC143C" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white">$TRUMPWARS</span>
                <span className="text-xs text-white/50 uppercase tracking-widest">
                  1 Billion Supply
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1000000000, 0, 100].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
            >
              <div className="text-trump-gold font-mono font-bold text-3xl mb-1">
                {i === 0 ? "1B" : i === 1 ? "0%" : "100%"}
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider font-semibold">
                {i === 0 ? "Total Supply" : i === 1 ? "Tax" : "Locked LP"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
