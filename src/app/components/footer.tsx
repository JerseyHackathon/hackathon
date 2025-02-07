import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
    return(
        <footer className="bg-gray-900 text-white">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                <div>
                    <h2 className="text-1g font-bold mb-4">Home</h2>

                </div>
                <div>

                        <ul>
                            <li><a href="" className="hover:underline text-1g font-bold mb-4">Contact Us</a></li>
                        </ul>
                </div>
            </div>


            <div className="border border-t p-4">
            <p>@ PantryPal All Rights Reserved</p>
            </div>
        </footer>
    )
    };
export default Footer;