import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="bg-gray-900 text-white">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                <div>
                     <h2 className="text-1g font-bold mb-4"><Link href="/" className="hover:underline">Home</Link>
                     </h2>
                </div>
                <div>
                      <h2 className="text-1g font-bold mb-4"><Link href="/contact" className="hover:underline">Contact Us</Link>
                      </h2>
           </div>
                       <h2 className="text-lg font-bold">Follow Us</h2>
                                 <div className="flex space-x-4">
                                   <Link href="https://facebook.com" target="_blank">
                                     <FaFacebook className="text-xl hover:text-blue-500 transition" />
                                   </Link>
                                   <Link href="https://twitter.com" target="_blank">
                                     <FaXTwitter className="text-xl hover:text-blue-400 transition" />
                                   </Link>
                                   <Link href="https://instagram.com" target="_blank">
                                     <FaInstagram className="text-xl hover:text-pink-500 transition" />
                                   </Link>
                                 </div>
                
            </div>


            <div className="w-full flex justify-center items-center border-t border-gray-600 pt-6 text-gray-300 mt-6">
                      <p> All Rights Reserved @PantryPal</p>
            </div>
        </footer>
    )
    };
export default Footer;