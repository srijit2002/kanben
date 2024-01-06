import { Plus } from "phosphor-react";
import NoProject from "../assets/no-project.jpg";
import { NEW_PROJECT } from "@/features/projects";
import Database from "@/util/Database";

export const DashboardPlaceholder = () => {
  return (
    <section className="h-full flex justify-center items-center flex-col">
      <img src={NoProject} alt="Select a project" className="w-80" />
      <div className="flex items-center gap-3">
        <button
          className="bg-[#ff4f5a] p-2 rounded-sm"
          onClick={() => {
            let newProject = NEW_PROJECT();
            Database.append("projects", newProject);
            window.location.replace(`${window.location.href}${newProject.id}`);
          }}
        >
          <Plus size={18} className="text-white" />
        </button>
        <h1>Create a new project</h1>
      </div>
    </section>
  );
};
