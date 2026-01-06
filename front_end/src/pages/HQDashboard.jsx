import MapView from "../components/MapView";
import HotspotHeatmap from "../components/HotspotHeatmap";

const HQDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>HQ Crime Monitoring Dashboard</h2>

      <h3>Live Crime Reports (Geotagged)</h3>
      <MapView />

      <h3>Predicted Crime Hotspots (AI)</h3>
      <HotspotHeatmap />
    </div>
  );
};

export default HQDashboard;
