import React, { useState, useEffect, useRef } from "react";

const Input = ({ taskList, setTasklist }) => {
  const [input, setInput] = useState("");

  const Myref = React.useRef();

  useEffect(() => {
    Myref.current.focus();
  });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasklist(storedTasks);
    }
  }, [setTasklist]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  //CLICK EVENT:
  const ClickHandler = (e) => {
    e.preventDefault();
    setTasklist([...taskList, input]);
    setInput("");
  };
  //EVENT HANDLER:
  const EventHandler = (e) => {
    if (e.key === "Enter") {
      ClickHandler();
    }
  };
  return (
    <>
      <form>
        <input
          className="input"
          type="text"
          placeholder="Add a Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={Myref}
        />
        <button
          className="button"
          onClick={ClickHandler}
          onKeyDown={EventHandler}
        >
          + Add
        </button>
      </form>
    </>
  );
};

export default Input;
