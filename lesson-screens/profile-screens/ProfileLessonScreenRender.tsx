"use client";
import {
  ProfileScreen1,
  ProfileScreen2,
  ProfileScreen3,
  innerProfileThemes,
} from "@/lesson-screens";
import { studentsList, micahAvatars } from "@/avatar-svg";
import { SandboxDisplayInnerFrame } from "@/sandbox-dispaly/sandbox-display-inner-frame/SandboxDisplayInnerFrame";
import { SandboxDisplayOuterFrame } from "@/sandbox-dispaly/sandbox-display-outer-frame/SandboxDisplayOuterFrame";

import { useState } from "react";

export function ProfileLessonScreenRender() {
  const [themeIndex, setThemeIndex] = useState(0);

  const activeInnerTheme = innerProfileThemes[themeIndex];
  const [activeIds, setActiveIds] = useState<number[]>([]);
  const handleAvatarToggle = (clickedId: number) => {
    if (activeIds.includes(clickedId)) {
      // If already selected, remove it from the array
      setActiveIds(activeIds.filter((id) => id !== clickedId));
    } else {
      // If not selected, add it to the array
      setActiveIds([...activeIds, clickedId]);
    }
  };

  function cycleTheme() {
    setThemeIndex((prev) => {
      return (prev + 1) % innerProfileThemes.length;
    });
  }

  return (
    <div className="">
      <SandboxDisplayOuterFrame onRedLightClick={cycleTheme}>
        <SandboxDisplayInnerFrame>
          <ProfileScreen3
            activeInnerTheme={activeInnerTheme}
            items={micahAvatars}
            reaction="normal"
            // size="md"
            // 👇 Pass the array and our toggle function down
            activeIds={activeIds}
            onActiveIdsChange={handleAvatarToggle}
          />
        </SandboxDisplayInnerFrame>
      </SandboxDisplayOuterFrame>
    </div>
  );
}
