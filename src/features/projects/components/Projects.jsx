import { forwardRef, useState } from "react";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectActionBar } from "../components/ProjectActionBar";
import { ProjectTasks } from "./ProjectTasks";

export const Projects = forwardRef((_, ref) => {
  const [isDirectionRow, setIsDirectionRow] = useState(true);
  return (
    <div
      ref={ref}
      className="flex flex-col gap-8 p-10 xs:p-4 scrollbar-track-slate-100 max-h-[85vh] scrollbar-thumb-slate-300 scrollbar-thin overflow-y-auto"
    >
      <ProjectsHeader />
      <ProjectActionBar
        setIsDirectionRow={setIsDirectionRow}
        isDirectionRow={isDirectionRow}
      />
      <ProjectTasks isDirectionRow={isDirectionRow} />
    </div>
  );
});
Projects.displayName = "Projects";
