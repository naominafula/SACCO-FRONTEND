import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function SMS() {
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
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">
          <div className="page-header">
            <h1>SMS Notifications</h1>
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