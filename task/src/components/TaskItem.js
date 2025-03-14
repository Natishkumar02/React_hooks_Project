function TaskItem({ task, onDelete, onToggleComplete }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title} - {task.description}
        </span>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </li>
    );
  }
  
  export default TaskItem;
  