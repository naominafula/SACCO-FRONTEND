import React, { useState, useEffect } from "react";

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
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#/", "") : "";
    return hash || "dashboard";
  });

  useEffect(() => {
    const onHashChange = () => {
      const page = window.location.hash.replace("#/", "") || "dashboard";
      setCurrentPage(page);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login />;

      case "register":
        return <Register />;

      case "dashboard":
        return <Dashboard />;

      case "members":
        return <Members />;

      case "contributions":
        return <Contributions />;

      case "loans":
        return <Loans />;

      case "repayments":
        return <Repayments />;

      case "reports":
        return <Reports />;

          case "email":
        return <Email />;

      case "reports":
        return <Reports />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;