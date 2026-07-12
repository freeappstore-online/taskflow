import "./Header.css";

function Header({ search, setSearch }) {
  return (
    <header className="header">
      <div className="logo">
        <h1>TaskFlow</h1>
      </div>

      <div className="search">
        <input
          type="search"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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