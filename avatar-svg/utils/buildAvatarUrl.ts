// "use client";
import { studentsList } from "@/avatar-svg";

export function buildAvatarData({
  id,
  reaction,
}: {
  id: number;
  reaction: "normal" | "raised";
}) {
  const student = studentsList.find((s) => s.id === id);

  if (!student) return null;
  console.log(student.getAvatarUrl(reaction));

  return {
    id: student.id,
    name: student.name,
    gender: student.gender,
    url: student.getAvatarUrl(reaction),
  };
}
