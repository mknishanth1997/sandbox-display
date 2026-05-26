"use client";
import { SandboxDisplayOuterFrame } from "@/sandbox-display-outer-frame/SandboxDisplayOuterFrame";
import { Avatar } from "@/avatar-svg";
import { AvatarBadge } from "@/avatar-svg";
import { AvatarPanel } from "@/avatar-svg";
import { SandboxDisplayInnerFrame } from "@/sandbox-display-inner-frame/SandboxDisplayInnerFrame";
import { ProfileMiniRow } from "@/avatar-svg";
import { ProfileScreen1 } from "@/lesson-screens/profile-screen1";
import { buildAvatarData } from "@/avatar-svg";
import { studentsList } from "@/avatar-svg";
import { micahAvatars } from "@/avatar-svg";
import { ProfileScreen2 } from "@/lesson-screens/profile-screen2";
import { ProfileScreen3 } from "@/lesson-screens/profile-screen3";

export default function Home() {
  return (
    <div className=" border flex gap-8 justify-center items-start h-screen w-screen bg-blackk">
      <div className="flex flex-col gap-8">
        <div
          className="    w-[700px]
          "
        >
          <SandboxDisplayOuterFrame>
            <SandboxDisplayInnerFrame>
              {/* Aurora Explosion */}
              <div className="rounded-[32px] bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500">
                <ProfileScreen1 />
              </div>
            </SandboxDisplayInnerFrame>
          </SandboxDisplayOuterFrame>
        </div>
        <div
          className="    w-[700px]
          "
        >
          <SandboxDisplayOuterFrame>
            <SandboxDisplayInnerFrame>
              {/* Aurora Explosion */}
              <div className="rounded-[32px] bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500">
                <ProfileScreen2 />
              </div>
            </SandboxDisplayInnerFrame>
          </SandboxDisplayOuterFrame>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-8">
        <div
          className="    w-[700px]
          "
        >
          <SandboxDisplayOuterFrame>
            <SandboxDisplayInnerFrame>
              {/* Aurora Explosion */}
              <div className="rounded-[32px] bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500">
                <ProfileScreen3 />
              </div>
            </SandboxDisplayInnerFrame>
          </SandboxDisplayOuterFrame>
        </div>
        <div
          className="    w-[700px]
          "
        >
          <SandboxDisplayOuterFrame>
            <SandboxDisplayInnerFrame>
              {/* Aurora Explosion */}
              <div className="rounded-[32px] bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500">
                <ProfileScreen2 />
              </div>
            </SandboxDisplayInnerFrame>
          </SandboxDisplayOuterFrame>
        </div>
      </div>
    </div>
  );
}
