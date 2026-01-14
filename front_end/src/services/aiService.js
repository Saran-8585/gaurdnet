// import axios from "axios";

// export const getHotspots = async () => {
//   return await axios.get("http://localhost:8000/hotspots");
// };

// MOCKED AI RESPONSE
export const getHotspots = () => {
  return Promise.resolve([
    { lat: 11.0182, lng: 76.9575, intensity: 10 },
    { lat: 11.0251, lng: 76.9628, intensity: 6 }
  ]);
};
