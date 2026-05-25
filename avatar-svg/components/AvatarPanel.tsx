"use client";

import { useState } from "react";
import { Avatar } from "@/avatar-svg";
import { AvatarStandardizedStructure } from "@/avatar-svg";
import { buildAvatarData } from "@/avatar-svg";

// ==========================================
// 1. ARCHITECTURE CONFIGURATION DICTIONARIES
// ==========================================
type AvatarSize = "xs" | "sm" | "md" | "lg";

const sizeConfig = {
  xs: {
    card: "w-[92px] p-1.5 rounded-[14px]",
    avatar: "h-[54px] rounded-[10px]",
    avatarWrapper: "scale-[0.88] translate-y-[-2%]",
    name: "text-[10px]",
    role: "text-[8px] mt-0.5",
    bottom: "pt-1 pb-0",
    activeRing: "rounded-[14px]",
  },
  sm: {
    card: "w-[112px] p-2 rounded-[16px]",
    avatar: "h-[68px] rounded-[12px]",
    avatarWrapper: "scale-[0.94] translate-y-[0%]",
    name: "text-[11px]",
    role: "text-[9px] mt-0.5",
    bottom: "pt-1.5 pb-0.5",
    activeRing: "rounded-[16px]",
  },
  md: {
    card: "w-[138px] p-2.5 rounded-[20px]",
    avatar: "h-[88px] rounded-[15px]",
    avatarWrapper: "scale-[1.02] translate-y-[3%]",
    name: "text-[12.5px]",
    role: "text-[10px] mt-1",
    bottom: "pt-2 pb-1",
    activeRing: "rounded-[20px]",
  },
  lg: {
    card: "w-[170px] p-3 rounded-[22px]",
    avatar: "h-[118px] rounded-[18px]",
    avatarWrapper: "scale-[1.08] translate-y-[5%]",
    name: "text-[14px]",
    role: "text-[11px] mt-1.5",
    bottom: "pt-3 pb-1.5",
    activeRing: "rounded-[22px]",
  },
};

// Extensible registry for future animation implementations
const ANIMATION_REGISTRY = {
  entry: {
    default: "animate-card-entry",
    none: "",
  },
  activeTrigger: {
    spin360: "animate-card-spin-active",
    none: "",
  },
};

// ==========================================
// 2. ISOLATED VISUAL FX COMPONENTS (DECOUPLED)
// ==========================================
interface FXProps {
  isActive: boolean;
  disableSpin?: boolean;
}

