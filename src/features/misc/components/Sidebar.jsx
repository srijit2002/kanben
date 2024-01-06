import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CaretDoubleLeft } from "phosphor-react";
import Logo from "../assets/Logo.svg";
import AddSquare from "../assets/AddSquare.svg";
import { ProjectTabLinks } from "@/features/projects";
import Bulb from "../assets/Bulb.svg";
import { NEW_PROJECT } from "@/features/projects/";
import { useAppContext } from "@/context/Context.jsx";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { Projects, setProjects } = useAppContext();
  const navigate = useNavigate();
  const handleCreateProject = () => {
    let newProject = NEW_PROJECT();
    setProjects((prev) => [...prev, newProject]);
    navigate(newProject.id);
  };
  return (
    <aside
      className={twMerge(
        "lg:hidden h-screen border-r-2 border-gray-light transition-all duration-300 overflow-x-hidden scrollbar-track-slate-100 scrollbar-thumb-slate-300 scrollbar-thin",
        isOpen ? "w-[240px]" : "w-16"
      )}
    >
      <div
        className={twMerge(
          "flex justify-between py-6 border-b-2 min-w-none overflow-x-hidden",
          isOpen ? "px-6" : "px-4"
        )}
      >
        {isOpen ? (
          <>
            <img src={Logo} alt="Logo" />
            <h2 className="whitespace-nowrap">Project M.</h2>
          </>
        ) : null}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={twMerge(
            "transform transition-all duration-300 pb-0.5",
            isOpen ? "rotate-0" : "rotate-180"
          )}
        >
          <CaretDoubleLeft
            size={22}
            className="text-logoColor hover:text-blue-dark"
          />
        </button>
      </div>
      <div className="overflow-y-auto">
        <section className="p-4 text-sm text-logoColor">
          <div
            className={twMerge(
              "flex",
              isOpen ? "justify-between" : "justify-center"
            )}
          >
            <h2
              className={twMerge(
                "uppercase font-bold",
                isOpen ? "block" : "hidden"
              )}
            >
              my projects
            </h2>
            <button onClick={handleCreateProject}>
              <img src={AddSquare} alt="Create New" />
            </button>
          </div>
          <section className="mt-4 flex flex-col pb-4">
            {Projects?.map((taboption) => (
              <ProjectTabLinks
                isOpen={isOpen}
                key={taboption.id}
                title={taboption.title}
                icon={taboption.icon}
                id={taboption.id}
                color={taboption.color}
              />
            ))}
          </section>
        </section>
        {isOpen && (
          <section className="mt-16 relative flex rounded-2xl gap-4 flex-col items-center justify-center bg-[#F5F5F5] p-4 m-4">
            <span className="w-20 flex justify-center items-center h-20 rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#F5F5F5] -z-1">
              <img src={Bulb} alt="" />
            </span>
            <h2 className="text-sm z-10">Thoughts Time</h2>
            <p className="text-xs text-logoColor text-center">
              The shortage of project managers could result in a $207.9 billion
              GDP loss by 2027.
            </p>
          </section>
        )}
      </div>
    </aside>
  );
};
