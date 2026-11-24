"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wallet, Check, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/config";

const steps = [
  {
    number: "01",
    title: "Get a Wallet",
    desc: "Download Phantom or your preferred Solana wallet",
    icon: Wallet,
  },
  {
    number: "02",
    title: "Get SOL",
    desc: "Buy SOL on an exchange and send it to your wallet",
    icon: DollarSign,
  },
  {
    number: "03",
    title: "Connect & Swap",
    desc: "Connect your wallet and swap SOL for $TRUMPWARS",
    icon: ArrowRight,
  },
  {
    number: "04",
    title: "HODL to the Moon",
    desc: "Hold your $TRUMPWARS and join the galactic revolution",
    icon: Check,
  },
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-glow-gold">
            How to Buy $TRUMPWARS
          </h2>
          <p className="text-white/60">
            Join the rebellion in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center gap-4 px-8 py-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-trump-gold/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-trump-gold/10 border border-trump-gold/20 flex items-center justify-center text-trump-gold group-hover:scale-110 transition-transform">
                  <span className="text-xl font-black">{step.number}</span>
                </div>
                <Icon className="w-8 h-8 text-trump-gold mb-2" />
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-white/60 text-sm text-center leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href={SITE_CONFIG.buyLink}>
            <Button
              size="lg"
              className="px-10 swamp-drain animate-hair-shake"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              BUY $TRUMPWARS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
