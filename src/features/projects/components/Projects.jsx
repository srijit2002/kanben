import { forwardRef } from "react";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectActionBar } from "../components/ProjectActionBar";
import { ProjectTasks } from "./ProjectTasks";
import { getCompletedTasks } from "../api/getCompletedTasks";
import { getOnProgressTasks } from "../api/getOnProgressTasks";
import { getToDoTasks } from "../api/getToDoTasks";
import { getProjectDetails } from "../api/getProjectDetails";
import { useParams } from "react-router-dom";

export const Projects = forwardRef((_, ref) => {
  const { projectId } = useParams();
  console.log(projectId);
  const projectDetails = getProjectDetails({ projectId });
  const toDodata = getToDoTasks();
  const onProgressdata = getOnProgressTasks();
  const completeddata = getCompletedTasks();
  const projects = [
    { title: "To-Do", data: toDodata, color: "#5030E5", _id: "0" },
    { title: "On Progress", data: onProgressdata, color: "#FFA500", _id: "1" },
    { title: "Done", data: completeddata, color: "#8BC48A", _id: "2" },
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col gap-8 p-10 scrollbar-track-slate-100 max-h-[85vh] scrollbar-thumb-slate-300 scrollbar-thin overflow-y-auto"
    >
      <ProjectsHeader title={projectDetails.title} />
      <ProjectActionBar />
      <ProjectTasks tasks={projects} />
    </div>
  );
});
Projects.displayName = "Projects";
