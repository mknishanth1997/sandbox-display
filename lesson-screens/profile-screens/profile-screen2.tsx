"use client";
import { AvatarPanel } from "@/avatar-svg";
import { LessonRuntimeProps } from "@/lesson-screens";

export function ProfileScreen2({
  activeInnerTheme,
  items,
  reaction,
  size, // 👈 Supports "xs" | "sm" | "md" | "lg"
  activeIds,
  onActiveIdsChange,
}: LessonRuntimeProps) {
  const N = 14; // Limit how many items to render

  // 🎯 DYNAMIC MOBILE COLUMN LOOKUP
  // Maps your layout requirements smoothly to full, un-broken Tailwind class definitions
  const mobileColsClass =
    size === "xs"
      ? "grid-cols-3"
      : size === "sm"
        ? "grid-cols-2"
        : size === "md"
          ? "grid-cols-2"
          : "grid-cols-1"; // Fallback for "lg" size prop

  return (
    <div
      className={`rounded-4xl bg-linear-to-br ${activeInnerTheme.gradient} w-full`}
    >
      <div className="w-full px-4 py-6 flex justify-center items-start">
        <div
          className={`
            /* 1. LAYOUT & SMART RESPONSIVENESS */
            grid 
            ${mobileColsClass}  /* 👈 Dynamic Variable handling mobile states */
            sm:grid-cols-3      /* Kept intact for small tablets */
            md:grid-cols-7      /* Kept intact for laptop and desktop environments */
            
            /* 2. SPACING & SPATIAL BUFFER */
            gap-5               
            p-2                 
            w-full
            justify-items-center
            
            /* 3. BOUNDS COMFORT */
            isolation-isolate

            /* 📱 MOBILE HEIGHT CLAMP: Prevents long scrolling on phone screens */
            max-h-[310px]       /* Keeps these detailed text panels from stretching the screen */
            overflow-y-auto     /* Allows rolling layout gestures inside the frame */
            scrollbar-thin

            /* 💻 DESKTOP RESTORATION */
            md:max-h-none       /* Unbinds the scroll constraints natively on desktop viewports */
            md:overflow-y-visible
          `}
        >
          {items.slice(0, N).map((item) => {
            // 👈 Dynamically check if this specific card's ID is selected
            const isCurrentActive = activeIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="flex justify-center items-center w-full min-w-0"
              >
                {/* 👈 Wrap the Panel in a click box that catches the click and triggers the toggle */}
                <div
                  className="w-full cursor-pointer transition-transform duration-150 active:scale-98"
                  onClick={(e) => {
                    e.stopPropagation();
                    onActiveIdsChange(item.id);
                  }}
                >
                  <AvatarPanel
                    id={item.id}
                    items={items}
                    reaction={isCurrentActive ? "raised" : reaction}
                    isActive={isCurrentActive} // 👈 Controlled directly by the state array match
                    size={size}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
