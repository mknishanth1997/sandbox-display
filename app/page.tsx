import { SandboxDisplayOuterFrame } from "@/sandbox-display-outer-frame/SandboxDisplayOuterFrame";
import { Avatar } from "@/avatar-svg";
import { AvatarBadge } from "@/avatar-svg";
import { AvatarPanel } from "@/avatar-svg";
import { SandboxDisplayInnerFrame } from "@/sandbox-display-inner-frame/SandboxDisplayInnerFrame";
import { ProfileRoster } from "@/lesson-screens";

export default function Home() {
  return (
    <div
      className="   h-full w-[700px]
  "
    >
      <SandboxDisplayOuterFrame>
        <SandboxDisplayInnerFrame>
          {/* Aurora Explosion */}
          <div className="rounded-[32px] bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500">
            <ProfileRoster />
          </div>
        </SandboxDisplayInnerFrame>
      </SandboxDisplayOuterFrame>
    </div>
  );
}
