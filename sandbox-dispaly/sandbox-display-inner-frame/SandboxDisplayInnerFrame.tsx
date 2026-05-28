type SandboxDisplayInnerFrameProps = {
  children: React.ReactNode;
};

export function SandboxDisplayInnerFrame({
  children,
}: SandboxDisplayInnerFrameProps) {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-zinc-800
        bg-[#09090b]
        px-4
        py-0 /* 1. Removed top/bottom padding from container */
      "
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-56 w-56 rounded-full bg-indigo-500/5 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-cyan-500/5 blur-[90px]" />

      {/* header */}
      {/* header */}
      <div
        className="
    relative
    z-10
    flex
    shrink-0
    items-center
    justify-between
    border-b
    border-white/[0.04]
    pt-3
    pb-3
  "
      >
        <div>
          {/* 🎯 SUBTLE BUT READABLE: 
        Using zinc-400 with tracking ensures crisp contrast clarity for Google 
        while remaining secondary and subtler than the main title text below it. */}
          <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400/85">
            Class List
          </h3>

          <p className="text-[13px] font-semibold text-zinc-200 mt-0.5">
            Active Roster Selection
          </p>
        </div>

        {/* 🎯 STANDALONE BADGE STYLE:
      Shifted to a subtle, self-contained indigo/zinc tint. This gives it its own clear 
      identity in the layout, looks premium, and easily clears the high-contrast readability thresholds. */}
        <span className="rounded-[4px] border border-indigo-500/15 bg-indigo-500/[0.06] px-2 py-0.5 font-mono text-[9px] font-medium text-indigo-300 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
          8 Instances Loaded
        </span>
      </div>

      {/* content */}
      {/* 3. Completely flush. No padding, no margins. Child controls everything. */}
      <div className="relative z-10 min-h-0 flex-1 overflow-hidden">
        {children}
      </div>

      {/* footer */}
      <div
        className="
          relative
          z-10
          flex
          shrink-0
          justify-end
          gap-2
          border-t
          border-white/[0.04]
          pt-3 /* 4. No top margin (mt-0), line sits flush with content */
          pb-3 /* Adds padding inside bottom of footer to keep it off the frame border */
        "
      >
        <button className="rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-[10px] text-zinc-300 transition-colors hover:bg-zinc-800">
          Prev ID
        </button>

        <button className="rounded bg-indigo-600 px-3 py-1.5 font-mono text-[10px] text-white shadow-sm shadow-indigo-500/20 transition-colors hover:bg-indigo-500">
          Next ID
        </button>
      </div>
    </div>
  );
}
