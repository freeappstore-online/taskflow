import "./Dashboard.css";
import Card from "../Card/Card";

function Dashboard({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const todo = tasks.filter(
    (task) => task.status === "To Do"
  ).length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const today = new Date().toISOString().split("T")[0];

  const dueToday = tasks.filter(
    (task) => task.dueDate === today
  ).length;

  const overdue = tasks.filter(
    (task) =>
      task.dueDate &&
      task.dueDate < today &&
      task.status !== "Completed"
  ).length;

  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="dashboard">
      <h2>Dashboard Overview</h2>

      <div className="cards">
        <Card title="Total Tasks" value={total} color="#2563eb" />
        <Card title="Completed" value={completed} color="#22c55e" />
        <Card title="In Progress" value={inProgress} color="#f59e0b" />
        <Card title="To Do" value={todo} color="#ef4444" />
      </div>

      <div className="progress-section">
        <h3>Project Progress</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>{progress}% Completed</p>
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <h4>🔥 High Priority</h4>
          <p>{highPriority}</p>
        </div>

        <div className="stat-box">
          <h4>⚠ Overdue</h4>
          <p>{overdue}</p>
        </div>

        <div className="stat-box">
          <h4>📅 Due Today</h4>
          <p>{dueToday}</p>
        </div>
      </div>

      <div className="activity">
        <h3>Recent Activity</h3>

        {tasks.length === 0 ? (
          <p>No recent activity.</p>
        ) : (
          <ul>
            {tasks
              .slice(-5)
              .reverse()
              .map((task) => (
                <li key={task.id}>
                  {task.title} ({task.status})
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Dashboard;