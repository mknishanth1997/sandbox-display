import { AvatarStandardizedStructure } from "@/avatar-svg";
export const studentsList: AvatarStandardizedStructure[] = [
  // ----------------------------------------------------
  // BOYS SECTION (IDs 1 - 10)
  // ----------------------------------------------------
  {
    id: 1,
    name: "Adrian",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-violet-500",
      color2: "bg-fuchsia-400",
      color3: "bg-violet-300",
      color4: "bg-purple-700", // Vivid Royal Purple (Glows against black)
      color5: "bg-rose-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Adrian&hair=short12&eyes=variant01&skinColor=f2d3b1&mouth=${r === "raised" ? "variant15" : "variant03"}`,
  },
  {
    id: 2,
    name: "Ethan",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-cyan-500",
      color2: "bg-teal-400",
      color3: "bg-cyan-200",
      color4: "bg-indigo-600", // Deep Electric Indigo
      color5: "bg-cyan-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia2`,
  },
  {
    id: 3,
    name: "Zayn",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-purple-500",
      color2: "bg-violet-400",
      color3: "bg-fuchsia-200",
      color4: "bg-fuchsia-700", // Deep Deep Magenta
      color5: "bg-purple-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Zayn&hair=short15&eyes=variant04&skinColor=f2d3b1&mouth=${r === "raised" ? "variant27" : "variant04"}`,
  },
  {
    id: 4,
    name: "Lucas",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-emerald-500",
      color2: "bg-lime-400",
      color3: "bg-emerald-200",
      color4: "bg-teal-600", // Rich Cyber Teal
      color5: "bg-lime-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Lucas&hair=short06&eyes=variant08&skinColor=ecb193&mouth=${r === "raised" ? "variant11" : "variant08"}`,
  },
  {
    id: 5,
    name: "Oliver",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-pink-500",
      color2: "bg-rose-400",
      color3: "bg-rose-200",
      color4: "bg-rose-600", // Deep Crimson Rose
      color5: "bg-amber-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Oliver&hair=short18&eyes=variant10&skinColor=f4d3b6&mouth=${r === "raised" ? "variant21" : "variant03"}`,
  },
  {
    id: 6,
    name: "Noah",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-orange-500",
      color2: "bg-yellow-400",
      color3: "bg-amber-200",
      color4: "bg-amber-600", // Rich Burnt Amber
      color5: "bg-orange-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Noah&hair=short09&eyes=variant14&skinColor=f2d3b1&glassesProbability=100&glasses=variant02&mouth=${r === "raised" ? "variant11" : "variant02"}`,
  },
  {
    id: 7,
    name: "Liam",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-blue-500",
      color2: "bg-sky-400",
      color3: "bg-sky-300",
      color4: "bg-blue-600", // High-Contrast Cyber Blue
      color5: "bg-teal-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Liam&hair=short04&eyes=variant12&skinColor=ecb193&mouth=${r === "raised" ? "variant17" : "variant01"}`,
  },
  {
    id: 8,
    name: "Mason",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-indigo-500",
      color2: "bg-purple-400",
      color3: "bg-indigo-300",
      color4: "bg-violet-800", // Deep Velvet Grape
      color5: "bg-pink-500",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Mason&hair=short11&eyes=variant11&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant04"}`,
  },
  {
    id: 9,
    name: "Logan",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-teal-500",
      color2: "bg-emerald-400",
      color3: "bg-teal-300",
      color4: "bg-emerald-600", // Deep Forest Emerald
      color5: "bg-emerald-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Logan&hair=short14&eyes=variant06&skinColor=f4d3b6&mouth=${r === "raised" ? "variant05" : "variant03"}`,
  },
  {
    id: 10,
    name: "Caleb",
    gender: "boy",
    category: "student",
    bgColor: {
      color1: "bg-fuchsia-500",
      color2: "bg-pink-400",
      color3: "bg-pink-300",
      color4: "bg-pink-700", // Hot Plum Cyber
      color5: "bg-violet-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Caleb&hair=short19&eyes=variant09&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant08"}`,
  },

  // ----------------------------------------------------
  // GIRLS SECTION (IDs 11 - 20)
  // ----------------------------------------------------
  {
    id: 11,
    name: "Aria",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-violet-500",
      color2: "bg-fuchsia-400",
      color3: "bg-purple-300",
      color4: "bg-purple-700", // Vivid Royal Purple
      color5: "bg-rose-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Aria&hair=long01&eyes=variant03&skinColor=f2d3b1&mouth=${r === "raised" ? "variant05" : "variant03"}`,
  },
  {
    id: 12,
    name: "Sofia",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-cyan-500",
      color2: "bg-teal-400",
      color3: "bg-cyan-200",
      color4: "bg-indigo-600", // Deep Electric Indigo
      color5: "bg-cyan-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Sofia&hair=long05&eyes=variant05&skinColor=f4d3b6&mouth=${r === "raised" ? "variant11" : "variant01"}`,
  },
  {
    id: 13,
    name: "Maya",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-purple-500",
      color2: "bg-violet-400",
      color3: "bg-fuchsia-200",
      color4: "bg-fuchsia-700", // Deep Deep Magenta
      color5: "bg-purple-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Maya&hair=long10&eyes=variant07&skinColor=f2d3b1&glassesProbability=100&glasses=variant01&mouth=${r === "raised" ? "variant05" : "variant04"}`,
  },
  {
    id: 14,
    name: "Emma",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-emerald-500",
      color2: "bg-lime-400",
      color3: "bg-emerald-200",
      color4: "bg-teal-600", // Rich Cyber Teal
      color5: "bg-lime-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Emma&hair=long14&eyes=variant13&skinColor=ecb193&mouth=${r === "raised" ? "variant11" : "variant02"}`,
  },
  {
    id: 15,
    name: "Kiara",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-pink-500",
      color2: "bg-rose-400",
      color3: "bg-rose-200",
      color4: "bg-rose-600", // Deep Crimson Rose
      color5: "bg-amber-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Kiara&hair=long18&eyes=variant15&skinColor=f4d3b6&mouth=${r === "raised" ? "variant05" : "variant08"}`,
  },
  {
    id: 16,
    name: "Chloe",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-orange-500",
      color2: "bg-yellow-400",
      color3: "bg-amber-200",
      color4: "bg-amber-600", // Rich Burnt Amber
      color5: "bg-orange-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Chloe&hair=long22&eyes=variant20&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant03"}`,
  },
  {
    id: 17,
    name: "Elena",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-blue-500",
      color2: "bg-sky-400",
      color3: "bg-sky-300",
      color4: "bg-blue-600", // High-Contrast Cyber Blue
      color5: "bg-teal-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Elena&hair=long25&eyes=variant23&skinColor=f4d3b6&glassesProbability=100&glasses=variant02&mouth=${r === "raised" ? "variant05" : "variant01"}`,
  },
  {
    id: 18,
    name: "Mila",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-indigo-500",
      color2: "bg-purple-400",
      color3: "bg-indigo-300",
      color4: "bg-violet-800", // Deep Velvet Grape
      color5: "bg-pink-500",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Mila&hair=long11&eyes=variant26&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant04"}`,
  },
  {
    id: 19,
    name: "Lily",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-teal-500",
      color2: "bg-emerald-400",
      color3: "bg-teal-300",
      color4: "bg-emerald-600", // Deep Forest Emerald
      color5: "bg-emerald-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Lily&hair=long15&eyes=variant21&skinColor=ecb193&mouth=${r === "raised" ? "variant05" : "variant03"}`,
  },
  {
    id: 20,
    name: "Ruby",
    gender: "girl",
    category: "student",
    bgColor: {
      color1: "bg-fuchsia-500",
      color2: "bg-pink-400",
      color3: "bg-pink-300",
      color4: "bg-pink-700", // Hot Plum Cyber
      color5: "bg-violet-400",
    },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Ruby&hair=long19&eyes=variant18&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant08"}`,
  },
];
