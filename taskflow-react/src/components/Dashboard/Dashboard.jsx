import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboard">

      <h2>Dashboard</h2>

      <p>Welcome back, Reetu!</p>

      <div className="cards">

        <div className="card">
          <h3>Total Tasks</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <p>7</p>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <p>5</p>
        </div>

      </div>

    </section>
  );
}

export default Dashboard;