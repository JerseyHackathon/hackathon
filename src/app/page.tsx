"use client";

import { motion } from "framer-motion";
import FoodPantryMap from "./map";
import FoodListTable from "./FoodListTable";

import React from "react";
import Contact from "./contact/page";
import Donate from "./donate/page";
import AboutUs from "./about/page";
import Image from "next/image";
import { DeepChat } from "deep-chat-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-900"
      data-theme="lemonade"
    >
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZvb2R8ZW58MHx8MHx8fDA%3D"
          alt="App Preview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to PantryPal
          </motion.h1>
          <motion.p
            className="text-lg mt-2 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Connecting Communities, Ending Hunger PantryPal connects people to
            local food banks. Together, we can end hunger—one meal at a time
            because no one should go hungry.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl text-center p-8">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Why Us?
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Easy Access to Food Banks – A digital platform where users can find
          nearby food banks. Efficient Donations – Connects donors (restaurants,
          grocery stores, individuals) with organizations that can redistribute
          surplus food.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a
            href="#"
            className="flex items-center bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            <FaGooglePlay className="mr-2" /> Get on Google Play
          </a>
          <a
            href="#"
            className="flex items-center bg-gray-900 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            <FaApple className="mr-2" /> Download on App Store
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
