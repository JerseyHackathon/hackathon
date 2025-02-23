"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = () => {
  const [checkoutCount, setCheckoutCount] = useState(0);
  const router = useRouter();

  // Retrieve checkout count from localStorage
  useEffect(() => {
    const fetchCheckoutData = () => {
      const storedData = localStorage.getItem("dataArray");
      const parsedData = storedData ? JSON.parse(storedData) : [];
      setCheckoutCount(parsedData.length);
    };

    fetchCheckoutData();

    // Listen for storage changes (in case items are updated from another page)
    window.addEventListener("storage", fetchCheckoutData);
    return () => window.removeEventListener("storage", fetchCheckoutData);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Logo */}
      <div className="navbar-start">
        <Link className="avatar text-xl w-24 h-24" href="/">
          <Image className="btn-circle btn-ghost btn animate-rollIn" src="/logo.png" alt="Brand Logo" width={120} height={120} />
        </Link>
      </div>

      {/* Menu Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl gap-8">
          <li><a href="/donate">{"Donate"}</a></li>
          <li><a href="/locations">{"Find Pantry"}</a></li>
          <li><a href="/about">{"About"}</a></li>
          <li><a href="/contact">{"Contact"}</a></li>
        </ul>
      </div>

      {/* Checkout Button */}
      <div className="navbar-end">
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/checkout")}
          sx={{ fontSize: "1rem", fontWeight: "bold", backgroundColor: "#008CBA", display: "flex", alignItems: "center", gap: 1 }}
        >
          <Badge badgeContent={checkoutCount} color="error">
            <ShoppingCartIcon sx={{ color: "white" }} />
          </Badge>
          Checkout
        </Button>
      </div>
    </div>
  );
};

