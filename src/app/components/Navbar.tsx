       import React from "react";
       import Image from "next/image";
       import Link from "next/link";

        export default function Navbar() {
          return (
            <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">

              <Link href="/">
                <Image src="/logo.png" alt="Brand Logo" width={150} height={50} />
              </Link>


              <ul className="flex space-x-6">
              <li>
                  <Link href="/donate" className="text-gray-700 font-bold mb-4 hover:text-blue-600">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-gray-700 font-bold mb-4 hover:text-blue-600">
                    Find Pantry
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 font-bold mb-4 hover:text-blue-600">
                    AboutUs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 font-bold mb-4 hover:text-blue-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          );
        };
        