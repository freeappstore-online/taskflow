import "./Sidebar.css";

function Sidebar({ activeView, setActiveView }) {
  const menuItems = [
    {
      id: "dashboard",
      label: "📊 Dashboard",
    },
    {
      id: "all",
      label: "📋 All Tasks",
    },
    {
      id: "in-progress",
      label: "🔄 In Progress",
    },
    {
      id: "completed",
      label: "✅ Completed",
    },
    {
      id: "high-priority",
      label: "🔥 High Priority",
    },
    {
      id: "settings",
      label: "⚙️ Settings",
    },
  ];

  return (
    <aside className="sidebar">
      <h2>Navigation</h2>

      <nav aria-label="Main navigation">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`nav-item ${
                  activeView === item.id ? "active" : ""
                }`}
                onClick={() => setActiveView(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;