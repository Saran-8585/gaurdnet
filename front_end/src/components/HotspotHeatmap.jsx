import { MapContainer, TileLayer, Circle } from "react-leaflet";
import hotspots from "../data/hotspots.json";
// import { fetchHotspots } from "../services/api";

const HotspotHeatmap = () => {
  return (
    <MapContainer center={[11.0168, 76.9558]} zoom={13} style={{ height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {hotspots.map((spot) => (
        <Circle
          key={spot.hotspot_id}
          center={[spot.center_latitude, spot.center_longitude]}
          radius={spot.intensity * 100}
          pathOptions={{
            color: "red",
            fillColor: "red",
            fillOpacity: 0.5
          }}
        />
      ))}
    </MapContainer>
  );
};

export default HotspotHeatmap;
