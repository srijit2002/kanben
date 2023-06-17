import { forwardRef, useState } from "react";
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
  const projectDetails = getProjectDetails({ projectId });
  const toDodata = getToDoTasks();
  const onProgressdata = getOnProgressTasks();
  const completeddata = getCompletedTasks();
  const projects = [
    { title: "To-Do", data: toDodata, color: "#5030E5", _id: "0" },
    { title: "On Progress", data: onProgressdata, color: "#FFA500", _id: "1" },
    { title: "Done", data: completeddata, color: "#8BC48A", _id: "2" },
  ];
  const [isDirectionRow, setIsDirectionRow] = useState(true);
  const people = [
    {
      avatar:
        "https://images.immediate.co.uk/production/volatile/sites/3/2017/11/peaky-tommy-5d3c20b.jpg?quality=90&resize=620,414",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwZ2QmjlShNNeUuEVF-RNFZrwJo3Y9k-LRw&usqp=CAU",
    },
    {
      avatar:
        "https://www.harleytherapy.co.uk/counselling/wp-content/uploads/16297800391_5c6e812832.jpg",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4xjShh4ynJbrgYrW_aB4lhKSxeMzQ3cO_A&usqp=CAU",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU",
    },
  ];
  return (
    <div
      ref={ref}
      className="flex flex-col gap-8 p-10 xs:p-4 scrollbar-track-slate-100 max-h-[85vh] scrollbar-thumb-slate-300 scrollbar-thin overflow-y-auto"
    >
      <ProjectsHeader title={projectDetails.title} people={people} />
      <ProjectActionBar
        setIsDirectionRow={setIsDirectionRow}
        isDirectionRow={isDirectionRow}
      />
      <ProjectTasks tasks={projects} isDirectionRow={isDirectionRow} />
    </div>
  );
});
Projects.displayName = "Projects";
