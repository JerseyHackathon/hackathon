// import image from "next/image"
// export default function Logo(){
//     return(
//         <image src="/logo.png" alt="Brand Logo" width={150} height={50}/>
//         );
//         }
//
//     }"use client"; // This is required if you use interactive elements

        import Image from "next/image";
        import Link from "next/link";

        export default function Navbar() {
          return (
            <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
              {/* Logo */}
              <Link href="/">
                <Image src="/logo.png" alt="Brand Logo" width={150} height={50} />
              </Link>

              {/* Navigation Links */}
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-gray-700 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-700 hover:text-blue-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          );
        }
