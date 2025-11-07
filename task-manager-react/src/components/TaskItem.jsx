function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <input
        type="checkbox"
        id={`task-${task.id}`}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label
        htmlFor={`task-${task.id}`}
        className={task.completed ? 'completed' : ''}
      >
        {task.text}
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="delete-btn"
        aria-label="Delete task"
      >
        ×
      </button>
    </li>
  );
}

export default TaskItem;

