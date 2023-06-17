import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { MobileNav } from "../components/MobileNav";

export const Dashboard = () => {
  const navRef = useRef(null);
  const projectsRef = useRef(null);
  useEffect(() => {
    projectsRef.current.style.height = `calc(100vh - ${navRef.current.offsetHeight}px)`;
  }, []);
  return (
    <main className="flex flex-1 bg-white xs:overflow-x-hidden">
      <Sidebar />
      <section className="h-screen flex-1">
        <MobileNav />
        <Navbar ref={navRef} />
        <section ref={projectsRef}>
          <Outlet />
        </section>
      </section>
    </main>
  );
};
