import { useState } from "react";
import TodoTask from "./TodoTask";
import TodoForm from "./TodoForm";

const ToDo2 = () => {
  let [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task,
      ),
    );
  };
  if (filter === "active") {
    tasks = tasks.filter((task) => !task.complete);
  } else if (filter === "completed") {
    tasks = tasks.filter((task) => task.complete);
  }
  return (
    <div>
      <h1>Welcome this is To Do App</h1>
      <TodoForm addtask={(newTask) => setTasks([...tasks, newTask])} />
      <div>
        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <TodoTask
              complete={task.complete}
              key={task.id}
              taskName={task.name}
              onDelete={() => handleDelete(task.id)}
              onToggleComplete={() => toggleComplete(task.id)}
            />
          ))
        )}
      </div>

      <div>
        <button
          onClick={() => {
            console.log(tasks);
            setFilter("all");
          }}
        >
          All tasks
        </button>

        <button
          onClick={() => {
            setFilter("active");
          }}
        >
          Remaining incomplete tasks
        </button>
        <button
          onClick={() => {
            setFilter("completed");
          }}
        >
          Completed tasks
        </button>

        <button onClick={() => setTasks([])}>Remove all tasks</button>
        <button
          onClick={() => setTasks(tasks.filter((task) => !task.complete))}
        >
          Remove completed tasks
        </button>
      </div>
    </div>
  );
};

export default ToDo2;
