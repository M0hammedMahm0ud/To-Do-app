import { useState } from "react";

export const ToDo = () => {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  function addTask() {
    if (task.trim() !== "") {
      setTasks((t) => [...t, task]);
      setTask("");
    }
  }
  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }
  function moveToUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveToDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function handleTask(event) {
    setTask(event.target.value);
  }
  console.log(tasks);
  return (
    <div>
      <h1>To Do App</h1>
      <div>
        <input
          value={task}
          type="text"
          onChange={handleTask}
          placeholder="Write your task Here"
        />
        <button onClick={addTask}>ADD</button>
      </div>
      <div>
        {tasks.map((t, index) => (
          <div key={index}>
            {t}
            <div>
              <button onClick={() => deleteTask(index)}>
                <i className="fa-solid fa-trash"></i>
              </button>
              <button onClick={() => moveToUp(index)}>
                <i className="fa-solid fa-circle-up"></i>
              </button>
              <button onClick={() => moveToDown(index)}>
                <i className="fa-solid fa-circle-down"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
