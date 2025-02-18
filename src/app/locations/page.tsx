'use client';

import Image from 'next/image';
import Link from 'next/link';
import FoodPantryMap from "../map"; 
import FoodListTable from "../FoodListTable";

export default function locations() {
  return (
    <div className="bg-white flex flex-col overflow-hidden">
      {/* Hero Section */}
      <div className="w-full max-w-screen-5xl h-[1300px] flex flex-col relative">
        <div className="bg-white bg-opacity-80 p-40 flex flex-col gap-8 items-center justify-center w-full relative">
          <div className="flex flex-col gap-2 items-center justify-start relative">
            <h1 className="text-black text-center font-bold text-[72px] leading-[120%] -tracking-[0.03em]">
              Find a pantry near you
            </h1>
            {/* Side-by-Side Layout */}
            <div className="flex gap-20 w-full">
              <div className="w-1/2">
                <FoodPantryMap />
              </div>
              <div className="w-1/2">
                <FoodListTable />
              </div>
            </div>
            <h2 className="text-black text-center font-normal text-[32px] leading-[120%]">
              {/* Add subtitle here if needed */}
              Hellos
            </h2>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center">
            
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