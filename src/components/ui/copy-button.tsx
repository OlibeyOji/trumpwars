"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      disabled={copied}
      className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-trump-gold hover:border-trump-gold/50 disabled:opacity-100 disabled:cursor-not-allowed transition-colors"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check className="w-5 h-5 text-trump-gold" />
      ) : (
        <Copy className="w-5 h-5" />
      )}
    </button>
  );
}