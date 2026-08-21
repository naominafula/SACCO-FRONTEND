import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function SMS({ toggleTheme, theme }) {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("SMS:", {
      phone,
      message,
    });

    alert("SMS ready to be sent!");

    setPhone("");
    setMessage("");
  };

  return (
    <div className="app-layout">
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <div>
              <h1>SMS Notifications</h1>
              <p>Send quick reminders and updates.</p>
            </div>
          </div>

          <div className="form-card">
            <h2>Send SMS</h2>

            <form onSubmit={handleSubmit}>
              <label>Member Phone Number</label>

              <input
                type="tel"
                placeholder="e.g. 0712345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <label>Message</label>

              <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="6"
                maxLength="160"
                required
              />

              <p className="character-count">
                {message.length}/160 characters
              </p>

              <button type="submit">
                📱 Send SMS
              </button>
            </form>
          </div>

          <div className="notification-info">
            <h2>SMS Examples</h2>

            <p>
              Contribution reminder: Please remember to make
              your monthly SACCO contribution.
            </p>

            <p>
              Loan notification: Your loan application has been
              approved.
            </p>

            <p>
              Payment confirmation: Your contribution has been
              received successfully.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SMS;