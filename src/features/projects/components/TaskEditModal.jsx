import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { X } from "phosphor-react";
import { useAppContext } from "@/context/Context";
import { toast } from "react-toastify";

export const TaskEditModal = ({ isOpen, closeModal = () => {} }) => {
  const { editModalDetails, Projects, setProjects } = useAppContext();
  const selectProject = Projects.find(
    (project) => project.id === editModalDetails.projectId
  );
  const originalTaskDetails = selectProject
    ? selectProject[editModalDetails.type].find(
        (task) => task._id === editModalDetails.taskId
      )
    : null;
  const [taskDetails, setTaskDetails] = useState(originalTaskDetails);
  const onDrop = useCallback((acceptedFiles) => {
    let file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setTaskDetails((prev) => ({
        ...prev,
        coverImage: { data: reader.result, name: file.name },
      }));
    };
    reader.readAsDataURL(file);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const handleChange = (e) => {
    setTaskDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const updatedProjects = Projects.map((project) => {
      if (project.id === editModalDetails.projectId) {
        const tasks = project[editModalDetails.type].map((task) => {
          if (task._id === editModalDetails.taskId) {
            return { ...task, ...taskDetails };
          }
          return task;
        });
        project[editModalDetails.type] = tasks;
        return project;
      }
      return project;
    });
    setProjects(updatedProjects);
    closeModal();
    toast("Task details updated!!", { type: "success" });
  };
  useEffect(() => {
    const selectProject = Projects.find(
      (project) => project.id === editModalDetails.projectId
    );
    const originalTaskDetails = selectProject
      ? selectProject[editModalDetails.type].find(
          (task) => task._id === editModalDetails.taskId
        )
      : null;
    setTaskDetails(originalTaskDetails);
  }, [
    editModalDetails.projectId,
    editModalDetails.taskId,
    editModalDetails.type,
    Projects,
  ]);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="label"
                  className="flex flex-col text-xs font-semibold leading-6 text-gray-600"
                >
                  Title
                  <input
                    type="text"
                    value={taskDetails?.title}
                    className="border-0 p-2 text-sm bg-gray-50 rounded-md font-normal"
                    onChange={handleChange}
                    name="title"
                  />
                </Dialog.Title>
                <Dialog.Description
                  as="label"
                  className="flex flex-col text-xs font-semibold leading-6 text-gray-600"
                >
                  Description
                  <textarea
                    type="textarea"
                    value={taskDetails?.description}
                    className="border-0 p-2 text-sm bg-gray-50 rounded-md font-normal"
                    onChange={handleChange}
                    name="description"
                  />
                  <label className="mt-2 flex flex-col">
                    Priority
                    <select
                      className="text-sm py-1.5 bg-gray-50 px-2 font-normal"
                      name="priority"
                      value={taskDetails?.priority}
                      onChange={handleChange}
                    >
                      <option value="LOW">Low</option>
                      <option value="HIGH">High</option>
                      <option value="COMPLETED">Completed</option>
                    </select>
                  </label>
                  <div {...getRootProps({ className: "mt-2" })}>
                    Attach Image
                    <input {...getInputProps({ className: "bg-gray-50" })} />
                    <p className="bg-gray-50 px-2 rouned-md focus:outline">
                      Drag &apos;n&apos; drop some image here, or click to
                      select image
                    </p>
                  </div>
                  {taskDetails?.coverImage?.data &&
                    taskDetails?.coverImage?.name && (
                      <div className="flex px-4 py-2.5 items-center justify-between bg-blue-50 text-blue-700 mt-2 rounded-md">
                        <h2>{taskDetails.coverImage.name}</h2>
                        <button
                          onClick={() => {
                            setTaskDetails((prev) => ({
                              ...prev,
                              coverImage: { data: "", name: "" },
                            }));
                          }}
                        >
                          <X size={18} />
                        </button>
                      </div>
                    )}
                </Dialog.Description>
                <div className="mt-4">
                  <button
                    onClick={handleSave}
                    type="button"
                    className="mr-2 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setTaskDetails(originalTaskDetails);
                      closeModal();
                    }}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
