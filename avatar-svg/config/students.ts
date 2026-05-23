export interface StudentAvatar {
  id: number;
  name: string;
  gender: "boy" | "girl";
  // Returns the locked URL based on the reaction state
  getAvatarUrl: (reaction: "normal" | "raised") => string;
}

export const studentsList: StudentAvatar[] = [
  // ----------------------------------------------------
  // 10 BOYS (Majority Light Skinned, Select Glasses)
  // ----------------------------------------------------
  {
    id: 1,
    name: "Adrian",
    gender: "boy",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Adrian&hair=short12&eyes=variant01&skinColor=f2d3b1&mouth=${r === "raised" ? "variant15" : "variant03"}`,
  },
  {
    id: 2,
    name: "Ethan",
    gender: "boy", // Added classic round glasses
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Ethan&hair=short01&eyes=variant02&skinColor=f4d3b6&glassesProbability=100&glasses=variant01&mouth=${r === "raised" ? "variant11" : "variant01"}`,
  },
  {
    id: 3,
    name: "Zayn",
    gender: "boy",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Zayn&hair=short15&eyes=variant04&skinColor=f2d3b1&mouth=${r === "raised" ? "variant27" : "variant04"}`,
  },
  {
    id: 4,
    name: "Lucas",
    gender: "boy",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Lucas&hair=short06&eyes=variant08&skinColor=ecb193&mouth=${r === "raised" ? "variant11" : "variant08"}`,
  },
  {
    id: 5,
    name: "Oliver",
    gender: "boy",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Oliver&hair=short18&eyes=variant10&skinColor=f4d3b6&mouth=${r === "raised" ? "variant21" : "variant03"}`,
  },
  {
    id: 6,
    name: "Noah",
    gender: "boy", // Added stylish frame glasses
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Noah&hair=short09&eyes=variant14&skinColor=f2d3b1&glassesProbability=100&glasses=variant02&mouth=${r === "raised" ? "variant11" : "variant02"}`,
  },
  {
    id: 7,
    name: "Liam",
    gender: "boy",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Liam&hair=short04&eyes=variant12&skinColor=ecb193&mouth=${r === "raised" ? "variant17" : "variant01"}`,
  },
  {
    id: 8,
    name: "Mason",
    gender: "boy",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Mason&hair=short11&eyes=variant11&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant04"}`,
  },
  {
    id: 9,
    name: "Logan",
    gender: "boy",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Logan&hair=short14&eyes=variant06&skinColor=f4d3b6&mouth=${r === "raised" ? "variant05" : "variant03"}`,
  },
  {
    id: 10,
    name: "Caleb",
    gender: "boy",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Caleb&hair=short19&eyes=variant09&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant08"}`,
  },

  // ----------------------------------------------------
  // 10 GIRLS (Majority Light Skinned, Select Glasses)
  // ----------------------------------------------------
  {
    id: 11,
    name: "Aria",
    gender: "girl",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Aria&hair=long01&eyes=variant03&skinColor=f2d3b1&mouth=${r === "raised" ? "variant05" : "variant03"}`,
  },
  {
    id: 12,
    name: "Sofia",
    gender: "girl",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Sofia&hair=long05&eyes=variant05&skinColor=f4d3b6&mouth=${r === "raised" ? "variant11" : "variant01"}`,
  },
  {
    id: 13,
    name: "Maya",
    gender: "girl", // Added round reading glasses
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Maya&hair=long10&eyes=variant07&skinColor=f2d3b1&glassesProbability=100&glasses=variant01&mouth=${r === "raised" ? "variant05" : "variant04"}`,
  },
  {
    id: 14,
    name: "Emma",
    gender: "girl",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Emma&hair=long14&eyes=variant13&skinColor=ecb193&mouth=${r === "raised" ? "variant11" : "variant02"}`,
  },
  {
    id: 15,
    name: "Kiara",
    gender: "girl",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Kiara&hair=long18&eyes=variant15&skinColor=f4d3b6&mouth=${r === "raised" ? "variant05" : "variant08"}`,
  },
  {
    id: 16,
    name: "Chloe",
    gender: "girl",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Chloe&hair=long22&eyes=variant20&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant03"}`,
  },
  {
    id: 17,
    name: "Elena",
    gender: "girl", // Added thin frame glasses
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Elena&hair=long25&eyes=variant23&skinColor=f4d3b6&glassesProbability=100&glasses=variant02&mouth=${r === "raised" ? "variant05" : "variant01"}`,
  },
  {
    id: 18,
    name: "Mila",
    gender: "girl",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Mila&hair=long11&eyes=variant26&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant04"}`,
  },
  {
    id: 19,
    name: "Lily",
    gender: "girl",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Lily&hair=long15&eyes=variant21&skinColor=ecb193&mouth=${r === "raised" ? "variant05" : "variant03"}`,
  },
  {
    id: 20,
    name: "Ruby",
    gender: "girl",
    getAvatarUrl: (r) =>
      `https://api.dicebear.com/9.x/adventurer/svg?seed=Ruby&hair=long19&eyes=variant18&skinColor=f2d3b1&mouth=${r === "raised" ? "variant11" : "variant08"}`,
  },
];
