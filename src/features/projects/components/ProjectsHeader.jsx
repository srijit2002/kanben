import { PencilSimple, Trash, CheckCircle } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { Modal } from "@/components/Modal";
import { useAppContext } from "@/context/Context";
import { useParams, useNavigate } from "react-router-dom";

export const ProjectsHeader = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { Projects, setProjects } = useAppContext();
  const [modalOpen, setModalOpen] = useState(false);
  const titleRef = useRef();
  const { projectId } = useParams();
  const projectDetails = Projects.find((project) => project.id === projectId);
  const navigate = useNavigate();
  useEffect(() => {
    if (isEditing) titleRef.current.focus();
  }, [isEditing]);

  const handleDelete = () => {
    setModalOpen(true);
  };
  const handleConfirm = () => {
    setProjects((projects) =>
      projects.filter((project) => project.id !== projectId)
    );
    navigate("/");
  };
  const handleTitleEdit = (e) => {
    setProjects((projects) =>
      projects.map((project) => {
        if (project.id === projectId) {
          return { ...project, title: e.target.value };
        }
        return project;
      })
    );
  };
  const handleSaveTitle = () => {
    if (isEditing) {
      let updatedProjects = Projects.map((project) => {
        if (project.id === projectId) return projectDetails;
        return project;
      });
      setProjects(updatedProjects);
    }
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      <Modal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        onCancel={() => setModalOpen(false)}
      />
      <section className="flex items-center justify-between lg:flex-wrap gap-2">
        <div className="flex items-center gap-4">
          <input
            className="text-5xl font-semibold text-[#0D062D] lg:text-3xl bg-transparent"
            value={projectDetails.title}
            disabled={!isEditing}
            onChange={handleTitleEdit}
            ref={titleRef}
            name="title"
          />
          <div className="flex gap-2">
            <button
              className="bg-blue-light text-blue-dark p-1 rounded-md"
              onClick={handleSaveTitle}
            >
              {isEditing ? (
                <CheckCircle size={18} />
              ) : (
                <PencilSimple size={18} />
              )}
            </button>
            <button
              className="bg-red-100 text-red-400 p-1 rounded-md"
              onClick={handleDelete}
            >
              <Trash size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
