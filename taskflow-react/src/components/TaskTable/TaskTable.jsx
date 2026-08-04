import "./TaskTable.css";
import StatusBadge from "../StatusBadge/StatusBadge";
import PriorityBadge from "../PriorityBadge/PriorityBadge";

function TaskTable({
  tasks,
  deleteTask,
  editTask,
  clearAllTasks,
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

      {tasks.length === 0 ? (
        <div className="empty-state">
          <h3>📋 No Tasks Yet</h3>
          <p>Create your first task to start managing your work.</p>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Assignee</th>
              <th>Email</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>

                <td>{task.assignee}</td>

                <td>{task.email}</td>

                <td>{task.category}</td>

                <td>
                  <PriorityBadge
                    priority={task.priority}
                  />
                </td>

                <td>
                  <StatusBadge
                    status={task.status}
                  />
                </td>

                <td>{task.dueDate}</td>

                <td>{task.description}</td>

                <td className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => editTask(task)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => {
                      const confirmDelete =
                        window.confirm(
                          "Delete this task?"
                        );

                      if (confirmDelete) {
                        deleteTask(task.id);
                      }
                    }}
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