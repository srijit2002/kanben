import { Button } from "@/components";
import {
  Funnel,
  CaretDown,
  Calendar,
  Users,
  Rows,
  CirclesFour,
} from "phosphor-react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

export const ProjectActionBar = ({
  setIsDirectionRow = () => {},
  isDirectionRow,
}) => {
  return (
    <section className="flex justify-between items-center lg:flex-wrap gap-4">
      <div className="flex gap-3">
        <Button
          startIcon={<Funnel size={20} className="text-logoColor" />}
          endIcon={<CaretDown size={20} className="text-logoColor" />}
        >
          Filter
        </Button>
        <Button
          startIcon={<Calendar size={20} className="text-logoColor" />}
          endIcon={<CaretDown size={20} className="text-logoColor" />}
        >
          Today
        </Button>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Button startIcon={<Users size={20} className="text-logoColor" />}>
          Share
        </Button>
        <span className="h-8 w-0.5 bg-gray-light"></span>
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
