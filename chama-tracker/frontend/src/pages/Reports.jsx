import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

function Reports() {
  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <h1>Reports</h1>
          <p>SACCO financial summary and reports.</p>

          <div className="cards-container">
            <Card title="Total Contributions" value="Ksh 125,000" icon="💰" />

            <Card title="Total Loans" value="Ksh 45,000" icon="💵" />

            <Card title="Total Repayments" value="Ksh 27,000" icon="🔄" />

            <Card title="Outstanding Balance" value="Ksh 18,000" icon="📊" />
          </div>

          <div className="report-section">
            <h2>Monthly Summary</h2>

            <table className="data-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Contributions</th>
                  <th>Loans</th>
                  <th>Repayments</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>June 2026</td>
                  <td>Ksh 35,000</td>
                  <td>Ksh 10,000</td>
                  <td>Ksh 5,000</td>
                </tr>

                <tr>
                  <td>July 2026</td>
                  <td>Ksh 40,000</td>
                  <td>Ksh 15,000</td>
                  <td>Ksh 10,000</td>
                </tr>

                <tr>
                  <td>August 2026</td>
                  <td>Ksh 50,000</td>
                  <td>Ksh 20,000</td>
                  <td>Ksh 12,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Reports;
