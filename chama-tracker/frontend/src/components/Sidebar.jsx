import React from "react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">
        <h3>Menu</h3>
      </div>

      <ul className="sidebar-menu">

        <li>
          <a href="#/dashboard">📊 Dashboard</a>
        </li>

        <li>
          <a href="#/members">👥 Members</a>
        </li>

        <li>
          <a href="#/contributions">💰 Contributions</a>
        </li>

        <li>
          <a href="#/loans">💵 Loans</a>
        </li>

        <li>
          <a href="#/repayments">🔄 Repayments</a>
        </li>

        <li>
          <a href="#/sms">📱 SMS</a>
        </li>

        <li>
          <a href="#/email">📧 Email</a>
        </li>

        <li>
          <a href="#/reports">📈 Reports</a>
        </li>

        <li className="logout">
          <a href="#/login">🚪 Logout</a>
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;