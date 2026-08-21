import React from "react";

const navItems = [
  { label: "Dashboard", path: "dashboard", icon: "📊" },
  { label: "Members", path: "members", icon: "👥" },
  { label: "Contributions", path: "contributions", icon: "💰" },
  { label: "Loans", path: "loans", icon: "💵" },
  { label: "Repayments", path: "repayments", icon: "🔄" },
  { label: "SMS", path: "sms", icon: "📱" },
  { label: "Email", path: "email", icon: "📧" },
  { label: "Reports", path: "reports", icon: "📈" },
];

function Sidebar({ navigate }) {
  const currentPage =
    typeof window !== "undefined"
      ? window.location.hash.replace("#/", "") || "dashboard"
      : "dashboard";

  const handleNavigate = (page, event) => {
    event.preventDefault();
    if (navigate) {
      navigate(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark small">S</div>
        <span>SACCO HUB</span>
      </div>

      <nav className="sidebar-menu" aria-label="Main navigation">
        {navItems.map(({ label, path, icon }) => (
          <a
            key={path}
            href={`#/` + path}
            onClick={(event) => handleNavigate(path, event)}
            className={`nav-item ${currentPage === path ? "active" : ""}`}
          >
            <span className="nav-icon" aria-hidden="true">{icon}</span>
            <span>{label}</span>
          </a>
        ))}

        <a href="#/login" onClick={(event) => handleNavigate("login", event)} className="nav-item logout-item">
          <span className="nav-icon" aria-hidden="true">🚪</span>
          <span>Logout</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;