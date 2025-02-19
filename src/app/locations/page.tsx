'use client';

import Image from 'next/image';
import Link from 'next/link';
import FoodPantryMap from "../map"; 
import FoodListTable from "../FoodListTable";
//push up to here 
//I can send it down to food list table as prop
//then I can render based on the prop
import { useState } from "react";

export default function Locations() {
  const [selectedPantryName, setSelectedPantryName] = useState<string | null>(null);

  return (
    <div className="bg-white flex flex-col overflow-hidden">
      <div className="w-full max-w-screen-5xl h-[1300px] flex flex-col relative">
        <div className="bg-white bg-opacity-80 p-40 flex flex-col gap-8 items-center justify-center w-full relative">
          <h1 className="text-black text-center font-bold text-[72px] leading-[120%] -tracking-[0.03em]">
            Find a pantry near you
          </h1>

          {/* Side-by-Side Layout */}
          <div className="flex gap-20 w-full">
            <div className="w-1/2">
              {/* Pass down the setter function to update selected pantry */}
              <FoodPantryMap setSelectedPantryName={setSelectedPantryName} />
            </div>
            <div className="w-1/2">
              {/* Pass the selected pantry name as a prop */}
              <FoodListTable selectedPantryName={selectedPantryName} />
            </div>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="bg-white bg-opacity-80 p-16 flex flex-row gap-12 w-[1200px] h-[478px] relative">
        <Image
          className="flex-1 object-cover"
          src="/image0.png"
          alt="Image 0"
          width={600}
          height={478}
        />
        <Image
          className="flex-1 object-cover"
          src="/image1.png"
          alt="Image 1"
          width={600}
          height={478}
        />
      </div>
    </div>
  );
}