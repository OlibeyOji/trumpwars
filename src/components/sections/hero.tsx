"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Play, ArrowRight, Zap, Flame, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const heroFeatures = [
  { icon: Zap, label: "Zero Tax", color: "text-trump-gold" },
  { icon: Flame, label: "Burned LP", color: "text-trump-red" },
  { icon: Crown, label: "Emperor Supply", color: "text-white" },
];

function HeroStars() {
  const [stars, setStars] = useState<{ left: number; top: number; width: number; height: number }[]>([]);

  useEffect(() => {
    const generated = [...Array(100)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 4,
      height: Math.random() * 4,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.width,
            height: star.height,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroStars />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-trump-red/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-trump-gold/20 rounded-full blur-[120px] animate-pulse-glow" />

      {/* Confetti container */}
      <div className="confetti" id="confetti-container" />

      {/* Twitter banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl md:w-80 mb-12">
        <a
          href="https://x.com/TrumpWarsOnSol"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl overflow-hidden transform hover:scale-105 transition-transform shadow-2xl border border-trump-gold/30"
        >
          <img
            src="https://pbs.twimg.com/profile_banners/2116659862973059072/1794852075/1080x360"
            alt="TRUMPWARS on X"
            className="w-full h-auto object-cover"
          />
        </a>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-trump-gold/30 bg-trump-gold/10 mb-8 animate-pulse-glow meme-border"
        >
          <Flame className="w-4 h-4 text-trump-red animate-hair-shake" />
          <span className="text-xs font-bold text-trump-gold tracking-widest uppercase meme-shake">
            Presale Live Now 🚀
          </span>
        </motion.div>

        {/* Main headline with glitch + laser eyes */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-tight mb-6 text-glow-gold glitch laser-eyes"
          data-text="TRUMP WARS"
        >
          TRUMP<span className="text-trump-red">WARS</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-2xl text-white/80 max-w-2xl mb-10 font-light"
        >
          The meme coin that takes the galaxy. Where Trump meets Star Wars.
          Join the rebellion against boring coins.
        </motion.p>

        {/* Features row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {heroFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur meme-tilt"
              >
                <Icon className="w-5 h-5 text-trump-gold animate-pulse-glow" />
                <span className="text-sm font-semibold">{feature.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link href="https://dexscreener.com/solana/7PpUyh3b5f61zc6JCFJaftwthkwNE1JGWhPdDANLH8Eo" target="_blank"
            rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto px-8 swamp-drain animate-hair-shake">
              <ArrowRight className="w-5 h-5 mr-2" />
              Buy $TRUMPWARS
            </Button>
          </Link>
          <Link href="https://x.com/TrumpWarsOnSol/status/2119502840419041549?a=lS3kUkHAOlDQlzM9HmQ&s=20" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 meme-tilt">
            <Play className="w-5 h-5 mr-2" />
            Watch Trailer
          </Button>
          </Link>
        </motion.div>

        {/* Meme counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex items-center gap-2 text-xs text-white/50 font-mono"
        >
          <Crown className="w-4 h-4 text-trump-gold animate-hair-shake" />
          <span id="meme-counter">0</span> <span>Memes Deployed</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[bounce_2s_infinite] flex flex-col items-center gap-2"
      >
        <ArrowRight className="w-5 h-5 text-trump-gold" />
        <span className="text-xs text-white/50">Scroll for memes</span>
      </motion.div>
    </section>
  );
}
