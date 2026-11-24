"use client";

import { motion } from "framer-motion";
import { Coins, TrendingUp, Users, Shield, Flame } from "lucide-react";
import { useEffect, useState } from "react";

const DEXSCREENER_API_URL =
  "https://api.dexscreener.com/latest/dex/pairs/solana/7PpUyh3b5f61zc6JCFJaftwthkwNE1JGWhPdDANLH8Eo";

const REFRESH_INTERVAL_MS = 60_000; // refresh live data every 60 seconds

interface DexScreenerPair {
  priceUsd: string;
  volume: { h24: number };
  liquidity: { usd: number };
  fdv: number | null;
  pairAddress: string;
}

interface DexScreenerResponse {
  schemaVersion: string;
  pairs: DexScreenerPair[];
}

function formatCurrency(value: number | null | undefined): string {
  if (value == null || Number.isNaN(value)) return "—";
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

export function TokenStats() {
  const [pair, setPair] = useState<DexScreenerPair | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch(DEXSCREENER_API_URL, { cache: "no-store" });
      const json: DexScreenerResponse = await res.json();
      if (json.pairs?.[0]) {
        setPair(json.pairs[0]);
        setLastUpdated(new Date());
      }
    } catch {
      // keep previous data on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const timer = setInterval(fetchData, REFRESH_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const marketCap = pair?.fdv ?? 0;
  const volume24h = pair?.volume.h24 ?? 0;
  const liquidityUsd = pair?.liquidity.usd ?? 0;

  const stats = [
    { icon: Coins, label: "Market Cap", value: formatCurrency(marketCap), color: "text-trump-gold" },
    { icon: TrendingUp, label: "24h Volume", value: formatCurrency(volume24h), color: "text-trump-red" },
    { icon: Users, label: "Holders", value: "10K+", color: "text-white" },
    { icon: Shield, label: "Liquidity", value: formatCurrency(liquidityUsd), color: "text-trump-gold" },
    { icon: Flame, label: "Tax", value: "0%", color: "text-trump-red" },
  ];

  return (
    <section className="py-20 bg-star-deep border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1446776653964-20c19d59dfa5?ixlib=rb-4.0.0&auto=format&fit=crop&w=2000&q=80')] opacity-5 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 text-glow-gold">
            Galactic Stats
          </h2>
          <p className="text-white/60">
            Live on-chain data from DexScreener
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3 px-6 py-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-trump-gold/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-trump-gold/10 flex items-center justify-center text-trump-gold">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {lastUpdated && (
          <div className="mt-8 text-center text-xs text-white/40">
            Last updated {lastUpdated.toLocaleTimeString()}
          </div>
        )}
      </div>
    </section>
  );
}
