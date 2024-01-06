import { TaskProgressCol } from "./TaskProgressCol";
import { useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { TaskEditModal } from "./TaskEditModal";
import { useParams } from "react-router-dom";
import { useAppContext } from "@/context/Context";

export const ProjectTasks = ({ isDirectionRow }) => {
  const { setEditModalDetails, Projects: AllProjects } = useAppContext();
  const { projectId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const Projects = AllProjects.find(({ id }) => id === projectId);
  return (
    <>
      <TaskEditModal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
      <section
        className={twMerge(
          "flex gap-4 flex-wrap",
          isDirectionRow ? "flex-row" : "flex-col"
        )}
      >
        <TaskProgressCol
          title="To-Do"
          data={Projects.toDoTasks || []}
          color="#5030E5"
          taskKey="toDoTasks"
          onModalOpen={(taskId) => {
            setEditModalDetails({ taskId, projectId, type: "toDoTasks" });
            setModalOpen(true);
          }}
        />
        <TaskProgressCol
          title="On Progress"
          data={Projects.onProgressTasks || []}
          color="#FFA500"
          taskKey="onProgressTasks"
          onModalOpen={(taskId) => {
            setEditModalDetails({ taskId, projectId, type: "onProgressTasks" });
            setModalOpen(true);
          }}
        />
        <TaskProgressCol
          title="Done"
          data={Projects.completedTasks || []}
          color="#8BC48A"
          taskKey="completedTasks"
          onModalOpen={(taskId) => {
            setEditModalDetails({ taskId, projectId, type: "completedTasks" });
            setModalOpen(true);
          }}
        />
      </section>
    </>
  );
};

ProjectTasks.propTypes = {
  tasks: PropTypes.array,
  isDirectionRow: PropTypes.bool,
};
