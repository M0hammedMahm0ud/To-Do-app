import React from "react";
import shortid from "shortid";

function TodoForm({ addtask }) {
  const [task, setTask] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      return;
    }
    addtask({
      id: shortid.generate(),
      name: task,
      complete: false,
    });
    setTask("");
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Enter task name :</label>
      <input type="text" id="task" value={task} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
