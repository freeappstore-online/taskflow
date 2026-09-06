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

  const overdueTasks = tasks.filter(
    (task) =>
      task.dueDate &&
      task.dueDate < today &&
      task.status !== "Completed"
  );

  const overdue = overdueTasks.length;

  const completionRate =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const overdueRate =
    total === 0
      ? 0
      : Math.round((overdue / total) * 100);

  // Upcoming tasks
  const upcomingTasks = tasks
    .filter(
      (task) =>
        task.dueDate &&
        task.dueDate >= today &&
        task.status !== "Completed"
    )
    .sort((a, b) =>
      a.dueDate.localeCompare(b.dueDate)
    )
    .slice(0, 5);

  // High priority unfinished tasks
  const highPriorityTasks = tasks.filter(
    (task) =>
      task.priority === "High" &&
      task.status !== "Completed"
  );

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

          <strong>{completionRate}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${completionRate}%`,
            }}
          ></div>
        </div>

        <p>
          {completed} of {total} tasks completed
        </p>
      </div>

      {/* Productivity Insights */}

      <div className="insights-section">
        <h3>📊 Productivity Insights</h3>

        <div className="insights-grid">

          <div className="insight-box">
            <span className="insight-icon">
              ✅
            </span>

            <div>
              <h4>Completion Rate</h4>
              <p>{completionRate}%</p>
            </div>
          </div>

          <div className="insight-box">
            <span className="insight-icon">
              ⚠️
            </span>

            <div>
              <h4>Overdue Rate</h4>
              <p>{overdueRate}%</p>
            </div>
          </div>

          <div className="insight-box">
            <span className="insight-icon">
              📅
            </span>

            <div>
              <h4>Due Today</h4>
              <p>{dueToday}</p>
            </div>
          </div>

          <div className="insight-box">
            <span className="insight-icon">
              🔥
            </span>

            <div>
              <h4>High Priority</h4>
              <p>{highPriorityTasks.length}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Upcoming Tasks */}

      <div className="upcoming-section">
        <h3>📅 Upcoming Tasks</h3>

        {upcomingTasks.length === 0 ? (
          <p className="no-activity">
            No upcoming tasks.
          </p>
        ) : (
          <ul>
            {upcomingTasks.map((task) => (
              <li key={task.id}>
                <div>
                  <strong>{task.title}</strong>

                  <small>
                    {task.category || "Other"}
                  </small>
                </div>

                <span>
                  {task.dueDate}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* High Priority Tasks */}

      <div className="priority-section">
        <h3>🔥 High Priority Tasks</h3>

        {highPriorityTasks.length === 0 ? (
          <p className="no-activity">
            No unfinished high-priority tasks.
          </p>
        ) : (
          <ul>
            {highPriorityTasks
              .slice(0, 5)
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

                <strong>
                  {category.count}
                </strong>
              </div>

              <div className="category-progress">
                <div
                  className="category-progress-fill"
                  style={{
                    width:
                      total === 0
                        ? "0%"
                        : `${
                            (category.count /
                              total) *
                            100
                          }%`,
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