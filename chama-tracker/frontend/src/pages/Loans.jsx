import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Loans({ toggleTheme, theme }) {
  const [showForm, setShowForm] = useState(false);
  const [loans, setLoans] = useState([
    {
      id: 1,
      member: "John Kamau",
      amount: 20000,
      interest: 10,
      loanDate: "01/08/2026",
      dueDate: "01/11/2026",
      status: "Approved",
    },
    {
      id: 2,
      member: "Mary Wanjiku",
      amount: 15000,
      interest: 10,
      loanDate: "05/08/2026",
      dueDate: "05/11/2026",
      status: "Pending",
    },
    {
      id: 3,
      member: "Peter Mwangi",
      amount: 12000,
      interest: 8,
      loanDate: "07/08/2026",
      dueDate: "07/10/2026",
      status: "Rejected",
    },
  ]);

  const [formData, setFormData] = useState({
    member: "John Kamau",
    amount: "",
    duration: "6 Months",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newLoan = {
      id: Date.now(),
      member: formData.member,
      amount: Number(formData.amount),
      interest: 10,
      loanDate: new Date().toLocaleDateString("en-GB"),
      dueDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB"),
      status: "Pending",
    };

    setLoans((current) => [newLoan, ...current]);
    setShowForm(false);
    setFormData({ member: "John Kamau", amount: "", duration: "6 Months" });
  };

  const updateStatus = (id, status) => {
    setLoans((current) =>
      current.map((loan) => (loan.id === id ? { ...loan, status } : loan))
    );
  };

  return (
    <div className="app-layout">
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <div>
              <h1>Loans</h1>
              <p>Review member financing requests.</p>
            </div>

            <button type="button" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close Form" : "Apply for Loan"}
            </button>
          </div>

          {showForm && (
            <div className="form-card">
              <h2>Loan Application</h2>

              <form onSubmit={handleSubmit}>
                <label>Member</label>
                <select name="member" value={formData.member} onChange={handleChange}>
                  <option>John Kamau</option>
                  <option>Mary Wanjiku</option>
                  <option>Peter Mwangi</option>
                  <option>Grace Njeri</option>
                </select>

                <label>Loan Amount</label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter loan amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />

                <label>Loan Duration</label>
                <select name="duration" value={formData.duration} onChange={handleChange}>
                  <option>1 Month</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                </select>

                <button type="submit">Submit Loan Application</button>
              </form>
            </div>
          )}

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Member</th>
                  <th>Amount</th>
                  <th>Interest</th>
                  <th>Loan Date</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {loans.map((loan) => (
                  <tr key={loan.id}>
                    <td>{loan.member}</td>
                    <td>Ksh {loan.amount.toLocaleString()}</td>
                    <td>{loan.interest}%</td>
                    <td>{loan.loanDate}</td>
                    <td>{loan.dueDate}</td>
                    <td>
                      <span className={`status-badge ${loan.status.toLowerCase()}`}>{loan.status}</span>
                    </td>
                    <td>
                      <div className="inline-actions">
                        <button type="button" className="approve-btn" onClick={() => updateStatus(loan.id, "Approved")}>Approve</button>
                        <button type="button" className="reject-btn" onClick={() => updateStatus(loan.id, "Rejected")}>Reject</button>
                      </div>
                    </td>
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

export default Loans;
