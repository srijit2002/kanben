import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { ChatCenteredDots, FolderNotchMinus, DotsThree } from "phosphor-react";
import { Draggable } from "react-beautiful-dnd";

export const TaskCard = ({
  title,
  description,
  coverImage,
  priority,
  numberOfComments,
  people,
  _id,
  index,
  numberOfFiles,
}) => {
  const priorityColor = {
    LOW: { color: "#D58D49", backgroundColor: "rgba(223, 168, 116, 0.2)" },
    HIGH: { color: "#D8727D", backgroundColor: "rgba(216, 114, 125, 0.1)" },
    COMPLETED: {
      color: "#68B266",
      backgroundColor: "rgba(131, 194, 157, 0.2)",
    },
  };

  return (
    <Draggable draggableId={_id} index={index}>
      {(provider) => {
        return (
          <article
            {...provider.draggableProps}
            {...provider.dragHandleProps}
            ref={provider.innerRef}
            className="relative flex flex-col bg-white p-4 rounded-2xl gap-2"
          >
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span
                  className="w-fit p-2 text-xs font-medium rounded capitalize"
                  style={{
                    color: priorityColor[priority].color,
                    backgroundColor: priorityColor[priority].backgroundColor,
                  }}
                >
                  {priority}
                </span>
                <button>
                  <DotsThree size={32} className="text-[#0D062D]" />
                </button>
              </div>
              <h1 className="text-[#0D062D] font-semibold text-lg">{title}</h1>
              <p className="text-xs text-[#787486] mt-[0.5]">{description}</p>
            </div>
            <img
              src={coverImage}
              alt=""
              className="w-full rounded-md  max-h-[80px] object-cover"
            />
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex row-reverse w-fit min-w-[100px]">
                {people.map(({ pfp }, index) => (
                  <img
                    key={index}
                    src={pfp}
                    alt=""
                    className={twMerge(
                      "-mr-4 w-8 h-8 object-cover border-2 border-white rounded-full",
                      `z-[${200 - 10 * index}]`
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2 flex-wrap items-center justify-between min-w-[150px]">
                <div className="flex items-center gap-2">
                  <ChatCenteredDots size={22} className="text-[#787486]" />
                  <h3 className="text-[#787486] text-xs font-medium max-w-[90px]">
                    {numberOfComments} comments
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <FolderNotchMinus size={22} className="text-[#787486]" />
                  <h3 className="text-[#787486] text-xs font-medium truncate max-w-[39px]">
                    {numberOfFiles || 0} files
                  </h3>
                </div>
              </div>
            </div>
          </article>
        );
      }}
    </Draggable>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  coverImage: PropTypes.string,
  priority: PropTypes.string,
  numberOfComments: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  people: PropTypes.array,
  isDragging: PropTypes.bool,
};
