import React from "react";

function Navbar({ toggleTheme, theme = "light" }) {
  return (
    <header className="topbar">
      <div className="brand-group">
        <div className="brand-mark">A</div>
        <div>
          <p className="brand-kicker">Member-first finance</p>
          <h2>Apex SACCO</h2>
        </div>
      </div>

      <div className="topbar-search">
        <span aria-hidden="true">⌕</span>
        <input type="text" placeholder="Search members, reports..." />
      </div>

      <div className="topbar-actions">
        <button
          className="icon-button"
          type="button"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <div className="user-pill">
          <div className="user-avatar">A</div>
          <div>
            <span>Welcome</span>
            <strong>Admin</strong>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;