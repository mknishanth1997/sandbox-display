import { AvatarPanel } from "@/avatar-svg";

const students = [
  {
    id: 1,
    name: "Alex",
    active: true,
    bg: "bg-violet-500",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  //   {
  //     id: 2,
  //     name: "Maya",
  //     active: false,
  //     bg: "bg-cyan-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya",
  //   },
  //   {
  //     id: 13,
  //     name: "Jordan",
  //     bg: "bg-emerald-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
  //   },
  //   {
  //     id: 14,
  //     name: "Sofia",
  //     bg: "bg-pink-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
  //   },
  //   {
  //     id: 5,
  //     name: "Ethan",
  //     bg: "bg-orange-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan",
  //   },
  //   {
  //     id: 6,
  //     name: "Nishanth",
  //     bg: "bg-blue-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nishanth",
  //   },
  //   // Second row
  //   {
  //     id: 7,
  //     name: "Alex",
  //     bg: "bg-violet-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex2",
  //   },
  //   {
  //     id: 8,
  //     name: "Maya",
  //     bg: "bg-cyan-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya2",
  //   },
  //   {
  //     id: 9,
  //     name: "Jordan",
  //     bg: "bg-emerald-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan2",
  //   },
  //   {
  //     id: 10,
  //     name: "Sofia",
  //     bg: "bg-pink-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia2",
  //   },
  //   {
  //     id: 11,
  //     name: "Ethan",
  //     bg: "bg-orange-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan2",
  //   },
  //   {
  //     id: 12,
  //     name: "Nishanth",
  //     active: false,
  //     bg: "bg-blue-500",
  //     avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nishanth2",
  //   },
];
export function ProfileRoster() {
  return (
    <div className="w-full px-4 py-6 flex justify-center items-start">
      <div
        className="
          /* 1. LAYOUT & RESPONSIVENESS */
          grid 
          grid-cols-2       /* 2 columns on mobile */
          sm:grid-cols-3    /* 3 columns on small tablets */
          md:grid-cols-4    /* 4 columns on small screens */
          lg:grid-cols-6    /* Max 6 columns on desktop */
          
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
        {students.map((student) => (
          /* Flex alignment item wrapper ensuring card matrices align uniformly */
          <div key={student.id} className="flex justify-center items-center">
            <AvatarPanel
              id={student.id}
              name={student.name}
              isActive={student.active}
              bgColor={student.bg}
              reaction="normal"
              size="lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
