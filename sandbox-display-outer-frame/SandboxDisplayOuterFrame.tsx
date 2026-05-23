"use client";
import { useState } from "react";
import { SandboxFrameProps } from "./SandboxDisplayOuterFrame.types";

export function SandboxDisplayOuterFrame({
  children,
  className = "",
  noPadding = true,
}: SandboxFrameProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative h-full w-full ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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

        {/* Top bar */}
        <TopBar />

        {/* Content */}
        <div className={`flex-1 ${noPadding ? "" : "p-4 md:p-6"}`}>
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
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Traffic lights component for the top bar, mimicking macOS style. Each light is a colored circle (red, yellow, green) that represents close, minimize, and maximize actions respectively. The colors are defined in an array and rendered using a map function. The component is styled to be small and circular, with appropriate spacing between the lights.
function TrafficLights() {
  const lights = [
    { color: "#ff5f57" },
    { color: "#febc2e" },
    { color: "#28c840" },
  ];

  return (
    <div className="flex items-center gap-1.5">
      {lights.map((light, index) => (
        <div
          key={index}
          className="h-3 w-3 rounded-full"
          style={{
            backgroundColor: light.color,
          }}
        />
      ))}
    </div>
  );
}

// Top bar component for the sandbox frame. It includes the traffic lights on the left and a centered title. The top bar has a blurred background with a subtle border at the bottom. The title is styled with a monospaced font and is semi-transparent to blend with the overall design. The traffic lights are positioned on the left, while the title is centered using absolute positioning.
function TopBar() {
  return (
    <div className="relative flex h-11 items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 backdrop-blur-xl">
      {/* Left controls */}
      <TrafficLights />

      {/* Center title — Clean, High-Contrast Monochrome */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-mono text-[11px] tracking-wider font-semibold text-white/70 select-none"
          style={{
            // Crisp, dark drop shadow to guarantee readability over bright child content
            textShadow: "0 1px 3px rgba(0,0,0,0.6)",
          }}
        >
          Nishanth Sandbox
        </span>
      </div>

      {/* Right badge — Square Pulse Glow */}
      <div className="flex items-center">
        <div
          className="
            relative
            rounded-[4px] 
            border 
            border-emerald-500/20 
            bg-zinc-950/50 
            px-2 
            py-0.5 
            font-mono 
            text-[9px] 
            font-bold 
            tracking-wider 
            text-emerald-300
            
            /* Clean ambient emerald halo bloom */
            shadow-[0_0_16px_-2px_rgba(16,185,129,0.2),0_4px_12px_-4px_rgba(0,0,0,0.5)]
          "
        >
          {/* Subtle slow pulse signal */}
          <span className="inline-block w-1 h-1 rounded-full bg-emerald-400 mr-1.5 animate-pulse vertical-middle opacity-90" />
          <span className="vertical-middle">LIVE</span>
        </div>
      </div>
    </div>
  );
}
