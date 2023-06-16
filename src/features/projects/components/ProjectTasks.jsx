import { TaskProgressCol } from "./TaskProgressCol";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

export const ProjectTasks = ({ tasks = [] }) => {
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
    const sourceColId = parseInt(source.droppableId);
    const sourceCol = data[sourceColId];
    const destColId = parseInt(destination.droppableId);
    const destCol = data[destColId];
    const [sourceIndex, destIndex] = getSourceAndDestinationIndex({
      source,
      destination,
    });
    const draggedElement = { ...sourceCol.data[sourceIndex] };
    const sourceColNewData = removeElementWithkey(
      data[sourceColId].data,
      "_id",
      draggedElement._id
    );

    const destColNewData = insertAtIndex(
      destCol.data,
      destIndex,
      draggedElement
    );

    setData((oldData) => {
      const newData = [...oldData];
      newData[sourceColId].data = sourceColNewData;
      newData[destColId].data = destColNewData;
      return newData;
    });
  };
  return (
    <section className="flex gap-4 flex-wrap">
      <DragDropContext onDragEnd={handleDragEnd}>
        {data.map((colData) => (
          <TaskProgressCol {...colData} key={colData.index} />
        ))}
      </DragDropContext>
    </section>
  );
};
