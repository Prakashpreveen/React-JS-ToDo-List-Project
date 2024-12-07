import React from "react";

const Board = ({ task, index, taskList, setTasklist }) => {
  const DeleteHandler = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTasklist((currentTasks) =>
      currentTasks.filter((todo) => index === removeIndex)
    );
  };
  return (
    <div className="board">
      <p>{task}</p>
      <button className="deletebtn" onClick={DeleteHandler}>
        x
      </button>
    </div>
  );
};

export default Board;
