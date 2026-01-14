import crimeReports from "../data/crimeReports.json";

const CrimeList = () => (
  <table width="100%" border="1">
    <thead>
      <tr>
        <th>ID</th><th>Type</th><th>Status</th><th>Priority</th>
      </tr>
    </thead>
    <tbody>
      {crimeReports.map(c => (
        <tr key={c.id}>
          <td>{c.id}</td>
          <td>{c.type}</td>
          <td>{c.status}</td>
          <td>{c.priority}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CrimeList;
