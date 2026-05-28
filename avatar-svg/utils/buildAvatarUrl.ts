// "use client";
import { AvatarStandardizedStructure } from "@/avatar-svg";
export function buildAvatarData({
  items,
  id,
  reaction,
}: {
  items: AvatarStandardizedStructure[];
  id: number;
  reaction?: "normal" | "raised"; // Optional now so it can handle missing values
}) {
  // 1. Find the target object in the passed array
  const asset = items.find((item) => item.id === id);
  if (!asset) return null;

  // 2. Safe Fallback Matrix: default to "normal" if reaction or r is missing
  const safeReaction = reaction || "normal";

  // 3. Keep the bgColor configuration as a raw object for the child component
  const resolvedBgColor = {
    color1: asset.bgColor?.color1 || "bg-zinc-800", // Safe default color fallback
    color2: asset.bgColor?.color2,
    color3: asset.bgColor?.color3,
    color4: asset.bgColor?.color4,
    color5: asset.bgColor?.color5,
  };

  // 4. Resolve the URL safely
  const fallbackUrl = `https://api.dicebear.com/9.x/adventurer/svg?seed=${asset.name || "default"}`;
  const resolvedUrl = asset.getAvatarUrl
    ? asset.getAvatarUrl(safeReaction)
    : fallbackUrl;

  // 5. Spits out the full unified object structure
  return {
    id: asset.id,
    name: asset.name || "Anonymous",
    gender: asset.gender || "boy", // Fallback default
    category: asset.category || "general", // Fallback default
    url: resolvedUrl,
    bgColor: resolvedBgColor, // Passed as a pure configuration object
  };
}
