import { MapContainer, TileLayer, Circle } from "react-leaflet";

const HotspotMap = ({ hotspots = [] }) => {
  return (
    <MapContainer
      center={[11.0168, 76.9558]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {hotspots.map((h, i) => (
        <Circle
          key={i}
          center={[h.lat, h.lng]}
          radius={h.intensity * 120}
          pathOptions={{
            color: "red",
            fillColor: "red",
            fillOpacity: 0.4
          }}
        />
      ))}
    </MapContainer>
  );
};

export default HotspotMap;
