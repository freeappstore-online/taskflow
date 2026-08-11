import "./TaskTable.css";
import StatusBadge from "../StatusBadge/StatusBadge";
import PriorityBadge from "../PriorityBadge/PriorityBadge";
function TaskTable({
  tasks,
  deleteTask,
  editTask,
  clearAllTasks,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy,
  clearFilters,
}) {
  return (
    <section className="task-table">
      <div className="table-header">
        <h2>Task List</h2>

        {tasks.length > 0 && (
          <button
            className="clear-btn"
            onClick={clearAllTasks}
          >
            Clear All
          </button>
        )}
      </div>
<div className="filters">
  <select
    value={categoryFilter}
    onChange={(e) => setCategoryFilter(e.target.value)}
  >
    <option value="All">All Categories</option>
    <option value="Development">Development</option>
    <option value="Design">Design</option>
    <option value="Testing">Testing</option>
    <option value="Documentation">Documentation</option>
    <option value="Bug">Bug</option>
    <option value="Meeting">Meeting</option>
  </select>

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
  >
    <option value="All">All Statuses</option>
    <option value="To Do">To Do</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
  </select>

  <select
    value={priorityFilter}
    onChange={(e) => setPriorityFilter(e.target.value)}
  >
    <option value="All">All Priorities</option>
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
  </select>
  <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="default">Sort By</option>
  <option value="title-asc">Title: A → Z</option>
  <option value="title-desc">Title: Z → A</option>
  <option value="due-asc">Due Date: Earliest</option>
  <option value="due-desc">Due Date: Latest</option>
  <option value="priority-high">Priority: High → Low</option>
  <option value="priority-low">Priority: Low → High</option>
</select>
<button
    type="button"
    className="clear-filters-btn"
    onClick={clearFilters}
  >
    🔄 Clear Filters
  </button>

</div>
      {tasks.length === 0 ? (
  <div className="empty-state">
  <div className="empty-icon">📋</div>

  <h3>No tasks found</h3>

  <p>
    Try changing your search or filters,
    or create a new task.
  </p>

  <button
    className="clear-filters-btn"
    onClick={clearFilters}
  >
    Clear Filters
  </button>
</div>

      ) : (
        
        <table>
          <thead>
  <tr>
    <th>Task</th>
    <th>Category</th>
    <th>Priority</th>
    <th>Status</th>
    <th>Due Date</th>
    <th>Actions</th>
  </tr>
</thead>

         <tbody>
  {tasks.map((task) => (
    <tr key={task.id}>
      <td>{task.title}</td>

      <td>
        <span className="category-badge">
          {task.category || "Other"}
        </span>
      </td>

      <td>
        <span
          className={`priority-badge ${task.priority
            ?.toLowerCase()
            .replace(" ", "-")}`}
        >
          {task.priority}
        </span>
      </td>

      <td>
        <span
          className={`status-badge ${task.status
            ?.toLowerCase()
            .replace(" ", "-")}`}
        >
          {task.status}
        </span>
      </td>

      <td>
        {task.dueDate ? (
          <span
            className={
              task.dueDate < new Date().toISOString().split("T")[0] &&
              task.status !== "Completed"
                ? "overdue-date"
                : ""
            }
          >
            {task.dueDate}
          </span>
        ) : (
          "No date"
        )}
      </td>

      <td>
        <button
          className="edit-btn"
          onClick={() => editTask(task)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>
        </table>
      )}
    </section>
  );
}

export default TaskTable;