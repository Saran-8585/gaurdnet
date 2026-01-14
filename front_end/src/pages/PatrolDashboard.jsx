import ToggleCrimeMap from "../components/ToggleCrimeMap";
import ToggleHotspotMap from "../components/ToggleHotspotMap";


const PatrolDashboard = ({ reports, notifications }) => {
  const patrolAlerts = notifications.filter(n => n.type === "PATROL");

  return (
    <>
      <h2>Patrol Dashboard</h2>

      <h3>🚨 Alerts</h3>
      {patrolAlerts.length === 0 && <p>No active alerts</p>}

      {patrolAlerts.map((n, i) => (
        <div key={i} className="alert">{n.message}</div>
      ))}

      {/* ✅ MAP AVAILABLE WHEN NEEDED */}
      <ToggleCrimeMap reports={reports} />

      <h3>📊 Crime Analysis</h3>
        <ToggleHotspotMap />

    </>
  );
};

export default PatrolDashboard;
