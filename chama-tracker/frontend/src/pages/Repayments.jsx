import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

function Repayments() {
  const [showForm, setShowForm] = useState(false);

  const columns = ["Member", "Loan Amount", "Repayment", "Date", "Reference"];

  const repayments = [
    {
      Member: "John Kamau",
      "Loan Amount": "Ksh 20,000",
      Repayment: "Ksh 5,000",
      Date: "10/08/2026",
      Reference: "MPESA12345",
    },
    {
      Member: "Mary Wanjiku",
      "Loan Amount": "Ksh 15,000",
      Repayment: "Ksh 3,000",
      Date: "09/08/2026",
      Reference: "MPESA67890",
    },
  ];

  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <h1>Loan Repayments</h1>

            <button type="button" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close Form" : "Record Repayment"}
            </button>
          </div>

          {showForm && (
            <div className="form-card">
              <h2>Record Loan Repayment</h2>

              <form>
                <label>Member</label>
                <select>
                  <option>John Kamau</option>
                  <option>Mary Wanjiku</option>
                  <option>Peter Mwangi</option>
                </select>

                <label>Amount</label>
                <input type="number" placeholder="Enter repayment amount" />

                <label>Payment Method</label>
                <select>
                  <option>M-Pesa</option>
                  <option>Cash</option>
                  <option>Bank</option>
                </select>

                <button type="submit">Save Repayment</button>
              </form>
            </div>
          )}

          <Table columns={columns} data={repayments} />
        </main>
      </div>
    </div>
  );
}

export default Repayments;
