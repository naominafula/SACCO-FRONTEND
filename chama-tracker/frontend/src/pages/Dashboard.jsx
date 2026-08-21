import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Table from "../components/Table";

function Dashboard({ toggleTheme, theme }) {
  const stats = [
    { title: "Total Members", value: "25", icon: "👥", tone: "emerald" },
    { title: "Total Contributions", value: "Ksh 125,000", icon: "💰", tone: "cyan" },
    { title: "Active Loans", value: "Ksh 45,000", icon: "💵", tone: "violet" },
    { title: "Outstanding", value: "Ksh 18,000", icon: "📌", tone: "amber" },
  ];

  const columns = ["Member", "Amount", "Date", "Status"];

  const transactions = [
    { Member: "John Kamau", Amount: "Ksh 2,000", Date: "10/08/2026", Status: "Paid" },
    { Member: "Mary Wanjiku", Amount: "Ksh 2,000", Date: "10/08/2026", Status: "Paid" },
    { Member: "Peter Mwangi", Amount: "Ksh 1,500", Date: "09/08/2026", Status: "Pending" },
    { Member: "Grace Njeri", Amount: "Ksh 3,000", Date: "08/08/2026", Status: "Paid" },
  ];

  const chartBars = [42, 68, 54, 82, 72, 96, 88];

  return (
    <div className="app-layout">
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-intro">
            <div>
              <p className="eyebrow">Welcome back</p>
              <h1>Financial overview</h1>
            </div>

            <button type="button" className="primary-button">
              + New contribution
            </button>
          </div>

          <div className="cards-container">
            {stats.map((stat) => (
              <Card
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                tone={stat.tone}
              />
            ))}
          </div>

          <div className="content-grid">
            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="eyebrow">Latest activity</p>
                  <h2>Recent contributions</h2>
                </div>

                <button type="button" className="secondary-button">
                  View report
                </button>
              </div>

              <Table columns={columns} data={transactions} />
            </section>

            <aside className="panel side-panel">
              <p className="eyebrow">Quick actions</p>
              <h2>Operations</h2>

              <div className="action-list">
                <div className="action-item">
                  <span className="action-icon">👤</span>
                  <div>
                    <strong>Member onboarding</strong>
                    <p>3 new members this week</p>
                  </div>
                </div>

                <div className="action-item">
                  <span className="action-icon">💸</span>
                  <div>
                    <strong>Loan review</strong>
                    <p>2 applications awaiting approval</p>
                  </div>
                </div>

                <div className="action-item">
                  <span className="action-icon">📣</span>
                  <div>
                    <strong>Communication</strong>
                    <p>5 SMS and 2 email updates queued</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="analytics-strip panel mt-24">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Performance</p>
                <h2>Monthly savings trend</h2>
              </div>
            </div>

            <div className="chart-bars" aria-label="Savings trend chart">
              {chartBars.map((value, index) => (
                <div key={index} className="bar-column">
                  <span className="bar-value">{value}%</span>
                  <div className="bar" style={{ height: `${value}%` }} />
                  <small>{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][index]}</small>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
