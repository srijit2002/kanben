import { twMerge } from "tailwind-merge";
import { TaskCard } from "./TaskCard";
import PropTypes from "prop-types";
import { Plus } from "phosphor-react";
import { useAppContext } from "@/context/Context";
import { useParams } from "react-router-dom";
import { NEW_TASK } from "../variables";
import { toast } from "react-toastify";

export const TaskProgressCol = ({
  data = [],
  title = "",
  color = "",
  onModalOpen = () => {},
  taskKey = "",
}) => {
  const { setProjects } = useAppContext();
  const { projectId } = useParams();
  const handleAddTask = () => {
    setProjects((projects) => {
      return projects.map((project) => {
        if (project.id === projectId) {
          project[taskKey].unshift(NEW_TASK());
          return project;
        }
        return project;
      });
    });
    toast("Task added successfully!!", { type: "success" });
  };

  return (
    <section className="flex flex-col gap-4 flex-1 bg-gray-dark p-5 rounded-2xl">
      <div
        className="flex justify-between border-b-2"
        style={{ borderColor: color }}
      >
        <div className="flex items-center gap-2 p-2">
          <span
            className={twMerge("w-2 h-2 rounded-full")}
            style={{ backgroundColor: color }}
          ></span>
          <h2 className="text-base text-[#0D062D] font-[inter] font-medium">
            {title}
          </h2>
          <span className="bg-[#E0E0E0] text-[#625F6D] w-5 flex justify-center items-center h-5 rounded-full font-medium text-xs">
            {data.length}
          </span>
        </div>
        <button
          onClick={handleAddTask}
          className="self-center text-sm font-semibold justify-self-end cursor-pointer bg-blue-300 text-white p-1 rounded-full shadow hover:opacity-75"
        >
          <Plus size={18} />
        </button>
      </div>
      <section className="flex flex-col gap-4">
        {data.map((task, index) => {
          return (
            <TaskCard
              key={task._id}
              {...task}
              index={index}
              onModalOpen={() => onModalOpen(task._id)}
              taskKey={taskKey}
              taskId={task._id}
            />
          );
        })}
      </section>
    </section>
  );
};

TaskProgressCol.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  color: PropTypes.string,
  taskKey: PropTypes.string,
  handleEdit: PropTypes.func,
  onModalOpen: PropTypes.func,
};
