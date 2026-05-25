export interface AvatarStandardizedStructure {
  id: number;
  name?: string;
  gender?: "boy" | "girl";
  category?: string;

  // Standardized color configuration properties
  bgColor?: {
    color1: string;
    color2?: string;
    fallback?: string;
  };

  // Returns the URL string based on user interaction
  getAvatarUrl?: (reaction: "normal" | "raised") => string;
}
