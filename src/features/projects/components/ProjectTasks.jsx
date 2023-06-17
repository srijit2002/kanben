import { TaskProgressCol } from "./TaskProgressCol";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export const ProjectTasks = ({ tasks = [], isDirectionRow }) => {
  const [data, setData] = useState(tasks);
  const getSourceAndDestinationIndex = ({ source, destination }) => {
    return [parseInt(source.index), parseInt(destination.index)];
  };
  const insertAtIndex = (array, index, value) => {
    const newArray = [...array];
    newArray.join();
    newArray.splice(index, 0, value);
    newArray.join();
    return newArray;
  };
  const removeElementWithkey = (array, key, value) => {
    return array?.filter((element) => element[key] !== value);
  };
  const handleDragEnd = ({ source, destination }) => {
    if (!source || !destination) return;
    const sourceColIndex = parseInt(source.droppableId);
    const sourceCol = data[sourceColIndex];
    const destColIndex = parseInt(destination.droppableId);
    const destCol = data[destColIndex];
    const [sourceIndex, destIndex] = getSourceAndDestinationIndex({
      source,
      destination,
    });
    const draggedElement = { ...sourceCol.data[sourceIndex] };
    const sourceColNewData = removeElementWithkey(
      data[sourceColIndex].data,
      "_id",
      draggedElement._id
    );

    const destColNewData = insertAtIndex(
      sourceColIndex == destColIndex ? sourceColNewData : destCol.data,
      destIndex,
      draggedElement
    );
    console.log("Dest col new data", destColNewData);
    setData((oldData) => {
      const newData = [...oldData];
      newData[sourceColIndex].data = sourceColNewData;
      newData[destColIndex].data = destColNewData;
      return newData;
    });
  };
  return (
    <section
      className={twMerge(
        "flex gap-4 flex-wrap",
        isDirectionRow ? "flex-row" : "flex-col"
      )}
    >
      <DragDropContext onDragEnd={handleDragEnd}>
        {data.map((colData) => (
          <TaskProgressCol {...colData} key={colData._id} />
        ))}
      </DragDropContext>
    </section>
  );
};

ProjectTasks.propTypes = {
  tasks: PropTypes.array,
  isDirectionRow: PropTypes.bool,
};
