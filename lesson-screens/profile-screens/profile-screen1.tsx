"use client";
import { AvatarBadge } from "@/avatar-svg";
import { LessonRuntimeProps } from "@/lesson-screens";

export function ProfileScreen1({
  activeInnerTheme,
  items,
  reaction,
  size, // 👈 "sm" or "md" size prop
  activeIds,
  onActiveIdsChange,
}: LessonRuntimeProps<"sm" | "md">) {
  const N = 30;

  // 🎯 DYNAMIC COLUMN CONFIGURATION
  // Maps the TypeScript size contract directly to your specific column preferences for mobile viewports
  const mobileColsClass = size === "sm" ? "grid-cols-5" : "grid-cols-4";

  return (
    <div
      className={`rounded-4xl bg-gradient-to-br ${activeInnerTheme.gradient} w-full`}
    >
      <div className="w-full px-4 py-6 flex justify-center items-start">
        <div
          className={`
            /* 1. DYNAMIC LAYOUT & RESPONSIVENESS */
            grid 
            ${mobileColsClass}  /* 👈 Dynamic Variable: 5 cols if sm, 4 cols if md */
            sm:grid-cols-6      
            md:grid-cols-8      
            lg:grid-cols-8      
            xl:grid-cols-10     /* Perfect 10-per-row desktop layout preserved */
            
            /* 2. SPACING & PRECISION BUFFER */
            gap-4               
            p-2                 
            w-full              
            justify-items-center
            isolation-isolate

            /* 📱 MOBILE HEIGHT CONTROL: Restricts tall scrolling on phones */
            max-h-[290px]       /* Clamps the box height so it doesn't eat up the whole phone screen */
            overflow-y-auto     /* Allows clean vertical scrolling inside the gradient frame */
            scrollbar-thin      /* Keeps the scrollbar minimal on mobile */

            /* 💻 DESKTOP HEIGHT RECOVERY: Clears mobile constraints on larger screens */
            md:max-h-none       /* Removes the height restriction entirely on desktop */
            md:overflow-y-visible/* Disables internal scrolling completely on desktop */
          `}
        >
          {items.slice(0, N).map((item) => {
            const isCurrentActive = activeIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="flex justify-center items-center w-full min-w-0 aspect-square"
              >
                <div
                  className="cursor-pointer transition-transform duration-150 active:scale-95"
                  onClick={(e) => {
                    e.stopPropagation();
                    onActiveIdsChange(item.id);
                  }}
                >
                  <AvatarBadge
                    id={item.id}
                    items={items}
                    size={size}
                    reaction={isCurrentActive ? "raised" : reaction}
                    isActive={isCurrentActive}
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
