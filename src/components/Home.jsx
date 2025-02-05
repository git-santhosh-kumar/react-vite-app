import { useEffect, useState } from "react"

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('');

  // Function to handle adding a new task
  const addTask = () => {
    if (!taskName || !priority) {
      alert("Both fields are required!");
      return;
    }
    const newTask = {
      id: Math.random(), // Random ID for task
      name: taskName,
      priority: Number(priority),
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
    setPriority('');
  };

  // Function to handle deleting a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Sort tasks by priority (high to low)
  const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority);

    return (
        <div className="App">
        <h1>Task Manager</h1>
  
        {/* Task Input Form */}
        <div className="task-input">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
          />
          <input
            type="number"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            placeholder="Enter priority (1-10)"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
  
        {/* Task List */}
        {sortedTasks.length === 0 ? (
          <p>No tasks available!</p>
        ) : (
          <ul>
            {sortedTasks.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.name} (Priority: {task.priority})</span>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}