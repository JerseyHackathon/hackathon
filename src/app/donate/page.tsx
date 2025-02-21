"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaDonate, FaEnvelope } from "react-icons/fa";

const Donate = () => {
  return (
    <div className="relative flex flex-col items-center p-8 text-white min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/6348119/pexels-photo-6348119.jpeg?auto=compress&cs=tinysrgb&w=800')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center text-center pt-60">
        <motion.h1
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Support Your Community - Donate Today
        </motion.h1>

        <motion.p
          className="text-lg mb-6 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Your donation helps stock local community pantries and ensures that no one goes hungry. Every contribution makes a difference!
        </motion.p>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Email: <a href="mailto:pantryPal@example.com" className="font-semibold text-blue-400 underline">pantryPal@example.com</a>
        </motion.p>

        <motion.button
          
          className="flex items-center bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FaDonate className="mr-2" /> <a href="https://buy.stripe.com/test_4gw15ras60f8byUaEE">Donate Now</a> 
        </motion.button>

        <motion.h2
          className="text-2xl font-bold mt-8 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Other Ways to Help
        </motion.h2>

        <motion.ul
          className="list-disc pl-6 space-y-3 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <li className="flex items-center"><FaHandsHelping className="mr-2" /> Donate food items to a nearby pantry</li>
          <li className="flex items-center"><FaHandsHelping className="mr-2" /> Volunteer to help distribute meals</li>
          <li className="flex items-center"><FaHandsHelping className="mr-2" /> Share our mission with friends and family</li>
        </motion.ul>

        <motion.p
          className="mt-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          For more information, contact us via email: <FaEnvelope className="inline-block mr-2" /> 
          <a href="mailto:pantryPal@example.com" className="font-semibold text-blue-400 underline">pantryPal@example.com</a>
        </motion.p>
      </div>
    </div>
  );
};

export default Donate;
