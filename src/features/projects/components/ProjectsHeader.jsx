import { PencilSimple, LinkSimpleHorizontal } from "phosphor-react";
import AddSquare from "@/features/misc/assets/AddSquare.svg";
import PropTypes from "prop-types";

export const ProjectsHeader = ({ title, people = [] }) => {
  return (
    <section className="flex items-center justify-between lg:flex-wrap gap-2">
      <div className="flex items-center gap-4">
        <h1 className="text-5xl font-semibold text-[#0D062D] lg:text-3xl">
          {title}
        </h1>
        <div className="flex gap-2">
          <button className="bg-blue-light text-blue-dark p-1 rounded-md">
            <PencilSimple size={18} />
          </button>
          <button className="bg-blue-light text-blue-dark p-1 rounded-md">
            <LinkSimpleHorizontal size={18} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button className=" text-blue-dark p-1 rounded-md flex items-center gap-3">
          <div className="bg-blue-light w-fit rounded-md">
            <img src={AddSquare} alt="Add A items" />
          </div>
          Invite
        </button>
        <div className="flex">
          {people.slice(0, 4).map((person) => (
            <img
              src={person.avatar}
              key={person.avatar}
              alt={person.name}
              className="w-10 object-cover rounded-full h-10 -ml-4 border-2 border-white"
            />
          ))}
          {people.length > 4 && (
            <div className="w-10 h-10 font-semibold text-[#D8727D] bg-[#f4d7da] rounded-full -ml-4 flex justify-center items-center">
              +{people.length - 4}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

ProjectsHeader.propTypes = {
  title: PropTypes.string,
  people: PropTypes.array,
};
