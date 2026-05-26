import { AvatarStandardizedStructure } from "@/avatar-svg";

// Single category control variable for easy file-wide management
export const AVATAR_CATEGORY = "Micah";

export const micahAvatars: AvatarStandardizedStructure[] = [
  // =============================================
  // BOYS (IDs 1 - 15) - Standardized Light Skins
  // =============================================
  {
    id: 1,
    name: "Aarav",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-indigo-600", color2: "bg-violet-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Aarav&skinColor=f3d1b9&hair=dannyPhantom&hairColor=3b2a1f&eyes=eyes&mouth=${r === "raised" ? "smile" : "nervous"}&shirt=collared&shirtColor=2563eb`,
  },
  {
    id: 2,
    name: "Vihaan",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-cyan-500", color2: "bg-blue-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Vihaan&skinColor=f7decd&hair=full&hairColor=2c1a0f&eyes=eyesShadow&mouth=${r === "raised" ? "laughing" : "smile"}&baseColor=f59e0b`,
  },
  {
    id: 3,
    name: "Kabir",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-emerald-500", color2: "bg-teal-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Kabir&skinColor=ecd2b4&hair=mrT&hairColor=1a0f08&eyes=round&mouth=${r === "raised" ? "smile" : "pucker"}&earrings=hoop`,
  },
  {
    id: 4,
    name: "Reyansh",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-fuchsia-600", color2: "bg-purple-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Reyansh&skinColor=f5d5be&hair=dougFunny&hairColor=4a2c1a&eyes=smiling&mouth=${r === "raised" ? "laughing" : "smile"}&shirt=open`,
  },
  {
    id: 5,
    name: "Arjun",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-amber-500", color2: "bg-orange-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Arjun&skinColor=f1cfb7&hair=fonze&hairColor=2c1f12&eyes=eyes&mouth=${r === "raised" ? "smile" : "pucker"}&glasses=round`,
  },
  {
    id: 6,
    name: "Ishaan",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-rose-500", color2: "bg-pink-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Ishaan&skinColor=f9dfcb&hair=mrClean&hairColor=3d2a1f&eyes=eyesShadow&mouth=${r === "raised" ? "laughing" : "smile"}&shirt=crew`,
  },
  {
    id: 7,
    name: "Devansh",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-sky-500", color2: "bg-indigo-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Devansh&skinColor=ecd3bb&hair=mrT&hairColor=1f140a&eyes=round&mouth=${r === "raised" ? "smile" : "nervous"}&glasses=square`,
  },
  {
    id: 8,
    name: "Ramu",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-lime-500", color2: "bg-green-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=SaanviBoy&skinColor=f6dcc7&hair=dougFunny&hairColor=2a1a0f&eyes=smilingShadow&mouth=${r === "raised" ? "laughing" : "smile"}&shirt=collared`,
  },
  {
    id: 9,
    name: "Ayaan",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-violet-600", color2: "bg-violet-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Ayaan&skinColor=f3cca8&hair=dannyPhantom&hairColor=3c2a1f&eyes=eyes&mouth=${r === "raised" ? "smile" : "sad"}&earrings=stud`,
  },
  {
    id: 10,
    name: "Rohan",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-teal-500", color2: "bg-emerald-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Rohan&skinColor=fbe1cb&hair=fonze&hairColor=2c1f15&eyes=eyesShadow&mouth=${r === "raised" ? "laughing" : "smile"}&shirt=open`,
  },
  {
    id: 11,
    name: "Aditya",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-rose-600", color2: "bg-purple-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Aditya&skinColor=f7ceb9&hair=mrClean&eyes=smiling&mouth=${r === "raised" ? "laughing" : "pucker"}&glasses=round`,
  },
  {
    id: 12,
    name: "Rahul",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-blue-500", color2: "bg-slate-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Rahul&skinColor=fadcb3&hair=dannyPhantom&hairColor=1c120c&eyes=round&mouth=${r === "raised" ? "smile" : "sad"}&shirt=crew`,
  },
  {
    id: 13,
    name: "Kunal",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-emerald-600", color2: "bg-neutral-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Kunal&skinColor=f2c3a0&hair=mrT&hairColor=0f0a05&eyes=eyes&mouth=${r === "raised" ? "laughing" : "nervous"}&earrings=hoop`,
  },
  {
    id: 14,
    name: "Shray",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-orange-500", color2: "bg-stone-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Shray&skinColor=f9dec5&hair=dougFunny&hairColor=2d1a0e&eyes=eyesShadow&mouth=${r === "raised" ? "smile" : "smile"}&glasses=square`,
  },
  {
    id: 15,
    name: "Manish",
    gender: "boy",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-fuchsia-500", color2: "bg-zinc-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Manish&skinColor=f5cfb5&hair=fonze&hairColor=1e1107&eyes=smilingShadow&mouth=${r === "raised" ? "laughing" : "pucker"}&shirt=open`,
  },

  // =============================================
  // GIRLS (IDs 16 - 30) - Standardized Light Skins
  // =============================================
  {
    id: 16,
    name: "Aadhya",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-pink-500", color2: "bg-rose-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Aadhya&skinColor=f4d5c1&hair=pixie&hairColor=5c2a1f&eyes=smiling&mouth=${r === "raised" ? "laughing" : "smile"}&earrings=stud`,
  },
  {
    id: 17,
    name: "Saanvi",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-purple-500", color2: "bg-fuchsia-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Saanvi&skinColor=f9d6be&hair=full&hairColor=4a1f2a&eyes=eyesShadow&mouth=${r === "raised" ? "smile" : "nervous"}&shirt=collared`,
  },
  {
    id: 18,
    name: "Ira",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-violet-500", color2: "bg-indigo-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Ira&skinColor=f9dec8&hair=pixie&hairColor=3d1f2a&eyes=round&mouth=${r === "raised" ? "laughing" : "smile"}&glasses=round`,
  },
  {
    id: 19,
    name: "Kiara",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-rose-600", color2: "bg-red-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Kiara&skinColor=f3ceb6&hair=full&hairColor=6b2a1f&eyes=smilingShadow&mouth=${r === "raised" ? "smile" : "pucker"}&earrings=hoop`,
  },
  {
    id: 20,
    name: "Anaya",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-teal-500", color2: "bg-cyan-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Anaya&skinColor=fadabe&hair=pixie&hairColor=2a1f35&eyes=eyes&mouth=${r === "raised" ? "laughing" : "smile"}&shirt=open`,
  },
  {
    id: 21,
    name: "Myra",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-amber-500", color2: "bg-yellow-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Myra&skinColor=ebd3bd&hair=full&hairColor=4a2a1f&eyes=eyesShadow&mouth=${r === "raised" ? "smile" : "nervous"}&glasses=square`,
  },
  {
    id: 22,
    name: "Zara",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-lime-500", color2: "bg-emerald-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Zara&skinColor=faddcb&hair=pixie&hairColor=3d1f1f&eyes=round&mouth=${r === "raised" ? "laughing" : "smile"}&shirt=crew`,
  },
  {
    id: 23,
    name: "Nisha",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-fuchsia-500", color2: "bg-rose-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Nisha&skinColor=f5ceb7&hair=full&hairColor=5c2a35&eyes=smiling&mouth=${r === "raised" ? "smile" : "pucker"}&earrings=stud`,
  },
  {
    id: 24,
    name: "Pari",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-sky-500", color2: "bg-blue-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Pari&skinColor=faddc3&hair=pixie&hairColor=2f1f45&eyes=eyesShadow&mouth=${r === "raised" ? "laughing" : "smile"}&shirt=open`,
  },
  {
    id: 25,
    name: "Riya",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-rose-500", color2: "bg-neutral-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Riya&skinColor=ecd5be&hair=full&hairColor=4a1f2a&eyes=round&mouth=${r === "raised" ? "smile" : "nervous"}&glasses=round`,
  },
  {
    id: 26,
    name: "Diya",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-violet-500", color2: "bg-slate-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Diya&skinColor=f4d2b2&hair=pixie&hairColor=5d1e2e&eyes=smiling&mouth=${r === "raised" ? "laughing" : "pucker"}&earrings=hoop`,
  },
  {
    id: 27,
    name: "Anika",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-cyan-600", color2: "bg-blue-900" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Anika&skinColor=f9d6b2&hair=full&hairColor=3c1d2e&eyes=eyesShadow&mouth=${r === "raised" ? "smile" : "sad"}&shirt=collared`,
  },
  {
    id: 28,
    name: "Kavya",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-emerald-500", color2: "bg-zinc-900" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Kavya&skinColor=ecd2b4&hair=pixie&hairColor=2c1a3a&eyes=round&mouth=${r === "raised" ? "laughing" : "smile"}&glasses=square`,
  },
  {
    id: 29,
    name: "Meera",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-orange-600", color2: "bg-amber-950" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Meera&skinColor=f6ceb4&hair=full&hairColor=4d1e1a&eyes=smilingShadow&mouth=${r === "raised" ? "smile" : "pucker"}&shirt=open`,
  },
  {
    id: 30,
    name: "Tanvi",
    gender: "girl",
    category: AVATAR_CATEGORY,
    bgColor: { color1: "bg-pink-600", color2: "bg-stone-900" },
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/micah/svg?seed=Tanvi&skinColor=ebd3be&hair=pixie&hairColor=3c1b2c&eyes=eyes&mouth=${r === "raised" ? "laughing" : "nervous"}&earrings=stud`,
  },
];
