import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Members() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "John Kamau",
      phone: "0712345678",
      email: "john@example.com",
      joinDate: "01/01/2026",
      status: "Active",
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      phone: "0723456789",
      email: "mary@example.com",
      joinDate: "05/01/2026",
      status: "Active",
    },
    {
      id: 3,
      name: "Peter Mwangi",
      phone: "0734567890",
      email: "peter@example.com",
      joinDate: "10/01/2026",
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    joinDate: "",
    status: "Active",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add new member
  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      joinDate: formData.joinDate,
      status: formData.status,
    };

    setMembers([...members, newMember]);

    // Clear form
    setFormData({
      name: "",
      phone: "",
      email: "",
      joinDate: "",
      status: "Active",
    });

    setShowForm(false);
  };

  // Delete member
  const deleteMember = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this member?"
    );

    if (confirmDelete) {
      setMembers(
        members.filter((member) => member.id !== id)
      );
    }
  };

  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <main className="main-content">

          {/* PAGE HEADER */}
          <div className="page-header">
            <div>
              <h1>Members</h1>
              <p>Manage SACCO members</p>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Close" : "+ Add Member"}
            </button>
          </div>

          {/* ADD MEMBER FORM */}
          {showForm && (
            <div className="form-card">

              <h2>Add New Member</h2>

              <form onSubmit={handleSubmit}>

                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="0712345678"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="member@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label>Join Date</label>

                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  required
                />

                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>
                </select>

                <button type="submit">
                  Add Member
                </button>

              </form>
            </div>
          )}

          {/* MEMBERS TABLE */}
          <div className="table-container">

            <table className="data-table">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {members.length > 0 ? (

                  members.map((member, index) => (

                    <tr key={member.id}>

                      <td>{index + 1}</td>

                      <td>{member.name}</td>

                      <td>{member.phone}</td>

                      <td>{member.email}</td>

                      <td>{member.joinDate}</td>

                      <td>
                        <span className="status">
                          {member.status}
                        </span>
                      </td>

                      <td>

                        <button
                          className="delete-button"
                          onClick={() =>
                            deleteMember(member.id)
                          }
                        >
                          🗑️ Delete
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td colSpan="7">
                      No members found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </main>
      </div>
    </div>
  );
}

export default Members;