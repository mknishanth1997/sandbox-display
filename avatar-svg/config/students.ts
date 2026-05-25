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
    bgColor: { color1: "bg-violet-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Adrian&hair=short12&eyes=variant01&skinColor=f2d3b1&mouth=${r === "raised" ? "variant15" : "variant03"}`,
  },
  {
    id: 2,
    name: "Ethan",
    gender: "boy",
    category: "student",
    bgColor: { color1: "bg-cyan-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia2`,
  },
  {
    id: 3,
    name: "Zayn",
    gender: "boy",
    category: "student",
    bgColor: { color1: "bg-purple-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Zayn&hair=short15&eyes=variant04&skinColor=f2d3b1&mouth=${r === "raised" ? "variant27" : "variant04"}`,
  },
  {
    id: 4,
    name: "Lucas",
    gender: "boy",
    category: "student",
    bgColor: { color1: "bg-emerald-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Lucas&hair=short06&eyes=variant08&skinColor=ecb193&mouth=${r === "raised" ? "variant11" : "variant08"}`,
  },
  {
    id: 5,
    name: "Oliver",
    gender: "boy",
    category: "student",
    bgColor: { color1: "bg-pink-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Oliver&hair=short18&eyes=variant10&skinColor=f4d3b6&mouth=${r === "raised" ? "variant21" : "variant03"}`,
  },
  {
    id: 6,
    name: "Noah",
    gender: "boy",
    category: "student",
    bgColor: { color1: "bg-orange-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Noah&hair=short09&eyes=variant14&skinColor=f2d3b1&glassesProbability=100&glasses=variant02&mouth=${r === "raised" ? "variant11" : "variant02"}`,
  },
  {
    id: 7,
    name: "Liam",
    gender: "boy",
    category: "student",
    bgColor: { color1: "bg-blue-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Liam&hair=short04&eyes=variant12&skinColor=ecb193&mouth=${r === "raised" ? "variant17" : "variant01"}`,
  },
  {
    id: 8,
    name: "Mason",
    gender: "boy",
    category: "student",
    bgColor: { color1: "bg-indigo-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Mason&hair=short11&eyes=variant11&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant04"}`,
  },
  {
    id: 9,
    name: "Logan",
    gender: "boy",
    category: "student",
    bgColor: { color1: "bg-teal-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Logan&hair=short14&eyes=variant06&skinColor=f4d3b6&mouth=${r === "raised" ? "variant05" : "variant03"}`,
  },
  {
    id: 10,
    name: "Caleb",
    gender: "boy",
    category: "student",
    bgColor: { color1: "bg-fuchsia-500" },
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
    bgColor: { color1: "bg-violet-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Aria&hair=long01&eyes=variant03&skinColor=f2d3b1&mouth=${r === "raised" ? "variant05" : "variant03"}`,
  },
  {
    id: 12,
    name: "Sofia",
    gender: "girl",
    category: "student",
    bgColor: { color1: "bg-cyan-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Sofia&hair=long05&eyes=variant05&skinColor=f4d3b6&mouth=${r === "raised" ? "variant11" : "variant01"}`,
  },
  {
    id: 13,
    name: "Maya",
    gender: "girl",
    category: "student",
    bgColor: { color1: "bg-purple-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Maya&hair=long10&eyes=variant07&skinColor=f2d3b1&glassesProbability=100&glasses=variant01&mouth=${r === "raised" ? "variant05" : "variant04"}`,
  },
  {
    id: 14,
    name: "Emma",
    gender: "girl",
    category: "student",
    bgColor: { color1: "bg-emerald-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Emma&hair=long14&eyes=variant13&skinColor=ecb193&mouth=${r === "raised" ? "variant11" : "variant02"}`,
  },
  {
    id: 15,
    name: "Kiara",
    gender: "girl",
    category: "student",
    bgColor: { color1: "bg-pink-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Kiara&hair=long18&eyes=variant15&skinColor=f4d3b6&mouth=${r === "raised" ? "variant05" : "variant08"}`,
  },
  {
    id: 16,
    name: "Chloe",
    gender: "girl",
    category: "student",
    bgColor: { color1: "bg-orange-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Chloe&hair=long22&eyes=variant20&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant03"}`,
  },
  {
    id: 17,
    name: "Elena",
    gender: "girl",
    category: "student",
    bgColor: { color1: "bg-blue-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Elena&hair=long25&eyes=variant23&skinColor=f4d3b6&glassesProbability=100&glasses=variant02&mouth=${r === "raised" ? "variant05" : "variant01"}`,
  },
  {
    id: 18,
    name: "Mila",
    gender: "girl",
    category: "student",
    bgColor: { color1: "bg-indigo-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Mila&hair=long11&eyes=variant26&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant04"}`,
  },
  {
    id: 19,
    name: "Lily",
    gender: "girl",
    category: "student",
    bgColor: { color1: "bg-teal-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Lily&hair=long15&eyes=variant21&skinColor=ecb193&mouth=${r === "raised" ? "variant05" : "variant03"}`,
  },
  {
    id: 20,
    name: "Ruby",
    gender: "girl",
    category: "student",
    bgColor: { color1: "bg-fuchsia-500" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Ruby&hair=long19&eyes=variant18&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant08"}`,
  },
];
