import PropTypes from "prop-types";
import { PencilSimple, TrashSimple } from "phosphor-react";
import { Modal } from "@/components/Modal";
import { useState } from "react";
import { useAppContext } from "@/context/Context";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const TaskCard = ({
  title,
  description,
  coverImage,
  priority,
  onModalOpen = () => {},
  taskKey = "",
  taskId = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setProjects } = useAppContext();
  const { projectId } = useParams();
  const priorityColor = {
    LOW: { color: "#d58d49", backgroundColor: "#dfa87433" },
    HIGH: { color: "#D8727D", backgroundColor: "#d8727d19" },
    COMPLETED: {
      color: "#68B266",
      backgroundColor: "#83c29d33",
    },
  };
  const handleDelete = () => {
    setProjects((projects) => {
      return projects.map((project) => {
        if (project.id === projectId) {
          project[taskKey] = project[taskKey].filter(
            (task) => task._id !== taskId
          );
          return project;
        }
        return project;
      });
    });
    toast("Task deleted succesfully!", { type: "success" });
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        onConfirm={() => handleDelete()}
        onCancel={() => setIsOpen(false)}
      />
      <article className="relative flex flex-col bg-white p-4 rounded-2xl gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <span
              className="w-fit p-2 text-xs font-medium rounded capitalize"
              style={{
                color: priorityColor[priority].color,
                backgroundColor: priorityColor[priority].backgroundColor,
              }}
            >
              {priority}
            </span>
            <button
              onClick={() => setIsOpen(true)}
              className="hover:opacity-75 self-center text-sm font-semibold justify-self-end cursor-pointer bg-red-300 text-white p-2 rounded-full"
            >
              <TrashSimple size={18} className="text-white" />
            </button>
          </div>
          <h1 className="text-[#0D062D] font-semibold text-lg flex items-center gap-4">
            {title}{" "}
            <button onClick={onModalOpen}>
              <PencilSimple size={18} className="text-[#0D062D]" />
            </button>
          </h1>
          <p className="text-xs text-[#787486] mt-[0.5]">{description}</p>
        </div>
        <img
          src={coverImage.data}
          alt=""
          className="w-full rounded-md  max-h-[80px] object-cover"
        />
      </article>
    </>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  coverImage: PropTypes.object,
  priority: PropTypes.string,
  isDragging: PropTypes.bool,
  taskKey: PropTypes.string,
  taskId: PropTypes.string,
  onModalOpen: PropTypes.func,
};
