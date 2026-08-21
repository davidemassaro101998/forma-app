import React from "react";
import { motion } from "motion/react";

interface FitBadge3DProps {
  size?: "sm" | "md" | "lg" | "xl";
  animateFloating?: boolean;
  /** Overrides the fixed size classes for `size` -- for embedding inside a
   *  container that's already fluidly sized (e.g. a clamp()-based wrapper)
   *  where a fixed pixel size would overflow on short viewports. */
  className?: string;
}

// Badge di marchio stilizzato: manubrio su sfondo verde smeraldo-teal
// (--brand-coral), stessa struttura del box regalo originale ma senza
// fine dettaglio 3D — sostituire con un logo disegnato reale quando
// disponibile.
export const FitBadge3D: React.FC<FitBadge3DProps> = ({ size = "sm", animateFloating = false, className }) => {
  const dimensions = className ?? {
    sm: "w-8 h-8",
    md: "w-14 h-14",
    lg: "w-24 h-24",
    xl: "w-36 h-36",
  }[size];

  const icon = (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="fitBadgeBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA968" />
          <stop offset="100%" stopColor="#0B8452" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="100" height="100" rx="26" fill="url(#fitBadgeBg)" />
      <g stroke="#FFFFFF" strokeLinecap="round" strokeWidth="7" fill="none">
        <line x1="30" y1="60" x2="90" y2="60" />
        <rect x="22" y="46" width="14" height="28" rx="5" fill="#FFFFFF" stroke="none" />
        <rect x="84" y="46" width="14" height="28" rx="5" fill="#FFFFFF" stroke="none" />
        <rect x="12" y="52" width="8" height="16" rx="3" fill="#FFFFFF" stroke="none" />
        <rect x="100" y="52" width="8" height="16" rx="3" fill="#FFFFFF" stroke="none" />
      </g>
    </svg>
  );

  if (animateFloating) {
    return (
      <div className="relative flex items-center justify-center [perspective:1000px]">
        <motion.div
          animate={{ scale: [0.85, 1.1, 0.85], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 w-28 h-5 bg-black/15 rounded-full blur-lg"
        />
        <motion.div
          animate={{ rotateY: [0, 180, 360], y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className={`${dimensions} relative flex items-center justify-center [transform-style:preserve-3d] filter drop-shadow-[0_12px_24px_rgba(28,53,78,0.3)]`}
        >
          {icon}
        </motion.div>
      </div>
    );
  }

  return <div className={`${dimensions} flex items-center justify-center shrink-0`}>{icon}</div>;
};
