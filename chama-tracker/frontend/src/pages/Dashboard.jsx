import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Table from "../components/Table";

function Dashboard() {
  const columns = ["Member", "Amount", "Date", "Status"];

  const transactions = [
    { Member: "John Kamau", Amount: "Ksh 2,000", Date: "10/08/2026", Status: "Paid" },
    { Member: "Mary Wanjiku", Amount: "Ksh 2,000", Date: "10/08/2026", Status: "Paid" },
    { Member: "Peter Mwangi", Amount: "Ksh 1,500", Date: "09/08/2026", Status: "Pending" },
  ];

  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <h1>Dashboard</h1>
          <p>Welcome to your SACCO Chama Tracker.</p>

          <div className="cards-container">
            <Card title="Total Members" value="25" icon="👥" />
            <Card title="Total Contributions" value="Ksh 125,000" icon="💰" />
            <Card title="Active Loans" value="Ksh 45,000" icon="💵" />
            <Card title="Outstanding Loans" value="Ksh 18,000" icon="📌" />
          </div>

          <section className="dashboard-section">
            <h2>Recent Contributions</h2>
            <Table columns={columns} data={transactions} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
