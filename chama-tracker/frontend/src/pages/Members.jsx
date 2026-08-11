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
      profilePicture: null,
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      phone: "0723456789",
      email: "mary@example.com",
      joinDate: "05/01/2026",
      status: "Active",
      profilePicture: null,
    },
    {
      id: 3,
      name: "Peter Mwangi",
      phone: "0734567890",
      email: "peter@example.com",
      joinDate: "10/01/2026",
      status: "Active",
      profilePicture: null,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    joinDate: "",
    status: "Active",
    profilePicture: null,
  });

  const [preview, setPreview] = useState(null);

  // Handle text/input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle profile picture
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    // Only allow image files
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // Limit image size to 2MB
    if (file.size > 2 * 1024 * 1024) {
      alert("Image size must be less than 2MB.");
      return;
    }

    setFormData({
      ...formData,
      profilePicture: file,
    });

    // Create image preview
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  // Add member
  const handleSubmit = (e) => {
    e.preventDefault();

    const newMember = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      joinDate: formData.joinDate,
      status: formData.status,
      profilePicture: preview,
    };

    setMembers([...members, newMember]);

    // Clear form
    setFormData({
      name: "",
      phone: "",
      email: "",
      joinDate: "",
      status: "Active",
      profilePicture: null,
    });

    setPreview(null);

    // Close form
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

  // Close form and reset it
  const closeForm = () => {
    setShowForm(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      joinDate: "",
      status: "Active",
      profilePicture: null,
    });

    setPreview(null);
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
              onClick={() =>
                showForm ? closeForm() : setShowForm(true)
              }
            >
              {showForm ? "Close" : "+ Add Member"}
            </button>
          </div>

          {/* ADD MEMBER FORM */}
          {showForm && (
            <div className="form-card member-form">

              <h2>Add New Member</h2>

              <form onSubmit={handleSubmit}>

                {/* PROFILE PICTURE */}
                <div className="profile-upload">

                  <div className="profile-preview">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Profile Preview"
                      />
                    ) : (
                      <span>👤</span>
                    )}
                  </div>

                  <div className="upload-area">
                    <label>
                      Profile Picture
                    </label>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />

                    <small>
                      JPG, PNG or WEBP. Maximum size: 2MB.
                    </small>
                  </div>

                </div>

                {/* FULL NAME */}
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                {/* PHONE */}
                <label>Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="0712345678"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                {/* EMAIL */}
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="member@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                {/* JOIN DATE */}
                <label>Join Date</label>

                <input
                  type="date"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  required
                />

                {/* STATUS */}
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

                {/* SUBMIT */}
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
                  <th>Photo</th>
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

                      <td>
                        {index + 1}
                      </td>

                      {/* PROFILE PICTURE */}
                      <td>
                        <div className="member-avatar">

                          {member.profilePicture ? (
                            <img
                              src={member.profilePicture}
                              alt={member.name}
                            />
                          ) : (
                            <span>👤</span>
                          )}

                        </div>
                      </td>

                      <td>
                        {member.name}
                      </td>

                      <td>
                        {member.phone}
                      </td>

                      <td>
                        {member.email}
                      </td>

                      <td>
                        {member.joinDate}
                      </td>

                      <td>
                        <span
                          className={
                            member.status === "Active"
                              ? "status active-status"
                              : "status inactive-status"
                          }
                        >
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
                    <td colSpan="8">
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