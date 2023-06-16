import { twMerge } from "tailwind-merge";
import { TaskCard } from "./TaskCard";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";

export const TaskProgressCol = ({ data = [], title = "", color = "", _id }) => {
  return (
    <section className="flex flex-col gap-4 flex-1 bg-gray-dark p-5 rounded-2xl">
      <div
        className="flex justify-between border-b-2"
        style={{ borderColor: color }}
      >
        <div className="flex items-center gap-2 p-2">
          <span
            className={twMerge("w-2 h-2 rounded-full")}
            style={{ backgroundColor: color }}
          ></span>
          <h2 className="text-base text-[#0D062D] font-[inter] font-medium">
            {title}
          </h2>
          <span className="bg-[#E0E0E0] text-[#625F6D] w-5 flex justify-center items-center h-5 rounded-full font-medium text-xs">
            {data.length}
          </span>
        </div>
      </div>
      <Droppable droppableId={_id}>
        {(provided) => {
          return (
            <section
              className="flex flex-col gap-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.map((task, index) => {
                return <TaskCard key={task._id} {...task} index={index} />;
              })}
              {provided.placeholder}
            </section>
          );
        }}
      </Droppable>
    </section>
  );
};

TaskProgressCol.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  color: PropTypes.string,
  id:PropTypes.number
};
