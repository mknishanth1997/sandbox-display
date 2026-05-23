type SandboxDisplayInnerFrameProps = {
  children: React.ReactNode;
};

export function SandboxDisplayInnerFrame({
  children,
}: SandboxDisplayInnerFrameProps) {
  return (
    /* 1. Give this a fixed height constraint like h-[600px], h-[500px], or max-h-[700px] 
          so it actually has a ceiling to stop it from growing forever. */
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#09090b] p-6 rounded-xl border border-zinc-800">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-72 w-72 rounded-full bg-indigo-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px]" />

      {/* Header */}
      <div className="relative z-10 mb-6 flex items-center justify-between border-b border-white/[0.04] pb-4契 flex-shrink-0">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            Class List
          </h3>
          <p className="text-sm font-semibold text-zinc-200">
            Active Roster Selection
          </p>
        </div>
        <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-1 font-mono text-[10px] text-zinc-400">
          8 Instances Loaded
        </span>
      </div>

      {/* 2. Content: Give it flex-1 and overflow-y-auto so ONLY this area scrolls */}
      <div className="relative z-10 flex-1 overflow-hidden pr-1 custom-scrollbar">
        {children}
      </div>

      {/* Footer controls */}
      {/* 3. Added flex-shrink-0 so the footer never squishes out of sight */}
      <div className="relative z-10 mt-6 flex justify-end gap-2 border-t border-white/[0.04] pt-4 flex-shrink-0">
        <button className="rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-[11px] text-zinc-300 transition-colors hover:bg-zinc-800">
          Prev ID
        </button>

        <button className="rounded bg-indigo-600 px-3 py-1.5 font-mono text-[11px] text-white shadow-sm shadow-indigo-500/20 transition-colors hover:bg-indigo-500">
          Next ID
        </button>
      </div>
    </div>
  );
}
