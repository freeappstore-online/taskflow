import { useState } from "react";
import "./TaskForm.css";

function TaskForm() {
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

    setTask((previousTask) => ({
      ...previousTask,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(task);

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
    <section className="task-form-section">
      <h2>Create New Task</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Task Details</legend>

          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
            required
            minLength={5}
            maxLength={100}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Describe the task"
            rows="4"
            maxLength={500}
          />

          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="assignee">Assign To</label>
          <input
            type="text"
            id="assignee"
            name="assignee"
            value={task.assignee}
            onChange={handleChange}
            placeholder="Enter assignee name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={task.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />

          <button type="submit">Create Task</button>
        </fieldset>
      </form>
    </section>
  );
}

export default TaskForm;