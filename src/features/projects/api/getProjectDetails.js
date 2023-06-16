const AllProjects = [
  {
    title: "Mobile App",
    id: 0,
    color: "#7AC555",
  },
  {
    title: "Website Redesign",
    id: 1,
    color: "#FFA500",
  },
  {
    title: "Design System",
    id: 2,
    color: "#E4CCFD",
  },
  {
    title: "Wireframes",
    id: 3,
    color: "#76A5EA",
  },
];
export const getProjectDetails = ({ projectId }) => {
  return AllProjects[projectId];
};

export const getAllProjects=()=>{
  return AllProjects;
}