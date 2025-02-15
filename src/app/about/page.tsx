"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaRobot, FaCalendarCheck } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8 bgbg-white text-gray-900 min-h-screen">
     
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        PantryPal - Your Smart Kitchen Companion
      </motion.h1>

      
      <motion.div
        className="space-y-6 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Imagine a world where you never have to wonder what to cook or where to
          find ingredients.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          PantryPal is your all-in-one solution for discovering neighborhood
          pantries, getting AI-powered recipe suggestions, and reserving
          ingredients with ease.
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
            <p className="text-lg">
              Locate nearby community pantries stocked with essentials.
            </p>
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
            <p className="text-lg">
              Get personalized recipe ideas based on available ingredients.
            </p>
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
            <p className="text-lg">
              Secure the items you need before heading out.
            </p>
          </div>
        </motion.div>
      </motion.div>

     
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="mt-8 text-lg text-center"
      >
        With PantryPal, cooking becomes stress-free, budget-friendly, and more
        connected to your community. Whether you're looking to reduce food waste,
        explore new recipes, or simply make meal planning easier, our app has you
        covered!
      </motion.p>
    </div>
  );
};

export default AboutUs;
