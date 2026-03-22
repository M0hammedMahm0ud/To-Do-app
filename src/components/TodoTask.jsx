const TodoTask = ({ taskName, onDelete, onToggleComplete, complete }) => {
  return (
    <>
      <div
        onClick={onToggleComplete}
        style={{
          textDecoration: complete ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {taskName}
      </div>
      <button onClick={onDelete}>Delete X</button>
    </>
  );
};

export default TodoTask;
