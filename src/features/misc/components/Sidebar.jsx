import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CaretDoubleLeft } from "phosphor-react";
import Logo from "../assets/Logo.svg";
import { TabLinks } from "./TabLinks";
import Home from "../assets/Home.svg";
import Members from "../assets/Members.svg";
import Message from "../assets/Message.svg";
import Settings from "../assets/Settings.svg";
import Task from "../assets/Task.svg";
import AddSquare from "../assets/AddSquare.svg";
import { ProjectTabLinks, getAllProjects} from "@/features/projects";
import Bulb from "../assets/Bulb.svg";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
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
        "h-screen border-r-2 border-gray-light transition-all duration-300 overflow-x-hidden scrollbar-track-slate-100 scrollbar-thumb-slate-300 scrollbar-thin",
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
        <section className="flex flex-col m-4 pb-4 border-b-gray-light border-b-2">
          {TabOptions?.map((taboption) => (
            <TabLinks
              isOpen={isOpen}
              key={taboption.title}
              title={taboption.title}
              icon={taboption.icon}
            />
          ))}
        </section>

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
            <button>
              <img src={AddSquare} alt="Create New" />
            </button>
          </div>
          <section className="mt-4 flex flex-col pb-4">
            {Projects?.map((taboption) => (
              <ProjectTabLinks
                isOpen={isOpen}
                key={taboption.title}
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
              We don&apos;t have any notice for you, till then you can share
              your thoughts with your peers.
            </p>
            <button className="bg-white px-2 text-sm py-3">
              Write a message
            </button>
          </section>
        )}
      </div>
    </aside>
  );
};
