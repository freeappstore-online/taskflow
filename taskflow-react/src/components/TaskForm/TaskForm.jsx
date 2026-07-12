import { useState } from "react";
import "./TaskForm.css";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "To Do",
    dueDate: "",
    assignee: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTask(task);

    setTask({
      title: "",
      description: "",
      priority: "Medium",
      status: "To Do",
      dueDate: "",
      assignee: "",
      email: "",
    });
  };

  return (
    <section className="task-form">
      <h2>Create New Task</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <label>Task Title</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Assignee</label>
            <input
              type="text"
              name="assignee"
              value={task.assignee}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={task.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Priority</label>

            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div>
            <label>Status</label>

            <select
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        <label>Description</label>

        <textarea
          rows="4"
          name="description"
          value={task.description}
          onChange={handleChange}
        />

        <button>Create Task</button>
      </form>
    </section>
  );
}

export default TaskForm;