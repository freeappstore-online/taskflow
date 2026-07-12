import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>TaskFlow</h1>
      </div>

      <div className="search">
        <input
          type="search"
          placeholder="Search tasks..."
        />
      </div>

      <div className="header-actions">
        <button>🔔</button>
        <button>💬</button>
        <button>👤 Reetu</button>
      </div>
    </header>
  );
}

export default Header;