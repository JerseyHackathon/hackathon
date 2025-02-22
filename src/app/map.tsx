"use client"; // Ensures this component runs only on the client

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript
} from "@react-google-maps/api";

const libraries: ("places")[] = ["places"];
const apiKey = `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

interface Location {
  lat: number;
  lng: number;
}

interface Pantry {
  place_id: string;
  name: string;
  vicinity?: string;
  geometry: { location: { lat: () => number; lng: () => number } };
}

interface PantryDetails extends Pantry {
  formatted_address?: string;
  formatted_phone_number?: string;
  website?: string;
  opening_hours?: { weekday_text: string[] };
}
interface FoodPantryMapProps {
  setSelectedPantryName: (name: string | null) => void;
}
const FoodPantryMap: React.FC<FoodPantryMapProps> = ({ setSelectedPantryName }) => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey, libraries });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [location, setLocation] = useState<Location>({ lat: 39.9425, lng: -75.1165 }); // Camden, NJ
  const [pantries, setPantries] = useState<Pantry[]>([]);
  const [zipCode, setZipCode] = useState<string>("");
  const [selectedPantry, setSelectedPantry] = useState<PantryDetails | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const searchNearbyPantries = (center: Location) => {
    if (!map) return;
    const service = new window.google.maps.places.PlacesService(map);
    const request: google.maps.places.PlaceSearchRequest = {
      location: center,
      radius: 5000,
      keyword: "food banks",
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        setPantries(results as Pantry[]);
      }
    });
  };

  const fetchPantryDetails = (placeId: string) => {
    if (!map) return;
    const service = new window.google.maps.places.PlacesService(map);

    const request: google.maps.places.PlaceDetailsRequest = {
      placeId,
      fields: [
        "name",
        "formatted_address",
        "formatted_phone_number",
        "website",
        "opening_hours",
        "geometry",
      ],
    };

    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
        setSelectedPantry({
          ...place,
          place_id: placeId,
          name: place.name || "Unknown Name",
          vicinity: place.formatted_address || "Address not available",
          geometry: {
            location: {
              lat: () => place.geometry?.location?.lat() || 0,
              lng: () => place.geometry?.location?.lng() || 0,
            },
          },
          opening_hours: place.opening_hours ?? { weekday_text: ["No opening hours available"] }, // 👈 Ensure a fallback
           
        });
        setSelectedPantryName(place.name);
        
      }
    });
  };

  useEffect(() => {
    if (map) {
      searchNearbyPantries(location);
    }
  }, [map, location]);

  if (!isClient || !isLoaded) return <div style={{ color: "black" }}>Loading...</div>;

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
      {isClient && (
        <div style={{ height: "500px", width: "100%" }}>
          <GoogleMap
            center={location}
            zoom={12}
            mapContainerStyle={{ height: "100%", width: "100%" }}
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
                onClick={() => fetchPantryDetails(pantry.place_id)}
              />
            ))}

            {/* Info Window with Details */}
{selectedPantry && (
  <InfoWindow
    position={{
      lat: selectedPantry.geometry.location.lat(),
      lng: selectedPantry.geometry.location.lng(),
    }}
    onCloseClick={() => setSelectedPantry(null)}
  
  >
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-[500px] ">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{selectedPantry.name}</h2>
      <p className="text-gray-700">
        <strong className="font-semibold">Address:</strong>{" "}
        {selectedPantry.formatted_address || "Not available"}
      </p>
      <p className="text-gray-700">
        <strong className="font-semibold">Phone:</strong>{" "}
        {selectedPantry.formatted_phone_number || "Not available"}
      </p>
      {selectedPantry.website && (
        <p className="text-gray-700">
          <strong className="font-semibold">Website:</strong>{" "}
          <a
            href={selectedPantry.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Site
          </a>
        </p>
      )}
      {selectedPantry.opening_hours ? (
        <div className="text-gray-700">
          <strong className="font-semibold">Opening Hours:</strong>
          <ul className="list-disc pl-5 space-y-1">
            {selectedPantry.opening_hours.weekday_text.map((hour, idx) => (
              <li key={idx}>{hour}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-700">Opening hours not available</p>
      )}
    </div>
  </InfoWindow>
)}

            )
          </GoogleMap>
        </div>
      )}

      {/* List of Food Pantries */}
<div className="mt-5 max-h-[530px] overflow-y-auto border border-gray-300 p-4 bg-white rounded-lg shadow-md">
<h3 className="text-3xl font-semibold text-gray-800 mb-3 font-[Inter] text-center relative shimmer-effect">
  Nearby Food Pantries
</h3>

  
  {pantries.length === 0 ? (
    <p className="text-gray-600">No food pantries found.</p>
  ) : (
    <ul className="space-y-2">
      {pantries.map((pantry, index) => (
        <li
          key={index}
          onClick={() => fetchPantryDetails(pantry.place_id)}
          className={`cursor-pointer p-3 rounded-lg border border-gray-200 transition-all 
                      ${
                        selectedPantry?.place_id === pantry.place_id 
                        ? "bg-gray-100 border-gray-400" 
                        : "hover:bg-gray-50"
                      }`}
        >
          <strong className="text-lg text-gray-900">{pantry.name}</strong>
          <br />
          <span className="text-sm text-gray-600">{pantry.vicinity || "Address not available"}</span>
        </li>
      ))}
    </ul>
  )}
</div>

    </div>
  );
};

export default FoodPantryMap;

