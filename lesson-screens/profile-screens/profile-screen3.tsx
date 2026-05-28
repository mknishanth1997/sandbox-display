"use client";
import { ProfileMiniRow } from "@/avatar-svg";
import { LessonRuntimeProps } from "@/lesson-screens";

export function ProfileScreen3({
  activeInnerTheme,
  items,
  reaction,
  activeIds, // 👈 Grab the current selected IDs array from props
  onActiveIdsChange, // 👈 Grab the parent's single-number toggle handler
}: Omit<LessonRuntimeProps, "size">) {
  const N = 15; // Limit how many items to render

  return (
    <div
      className={`rounded-4xl bg-gradient-to-br ${activeInnerTheme.gradient} w-full`}
    >
      <div className="w-full px-4 py-6 flex justify-center items-start">
        <div
          className={`
            /* 1. LAYOUT & SMART RESPONSIVENESS */
            grid 
            grid-cols-2         /* 📱 Forced exactly 2 columns on mobile layout viewports */
            xs:grid-cols-2      /* 2 columns on wide mobile / small tablets */
            md:grid-cols-3      /* 3 columns on small screens */
            lg:grid-cols-4      /* 4 columns on desktop layouts */
            xl:grid-cols-6      /* 6 columns on extra large widescreen monitors */
            
            /* 2. SPACING & SPATIAL BUFFER */
            gap-3               
            p-2                 
            w-full
            justify-items-center
            
            /* 3. BOUNDS COMFORT */
            isolation-isolate

            /* 📱 MOBILE HEIGHT CLAMP: Keeps list rows pristine and self-contained */
            max-h-[310px]       /* Prevents vertical growth from eating up screen real estate */
            overflow-y-auto     /* Enables fluid native touch gestures inside the card list */
            scrollbar-thin

            /* 💻 DESKTOP HEIGHT RECOVERY */
            md:max-h-none       /* Completely releases the scroll boundary rules on desktop screens */
            md:overflow-y-visible
          `}
        >
          {items.slice(0, N).map((item) => {
            // 👈 Dynamically evaluate true/false if this row's student is active
            const isCurrentActive = activeIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="flex justify-center items-center w-full min-w-0"
              >
                {/* 👈 Click wrapper catches row selections safely without leaking out to outer grids */}
                <div
                  className="w-full cursor-pointer transition-transform duration-150 active:scale-98"
                  onClick={(e) => {
                    e.stopPropagation();
                    onActiveIdsChange(item.id);
                  }}
                >
                  <ProfileMiniRow
                    id={item.id}
                    items={items}
                    isActive={isCurrentActive} // 👈 Directly controls row highlight/active states
                    reaction={isCurrentActive ? "raised" : reaction}
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
