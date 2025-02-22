import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <Link className="avatar text-xl w-24 h-24" href="/">
        <Image
          className="btn-circle btn-ghost btn animate-rollIn"
          src="/logo.png"
          alt="Brand Logo"
          width={120}
          height={120}
        />
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a href="/donate">{"Donate"}</a>
        </li>
        <li>
          <a href="/locations">{"Find Pantry"}</a>
        </li>
        <li>
          <a href="/about">{"About"}</a>
        </li>
        <li>
          <a href="/contact">{"Contact"}</a>
        </li>
      </ul>
    </div>
  </div>
);
