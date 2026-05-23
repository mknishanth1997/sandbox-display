import { SandboxDisplayOuterFrame } from "@/sandbox-display-outer-frame/SandboxDisplayOuterFrame";
import { Avatar } from "@/avatar-svg";
import { AvatarBadge } from "@/avatar-svg";
import { AvatarPanel } from "@/avatar-svg";
import { SandboxDisplayInnerFrame } from "@/sandbox-display-inner-frame/SandboxDisplayInnerFrame";
export default function Home() {
  return (
    <div className="min-h-screen w-full  flex items-center justify-center gap-4 p-8">
      <SandboxDisplayOuterFrame>
        <SandboxDisplayInnerFrame>
          <div
            className="
    grid
    w-full
    max-w-2xl
    grid-cols-4
    gap-3
    items-start
    sm:grid-cols-3
    lg:grid-cols-5
  "
          >
            {/* Your AvatarPanels go here */}
            <AvatarPanel
              id={1}
              name="Harper M."
              reaction="raised"
              isActive
              bgColor="bg-violet-400"
            />
            <AvatarPanel
              id={1}
              name="Harper M."
              reaction="raised"
              isActive={false}
              bgColor="bg-violet-400"
            />{" "}
            <AvatarPanel
              id={1}
              name="Harper M."
              reaction="raised"
              isActive={false}
              bgColor="bg-violet-400"
            />{" "}
            <AvatarPanel
              id={1}
              name="Harper M."
              reaction="raised"
              isActive={false}
              bgColor="bg-violet-400"
            />{" "}
            <AvatarPanel
              id={1}
              name="Harper M."
              reaction="raised"
              isActive={false}
              bgColor="bg-violet-400"
            />
          </div>
        </SandboxDisplayInnerFrame>
      </SandboxDisplayOuterFrame>
    </div>
  );
}
