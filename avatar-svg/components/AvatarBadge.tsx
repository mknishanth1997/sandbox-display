import { Avatar } from "@/avatar-svg";

type AvatarBadgeProps = {
  id: number;
  name: string;
  reaction?: "normal" | "raised";
  isActive?: boolean;
};

export function AvatarBadge({
  id,
  name,
  reaction = "normal",
  isActive = false,
}: AvatarBadgeProps) {
  return (
    <div
      className={`
        w-full
        flex
        items-center
        gap-3.5
        rounded-xl
        px-3.5
        py-2.5
        border
        cursor-pointer
        transition-all
        duration-150
        shadow-[0_1px_3px_rgba(0,0,0,0.4)]
        ${
          isActive
            ? "bg-indigo-500/[0.08] border-l-2 border-l-indigo-500 border-t-indigo-500/20 border-r-indigo-500/20 border-b-indigo-500/20"
            : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800/70 hover:border-zinc-700"
        }
      `}
    >
      {/* Avatar */}
      <div
        className={`
          h-12
          w-12
          shrink-0
          overflow-hidden
          rounded-[10px]
          ring-1
          ${isActive ? "ring-indigo-400/25" : "ring-white/[0.06]"}
        `}
      >
        <div className="w-full h-full scale-[1.18] origin-center translate-y-[3px]">
          <Avatar id={id} reaction={reaction} />
        </div>
      </div>

      {/* Name + role */}
      <div className="flex flex-col gap-[3px] min-w-0">
        <span
          className={`
            text-[13.5px]
            font-semibold
            tracking-[-0.015em]
            leading-none
            truncate
            ${isActive ? "text-white" : "text-zinc-200"}
          `}
        >
          {name}
        </span>
        <span
          className={`
            text-[11px]
            font-normal
            leading-none
            tracking-normal
            ${isActive ? "text-indigo-400/60" : "text-zinc-600"}
          `}
        >
          Student
        </span>
      </div>
    </div>
  );
}
