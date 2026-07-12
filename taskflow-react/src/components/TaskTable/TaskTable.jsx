import "./TaskTable.css";

function TaskTable({ tasks }) {
  return (
    <section>
      <h2>Task List</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Assignee</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="5">No tasks available.</td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>{task.dueDate}</td>
                <td>{task.assignee}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default TaskTable;