"use client";

import { useState } from "react";
import { buildAvatarData } from "@/avatar-svg";
import { Avatar } from "@/avatar-svg";
import { ProfileMiniRowProps } from "@/avatar-svg";

export function ProfileMiniRow({
  id,
  isActive = false,
  items,
  reaction = "normal",
}: ProfileMiniRowProps) {
  const [hasSpun, setHasSpun] = useState(false);

  // THE FIXED RENDERING LOGIC (No refs, no useEffect)
  const [prevActive, setPrevActive] = useState(isActive);

  if (isActive !== prevActive) {
    setPrevActive(isActive);
    if (isActive) {
      setHasSpun(true);
    }
  }

  // If active, run the specialized crisp-spin animation
  const animationClass = hasSpun && isActive ? "animate-mini-spin-crisp" : "";

  // Build the avatar URL using the provided function and reaction state
  const avatarData = buildAvatarData({
    items,
    id,
    reaction,
  });
  if (!avatarData) return null;
  const { bgColor, name, url } = avatarData;
  const activeThemeClass = bgColor?.color1;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* THE BLUR FIX: 
          We avoid altering Z-axis depths or forcing continuous 3D matrices at rest.
          By scaling cleanly without complex perspectives, the subpixel font rendering stays pixel-perfect.
        */
        @keyframes miniSpinCrisp {
          0% { transform: rotateY(0deg) scale(1); }
          50% { transform: rotateY(180deg) scale(1.02); }
          100% { transform: rotateY(360deg) scale(1.03); }
        }
        @keyframes miniBorderSpin {
          100% { transform: rotate(360deg); }
        }
        @keyframes miniShineSweep {
          0% { transform: translateX(-150%) skewX(-15deg); opacity: 0; }
          15% { opacity: 0.25; }
          30% { transform: translateX(150%) skewX(-15deg); opacity: 0; }
          100% { transform: translateX(150%) skewX(-15deg); opacity: 0; }
        }
        .animate-mini-spin-crisp { 
          animation: miniSpinCrisp 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards; 
        }
        .animate-mini-border-spin { animation: miniBorderSpin 3s linear infinite; }
        .animate-mini-shine { animation: miniShineSweep 2.5s ease-in-out infinite; }
      `,
        }}
      />

      <div
        className={`
          group relative flex items-center gap-2.5 overflow-hidden rounded-[14px] border backdrop-blur-sm transition-all duration-300 ease-out
          
          /* Auto sizing architecture without manual constraints */
          w-max min-w-[120px] max-w-[180px] p-1.5 pr-3.5
          
          ${animationClass}
          
          ${
            isActive
              ? "border-indigo-500/60 bg-zinc-900 scale-[1.03] shadow-[0_0_15px_rgba(129,140,248,0.25),0_6px_20px_rgba(0,0,0,0.4)]"
              : "border-zinc-800 bg-zinc-950/95 hover:border-zinc-700 hover:bg-zinc-900 hover:translate-x-[1px] shadow-[0_3px_8px_rgba(0,0,0,0.2)]"
          }
        `}
      >
        {/* 1. FX layer: Chasing Border */}
        <div
          className={`absolute inset-0 pointer-events-none rounded-[inherit] transition-all duration-300 ${isActive ? "p-[1.5px] opacity-100" : "p-[1px] opacity-20"} overflow-hidden`}
        >
          {isActive ? (
            <div
              className="absolute inset-[-300%] animate-mini-border-spin"
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

        {/* 2. FX layer: Ambient Hover Glow */}
        <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-[inherit] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/[0.03] to-transparent" />
        </div>

        {/* 3. FX layer: Active Shine Sweep */}
        {isActive && (
          <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-mini-shine" />
          </div>
        )}

        {/* Shrunk Mini Avatar Frame */}
        <div
          className={`relative z-10 h-9 w-9 overflow-hidden rounded-[9px] ring-1 ring-inset ring-white/5 shrink-0 ${activeThemeClass}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
          <div className="absolute inset-0 transition-transform duration-300 scale-[1.01] group-hover:scale-[1.04]">
            <Avatar src={url} alt={name} />
          </div>
        </div>

        {/* Dense Text Layout */}
        <div className="relative z-10 flex flex-col items-start min-w-0 justify-center">
          <span
            className={`w-full truncate font-medium leading-none tracking-[-0.02em] text-[12px] ${isActive ? "text-white font-bold" : "text-zinc-200"}`}
          >
            {name}
          </span>
          <span
            className={`mt-1 leading-none tracking-[-0.02em] text-[9.5px] ${isActive ? "text-indigo-400 font-medium" : "text-zinc-500"}`}
          >
            Student
          </span>
        </div>
      </div>
    </>
  );
}
