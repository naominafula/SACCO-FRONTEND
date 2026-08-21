import { useEffect, useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Contributions from "./pages/Contributions";
import Loans from "./pages/Loans";
import Repayments from "./pages/Repayments";
import Reports from "./pages/Reports";
import SMS from "./pages/SMS";
import Email from "./pages/Email";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("sacco-theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  const navigate = (page) => {
    const nextPage = page || "dashboard";
    window.location.hash = `#/${nextPage}`;
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
    localStorage.setItem("sacco-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((current) => !current);

  const [currentPage, setCurrentPage] = useState(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#/", "") : "";
    return hash || "dashboard";
  });

  useEffect(() => {
    const syncPage = () => {
      const page = window.location.hash.replace("#/", "") || "dashboard";
      setCurrentPage(page);
    };

    syncPage();
    window.addEventListener("hashchange", syncPage);

    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      case "register":
        return <Register toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      case "dashboard":
        return <Dashboard toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      case "members":
        return <Members toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      case "contributions":
        return <Contributions toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      case "loans":
        return <Loans toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      case "repayments":
        return <Repayments toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      case "reports":
        return <Reports toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      case "sms":
        return <SMS toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      case "email":
        return <Email toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
      default:
        return <Dashboard toggleTheme={toggleTheme} theme={darkMode ? "dark" : "light"} navigate={navigate} />;
    }
  };

  return <div className="app-shell">{renderPage()}</div>;
}

export default App;