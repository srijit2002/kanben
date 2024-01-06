import { Rows, CirclesFour } from "phosphor-react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";


export const ProjectActionBar = ({
  setIsDirectionRow = () => {},
  isDirectionRow,
}) => {
  return (
    <section className="flex justify-between items-center lg:flex-wrap gap-4">
      <div className="flex justify-between items-center gap-4">
        <button
          onClick={() => setIsDirectionRow(true)}
          className={twMerge(
            "rounded-md p-2",
            isDirectionRow ? "bg-blue-dark text-white " : "text-logoColor "
          )}
        >
          <Rows size={20} weight="fill" />
        </button>
        <button
          onClick={() => setIsDirectionRow(false)}
          className={twMerge(
            "rounded-md p-2",
            isDirectionRow ? "text-logoColor " : "bg-blue-dark text-white "
          )}
        >
          <CirclesFour size={20} weight={isDirectionRow ? "regular" : "fill"} />
        </button>
      </div>
    </section>
  );
};
ProjectActionBar.propTypes = {
  setIsDirectionRow: PropTypes.func,
  isDirectionRow: PropTypes.bool,
};
