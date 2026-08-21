import React, { useState } from "react";

function Login({ toggleTheme, theme, navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login:", { email, password });
    alert("Login submitted!");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand-group">
          <div className="brand-mark">A</div>
          <div>
            <p className="brand-kicker">Member-first finance</p>
            <h2>Apex SACCO</h2>
          </div>
        </div>

        <div className="auth-header-row">
          <h1>Welcome back</h1>
          <button
            type="button"
            className="icon-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        <h2>Login to your dashboard</h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don&apos;t have an account?{" "}
          <button
            type="button"
            className="text-link-button"
            onClick={() => navigate("register")}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
