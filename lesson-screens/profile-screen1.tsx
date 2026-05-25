import { AvatarPanel } from "@/avatar-svg";
import { micahAvatars } from "@/avatar-svg";
import { ProfileMiniRow } from "@/avatar-svg";
import { AvatarBadge } from "@/avatar-svg";
import { studentsList } from "@/avatar-svg";
export function ProfileRoster() {
  const N = 15; // Change this number to limit how many items you want to render

  return (
    <div className="w-full px-4 py-6 flex justify-center items-start">
      <div
        className="
          /* 1. LAYOUT & RESPONSIVENESS */
          grid 
          grid-cols-3       /* 2 columns on mobile */
          sm:grid-cols-3    /* 3 columns on small tablets */
          md:grid-cols-4    /* 4 columns on small screens */
          lg:grid-cols-5    /* Max 6 columns on desktop */
          
          /* 2. SPACING & SPATIAL BUFFER */
          gap-3             /* Increased gap slightly for cleaner division */
          p-4               /* CRITICAL: Internal padding so cards don't touch the borders */
          
          /* 3. BOUNDS COMFORT */
          /* Ensures 3D activation flips/scales don't get chopped by layout bounds */
          isolation-isolate
          
          /* 4. VISUAL STYLING */
          w-full
          max-w-4xl         /* Prevents container from over-stretching on huge monitors */
          rounded-[32px]
          bg-gradient-to-br
          from-cyan-400
          via-violet-500
          to-fuchsia-500
          
          /* Premium depth to stand out from background canvas */
          shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        "
      >
        {micahAvatars.slice(0, N).map((item) => {
          return (
            <div key={item.id}>
              {/* <AvatarBadge
                key={item.id}
                id={item.id}
                items={micahAvatars}
                size="sm"
                reaction="raised"
              /> */}
              {/* <AvatarPanel
                key={item.id}
                id={item.id}
                items={studentsList}
                reaction="raised"
                isActive={false}
                size="xs"
              /> */}
              <ProfileMiniRow
                key={item.id}
                id={item.id}
                items={micahAvatars}
                isActive={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
