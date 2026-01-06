import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import crimeReports from "../data/crimeReports.json";
// import { fetchCrimeReports } from "../services/api";

const MapView = () => {
  // const [reports, setReports] = useState([]);

  // useEffect(() => {
  //   fetchCrimeReports().then(setReports);
  // }, []);

  return (
    <MapContainer center={[11.0168, 76.9558]} zoom={13} style={{ height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {crimeReports.map((report) => (
        <Marker
          key={report.report_id}
          position={[report.latitude, report.longitude]}
        >
          <Popup>
            <strong>{report.crime_type}</strong><br />
            Priority: {report.priority}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
