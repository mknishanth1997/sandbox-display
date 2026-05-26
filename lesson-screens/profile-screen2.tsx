"use client";
import { AvatarPanel } from "@/avatar-svg";
import { studentsList } from "@/avatar-svg";
import { micahAvatars } from "@/avatar-svg";
import { ProfileMiniRow } from "@/avatar-svg";
import { AvatarBadge } from "@/avatar-svg";

export function ProfileScreen2() {
  const N = 12; // Limit how many items to render

  return (
    <div className="w-full px-4 py-6 flex justify-center items-start">
      <div
        className="
          /* 1. LAYOUT & SMART RESPONSIVENESS */
          grid 
          grid-cols-1         /* 1 column on micro-phones so cards have breathing room */
          xs:grid-cols-2      /* 2 columns on standard mobile devices */
          sm:grid-cols-3      /* 3 columns on small tablets */
          md:grid-cols-6      /* 4 balanced columns on laptops and desktops */
          
          /* 2. SPACING & SPATIAL BUFFER */
          gap-5               /* Slightly larger gap since cards carry text details */
          p-2                 /* Clean breathing room from frame edge */
          w-full
          
          /* 3. BOUNDS COMFORT */
          /* Ensures 3D activation flips/scales don't get chopped by layout bounds */
          isolation-isolate
        "
      >
        {micahAvatars.slice(0, N).map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-center items-center w-full min-w-0"
            >
              <AvatarPanel
                id={item.id}
                items={studentsList}
                reaction="raised"
                isActive={false}
                size="xs"
              />
              {/* <AvatarBadge
                id={item.id}
                items={micahAvatars}
                size="sm"
                reaction="raised"
              /> */}
              {/* <ProfileMiniRow
                id={item.id}
                items={micahAvatars}
                isActive={false}
              /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
