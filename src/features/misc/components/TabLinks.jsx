import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export const TabLinks = ({ title, icon, isOpen }) => {
  return (
    <NavLink
      className={twMerge(
        "flex items-center py-2 gap-2 hover:bg-blue-light rounded-md transition-all",
        isOpen ? "px-2" : "px-0 justify-center"
      )}
    >
      <img src={icon} alt={title} className="w-5" />
      <h2
        className={twMerge(
          "text-logoColor text-base transition-all delay-300",
          isOpen ? "block" : "hidden"
        )}
      >
        {title}
      </h2>
    </NavLink>
  );
};

TabLinks.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  isOpen: PropTypes.bool,
};
