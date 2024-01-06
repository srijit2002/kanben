import uniqid from "uniqid";
import randomColor from "randomcolor";

export const NEW_PROJECT = () => {
  return {
    title: "New Project",
    id: uniqid(),
    color: randomColor(),
    toDoTasks: [
      {
        _id: uniqid(),
        title: "Title",
        description: "Description",
        priority: "LOW",
        coverImage: { name: "", data: "" },
      },
    ],
    completedTasks: [
      {
        _id: uniqid(),
        title: "Title",
        description: "Description",
        priority: "LOW",
        coverImage: { name: "", data: "" },
      },
    ],
    onProgressTasks: [
      {
        _id: uniqid(),
        title: "Title",
        description: "Description",
        priority: "LOW",
        coverImage: { name: "", data: "" },
      },
    ],
  };
};
export const NEW_TASK = () => {
  return {
    _id: uniqid(),
    title: "New Task",
    description: "Description",
    priority: "LOW",
    coverImage: { name: "", data: "" },
  };
};
