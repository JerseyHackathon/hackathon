"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaDonate, FaEnvelope } from "react-icons/fa";

const Donate = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Support Your Community - Donate Today
      </motion.h1>

      <motion.p
        className="text-lg mb-6"
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
        Email: <span className="font-semibold">pantryPal@example.com</span>
      </motion.p>

      <motion.button
        className="flex items-center bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaDonate className="mr-2" /> Donate Now
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
        For more information, contact us via email: <FaEnvelope className="inline-block mr-2" /> pantryPal@example.com
      </motion.p>
    </div>
  );
};

export default Donate;
