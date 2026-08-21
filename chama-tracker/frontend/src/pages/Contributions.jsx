import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

function Contributions({ toggleTheme, theme }) {
  const [showForm, setShowForm] = useState(false);
  const [contributions, setContributions] = useState([
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
    {
      Member: "Peter Mwangi",
      Amount: "Ksh 1,500",
      Month: "August",
      Date: "09/08/2026",
      "Payment Method": "Bank",
      Reference: "MBN43210",
    },
  ]);

  const [formData, setFormData] = useState({
    member: "John Kamau",
    amount: "",
    month: "2026-08",
    paymentMethod: "M-Pesa",
    reference: "",
  });

  const columns = ["Member", "Amount", "Month", "Date", "Payment Method", "Reference"];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContribution = {
      Member: formData.member,
      Amount: `Ksh ${Number(formData.amount || 0).toLocaleString()}`,
      Month: new Date(`${formData.month}-01`).toLocaleString("en-US", { month: "long" }),
      Date: new Date().toLocaleDateString("en-GB"),
      "Payment Method": formData.paymentMethod,
      Reference: formData.reference || `AUTO-${Date.now().toString().slice(-6)}`,
    };

    setContributions((current) => [newContribution, ...current]);
    setFormData({
      member: "John Kamau",
      amount: "",
      month: "2026-08",
      paymentMethod: "M-Pesa",
      reference: "",
    });
    setShowForm(false);
  };

  return (
    <div className="app-layout">
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <div>
              <h1>Contributions</h1>
              <p>Track member savings and deposits.</p>
            </div>

            <button type="button" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close Form" : "Add Contribution"}
            </button>
          </div>

          {showForm && (
            <div className="form-card">
              <h2>Record Contribution</h2>

              <form onSubmit={handleSubmit}>
                <label>Member</label>
                <select name="member" value={formData.member} onChange={handleChange}>
                  <option>John Kamau</option>
                  <option>Mary Wanjiku</option>
                  <option>Peter Mwangi</option>
                  <option>Grace Njeri</option>
                </select>

                <label>Amount</label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />

                <label>Month</label>
                <input type="month" name="month" value={formData.month} onChange={handleChange} required />

                <label>Payment Method</label>
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                  <option>M-Pesa</option>
                  <option>Cash</option>
                  <option>Bank</option>
                </select>

                <label>Reference</label>
                <input
                  type="text"
                  name="reference"
                  placeholder="Optional payment reference"
                  value={formData.reference}
                  onChange={handleChange}
                />

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
