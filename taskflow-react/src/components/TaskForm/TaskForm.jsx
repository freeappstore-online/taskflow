import { useEffect, useState } from "react";
import "./TaskForm.css";

function TaskForm({ addTask, updateTask, editingTask }) {
  const initialTask = {
    title: "",
    category: "Development",
    priority: "Medium",
    status: "To Do",
    dueDate: "",
    description: "",
  };

  const [task, setTask] = useState(initialTask);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
      setErrors({});
    } else {
      setTask(initialTask);
    }
  }, [editingTask]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTask((previousTask) => ({
      ...previousTask,
      [name]: value,
    }));

    // Remove the error when the user starts fixing the field
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!task.title.trim()) {
      newErrors.title = "Please enter a task title.";
    }

    if (!task.category) {
      newErrors.category = "Please select a category.";
    }

    if (!task.priority) {
      newErrors.priority = "Please select a priority.";
    }

    if (!task.status) {
      newErrors.status = "Please select a status.";
    }

    if (!task.dueDate) {
      newErrors.dueDate = "Please select a due date.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (editingTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    setTask(initialTask);
    setErrors({});
  };

  const handleCancel = () => {
    setTask(initialTask);
    setErrors({});

    if (editingTask) {
      updateTask(null);
    }
  };

  return (
    <section className="task-form">
      <h2>
        {editingTask ? "Edit Task" : "Create New Task"}
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">

          {/* Task Title */}
          <div className="form-group">
            <label htmlFor="title">
              Task Title *
            </label>

            <input
              id="title"
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className={errors.title ? "input-error" : ""}
            />

            {errors.title && (
              <small className="error-message">
                {errors.title}
              </small>
            )}
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">
              Category *
            </label>

            <select
              id="category"
              name="category"
              value={task.category}
              onChange={handleChange}
            >
              <option value="Development">
                Development
              </option>
              <option value="Design">
                Design
              </option>
              <option value="Testing">
                Testing
              </option>
              <option value="Documentation">
                Documentation
              </option>
              <option value="Bug">
                Bug
              </option>
              <option value="Meeting">
                Meeting
              </option>
            </select>
          </div>

          {/* Priority */}
          <div className="form-group">
            <label htmlFor="priority">
              Priority *
            </label>

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

          {/* Status */}
          <div className="form-group">
            <label htmlFor="status">
              Status *
            </label>

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

          {/* Due Date */}
          <div className="form-group">
            <label htmlFor="dueDate">
              Due Date *
            </label>

            <input
              id="dueDate"
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              className={errors.dueDate ? "input-error" : ""}
            />

            {errors.dueDate && (
              <small className="error-message">
                {errors.dueDate}
              </small>
            )}
          </div>

        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">
            Description
          </label>

          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Add task details (optional)"
          />
        </div>

        <div className="form-actions">
          <button type="submit">
            {editingTask ? "Update Task" : "Add Task"}
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