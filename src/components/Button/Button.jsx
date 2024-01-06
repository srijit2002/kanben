import PropTypes from "prop-types";

export const Button = ({
  startIcon,
  endIcon,
  children,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className="flex px-4 items-center justify-center gap-2 border-2 rounded-md border-[#787486] text-[#787486] p-1.5 hover:text-white hover:bg-[#787486]"
    >
      <span>{startIcon}</span>
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
