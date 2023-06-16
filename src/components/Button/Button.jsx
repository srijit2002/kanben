import PropTypes from "prop-types";

export const Button = ({ startIcon, endIcon, children }) => {
  return (
    <button className="flex items-center gap-2 border-2 rounded-md border-[#787486] p-1.5">
      <span>{startIcon}</span>
      {children}
      <span>{endIcon}</span>
    </button>
  );
};

Button.propTypes = {
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  children: PropTypes.node,
};
