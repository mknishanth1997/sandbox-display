"use client";
import { useState } from "react";
import { Avatar } from "@/avatar-svg";
import { buildAvatarData } from "@/avatar-svg";
import { AvatarBadgeProps } from "@/avatar-svg";

const GRADIENTS = [
  "bg-gradient-to-br from-purple-600 to-indigo-700",
  "bg-gradient-to-br from-cyan-500 to-blue-600",
  "bg-gradient-to-br from-emerald-500 to-teal-700",
  "bg-gradient-to-br from-pink-500 to-rose-600",
  "bg-gradient-to-br from-orange-500 to-amber-600",
  "bg-gradient-to-br from-blue-500 to-indigo-600",
];

const SIZE = {
  sm: {
    button: "h-12 w-12 rounded-[8px]",
    inset: "inset-[1px]",
    innerR: "rounded-[6px]",
    avatar: "scale-[1.20] translate-y-[2px]",
    hoverH: "h-4",
    shadow: "shadow-[0_2px_6px_rgba(0,0,0,0.3)]",
    activeShadow:
      "shadow-[0_0_10px_rgba(129,140,248,0.2),0_4px_12px_rgba(0,0,0,0.4)]",
  },
  md: {
    button: "h-16 w-16 rounded-[16px]",
    inset: "inset-[1.5px]",
    innerR: "rounded-[14px]",
    avatar: "scale-[1.20] translate-y-[3.5px]",
    hoverH: "h-6",
    shadow: "shadow-[0_3px_8px_rgba(0,0,0,0.3)]",
    activeShadow:
      "shadow-[0_0_15px_rgba(129,140,248,0.25),0_6px_20px_rgba(0,0,0,0.5)]",
  },
};

export function AvatarBadge({
  items,
  id,
  reaction = "normal",
  isActive = false,
  size = "sm",
}: AvatarBadgeProps) {
  const [hasSpun, setHasSpun] = useState(false);

  // THE COMPLIANT FIX: Keep track of the *previous* active prop using plain state
  const [prevActive, setPrevActive] = useState(isActive);

  // When the parent changes `isActive`, this block updates both states inline instantly
  if (isActive !== prevActive) {
    setPrevActive(isActive);
    if (isActive) {
      setHasSpun(true);
    }
  }

  // Build the avatar URL using the provided function and reaction state
  const avatarData = buildAvatarData({
    items,
    id,
    reaction,
  });

  if (!avatarData) return null;
  const { bgColor, name, url } = avatarData;
  const activeThemeClass = bgColor?.color1;

  const spinClass = hasSpun && isActive ? "animate-mini-spin-crisp" : "";
  const s = SIZE[size];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <button
        className={`
          group relative flex items-center justify-center
          ${s.button} overflow-hidden
          border outline-none cursor-pointer
          transition-all duration-300 ease-out
          ${spinClass}
          ${
            isActive
              ? `border-indigo-500/60 scale-[1.04] ${s.activeShadow}`
              : `border-zinc-800/80 hover:border-zinc-700 hover:scale-[1.05] ${s.shadow}`
          }
        `}
      >
        {/* Layer 1 — Stable gradient background */}
        <div
          className={`absolute inset-0 ${activeThemeClass || GRADIENTS[id % GRADIENTS.length]}`}
        />

        {/* Layer 2 — Active border glow */}
        {isActive && (
          <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
            <div
              className="absolute inset-[-300%] animate-mini-border-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 20%, #818cf8 45%, #ffffff 50%, #6366f1 55%, transparent 80%)",
              }}
            />
            <div className={`absolute ${s.inset} ${s.innerR} bg-transparent`} />
          </div>
        )}

        {/* Layer 3 — Depth lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/20 pointer-events-none" />

        {/* Layer 4 — Hover top highlight */}
        <div
          className={`absolute inset-x-0 top-0 ${s.hoverH} bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`}
        />

        {/* Layer 5 — Active shimmer */}
        {isActive && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-mini-shine" />
          </div>
        )}

        {/* Layer 6 — Avatar */}
        <div
          className={`relative z-10 w-full h-full transition-transform duration-300 ${s.avatar} origin-center group-hover:scale-[1.25]`}
        >
          <Avatar src={url} alt={name} />
        </div>
      </button>
    </>
  );
}

const STYLES = `
  @keyframes miniSpinCrisp {
    0%   { transform: rotateY(0deg)   scale(1);    }
    50%  { transform: rotateY(180deg) scale(1.02); }
    100% { transform: rotateY(360deg) scale(1.04); }
  }
  @keyframes miniBorderSpin {
    100% { transform: rotate(360deg); }
  }
  @keyframes miniShineSweep {
    0%   { transform: translateX(-150%) skewX(-15deg); opacity: 0;    }
    15%  { opacity: 0.25; }
    30%  { transform: translateX(150%)  skewX(-15deg); opacity: 0;    }
    100% { transform: translateX(150%)  skewX(-15deg); opacity: 0;    }
  }
  .animate-mini-spin-crisp  { animation: miniSpinCrisp  0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
  .animate-mini-border-spin { animation: miniBorderSpin 3s linear infinite; }
  .animate-mini-shine       { animation: miniShineSweep 2.5s ease-in-out infinite; }
`;
