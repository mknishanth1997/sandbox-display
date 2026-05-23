// "use client";
import Image from "next/image";

import { buildAvatarData } from "@/avatar-svg";

type AvatarProps = {
  id: number;
  reaction: "normal" | "raised";
};

export function Avatar({ id, reaction }: AvatarProps) {
  const avatar = buildAvatarData({
    id,
    reaction,
  });

  if (!avatar) return null;
  console.log(avatar.url, "NIhsnath");
  return (
    <Image
      src={avatar.url}
      alt={avatar.name}
      width={120}
      height={120}
      className="h-full w-full object-cover"
      unoptimized
    />
  );
}
