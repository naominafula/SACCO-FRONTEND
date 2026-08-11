import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

function Members() {
  const columns = ["ID", "Name", "Phone", "Email", "Join Date", "Status"];

  const members = [
    {
      ID: 1,
      Name: "John Kamau",
      Phone: "0712345678",
      Email: "john@example.com",
      "Join Date": "01/01/2026",
      Status: "Active",
    },
    {
      ID: 2,
      Name: "Mary Wanjiku",
      Phone: "0723456789",
      Email: "mary@example.com",
      "Join Date": "05/01/2026",
      Status: "Active",
    },
    {
      ID: 3,
      Name: "Peter Mwangi",
      Phone: "0734567890",
      Email: "peter@example.com",
      "Join Date": "10/01/2026",
      Status: "Active",
    },
  ];

  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <h1>Members</h1>
            <button>Add Member</button>
          </div>

          <Table columns={columns} data={members} />
        </main>
      </div>
    </div>
  );
}

export default Members;
