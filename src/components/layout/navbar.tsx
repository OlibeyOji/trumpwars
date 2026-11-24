"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/config";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "How to Buy", href: "#how-to-buy" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/5 bg-star-black/80 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-trump-gold flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-[10px] font-black text-star-black tracking-tighter">
              T
            </span>
          </div>
          <span className="font-black text-xl text-white tracking-tight text-glow-gold">
            TRUMP<span className="text-trump-red">WARS</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-trump-gold hover:text-glow-gold"
            >
              {link.name}
            </Link>
          ))}
          <Link href={SITE_CONFIG.buyLink}>
            <Button size="sm">BUY $TRUMPWARS</Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-trump-gold"
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-white/5 bg-star-black/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-trump-gold"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link href={SITE_CONFIG.buyLink}>
                  <Button size="sm" className="w-full">
                    BUY $TRUMPWARS
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
