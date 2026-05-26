"use client";
import { AvatarBadge } from "@/avatar-svg";
import { micahAvatars } from "@/avatar-svg";
import { AvatarPanel } from "@/avatar-svg";
import { studentsList } from "@/avatar-svg";
import { ProfileMiniRow } from "@/avatar-svg";

export function ProfileScreen1() {
  const N = 30; // Limit how many items to render

  return (
    <div className="w-full px-4 py-6 flex justify-center items-start">
      <div
        className="
          /* 1. LAYOUT & HYPER-RESPONSIVENESS */
          grid 
          grid-cols-2         /* 2 clean columns on micro-screens/phones */
          xs:grid-cols-3      /* 3 columns on standard mobile */
          sm:grid-cols-4      /* 4 columns on tablets */
          md:grid-cols-6      /* 6 columns on small laptops */
          lg:grid-cols-8      /* 8 columns on standard desktop */
          xl:grid-cols-10     /* Max 10 columns on widescreen layouts */
          
          /* 2. SPACING & SPATIAL BUFFER */
          gap-4               /* Balanced spacing for badge-text groups */
          p-2                 /* Clean breathing room from frame edge */
          w-full
          
          /* 3. BOUNDS COMFORT */
          /* Prevents 3D scaling and hover shifts from clipping against layout edges */
          isolation-isolate
        "
      >
        {micahAvatars.slice(0, N).map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-center items-center w-full min-w-0 aspect-square"
              onClick={(e) => {
                // Optional: If the parent grid cell has a click action,
                // this ensures clicking the badge doesn't accidentally trigger it.
              }}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <AvatarBadge
                  id={item.id}
                  items={micahAvatars}
                  size="sm"
                  reaction="raised"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
