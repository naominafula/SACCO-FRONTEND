const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getToken = () => localStorage.getItem("sacco-token") || "";

const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data?.message || "Request failed";
    throw new Error(message);
  }

  return data;
};

const api = {
  // Login
  login: async (email, password) =>
    apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  register: async (userData) =>
    apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    }),

  getProfile: async () => apiRequest("/auth/profile"),

  // Get members
  getMembers: async () => apiRequest("/members"),
  createMember: async (payload) =>
    apiRequest("/members", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  updateMember: async (id, payload) =>
    apiRequest(`/members/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),
  deleteMember: async (id) =>
    apiRequest(`/members/${id}`, {
      method: "DELETE",
    }),

  // Get contributions
  getContributions: async () => apiRequest("/contributions"),
  createContribution: async (payload) =>
    apiRequest("/contributions", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  // Get loans
  getLoans: async () => apiRequest("/loans"),
  createLoan: async (payload) =>
    apiRequest("/loans", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  updateLoanStatus: async (id, status) =>
    apiRequest(`/loans/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),

  // Get repayments
  getRepayments: async () => apiRequest("/repayments"),
  createRepayment: async (payload) =>
    apiRequest("/repayments", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  getAnalytics: async () => apiRequest("/dashboard/analytics"),
  getReports: async () => apiRequest("/reports"),
};

export default api;