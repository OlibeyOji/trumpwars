"use client";

import { motion } from "framer-motion";
import { Star, Rocket, Flame, Crown, Galaxy } from "lucide-react";

const phases = [
  {
    title: "Phase 1",
    subtitle: "Launch",
    desc: "Contract deployed, presale live, website launched",
    icon: Star,
    completed: true,
  },
  {
    title: "Phase 2",
    subtitle: "Galactic Expansion",
    desc: "CEX listings, marketing blitz, community growth",
    icon: Rocket,
    completed: false,
  },
  {
    title: "Phase 3",
    subtitle: "The Empire Strikes Back",
    desc: "NFT collection, staking, play-to-earn game",
    icon: Flame,
    completed: false,
  },
  {
    title: "Phase 4",
    subtitle: "Dominion",
    desc: "Galactic takeover, merch store, moon mission",
    icon: Crown,
    completed: false,
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-star-black/30 overflow-hidden relative">
      {/* Decorative grid */}
      <div className="absolute inset-0 [mask-image:radial-gradient(white,transparent)] opacity-10 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-glow-gold">
            Roadmap to the Galaxy
          </h2>
          <p className="text-white/60">
            From Tatooine to the White House — we're taking it all
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[50px] top-12 bottom-12 w-px bg-gradient-to-b from-trump-gold via-transparent to-trump-red" />

          {phases.map((phase, i) => {
            const Icon = phase.icon;
            const isLast = i === phases.length - 1;
            return (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className={`relative mb-20 pl-[70px] ${
                  i % 2 === 0 ? "text-right pr-12" : ""
                }`}
              >
                {/* Connector dot */}
                <div className="absolute left-[48px] top-6 w-8 h-8 rounded-full bg-trump-gold shadow-[0_0_20px_rgba(255,215,0,0.6)] border-4 border-star-black z-10" />

                {i % 2 === 0 ? (
                  // Right side
                  <div className="inline-block">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-trump-gold font-mono font-bold text-lg">
                        {phase.title}
                      </span>
                      {phase.completed && (
                        <span className="text-xs bg-trump-red text-white px-2 py-0.5 rounded-full">
                          LIVE
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {phase.subtitle}
                    </h3>
                    <p className="text-white/60 max-w-md">{phase.desc}</p>
                    <Icon className="w-6 h-6 text-trump-gold absolute right-0 top-6" />
                  </div>
                ) : (
                  // Left side
                  <div className="inline-block">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-trump-gold font-mono font-bold text-lg">
                        {phase.title}
                      </span>
                      {phase.completed && (
                        <span className="text-xs bg-trump-red text-white px-2 py-0.5 rounded-full">
                          LIVE
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {phase.subtitle}
                    </h3>
                    <p className="text-white/60 max-w-md">{phase.desc}</p>
                    <Icon className="w-6 h-6 text-trump-gold absolute left-0 top-6 -translate-x-1/2" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
