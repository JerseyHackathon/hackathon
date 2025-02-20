"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaRobot, FaCalendarCheck } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center p-8 text-gray-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6995221/pexels-photo-6995221.jpeg?auto=compress&cs=tinysrgb&w=800')",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-white">
        <div className="relative w-64 h-64">
          {/* <img
            src="https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us"
            className="w-64 h-64 object-cover"
            style={{
              clipPath: "ellipse(60% 50% at 50% 50%)",
            }}
          /> */}
        </div>

        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          PantryPal - Your Smart Kitchen Companion
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Imagine a world where you never have to wonder what to cook with available ingredients.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            PantryPal is your all-in-one solution for discovering neighborhood pantries, getting AI-powered recipe suggestions, and reserving ingredients with ease.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-8 mt-12 text-center w-full max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <FaSearch className="text-4xl" />
            <div>
              <h2 className="text-2xl font-bold">Find Local Pantries</h2>
              <p className="text-lg">Locate nearby community pantries stocked with essentials.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <FaRobot className="text-4xl" />
            <div>
              <h2 className="text-2xl font-bold">AI Chef Assistant</h2>
              <p className="text-lg">Get personalized recipe ideas based on available ingredients.</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <FaCalendarCheck className="text-4xl" />
            <div>
              <h2 className="text-2xl font-bold">Reserve Ingredients</h2>
              <p className="text-lg">Secure the items you need before heading out.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-8 text-lg text-center"
        >
          With PantryPal, cooking becomes stress-free and more connected to your community. Whether you're looking to reduce food waste, explore new recipes, or simply make meal planning easier, our app has you covered!
        </motion.p>
      </div>

      {/* Decorative Wave SVG */}
      {/* <div className="absolute bottom-[-200px] left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 320" className="w-full h-50">
          <path
            fill="rgb(205, 228, 213)"
            fillOpacity="1"
            d="M0,256L40,245.3C80,235,160,213,240,197.3C320,181,400,171,480,176C560,181,640,203,720,208C800,213,880,203,960,176C1040,149,1120,107,1200,101.3C1280,96,1360,128,1400,144L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default AboutUs;
         
