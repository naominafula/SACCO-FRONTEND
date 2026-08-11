const API_URL = "http://localhost:5000/api";

const api = {
  // Login
  login: async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    return response.json();
  },

  // Get members
  getMembers: async () => {
    const response = await fetch(`${API_URL}/members`);
    return response.json();
  },

  // Get contributions
  getContributions: async () => {
    const response = await fetch(`${API_URL}/contributions`);
    return response.json();
  },

  // Get loans
  getLoans: async () => {
    const response = await fetch(`${API_URL}/loans`);
    return response.json();
  },

  // Get repayments
  getRepayments: async () => {
    const response = await fetch(`${API_URL}/repayments`);
    return response.json();
  },
};

export default api;