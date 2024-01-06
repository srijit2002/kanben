import { useContext, createContext, useState, useEffect } from "react";
import { getAllProjects } from "@/features/projects";
import Database from "@/util/Database";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [editModalDetails, setEditModalDetails] = useState({
    taskId: "",
    projectId: "",
    type: "",
  });
  const [modalOpen, setModalOpen] = useState(true);
  const [Projects, setProjects] = useState(getAllProjects());
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);
  const fetchAndUpdate = () => setProjects(getAllProjects());
  useEffect(fetchAndUpdate, []);
  useEffect(() => {
    Database.save("projects", Projects);
  }, [Projects]);
  return (
    <AppContext.Provider
      value={{
        Projects,
        setProjects,
        isOpen: modalOpen,
        closeModal,
        openModal,
        editModalDetails,
        setEditModalDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
