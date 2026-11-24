"use client";

import { motion } from "framer-motion";
import { Coins, Star, Flame, Crown, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const memes = [
  {
    title: "Emperor Trump",
    subtitle: "Make the Galaxy Great Again",
    image: "/images/Emperor Trump.png",
    icon: Crown,
    likes: "1.2M",
    shares: "890K",
  },
  {
    title: "Darth Trump",
    subtitle: "I find your lack of faith disturbing",
    image: "/images/darth trump.png",
    icon: Flame,
    likes: "2.1M",
    shares: "1.4M",
  },
  {
    title: "Trump Skywalker",
    subtitle: "The empire strikes back... at boring coins",
    image: "/images/trump skywalker.png",
    icon: Zap,
    likes: "890K",
    shares: "560K",
  },
  {
    title: "Orange Is the New Black",
    subtitle: "Space Force One has landed",
    image: "/images/black and organge.png",
    icon: Star,
    likes: "3.4M",
    shares: "2.1M",
  },
  {
    title: "Coin Force",
    subtitle: "May the $TRUMPWARS be with you",
    image: "/images/coin force.png",
    icon: Coins,
    likes: "5.6M",
    shares: "3.9M",
  },
  {
    title: "Galactic Empire Strikes",
    subtitle: "Drain the swamp on Coruscant",
    image: "/images/GES.png",
    icon: Crown,
    likes: "4.2M",
    shares: "2.8M",
  },
];

function GalleryStars() {
  const [starData, setStarData] = useState<{ cx: number; cy: number; r: number; opacity: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 100 }).map(() => ({
      cx: Math.random() * 1000,
      cy: Math.random() * 1000,
      r: Math.random() * 2,
      opacity: Math.random(),
    }));
    setStarData(generated);
  }, []);

  return (
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
        {starData.map((star, i) => (
          <circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="white"
            opacity={star.opacity}
          />
        ))}
      </svg>
    </div>
  );
}

export function MemeGallery() {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <GalleryStars />


      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-trump-gold animate-hair-shake" />
            <h2 className="text-3xl md:text-5xl font-black text-white text-glow-gold glitch" data-text="TRUMP MEMES">
              TRUMP MEMES
            </h2>
            <Star className="w-6 h-6 text-trump-gold animate-hair-shake" />
          </div>
          <p className="text-white/60 text-lg">
            The dankest memes in the galaxy. Vote with your wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memes.map((meme, i) => {
            const Icon = meme.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="meme-tilt meme-border rounded-xl overflow-hidden bg-white/5 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={meme.image}
                    alt={meme.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur px-2 py-1 rounded">
                    <Icon className="w-4 h-4 text-trump-gold" />
                    
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-black text-white mb-1">{meme.title}</h3>
                  <p className="text-trump-gold font-mono text-sm">{meme.subtitle}</p>
                  <div className="mt-3 flex justify-between text-xs text-white/50">
                    
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            className="swamp-drain bg-trump-gold text-star-black font-black px-8 py-3 rounded-full hover:bg-white hover:scale-105 transition-all duration-200 animate-hair-shake"
            onClick={() => {
              // Confetti effect would go here
              alert("SWAMP DRAINED! 💧🗳️");
            }}
          >
            🗳️ DRAIN THE SWAMP
          </button>
        </div>
      </div>
    </section>
  );
}
