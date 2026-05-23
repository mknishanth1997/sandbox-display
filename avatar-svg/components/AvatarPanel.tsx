import { Avatar } from "@/avatar-svg";

type AvatarPanelProps = {
  id: number;
  name: string;
  reaction?: "normal" | "raised";
  isActive?: boolean;
  bgColor?: string;
};

export function AvatarPanel({
  id,
  name,
  reaction = "normal",
  isActive = false,
  bgColor = "bg-violet-400",
}: AvatarPanelProps) {
  return (
    <div
      className={`
        group
        flex
        w-full
        flex-col
        rounded-2xl
        border
        p-3
        transition-all
        duration-200
        ${
          isActive
            ? "border-indigo-500/50 bg-zinc-900 shadow-[0_0_0_1px_#6366f1,0_4px_24px_rgba(99,102,241,0.18)]"
            : "border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:bg-zinc-900/60"
        }
      `}
    >
      {/* Avatar display area */}
      {/* Avatar display area */}
      <div
        className={`relative h-[120px] overflow-hidden rounded-lg ${bgColor}`}
      >
        <div className="absolute inset-0 scale-[1.15] translate-y-[6%]">
          <Avatar id={id} reaction={reaction} />
        </div>
      </div>

      {/* Bottom content */}
      <div className="flex flex-col items-center pt-3 pb-2">
        <span
          className={`
            text-[13.5px]
            font-medium
            tracking-[-0.02em]
            leading-none
            ${isActive ? "text-white" : "text-zinc-200"}
          `}
        >
          {name}
        </span>

        <span
          className={`
            mt-1.5
            text-[11px]
            leading-none
            ${isActive ? "text-indigo-400/60" : "text-zinc-600"}
          `}
        >
          Student
        </span>
      </div>
    </div>
  );
}
