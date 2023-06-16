import { PencilSimple, LinkSimpleHorizontal } from "phosphor-react";
import AddSquare from "@/features/misc/assets/AddSquare.svg";
import UserProfiles from "../assets/UserProfiles.svg";

export const ProjectsHeader = ({ title }) => {
  return (
    <section className="flex items-center justify-between lg:flex-wrap gap-2">
      <div className="flex items-center gap-4">
        <h1 className="text-5xl font-semibold text-[#0D062D] lg:text-3xl">{title}</h1>
        <div className="flex gap-2">
          <button className="bg-blue-light text-blue-dark p-1 rounded-md">
            <PencilSimple size={18} />
          </button>
          <button className="bg-blue-light text-blue-dark p-1 rounded-md">
            <LinkSimpleHorizontal size={18} />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <button className=" text-blue-dark p-1 rounded-md flex items-center gap-3">
          <div className="bg-blue-light w-fit rounded-md">
            <img src={AddSquare} alt="Add A items" />
          </div>
          Invite
        </button>
        <img src={UserProfiles} alt="users" />
      </div>
    </section>
  );
};
