import "./TaskTable.css";

function TaskTable({ tasks, deleteTask, editTask, clearAllTasks }) {
  return (
    <section className="task-table">
      {/* <h2>Task List</h2> */}
      <div className="table-header">
        <h2>Task List</h2>
        <button className="clear-btn" onClick={clearAllTasks}>
          Clear All
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Assignee</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty">
                No Tasks Found
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>{task.dueDate}</td>
                <td>{task.assignee}</td>

                <td>
                  <button className="edit-btn" onClick={() => editTask(task)}>
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
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default TaskTable;
