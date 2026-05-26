"use client";
import { ProfileMiniRow } from "@/avatar-svg";
import { micahAvatars } from "@/avatar-svg";
import { AvatarPanel } from "@/avatar-svg";
import { AvatarBadge } from "@/avatar-svg";
import { studentsList } from "@/avatar-svg";

export function ProfileScreen3() {
  const N = 15; // Limit how many items to render

  return (
    <div className="w-full px-4 py-6 flex justify-center items-start">
      <div
        className="
          /* 1. LAYOUT & SMART RESPONSIVENESS */
          grid 
          grid-cols-1         /* 1 column on mobile so horizontal rows don't get squished */
          xs:grid-cols-2      /* 2 columns on wide mobile / small tablets */
          md:grid-cols-3      /* 3 columns on small screens */
          lg:grid-cols-4      /* 4 columns on desktop layouts */
          xl:grid-cols-5      /* 5 columns on extra large widescreen monitors */
          
          /* 2. SPACING & SPATIAL BUFFER */
          gap-3               /* Clean spatial buffer matching your design specs */
          p-2                 /* Standard internal edge padding */
          w-full
          
          /* 3. BOUNDS COMFORT */
          /* Ensures crisp-spin animations and hover transforms don't clip */
          isolation-isolate
        "
      >
        {micahAvatars.slice(0, N).map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-center items-center w-full min-w-0"
            >
              <ProfileMiniRow
                id={item.id}
                items={micahAvatars}
                isActive={false}
              />
              {/* <AvatarBadge
                id={item.id}
                items={micahAvatars}
                size="sm"
                reaction="raised"
              /> */}
              {/* <AvatarPanel
                id={item.id}
                items={studentsList}
                reaction="raised"
                isActive={false}
                size="xs"
              /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
