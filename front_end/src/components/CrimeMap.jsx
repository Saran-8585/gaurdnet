import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const CrimeMap = ({ reports = [] }) => {
  return (
    <MapContainer
      center={[11.0168, 76.9558]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {reports.map((r) => (
        <Marker key={r.id} position={[r.latitude, r.longitude]}>
          <Popup>
            <strong>{r.type}</strong>
            <br />
            Priority: {r.priority}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CrimeMap;
