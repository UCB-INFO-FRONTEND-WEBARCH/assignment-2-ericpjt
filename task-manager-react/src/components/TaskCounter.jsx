function TaskCounter({ tasks, filter }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = tasks.filter((task) => !task.completed).length;

  let displayText = '';
  if (filter === 'all') {
    displayText = `${completedTasks}/${totalTasks}`;
  } else if (filter === 'active') {
    displayText = `${activeTasks}/${totalTasks}`;
  } else if (filter === 'completed') {
    displayText = `${completedTasks}/${totalTasks}`;
  }

  return (
    <div className="task-count">
      <img src="/assets/check_icon.png" alt="Check Circle" className="icon" />
      <span>{displayText}</span>
    </div>
  );
}

export default TaskCounter;

