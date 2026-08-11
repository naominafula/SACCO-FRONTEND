import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

function Loans() {
  const [showForm, setShowForm] = useState(false);

  const columns = ["Member", "Amount", "Interest", "Loan Date", "Due Date", "Status"];

  const loans = [
    {
      Member: "John Kamau",
      Amount: "Ksh 20,000",
      Interest: "10%",
      "Loan Date": "01/08/2026",
      "Due Date": "01/11/2026",
      Status: "Approved",
    },
    {
      Member: "Mary Wanjiku",
      Amount: "Ksh 15,000",
      Interest: "10%",
      "Loan Date": "05/08/2026",
      "Due Date": "05/11/2026",
      Status: "Pending",
    },
  ];

  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <h1>Loans</h1>

            <button onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close Form" : "Apply for Loan"}
            </button>
          </div>

          {showForm && (
            <div className="form-card">
              <h2>Loan Application</h2>

              <form>
                <label>Member</label>
                <select>
                  <option>John Kamau</option>
                  <option>Mary Wanjiku</option>
                  <option>Peter Mwangi</option>
                </select>

                <label>Loan Amount</label>
                <input type="number" placeholder="Enter loan amount" />

                <label>Loan Duration</label>
                <select>
                  <option>1 Month</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                </select>

                <button type="submit">Submit Loan Application</button>
              </form>
            </div>
          )}

          <Table columns={columns} data={loans} />
        </main>
      </div>
    </div>
  );
}

export default Loans;
