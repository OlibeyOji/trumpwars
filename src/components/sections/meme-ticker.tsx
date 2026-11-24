"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Coins, Flame, Star } from "lucide-react";

const memePrices = [
  { label: "$TRUMPWARS", price: "$0.000042069", change: "+420.69%", icon: Coins },
  { label: "🐸 PEPE", price: "$0.00001234", change: "+12.5%", icon: Flame },
  { label: "🐶 DOGE", price: "$0.15", change: "-2.1%", icon: Star },
  { label: "🍕 PIZZA", price: "$0.0000088", change: "+88.8%", icon: TrendingUp },
  { label: "⭐ GALACTIC CREDITS", price: "$999.99", change: "∞%", icon: Star },
  { label: "$TRUMPWARS", price: "$0.000042069", change: "+420.69%", icon: Coins },
  { label: "🐸 PEPE", price: "$0.00001234", change: "+12.5%", icon: Flame },
  { label: "🐶 DOGE", price: "$0.15", change: "-2.1%", icon: Star },
];

export function MemeTicker() {
  return (
    <div className="w-full border-y border-white/5 bg-star-deep/50 backdrop-blur overflow-hidden">
      <div className="ticker py-3">
        <div className="ticker-track flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-widest">
          {memePrices.map((item, i) => {
            const Icon = item.icon;
            const isPositive = !item.change.startsWith("-") && item.change !== "∞%";
            return (
              <div key={i} className="flex items-center gap-2 whitespace-nowrap animate-[bounce_2s_infinite]">
                <Icon className={`w-4 h-4 ${isPositive ? "text-trump-gold" : "text-trump-red"}`} />
                <span className={`text-trump-gold ${isPositive ? "animate-hair-shake" : ""}`}>
                  {item.label}
                </span>
                <span className="text-white/60">@</span>
                <span className="text-white">{item.price}</span>
                <span className={`text-${isPositive ? "trump-gold" : "trump-red"}`}>
                  {item.change}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
