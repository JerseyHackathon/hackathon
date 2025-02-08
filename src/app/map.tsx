"use client"; // Forces this component to run on the client

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript
} from "@react-google-maps/api";

const libraries: ("places")[] = ["places"];
const apiKey = "AIzaSyAlLIRtgdevsihPWBORu7tnngXph0-WhVc";

interface Location {
  lat: number;
  lng: number;
}

interface Pantry {
  name: string;
  vicinity?: string; // Address (if available)
  geometry: { location: { lat: () => number; lng: () => number } };
}

const FoodPantryMap: React.FC = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey, libraries });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [location, setLocation] = useState<Location>({ lat: 40.7128, lng: -74.006 }); // Default: NYC
  const [pantries, setPantries] = useState<Pantry[]>([]);
  const [zipCode, setZipCode] = useState<string>("");
  const [selectedPantry, setSelectedPantry] = useState<Pantry | null>(null);

  // Convert ZIP code to coordinates using Google Geocoding API
  const handleZipCodeSearch = async () => {
    if (!zipCode) return alert("Please enter a ZIP code");

    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apiKey}`;

    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();

      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setLocation({ lat, lng });
        searchNearbyPantries({ lat, lng });
      } else {
        alert("Invalid ZIP code, please try again.");
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      alert("Error fetching location. Please try again.");
    }
  };

  // Search for nearby food pantries using Google Places API
  const searchNearbyPantries = (center: Location) => {
    if (!map) return;
    const service = new window.google.maps.places.PlacesService(map);
    const request: google.maps.places.PlaceSearchRequest = {
      location: center,
      radius: 8000, // 8 km (~5 miles)
      keyword: "food pantry",
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        setPantries(results as Pantry[]);
      }
    });
  };

  useEffect(() => {
    if (map) {
      searchNearbyPantries(location);
    }
  }, [map]);

  if (!isLoaded) return <div style={{ color: "black" }}>Loading...</div>;

  return (
    <div style={{ color: "black" }}>
      {/* ZIP Code Input */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter ZIP code"
          style={{ padding: "10px", width: "200px", marginRight: "10px", color: "black" }}
        />
        <button
          onClick={handleZipCodeSearch}
          style={{ padding: "10px", backgroundColor: "#ddd", color: "black", border: "1px solid black" }}
        >
          Search
        </button>
      </div>

      {/* Google Map */}
      <GoogleMap
        center={location}
        zoom={12}
        mapContainerStyle={{ height: "500px", width: "100%" }}
        onLoad={(map) => setMap(map)}
      >
        {/* Food Pantry Markers */}
        {pantries.map((pantry, index) => (
          <Marker
            key={index}
            position={{
              lat: pantry.geometry.location.lat(),
              lng: pantry.geometry.location.lng(),
            }}
            onClick={() => setSelectedPantry(pantry)}
          />
        ))}

        {/* Info Window (Displays when a marker is clicked) */}
        {selectedPantry && (
          <InfoWindow
            position={{
              lat: selectedPantry.geometry.location.lat(),
              lng: selectedPantry.geometry.location.lng(),
            }}
            onCloseClick={() => setSelectedPantry(null)}
          >
            <div style={{ color: "black" }}>
              <h2>{selectedPantry.name}</h2>
              <p>{selectedPantry.vicinity || "Address not available"}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      {/* List of Food Pantries */}
      <div
        style={{
          marginTop: "20px",
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ddd",
          padding: "10px",
          color: "black",
        }}
      >
        <h3>Nearby Food Pantries</h3>
        {pantries.length === 0 ? (
          <p>No food pantries found.</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {pantries.map((pantry, index) => (
              <li
                key={index}
                onClick={() => setSelectedPantry(pantry)}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                  backgroundColor: selectedPantry === pantry ? "#f0f0f0" : "white",
                  color: "black",
                }}
              >
                <strong>{pantry.name}</strong>
                <br />
                {pantry.vicinity || "Address not available"}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FoodPantryMap;





