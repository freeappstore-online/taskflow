import { useState, useEffect } from "react";
import "./TaskForm.css";

function TaskForm({ addTask, updateTask, editingTask }) {
  const initialTask = {
    title: "",
    description: "",
    priority: "Medium",
    status: "To Do",
    dueDate: "",
    assignee: "",
    email: "",
  };

  const [task, setTask] = useState(initialTask);

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask(initialTask);
    }
  }, [editingTask]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    setTask(initialTask);
  };

  const handleCancel = () => {
    setTask(initialTask);
    updateTask(null);
  };

  return (
    <section className="task-form">
      <h2>
        {editingTask ? "Edit Task" : "Create New Task"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <label htmlFor="title">Task Title</label>

            <input
              id="title"
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />
          </div>

          <div>
            <label htmlFor="assignee">Assignee</label>

            <input
              id="assignee"
              type="text"
              name="assignee"
              value={task.assignee}
              onChange={handleChange}
              placeholder="Assign task"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              name="email"
              value={task.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="dueDate">Due Date</label>

            <input
              id="dueDate"
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="priority">Priority</label>

            <select
              id="priority"
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label htmlFor="status">Status</label>

            <select
              id="status"
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">
                In Progress
              </option>
              <option value="Completed">
                Completed
              </option>
            </select>
          </div>
        </div>

        <label htmlFor="description">
          Description
        </label>

        <textarea
          id="description"
          name="description"
          rows="5"
          value={task.description}
          onChange={handleChange}
          placeholder="Task description..."
        />

        <div className="button-group">
          <button type="submit">
            {editingTask
              ? "Update Task"
              : "Create Task"}
          </button>

          {editingTask && (
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default TaskForm;