"use client";

import Link from "next/link";
import { X, Star, Layout, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/config";
import { CopyButton } from "@/components/ui/copy-button";

const footerLinks = [
  { name: "Website", href: "/" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "How to Buy", href: "#how-to-buy" },
];

const socialLinks = [
  { name: "X", href: "https://x.com/TrumpWarsOnSol", icon: X },
];

export function Footer() {
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/5 bg-star-black">
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-trump-gold flex items-center justify-center">
                <span className="text-[9px] font-black text-star-black tracking-tighter">
                  T
                </span>
              </div>
              <span className="font-black text-lg text-white tracking-tight">
                TRUMP<span className="text-trump-red">WARS</span>
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              The meme coin that takes the galaxy. $TRUMPWARS — where Trump
              meets Star Wars.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-star-deep border border-white/10 flex items-center justify-center text-white/60 hover:text-trump-gold hover:border-trump-gold/50 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Navigate</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-trump-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-6">Token</h3>
            <ul className="space-y-3">
              <li className="text-sm text-white/60">
                Symbol: <span className="text-trump-gold font-mono">$TRUMPWARS</span>
              </li>
              <li className="text-sm text-white/60">
                Supply: <span className="text-trump-gold font-mono">1B</span>
              </li>
              <li className="text-sm text-white/60">
                Decimals: <span className="text-trump-gold font-mono">9</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-trump-gold shrink-0"
                >
                  <Layout className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/50 uppercase">
                    Contract Address
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-trump-gold font-mono break-words max-w-xs">
                      {SITE_CONFIG.contractAddress}
                    </span>
                    <CopyButton text={SITE_CONFIG.contractAddress} />
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-trump-gold shrink-0"
                >
                  <Send className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/50 uppercase">Telegram</span>
                  <a
                    href={SITE_CONFIG.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-trump-gold hover:underline break-words max-w-xs"
                  >
                    {SITE_CONFIG.telegram}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            TRUMPWARS. Not affiliated with any real person or franchise. For
            entertainment purposes only.
          </p>
          <p>© {year} TRUMPWARS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
