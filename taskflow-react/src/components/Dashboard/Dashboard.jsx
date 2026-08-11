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

  const mediumPriority = tasks.filter(
    (task) => task.priority === "Medium"
  ).length;

  const lowPriority = tasks.filter(
    (task) => task.priority === "Low"
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
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  // Category statistics
  const categories = [
    "Development",
    "Design",
    "Testing",
    "Documentation",
    "Bug",
    "Meeting",
  ];

  const categoryStats = categories.map((category) => ({
    name: category,
    count: tasks.filter(
      (task) => task.category === category
    ).length,
  }));

  return (
    <section className="dashboard">
      <h2>Dashboard Overview</h2>

      {/* Main Cards */}

      <div className="cards">
        <Card
          title="Total Tasks"
          value={total}
          color="#2563eb"
        />

        <Card
          title="Completed"
          value={completed}
          color="#22c55e"
        />

        <Card
          title="In Progress"
          value={inProgress}
          color="#f59e0b"
        />

        <Card
          title="To Do"
          value={todo}
          color="#ef4444"
        />
      </div>

      {/* Progress */}

      <div className="progress-section">
        <div className="progress-header">
          <h3>Project Progress</h3>

          <strong>{progress}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>
          {completed} of {total} tasks completed
        </p>
      </div>

      {/* Statistics */}

      <div className="stats-grid">
        <div className="stat-box">
          <h4>🔥 High Priority</h4>
          <p>{highPriority}</p>
        </div>

        <div className="stat-box">
          <h4>🟠 Medium Priority</h4>
          <p>{mediumPriority}</p>
        </div>

        <div className="stat-box">
          <h4>🟢 Low Priority</h4>
          <p>{lowPriority}</p>
        </div>

        <div className="stat-box">
          <h4>⚠️ Overdue</h4>
          <p>{overdue}</p>
        </div>

        <div className="stat-box">
          <h4>📅 Due Today</h4>
          <p>{dueToday}</p>
        </div>
      </div>

      {/* Category Statistics */}

      <div className="category-section">
        <h3>Tasks by Category</h3>

        <div className="category-grid">
          {categoryStats.map((category) => (
            <div
              className="category-item"
              key={category.name}
            >
              <div className="category-info">
                <span>{category.name}</span>
                <strong>{category.count}</strong>
              </div>

              <div className="category-progress">
                <div
                  className="category-progress-fill"
                  style={{
                    width:
                      total === 0
                        ? "0%"
                        : `${(category.count / total) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}

      <div className="activity">
        <h3>Recent Activity</h3>

        {tasks.length === 0 ? (
          <p className="no-activity">
            No recent activity.
          </p>
        ) : (
          <ul>
            {tasks
              .slice(-5)
              .reverse()
              .map((task) => (
                <li key={task.id}>
                  <strong>{task.title}</strong>

                  <span>
                    {task.status}
                  </span>
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Dashboard;