import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <img src="/assets/menu_icon.png" alt="Menu" className="icon" />
          <div className="search-box">
            <img src="/assets/search_icon.png" alt="Search" className="icon" />
            <input type="text" placeholder="Quick find" />
          </div>
        </div>
        <TaskCounter tasks={tasks} filter={filter} />
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <ul>
            <li className="nav-item active">
              <img src="/assets/inbox_icon.png" alt="Inbox" className="icon" />
              <span>Inbox</span>
              <span className="count">{tasks.length}</span>
            </li>
            <li className="nav-item">
              <img src="/assets/calendar_icon.png" alt="Today" className="icon" />
              <span>Today</span>
              <span className="count">
                {tasks.filter((task) => !task.completed).length}
              </span>
            </li>
            <li className="nav-item">
              <img src="/assets/upcoming_icon.png" alt="Upcoming" className="icon" />
              <span>Upcoming</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="content">
          <h1>Inbox</h1>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>

          {/* Task Form */}
          <TaskForm onAddTask={addTask} />

          {/* Task List */}
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
