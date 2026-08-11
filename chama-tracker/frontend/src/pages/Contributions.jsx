import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

function Contributions() {
  const [showForm, setShowForm] = useState(false);

  const columns = ["Member", "Amount", "Month", "Date", "Payment Method", "Reference"];

  const contributions = [
    {
      Member: "John Kamau",
      Amount: "Ksh 2,000",
      Month: "August",
      Date: "10/08/2026",
      "Payment Method": "M-Pesa",
      Reference: "QWE12345",
    },
    {
      Member: "Mary Wanjiku",
      Amount: "Ksh 2,000",
      Month: "August",
      Date: "10/08/2026",
      "Payment Method": "M-Pesa",
      Reference: "RTY67890",
    },
  ];

  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <h1>Contributions</h1>

            <button onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close Form" : "Add Contribution"}
            </button>
          </div>

          {showForm && (
            <div className="form-card">
              <h2>Record Contribution</h2>

              <form>
                <label>Member</label>
                <select>
                  <option>John Kamau</option>
                  <option>Mary Wanjiku</option>
                  <option>Peter Mwangi</option>
                </select>

                <label>Amount</label>
                <input type="number" placeholder="Enter amount" />

                <label>Month</label>
                <input type="month" />

                <label>Payment Method</label>
                <select>
                  <option>M-Pesa</option>
                  <option>Cash</option>
                  <option>Bank</option>
                </select>

                <button type="submit">Save Contribution</button>
              </form>
            </div>
          )}

          <Table columns={columns} data={contributions} />
        </main>
      </div>
    </div>
  );
}

export default Contributions;
