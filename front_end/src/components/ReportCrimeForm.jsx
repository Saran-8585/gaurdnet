import { useState, useEffect } from "react";

const ReportCrimeForm = ({ onSubmit, onClose }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
        setLoading(false);
      },
      () => {
        alert("Location access required");
        setLoading(false);
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const report = {
      id: "CR" + Date.now(),
      type: e.target.type.value,
      description: e.target.description.value,
      latitude: location.lat,
      longitude: location.lng,
      priority: e.target.priority.value,
      status: "Pending",
      time: new Date().toISOString()
    };

    // API pipeline (commented)
    // axios.post("/api/crime-report", report);

    onSubmit(report);
    onClose();
  };

  if (loading) return <p>Fetching location...</p>;

  return (
    <div className="modal">
      <form className="report-form" onSubmit={handleSubmit}>
        <h3>Report Crime</h3>

        <select name="type" required>
          <option value="">Crime Type</option>
          <option>Theft</option>
          <option>Assault</option>
          <option>Suspicious Activity</option>
          <option>Harassment</option>
        </select>

        <textarea
          name="description"
          placeholder="Describe the incident"
          required
        ></textarea>

        <select name="priority" required>
          <option value="">Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <p className="gps">
          📍 Location captured: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
        </p>

        <div className="actions">
          <button type="submit">Submit Report</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ReportCrimeForm;
