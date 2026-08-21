import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

function Reports({ toggleTheme, theme }) {
  const reportData = [
    { month: "Jan", contributions: 25000, loans: 16000, repayments: 9000 },
    { month: "Feb", contributions: 32000, loans: 18000, repayments: 12000 },
    { month: "Mar", contributions: 40000, loans: 22000, repayments: 17000 },
    { month: "Apr", contributions: 36000, loans: 20000, repayments: 15000 },
    { month: "May", contributions: 48000, loans: 26000, repayments: 20000 },
    { month: "Jun", contributions: 52000, loans: 30000, repayments: 23000 },
  ];

  const maxValue = Math.max(...reportData.flatMap((item) => [item.contributions, item.loans, item.repayments]));

  return (
    <div className="app-layout">
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <div>
              <h1>Reports</h1>
              <p>SACCO financial summary and analytics.</p>
            </div>

            <button className="secondary-button" type="button">Export PDF</button>
          </div>

          <div className="cards-container">
            <Card title="Total Contributions" value="Ksh 125,000" icon="💰" tone="emerald" />
            <Card title="Total Loans" value="Ksh 45,000" icon="💵" tone="violet" />
            <Card title="Total Repayments" value="Ksh 27,000" icon="🔄" tone="cyan" />
            <Card title="Outstanding Balance" value="Ksh 18,000" icon="📊" tone="amber" />
          </div>

          <div className="content-grid">
            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="eyebrow">Overview</p>
                  <h2>Monthly financial performance</h2>
                </div>
              </div>

              <div className="line-chart" aria-label="Financial overview chart">
                <svg viewBox="0 0 600 220" role="img" aria-label="Performance chart">
                  <path d="M20 180 C120 140, 140 110, 240 120 S420 70, 520 60 S560 40, 580 30" fill="none" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M20 176 C120 165, 150 146, 230 160 S420 150, 520 100 S560 70, 580 90" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M20 190 C110 175, 160 170, 220 150 S390 130, 520 120 S560 115, 580 110" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
            </section>

            <aside className="panel side-panel">
              <p className="eyebrow">This month</p>
              <h2>Key insights</h2>

              <div className="stat-list">
                <div className="stat-item">
                  <strong>+18.4%</strong>
                  <span>Growth in contributions</span>
                </div>
                <div className="stat-item">
                  <strong>91%</strong>
                  <span>On-time repayment rate</span>
                </div>
                <div className="stat-item">
                  <strong>12</strong>
                  <span>Pending member reviews</span>
                </div>
              </div>
            </aside>
          </div>

          <div className="report-section panel mt-24">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Summary</p>
                <h2>Monthly Summary</h2>
              </div>
            </div>

            <div className="bars-grid" aria-label="Monthly summary bars">
              {reportData.map((item) => (
                <div key={item.month} className="bar-group">
                  <span>{item.month}</span>
                  <div className="col-stack">
                    <div className="mini-bar mint" style={{ height: `${(item.contributions / maxValue) * 100}%` }} />
                    <div className="mini-bar violet" style={{ height: `${(item.loans / maxValue) * 100}%` }} />
                    <div className="mini-bar sky" style={{ height: `${(item.repayments / maxValue) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <table className="data-table mt-24">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Contributions</th>
                  <th>Loans</th>
                  <th>Repayments</th>
                </tr>
              </thead>

              <tbody>
                {reportData.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>Ksh {row.contributions.toLocaleString()}</td>
                    <td>Ksh {row.loans.toLocaleString()}</td>
                    <td>Ksh {row.repayments.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Reports;
