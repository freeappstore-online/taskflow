import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>

      <nav>
        <ul>
          <li>🏠 Dashboard</li>
          <li>✅ My Tasks</li>
          <li>📁 Projects</li>
          <li>📅 Calendar</li>
          <li>👥 Team</li>
          <li>📊 Reports</li>
          <li>⚙ Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;