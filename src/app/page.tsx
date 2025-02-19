"use client";

// import dynamic from "next/dynamic";
import{motion} from "framer-motion";
import FoodPantryMap from "./map";
import FoodListTable from "./FoodListTable";

import React from "react";
import Contact from "./contact/page";
import Donate from "./Donate/page";
import AboutUs from "./about/page";
import Image from "next/image";
import { DeepChat } from "deep-chat-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto text-center justify-center">
        <div className="w-full mb-6">
        <div className="w-full h-auto overflow-hidden">
        <div className="flex">
  <img
    src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2QlMjBraXRjaGVufGVufDB8fDB8fHww"
    alt="food"
    className="w-full h-auto"
  />
</div>

          </div>

          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              
            </main>

            {}
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Learn
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Examples
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to nextjs.org →
              </a>
            </footer>
          </div>
          {/* <h1 className="text-2xl font-bold">Welcome to the Homepage</h1>
      <p>This is a wonderful App
      </p>
       */}
          <div className="flex-grow p-6 text-center">
            <p>Welcome to Our App</p>
          </div>
        </div>
      </div>
    </div>
  );
}
