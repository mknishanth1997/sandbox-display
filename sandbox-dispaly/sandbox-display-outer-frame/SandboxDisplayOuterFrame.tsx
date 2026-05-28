"use client";
import { useState } from "react";
import { SandboxFrameProps } from "./SandboxDisplayOuterFrame.types";
interface SandboxDisplayOuterFrameProps extends SandboxFrameProps {
  onRedLightClick?: () => void;
  onYellowLightClick?: () => void;
  onGreenLightClick?: () => void;
}

export function SandboxDisplayOuterFrame({
  children,
  className = "",
  noPadding = true,

  onRedLightClick,
  onYellowLightClick,
  onGreenLightClick,
}: SandboxDisplayOuterFrameProps) {
  const [hovered, setHovered] = useState(false);

  // THE LOCAL CONTROLLER ENGINE: Keeps everything completely isolated inside the frame
  const [isTvOn, setIsTvOn] = useState(true);

  return (
    <div
      className={`relative h-full w-full ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Injecting the pure, isolated inner-content CRT animation stack */}
      <style dangerouslySetInnerHTML={{ __html: INNER_CRT_STYLES }} />

      {/* Outer glow / shadow */}
      <div
        className="absolute inset-0 rounded-3xl transition-all duration-300 pointer-events-none"
        style={{
          boxShadow: hovered
            ? `
            0 0 0 1px rgba(255,255,255,0.08),
            0 10px 30px rgba(0,0,0,0.45),
            0 30px 80px rgba(0,0,0,0.35)
          `
            : `
            0 0 0 1px rgba(255,255,255,0.05),
            0 6px 20px rgba(0,0,0,0.4),
            0 20px 50px rgba(0,0,0,0.3)
          `,
        }}
      />

      {/* Main shell */}
      <div
        className="
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.08]
        bg-[#0b0b0f]
        backdrop-blur-xl
      "
      >
        {/* Top highlight */}
        <div
          className="
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          pointer-events-none
        "
        />

        {/* Top bar — passing state down internally so it's hidden from your macro layout */}
        <TopBar
          isTvOn={isTvOn}
          onToggleTv={() => setIsTvOn(!isTvOn)}
          onRedLightClick={onRedLightClick}
          onYellowLightClick={onYellowLightClick}
          onGreenLightClick={onGreenLightClick}
        />

        {/* Content Tracking Bay */}
        <div className={`min-h-0 flex-1 ${noPadding ? "" : "p-4 md:p-6"}`}>
          <div
            className={`
              h-full
              overflow-hidden
              rounded-2xl
              ${
                noPadding
                  ? ""
                  : `
                    border
                    border-white/[0.05]
                    bg-[#11131a]
                    ring-1
                    ring-white/[0.03]
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]
                  `
              }
            `}
          >
            {/* The CRT Animation Wrapper mapping to local engine states */}
            <div
              className={`w-full h-full ${
                isTvOn ? "animate-inner-crt-on" : "animate-inner-crt-off"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TrafficLightsProps {
  onRedClick?: () => void;
  onYellowClick?: () => void;
  onGreenClick?: () => void;
}

function TrafficLights({
  onRedClick,
  onYellowClick,
  onGreenClick,
}: TrafficLightsProps) {
  const lights = [
    {
      color: "#ff5f57",
      onClick: onRedClick,
      label: "Switch to Sunset Purple theme", // 🎯 Accessible descriptive name
    },
    {
      color: "#febc2e",
      onClick: onYellowClick,
      label: "Switch to Cyberpunk Amber theme", // 🎯 Accessible descriptive name
    },
    {
      color: "#28c840",
      onClick: onGreenClick,
      label: "Switch to Matrix Green theme", // 🎯 Accessible descriptive name
    },
  ];

  return (
    <div className="flex items-center gap-1.5">
      {lights.map((light, index) => (
        <button
          key={index}
          onClick={light.onClick}
          aria-label={
            light.label
          } /* ♿️ Screen readers will read this label out loud */
          className="h-3 w-3 rounded-full cursor-pointer transition-transform active:scale-75"
          style={{
            backgroundColor: light.color,
          }}
        />
      ))}
    </div>
  );
}

interface TopBarProps {
  isTvOn: boolean;
  onToggleTv: () => void;

  onRedLightClick?: () => void;
  onYellowLightClick?: () => void;
  onGreenLightClick?: () => void;
}

function TopBar({
  isTvOn,
  onToggleTv,
  onRedLightClick,
  onYellowLightClick,
  onGreenLightClick,
}: TopBarProps) {
  return (
    <div className="relative flex h-11 items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 backdrop-blur-xl">
      {/* Left controls */}
      <TrafficLights
        onRedClick={onRedLightClick}
        onYellowClick={onYellowLightClick}
        onGreenClick={onGreenLightClick}
      />

      {/* Center title — Clean, High-Contrast Monochrome */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-mono text-[11px] tracking-wider font-semibold text-white/70 select-none"
          style={{
            textShadow: "0 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          Nishanth Sandbox
        </span>
      </div>

      {/* Right badge — Dynamic state-swapping while preserving your exact original architecture spacing */}
      <button
        onClick={onToggleTv}
        className="flex items-center active:scale-95 transition-transform cursor-pointer select-none bg-transparent border-none p-0 outline-none"
      >
        <div
          className={`
            relative
            rounded-[4px] 
            border 
            px-2 
            py-0.5 
            font-mono 
            text-[9px] 
            font-bold 
            tracking-wider 
            transition-all
            duration-300
            ${
              isTvOn
                ? "border-emerald-500/20 bg-zinc-950/50 text-emerald-300 shadow-[0_0_16px_-2px_rgba(16,185,129,0.2),0_4px_12px_-4px_rgba(0,0,0,0.5)]"
                : "border-rose-500/20 bg-zinc-950/50 text-rose-400 shadow-[0_0_16px_-2px_rgba(244,63,94,0.15),0_4px_12px_-4px_rgba(0,0,0,0.5)]"
            }
          `}
        >
          {/* Subtle slow pulse signal */}
          <span
            className={`inline-block w-1 h-1 rounded-full mr-1.5 animate-pulse vertical-middle opacity-90 ${
              isTvOn ? "bg-emerald-400" : "bg-rose-400"
            }`}
          />
          <span className="vertical-middle">{isTvOn ? "LIVE" : "OFFLINE"}</span>
        </div>
      </button>
    </div>
  );
}

// Isolation tracks preventing matrix-leaks out of the overflow boundaries
const INNER_CRT_STYLES = `
  @keyframes innerCrtTurnOff {
    0% {
      transform: scale(1, 1);
      filter: brightness(1) contrast(1);
      opacity: 1;
    }
    38% {
      transform: scale(0.003, 1);
      filter: brightness(2.5) contrast(1.2);
      opacity: 1;
    }
    82% {
      transform: scale(0.003, 0);
      filter: brightness(5);
      opacity: 0.8;
    }
    100% {
      transform: scale(0, 0);
      filter: brightness(10);
      opacity: 0;
    }
  }

  @keyframes innerCrtTurnOn {
    0% {
      transform: scale(0, 0);
      filter: brightness(5);
      opacity: 0;
    }
    45% {
      transform: scale(0.003, 1);
      filter: brightness(2.5);
      opacity: 0.8;
    }
    100% {
      transform: scale(1, 1);
      filter: brightness(1) contrast(1);
      opacity: 1;
    }
  }

  .animate-inner-crt-off {
    animation: innerCrtTurnOff 0.42s cubic-bezier(0.25, 1, 0.2, 1) forwards;
    transform-origin: center center;
  }

  .animate-inner-crt-on {
    animation: innerCrtTurnOn 0.38s cubic-bezier(0.25, 1, 0.3, 1) forwards;
    transform-origin: center center;
  }
`;
