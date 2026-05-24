{
  /* Neon Cyberpunk */
}
<div className="rounded-[32px] bg-gradient-to-br from-fuchsia-500 via-blue-500 to-cyan-400">
  <ProfileRoster />
</div>;

{
  /* RGB Gaming Setup */
}
<div className="rounded-[32px] bg-gradient-to-br from-pink-500 via-violet-500 to-sky-400">
  <ProfileRoster />
</div>;
{
  /* Hyperpop UI */
}
<div className="rounded-[32px] bg-gradient-to-br from-yellow-300 via-pink-500 to-cyan-400">
  <ProfileRoster />
</div>;
{
  /* Toxic Neon */
}
<div className="rounded-[32px] bg-gradient-to-br from-lime-400 via-emerald-500 to-cyan-400">
  <ProfileRoster />
</div>;
{
  /* Vaporwave */
}
<div className="rounded-[32px] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-400">
  <ProfileRoster />
</div>;
{
  /* Synthwave */
}
<div className="rounded-[32px] bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600">
  <ProfileRoster />
</div>;
{
  /* Electric Ocean */
}
<div className="rounded-[32px] bg-gradient-to-br from-blue-600 via-cyan-400 to-teal-300">
  <ProfileRoster />
</div>;
{
  /* Anime Energy */
}
<div className="rounded-[32px] bg-gradient-to-br from-rose-500 via-orange-400 to-yellow-300">
  <ProfileRoster />
</div>;
{
  /* Hacker Neon */
}
<div className="rounded-[32px] bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400">
  <ProfileRoster />
</div>;
{
  /* Aurora Explosion */
}
<div className="rounded-[32px] bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500">
  <ProfileRoster />
</div>;
{
  /* Rich Neon Glass */
}
<div className="rounded-[32px] bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-300">
  <ProfileRoster />
</div>;
{
  /* Ultra Saturated Devtool */
}
<div className="rounded-[32px] bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400">
  <ProfileRoster />
</div>;

import { Avatar } from "@/avatar-svg";

type AvatarPanelProps = {
  id: number;
  name: string;
  reaction?: "normal" | "raised";
  isActive?: boolean;
  bgColor?: string;

  /*
    stacked  = original card look
    inline   = dense preview mode
  */
  layout?: "stacked" | "inline";

  /*
    default  = real UI sizing
    compact  = sandbox/tutorial sizing
  */
  size?: "default" | "compact";
};

export function AvatarPanel({
  id,
  name,
  reaction = "normal",
  isActive = false,
  bgColor = "bg-violet-500",
  layout = "stacked",
  size = "compact",
}: AvatarPanelProps) {
  const isCompact = size === "compact";
  const isInline = layout === "inline";

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[22px]
        border
        backdrop-blur-sm
        transition-all
        duration-300

        ${
          isInline
            ? `
              flex
              items-center
              gap-3
              ${isCompact ? "max-w-[220px] p-2.5" : "max-w-[260px] p-3"}
            `
            : `
              flex
              flex-col
              ${isCompact ? "max-w-[165px] p-2.5" : "max-w-[210px] p-3"}
            `
        }

        ${
          isActive
            ? `
              border-indigo-500/60
              bg-zinc-900
              shadow-[0_0_0_1px_rgba(99,102,241,0.45),0_10px_35px_rgba(99,102,241,0.18)]
            `
            : `
              border-zinc-800
              bg-zinc-950/95
              hover:border-zinc-700
              hover:bg-zinc-900
              hover:-translate-y-[2px]
            `
        }
      `}
    >
      {/* ambient hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-24
            bg-gradient-to-b
            from-white/[0.03]
            to-transparent
          "
        />
      </div>

      {/* AVATAR AREA */}
      <div
        className={`
          relative
          overflow-hidden
          rounded-[18px]
          ring-1
          ring-inset
          ring-white/5
          shrink-0
          ${bgColor}

          ${
            isInline
              ? isCompact
                ? "h-[72px] w-[72px]"
                : "h-[88px] w-[88px]"
              : isCompact
                ? "h-[92px]"
                : "h-[120px]"
          }
        `}
      >
        {/* overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-black/10
          "
        />

        {/* avatar */}
        <div
          className={`
            absolute
            inset-0
            ${
              isInline
                ? "scale-[1.02]"
                : isCompact
                  ? "scale-[1.08]"
                  : "scale-[1.15]"
            }
            translate-y-[5%]
            transition-transform
            duration-300
            group-hover:scale-[1.08]
          `}
        >
          <Avatar id={id} reaction={reaction} />
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`
          relative
          z-10
          flex
          min-w-0
          flex-col

          ${isInline ? "items-start justify-center" : "items-center"}

          ${!isInline && (isCompact ? "pb-1 pt-2" : "pb-2 pt-3")}
        `}
      >
        <span
          className={`
            truncate
            font-medium
            leading-none
            tracking-[-0.03em]

            ${isCompact ? "text-[13px]" : "text-[14px]"}

            ${isActive ? "text-white" : "text-zinc-100"}
          `}
        >
          {name}
        </span>

        <span
          className={`
            mt-1
            leading-none
            tracking-[-0.02em]

            ${isCompact ? "text-[10.5px]" : "text-[11px]"}

            ${isActive ? "text-indigo-300/70" : "text-zinc-500"}
          `}
        >
          Student
        </span>
      </div>

      {/* active ring */}
      {isActive && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[22px]
            ring-1
            ring-indigo-400/20
          "
        />
      )}
    </div>
  );
}
