import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {CaretDoubleRight } from "phosphor-react";
import Logo from "../assets/Logo.svg";
import { TabLinks } from "./TabLinks";
import Home from "../assets/Home.svg";
import Members from "../assets/Members.svg";
import Message from "../assets/Message.svg";
import Settings from "../assets/Settings.svg";
import Task from "../assets/Task.svg";
import AddSquare from "../assets/AddSquare.svg";
import { ProjectTabLinks, getAllProjects } from "@/features/projects";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const TabOptions = [
    { title: "Home", icon: Home },
    { title: "Members", icon: Members },
    { title: "Message", icon: Message },
    { title: "Settings", icon: Settings },
    { title: "Task", icon: Task },
  ];
  const Projects = getAllProjects();
  return (
    <aside
      className={twMerge(
        "min-lg:hidden border-r-2 border-b-2 border-gray-light transition-all duration-300 overflow-x-hidden scrollbar-track-slate-100 scrollbar-thumb-slate-300 scrollbar-thin overflow-y-auto"
      )}
    >
      <section className="p-2 flex gap-4">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={twMerge(
            "transform transition-all duration-300",
            isOpen ? "rotate-90" : "rotate-0"
          )}
        >
          <CaretDoubleRight
            size={22}
            className="text-logoColor hover:text-blue-dark"
          />
        </button>
        <div>
          <img src={Logo} alt="Logo" />
          <h2 className="whitespace-nowrap">Project M.</h2>
        </div>
      </section>
      <section
        className={twMerge("transition-all duration-300", isOpen ? "" : "h-0 overflow-y-hidden")}
      >
        <section className="flex flex-col m-2 pb-4 border-b-gray-light border-b-2">
          {TabOptions?.map((taboption) => (
            <TabLinks
              key={taboption.title}
              title={taboption.title}
              icon={taboption.icon}
            />
          ))}
        </section>
        <section className="p-4 text-sm text-logoColor">
          <div className={twMerge("flex justify-between")}>
            <h2 className={twMerge("uppercase font-bold")}>my projects</h2>
            <button>
              <img src={AddSquare} alt="Create New" />
            </button>
          </div>
          <section className="mt-4 flex flex-col pb-4">
            {Projects?.map((taboption) => (
              <ProjectTabLinks
                key={taboption.title}
                title={taboption.title}
                icon={taboption.icon}
                id={taboption.id}
                color={taboption.color}
              />
            ))}
          </section>
        </section>
      </section>
    </aside>
  );
};
