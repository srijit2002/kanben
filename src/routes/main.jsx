import { useRoutes } from "react-router-dom";
import { Dashboard } from "@/features/misc";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <Dashboard /> }];
  const element = useRoutes([...commonRoutes]);
  return <>{element}</>;
};
