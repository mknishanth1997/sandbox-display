export interface AvatarStandardizedStructure {
  id: number;
  name?: string;
  gender?: "boy" | "girl";
  category?: string;

  // Standardized color configuration properties
  bgColor?: {
    color1: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
  };

  // Returns the URL string based on user interaction
  getAvatarUrl?: (reaction: "normal" | "raised") => string;
}

export type AvatarProps = {
  src: string; // Accepts any resolved image path or dynamic API URL string
  alt: string; // Clean accessibility tag passed down from your data object
};

export type AvatarBadgeProps = {
  items: AvatarStandardizedStructure[];
  id: number;
  reaction?: "normal" | "raised";
  isActive?: boolean;
  size?: "sm" | "md";
};

export type ProfileMiniRowProps = {
  id: number;
  items: AvatarStandardizedStructure[];
  reaction?: "normal" | "raised";
  isActive?: boolean;
};
