import "./App.css";
import { useState } from "react";
import Input from "./Components/Input";
import Board from "./Components/Board";

function App() {
  const [taskList, setTasklist] = useState([]);
  console.log(taskList);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2 style={{ border: "1px solid #fff" }}>TO-DO NOTES</h2>
          <Input taskList={taskList} setTasklist={setTasklist} />
        </div>
        <div className="hero">
          <>
            {taskList.map((task, index) => (
              <Board
                key={index}
                index={index}
                task={task}
                taskList={taskList}
                setTasklist={setTasklist}
              />
            ))}
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
