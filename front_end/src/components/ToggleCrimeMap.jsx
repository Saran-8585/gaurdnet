import { useState } from "react";
import CrimeMap from "./CrimeMap";

const ToggleCrimeMap = ({ reports }) => {
  const [showMap, setShowMap] = useState(false);
  const [mapKey, setMapKey] = useState(0);

  const toggleMap = () => {
    setShowMap(!showMap);

    // 🔥 FORCE LEAFLET TO REMOUNT
    setMapKey(prev => prev + 1);
  };

  return (
    <div style={{ width: "100%" }}>
      <button onClick={toggleMap}>
        {showMap ? "❌ Hide Map" : "🗺️ View Crime Map"}
      </button>

      {showMap && (
        <div
          style={{
            height: "450px",
            width: "100%",
            marginTop: "15px",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <CrimeMap key={mapKey} reports={reports} />
        </div>
      )}
    </div>
  );
};

export default ToggleCrimeMap;
