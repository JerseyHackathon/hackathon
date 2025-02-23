"use client";

import Image from "next/image";
import Link from "next/link";
import FoodPantryMap from "../FoodPantryMap";
import FoodListTable from "../FoodListTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

//push up to here
//I can send it down to food list table as prop
//then I can render based on the prop
import { useState } from "react";

export default function Locations() {
  const [selectedPantryName, setSelectedPantryName] = useState<string | null>(
    null
  );

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/pantry.jpg')" }}
    >
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        <h1 className="text-white text-center text-6xl md:text-7xl mb-12 mt-3 py-4 font-[Arial]">
          Find a Pantry Near You
        </h1>

        {/* Side-by-Side Layout */}
        <div
          className="flex flex-col md:flex-row w-full max-w-[2000px] p-8 rounded-xl shadow-lg"
          data-theme="lemonade"
        >
          {/* Map Section */}
          <div className="w-full md:w-1/2 h-[1200px] rounded-lg overflow-hidden">
            <FoodPantryMap setSelectedPantryName={setSelectedPantryName} />
          </div>

          {/* Food List Section */}
          <div className="w-full md:w-1/2">
            <FoodListTable selectedPantryName={selectedPantryName} />
          </div>
        </div>
      </div>
    </div>
  );
}
