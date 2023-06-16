import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";
import Logo from "../assets/Logo.svg";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside
      className={twMerge(
        "h-screen border-r-2 border-gray-light transition-all duration-300 overflow-x-hidden",
        isOpen ? "w-[200px]" : "w-[38px]"
      )}
    >
      <div className="flex justify-between px-6 py-6 border-b-2 min-w-none overflow-x-hidden">
        {isOpen ? (
          <>
            <img src={Logo} alt="Logo" />
            <h2 className="whitespace-nowrap">Project M.</h2>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="z-100"
            >
              <CaretDoubleLeft size={22} className="text-logoColor hover:text-blue-dark" />
            </button>
          </>
        ) : (
          <button onClick={() => setIsOpen((prev) => !prev)} className=" -ml-4">
            <CaretDoubleRight size={22} className="text-logoColor mb-0.5 hover:text-blue-dark" />
          </button>
        )}
      </div>
    </aside>
  );
};
