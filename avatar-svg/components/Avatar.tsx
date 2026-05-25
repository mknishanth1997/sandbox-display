// "use client";
import Image from "next/image";

type AvatarProps = {
  src: string; // Accepts any resolved image path or dynamic API URL string
  alt: string; // Clean accessibility tag passed down from your data object
};

export function Avatar({ src, alt }: AvatarProps) {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={120}
      height={120}
      className="h-full w-full object-cover"
      unoptimized // Keeps your DiceBear vector SVGs perfectly crisp without compression artifacts
    />
  );
}
