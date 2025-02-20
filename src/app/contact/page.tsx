"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center p-8 text-gray-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6214960/pexels-photo-6214960.jpeg?auto=compress&cs=tinysrgb&w=800')",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      Content Container
      <div className="relative z-10 flex flex-col items-center text-white">
        <div className="relative w-64 h-64">
          {/* <img
            src="https://images.pexels.com/photos/6995301/pexels-photo-6995301.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="About Us"
            className="w-64 h-64 object-cover"
            style={{
              clipPath: "ellipse(60% 50% at 50% 50%)",
            }}
          /> */}
        </div>

        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.p
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <FaPhoneAlt className="mr-3 text-2xl" /> <span>+1234567890</span>
          </motion.p>

          <motion.p
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <FaEnvelope className="mr-3 text-2xl" /> <span>pantryPal@example.com</span>
          </motion.p>

          <motion.p
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <FaMapMarkerAlt className="mr-3 text-2xl" /> <span>123 Street, Hometown</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 p-6 bg-white text-black rounded-lg shadow-lg w-full max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
