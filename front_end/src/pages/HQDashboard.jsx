import ToggleCrimeMap from "../components/ToggleCrimeMap";
import ToggleHotspotMap from "../components/ToggleHotspotMap";


const HQDashboard = ({ reports, notifications }) => {
  const hqAlerts = notifications.filter(n => n.type === "HQ");

  return (
    <>
      <h2>HQ Command Dashboard</h2>

      <h3>📢 Live Notifications</h3>
      {hqAlerts.map((n, i) => (
        <div key={i} className="alert">{n.message}</div>
      ))}

      {/* ✅ CITY-WIDE CRIME VIEW */}
      <ToggleCrimeMap reports={reports} />

      <h3>📊 Crime Analysis</h3>
<ToggleHotspotMap />


    </>
  );
};

export default HQDashboard;
