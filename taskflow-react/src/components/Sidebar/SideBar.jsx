import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>

      <nav>
         <ul>
          <li><a href="#" className="active">🏠 Dashboard</a></li>
          <li><a href="#">✅ My Tasks</a></li>
          <li><a href="#">📁 Projects</a></li>
          <li><a href="#">📅 Calendar</a></li>
          <li><a href="#">👥 Team</a></li>
          <li><a href="#">📊 Reports</a></li>
          <li><a href="#">⚙️ Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;