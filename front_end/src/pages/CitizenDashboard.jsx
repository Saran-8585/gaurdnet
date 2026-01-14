import { useState } from "react";
import ReportCrimeForm from "../components/ReportCrimeForm";
import ToggleCrimeMap from "../components/ToggleCrimeMap";
import ToggleHotspotMap from "../components/ToggleHotspotMap";


const CitizenDashboard = ({ reports, setReports, setNotifications }) => {
  const [showForm, setShowForm] = useState(false);

  const addReport = (report) => {
    // Save report
    setReports([report, ...reports]);

    // Notify HQ (frontend simulation)
    setNotifications(prev => [
      {
        type: "HQ",
        message: `New crime reported: ${report.type}`,
        reportId: report.id
      },
      ...prev
    ]);
  };

  return (
    <>
      <h2>Citizen Dashboard</h2>

      <button onClick={() => setShowForm(true)}>
        🚨 Report Crime
      </button>

      {showForm && (
        <ReportCrimeForm
          onSubmit={addReport}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* ✅ MAP TOGGLE (SAME AS PATROL & HQ) */}
      <h3>🗺️ Crime Map</h3>
      <ToggleCrimeMap reports={reports} />

      <h3>📊 Analysis</h3>
      <ToggleHotspotMap />
    
    </>
  );
};

export default CitizenDashboard;
