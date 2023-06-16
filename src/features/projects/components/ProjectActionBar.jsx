import { Button } from "@/components";
import {
  Funnel,
  CaretDown,
  Calendar,
  Users,
  Rows,
  CirclesFour,
} from "phosphor-react";

export const ProjectActionBar = () => {
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
        <button className="bg-blue-dark text-white rounded-md p-2">
          <Rows size={20} weight="fill"/>
        </button>
        <button className="text-logoColor rounded-md p-2">
          <CirclesFour size={20} />
        </button>
      </div>
    </section>
  );
};
