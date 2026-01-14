import { useState } from "react";
import Login from "./pages/Login";
import CitizenDashboard from "./pages/CitizenDashboard";
import PatrolDashboard from "./pages/PatrolDashboard";
import HQDashboard from "./pages/HQDashboard";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import initialReports from "./data/crimeReports.json";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [reports, setReports] = useState(initialReports);
  const [notifications, setNotifications] = useState([]);

  if (!user) return <Login setUser={setUser} />;

  return (
    <ErrorBoundary>
      <Navbar user={user} setUser={setUser} />

      {user.role === "citizen" && (
        <CitizenDashboard
          reports={reports}
          setReports={setReports}
          setNotifications={setNotifications}
        />
      )}

      {user.role === "patrol" && (
        <PatrolDashboard
          reports={reports}
          notifications={notifications}
        />
      )}

      {user.role === "hq" && (
        <HQDashboard
          reports={reports}
          notifications={notifications}
        />
      )}
    </ErrorBoundary>
  );
}

export default App;
