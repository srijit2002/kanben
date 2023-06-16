import { useRoutes } from "react-router-dom";
import { Dashboard } from "@/features/misc";
import { Projects } from "@/features/projects";

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: "/",
      element: <Dashboard />,
      children: [{ path: "/:projectId", element: <Projects /> }],
    },
  ];
  const element = useRoutes([...commonRoutes]);
  return <>{element}</>;
};
