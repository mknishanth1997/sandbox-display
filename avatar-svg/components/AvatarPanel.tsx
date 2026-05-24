"use client";

import { useEffect, useState, useRef } from "react";
import { Avatar } from "@/avatar-svg";

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
}

export function ChasingBorder({ isActive }: FXProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none rounded-[inherit] transition-all duration-300 ${
        isActive ? "p-[2px] opacity-100" : "p-[1px] opacity-20"
      } overflow-hidden`}
    >
      {isActive ? (
        <div
          className="absolute inset-[-300%] animate-border-spin"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 20%, #818cf8 45%, #ffffff 50%, #6366f1 55%, transparent 80%)",
          }}
        />
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
  name: string;
  reaction?: "normal" | "raised";
  isActive?: boolean;
  bgColor?: string;
  size?: AvatarSize;
  activeAnimationVariant?: keyof typeof ANIMATION_REGISTRY.activeTrigger;
};

export function AvatarPanel({
  id,
  name,
  reaction = "normal",
  isActive = false,
  bgColor = "bg-violet-500",
  size = "md",
  activeAnimationVariant = "spin360",
}: AvatarPanelProps) {
  const s = sizeConfig[size];
  const [hasSpun, setHasSpun] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isActive) {
      setHasSpun(true);
    }
  }, [isActive]);

  // Read clean animation class matching current component state
  const animationClass =
    hasSpun && isActive
      ? ANIMATION_REGISTRY.activeTrigger[activeAnimationVariant]
      : ANIMATION_REGISTRY.entry.default;

  return (
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
        will-change-transform
        ${s.card}
        ${animationClass}

        ${
          isActive
            ? `bg-zinc-900 scale-[1.06] -translate-y-2 rotate-[-1deg] shadow-[0_0_25px_rgba(129,140,248,0.6),0_15px_35px_rgba(0,0,0,0.5)]`
            : `bg-zinc-950/95 hover:bg-zinc-900 hover:-translate-y-[4px] hover:rotate-[1deg] shadow-[0_4px_12px_rgba(0,0,0,0.3)]`
        }
      `}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Visual Effects Decoupled Modules */}
      <ChasingBorder isActive={isActive} />
      <AmbientHoverGlow />
      <ActiveShineSweep isActive={isActive} />

      {/* Internal Content Base Framework */}
      <div
        className={`
          relative z-10 overflow-hidden ring-1 ring-inset ring-white/5
          ${s.avatar} ${bgColor}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
        <div
          className={`absolute inset-0 transition-transform duration-500 ${s.avatarWrapper} group-hover:scale-[1.04]`}
        >
          <Avatar id={id} reaction={reaction} />
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
          Student
        </span>
      </div>
    </div>
  );
}
