import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const ProjectTabLinks = ({ title, isOpen=true, id, color }) => {
  return (
    <NavLink
      to={`/${id}`}
      className={({ isActive }) =>
        `flex items-center py-2 gap-2 hover:bg-blue-light rounded-md transition-all duration-200 hover:text-highlight hover:font-semibold ${
          isOpen ? "px-2" : "px-0 justify-center"
        }
        
        ${isActive ? "font-semibold text-highlight  bg-blue-light" : ""}`
      }
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      <span className={twMerge("items-center", isOpen ? "flex" : "hidden")}>
        <h2 className={twMerge("text-logoColor text-sm text-inherit")}>
          {title}
        </h2>
        <button></button>
      </span>
    </NavLink>
  );
};

ProjectTabLinks.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};
