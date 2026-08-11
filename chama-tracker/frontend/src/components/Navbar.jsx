import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>SACCO Chama Tracker</h2>
      </div>

      <div className="navbar-user">
        <span>Welcome, Admin</span>
        <div className="profile-icon">A</div>
      </div>
    </nav>
  );
}

export default Navbar;