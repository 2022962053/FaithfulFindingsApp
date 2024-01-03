// import React, { useState } from "react";
// import axios from "axios";
// import LeafletMap from "./LeafletMap";

// const MapsPage = () => {
//   const [address, setAddress] = useState("");
//   const [coordinates, setCoordinates] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [error, setError] = useState("");

//   const handleGeocode = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//           address
//         )}&key=460b8081a8ba4ff5b9723d8d5f8713e2`
//       );

//       const { results } = response.data;
//       if (results && results.length > 0) {
//         const { geometry, formatted } = results[0];
//         setCoordinates({
//           lat: geometry.lat,
//           lng: geometry.lng,
//         });
//         setError("");

//         // Add the marked location to the markers array
//         setMarkers((prevMarkers) => [
//           ...prevMarkers,
//           { lat: geometry.lat, lng: geometry.lng, name: formatted },
//         ]);
//       } else {
//         setCoordinates(null);
//         setError("Location not found");
//       }
//     } catch (error) {
//       console.error("Error fetching geocode data:", error);
//       setError("Error fetching geocode data");
//     }
//   };

//   return (
//     <div>
//       <h1>Nearby Mosque</h1>
//       <input
//         type="text"
//         placeholder="Enter address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//       />
//       <button onClick={handleGeocode}>Search</button>

//       {coordinates && (
//         <LeafletMap coordinates={coordinates} markers={markers} />
//       )}

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );

// };


// export default MapsPage;



import React, { useState } from "react";
import axios from "axios";
import LeafletMap from "./LeafletMap";
import { Link } from "react-router-dom";  // Import Link from React Router
import ListPage from "./ListPage";  // Import ListPage

const MapsPage = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [error, setError] = useState("");

  const handleGeocode = async () => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          address
        )}&key=460b8081a8ba4ff5b9723d8d5f8713e2`
      );

      const { results } = response.data;
      if (results && results.length > 0) {
        const { geometry, formatted } = results[0];
        setCoordinates({
          lat: geometry.lat,
          lng: geometry.lng,
        });
        setError("");

        // Add the marked location to the markers array
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          { lat: geometry.lat, lng: geometry.lng, name: formatted },
        ]);
      } else {
        setCoordinates(null);
        setError("Location not found");
      }
    } catch (error) {
      console.error("Error fetching geocode data:", error);
      setError("Error fetching geocode data");
    }
  };

  // Function to fetch and add mosque coordinates to markers
  const handleSearchMosques = async () => {
    try {
      // Fetch mosque coordinates based on Shah Alam (Replace with your logic)
      const mosqueCoordinates = [
        { lat: 3.0652258, lng: 101.4924542, name: "Masjid Seksyen 7" },
        {
          lat: 3.0738049,
          lng: 101.482365,
          name: "Platinum Al-Mawaddah Mosque",
        },
        {
          lat: 3.0786,
          lng: 101.5207,
          name: "Masjid Sultan Salahuddin Abdul Aziz Shah",
        },
        {
          lat: 3.0681,
          lng: 101.5029,
          name: "Masjid Al-Wathiqu Billah TuanKu Mizan Zainal Abidin",
        },
        // Add more mosque coordinates as needed
      ];


// Update markers array with mosque coordinates
      setMarkers(mosqueCoordinates);
      setError("");
    } catch (error) {
      console.error("Error fetching mosque coordinates:", error);
      setError("Error fetching mosque coordinates");
    }
  };

  return (
    <div>
      <h1>Nearby Mosque</h1>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleGeocode}>Search</button>
      <button onClick={handleSearchMosques}>Search Mosques</button>

      {coordinates && (
        <LeafletMap coordinates={coordinates} markers={markers} />
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

       {/* Add the Link to navigate to ListPage */}
       <Link to="/list">
        <button>Go to List Page</button>
      </Link>
    </div>
  );
};

export default MapsPage;