export function ChasingBorder({ isActive, disableSpin = false }: FXProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none rounded-[inherit] transition-all duration-300 ${
        isActive ? "p-[2px] opacity-100" : "p-[1px] opacity-20"
      } overflow-hidden`}
    >
      {isActive ? (
        disableSpin ? (
          // GPU High-Performance Fallback for massive grids
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #818cf8 0%, #ffffff 50%, #6366f1 100%)",
            }}
          />
        ) : (
          <div
            className="absolute inset-[-300%] animate-border-spin"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 20%, #818cf8 45%, #ffffff 50%, #6366f1 55%, transparent 80%)",
            }}
          />
        )
      ) : (
        <div className="absolute inset-0 bg-zinc-800 rounded-[inherit]" />
      )}
      <div className="absolute inset-[1.5px] bg-zinc-950 rounded-[inherit] z-0" />
    </div>
  );
}

export function AmbientHoverGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[inherit] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.04] to-transparent" />
    </div>
  );
}

export function ActiveShineSweep({ isActive }: FXProps) {
  if (!isActive) return null;
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit]">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-avatar-shine" />
    </div>
  );
}

// ==========================================
// 3. CORE AVATAR PANEL COMPONENT CONTAINER
// ==========================================
type AvatarPanelProps = {
  id: number;
  items: AvatarStandardizedStructure[];
  reaction?: "normal" | "raised";
  isActive?: boolean;
  size?: AvatarSize;
  activeAnimationVariant?: keyof typeof ANIMATION_REGISTRY.activeTrigger;
  disableSpin?: boolean; // Performance guard switch
};

export function AvatarPanel({
  id,
  items,
  reaction = "normal",
  isActive = false,
  size = "md",
  activeAnimationVariant = "spin360",
  disableSpin = false,
}: AvatarPanelProps) {
  const s = sizeConfig[size];
  const [hasSpun, setHasSpun] = useState(false);

  // THE COMPLIANT FIX: Safe inline state synchronization tracking
  const [prevActive, setPrevActive] = useState(isActive);

  if (isActive !== prevActive) {
    setPrevActive(isActive);
    if (isActive) {
      setHasSpun(true);
    }
  }

  // Read clean animation class matching current component state
  const animationClass =
    hasSpun && isActive
      ? ANIMATION_REGISTRY.activeTrigger[activeAnimationVariant]
      : ANIMATION_REGISTRY.entry.default;

  // Build the avatar URL using the provided function and reaction state
  const avatarData = buildAvatarData({
    items,
    id,
    reaction,
  });
  if (!avatarData) return null;
  const { bgColor, name, url, category } = avatarData;
  const activeThemeClass = bgColor?.color1;

  return (
    <>
      {/* Injecting optimized styles directly to protect text subpixels from blur */}
      <style dangerouslySetInnerHTML={{ __html: PERFORMANCE_STYLES }} />

      <div
        className={`
          group
          relative
          flex
          shrink-0
          flex-col
          transition-all
          duration-500
          ease-out
          backdrop-blur-sm
          ${s.card}
          ${animationClass}

          ${
            isActive
              ? `bg-zinc-900 scale-[1.04] -translate-y-1.5 rotate-[-0.5deg] shadow-[0_0_25px_rgba(129,140,248,0.4),0_15px_35px_rgba(0,0,0,0.5)]`
              : `bg-zinc-950/95 hover:bg-zinc-900 hover:-translate-y-[4px] hover:rotate-[0.5deg] shadow-[0_4px_12px_rgba(0,0,0,0.3)]`
          }
        `}
      >
        {/* Visual Effects Decoupled Modules */}
        <ChasingBorder isActive={isActive} disableSpin={disableSpin} />
        <AmbientHoverGlow />
        <ActiveShineSweep isActive={isActive} />

        {/* Internal Content Base Framework */}
        <div
          className={`
            relative z-10 overflow-hidden ring-1 ring-inset ring-white/5
            ${s.avatar} ${activeThemeClass}
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
          <div
            className={`absolute inset-0 transition-transform duration-500 ${s.avatarWrapper} group-hover:scale-[1.04]`}
          >
            <Avatar src={url} alt={name} />
          </div>
        </div>

        {/* Description Meta Frame */}
        <div className={`relative z-10 flex flex-col items-center ${s.bottom}`}>
          <span
            className={`truncate font-medium leading-none tracking-[-0.03em] ${s.name} ${isActive ? "text-white font-bold" : "text-zinc-100"}`}
          >
            {name}
          </span>
          <span
            className={`leading-none tracking-[-0.02em] ${s.role} ${isActive ? "text-indigo-300 font-medium" : "text-zinc-500"}`}
          >
            {category}
          </span>
        </div>
      </div>
    </>
  );
}

// Custom runtime patches fixing matrix-blur layouts and offloading computing loads to GPU
const PERFORMANCE_STYLES = `
  @keyframes cardSpinActive {
    0%   { transform: rotateY(0deg) translate3d(0,0,0); }
    50%  { transform: rotateY(180deg) translate3d(0,0,0); }
    100% { transform: rotateY(360deg) translate3d(0,0,0); }
  }
  @keyframes borderSpin {
    0%   { transform: rotate(0deg) translate3d(0,0,0); }
    100% { transform: rotate(360deg) translate3d(0,0,0); }
  }
  @keyframes avatarShine {
    0%   { transform: translateX(-150%) skewX(-15deg) translate3d(0,0,0); opacity: 0; }
    15%  { opacity: 0.25; }
    30%  { transform: translateX(150%) skewX(-15deg) translate3d(0,0,0); opacity: 0; }
    100% { transform: translateX(150%) skewX(-15deg) translate3d(0,0,0); opacity: 0; }
  }
  .animate-card-spin-active { animation: cardSpinActive 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
  .animate-border-spin      { animation: borderSpin 3.5s linear infinite; }
  .animate-avatar-shine     { animation: avatarShine 2.5s ease-in-out infinite; }
`;

// AvatarPanel Usage Example

// <AvatarPanel
//   key={item.id}
//   id={item.id}
//   items={micahAvatars} // Passing the array down cleanly on the client side
//   reaction="raised"
//   isActive={false} // Change to true or dynamic based on active state criteria
//   size="lg"
// />
