import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useEffect, useRef } from "react";
import { useOutlet } from "react-router-dom";
import { MobileNav } from "../components/MobileNav";
import { DashboardPlaceholder } from "../components/DashboardPlaceholder";

export const Dashboard = () => {
  const navRef = useRef(null);
  const projectsRef = useRef(null);
  useEffect(() => {
    projectsRef.current.style.height = `calc(100vh - ${navRef.current.offsetHeight}px)`;
  }, []);
  const outlet = useOutlet();
  return (
    <main className="flex flex-1 bg-white xs:overflow-x-hidden">
      <Sidebar />
      <section className="h-screen flex-1">
        <MobileNav />
        <Navbar ref={navRef} />
        <section ref={projectsRef}>
          {outlet || <DashboardPlaceholder />}
        </section>
      </section>
    </main>
  );
};
