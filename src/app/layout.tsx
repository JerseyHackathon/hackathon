"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname(); 
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname} 
            initial={{ rotateY: 90, opacity: 0 }} 
            animate={{ rotateY: 0, opacity: 1 }} 
            exit={{ rotateY: -90, opacity: 0 }} 
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex-grow"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}