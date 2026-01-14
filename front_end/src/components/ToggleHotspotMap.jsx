import { useState } from "react";
import HotspotMap from "./HotspotMap";
import hotspots from "../data/hotspots.json";

const ToggleHotspotMap = () => {
  const [showMap, setShowMap] = useState(false);
  const [mapKey, setMapKey] = useState(0);

  const toggle = () => {
    setShowMap(!showMap);
    setMapKey(prev => prev + 1); // force remount
  };

  return (
    <div style={{ width: "100%", marginTop: "10px" }}>
      <button onClick={toggle}>
        {showMap ? "❌ Hide Crime Hotspots" : "🔥 Crime Hotspot"}
      </button>

      {showMap && (
        <div
          style={{
            height: "450px",
            marginTop: "15px",
            position: "relative"
          }}
        >
          <HotspotMap key={mapKey} hotspots={hotspots} />
        </div>
      )}
    </div>
  );
};

export default ToggleHotspotMap;
