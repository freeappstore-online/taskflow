import "./Dashboard.css";
import Card from "../Card/Card";

function Dashboard({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status !== "Completed"
  ).length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  return (
    <section className="dashboard">
      <h2>Dashboard</h2>

      <div className="cards">
        <Card
          title="Total Tasks"
          value={total}
          color="#2563eb"
        />

        <Card
          title="Completed"
          value={completed}
          color="#16a34a"
        />

        <Card
          title="Pending"
          value={pending}
          color="#f59e0b"
        />

        <Card
          title="High Priority"
          value={highPriority}
          color="#dc2626"
        />
      </div>
    </section>
  );
}

export default Dashboard;