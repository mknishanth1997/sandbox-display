import { AvatarStandardizedStructure } from "@/avatar-svg";
export interface InnerProfileTheme {
  id: string;
  name: string;
  gradient: string;
}
// 1. Define the base interface with a generic <S> for size
export interface LessonRuntimeProps<S = "xs" | "sm" | "md" | "lg"> {
  activeInnerTheme: InnerProfileTheme;
  items: AvatarStandardizedStructure[];
  reaction: "normal" | "raised";
  size: S; // It will use whatever types you pass into it
  activeIds: number[];
  onActiveIdsChange: (clickedId: number) => void;
}

// 2. Component 1: Uses all 4 sizes (just use the default)
type ComponentOneProps = LessonRuntimeProps;
// size will be: "xs" | "sm" | "md" | "xl"

// 3. Component 2: Only allows 'sm' and 'md'
type ComponentTwoProps = LessonRuntimeProps<"sm" | "md">;
// size will be strictly: "sm" | "md"

// 4. Component 3: Has NO size prop at all
type ComponentThreeProps = Omit<LessonRuntimeProps, "size">;
// This strips the 'size' property out entirely!
