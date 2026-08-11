import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Email() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", {
      email,
      subject,
      message,
    });

    alert("Email ready to be sent!");

    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <h1>Email Notifications</h1>
          </div>

          <div className="form-card">
            <h2>Send Email</h2>

            <form onSubmit={handleSubmit}>
              <label>Member Email</label>

              <input
                type="email"
                placeholder="member@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Subject</label>

              <input
                type="text"
                placeholder="Enter email subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />

              <label>Message</label>

              <textarea
                placeholder="Enter your email message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="8"
                required
              />

              <button type="submit">
                📧 Send Email
              </button>
            </form>
          </div>

          <div className="notification-info">
            <h2>Email Examples</h2>

            <p>
              <strong>Contribution Reminder:</strong> Remind
              members about their monthly contributions.
            </p>

            <p>
              <strong>Loan Approval:</strong> Notify members when
              their loan has been approved.
            </p>

            <p>
              <strong>Payment Receipt:</strong> Send members
              confirmation after receiving a payment.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Email;