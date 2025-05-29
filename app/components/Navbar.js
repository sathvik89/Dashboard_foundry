"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { FaHome, FaClipboardList, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-[#F5E6D3] sticky top-0 z-50">
      <div className="flex items-center space-x-6 text-gray-700 font-medium">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2 hover:text-green-600 transition"
        >
          <FaHome />
          Home
        </Link>
        <Link
          href="/orders"
          className="flex cursor-pointer items-center gap-2 hover:text-green-600 transition"
        >
          <FaClipboardList />
          Orders
        </Link>
      </div>
      <button
        onClick={() => signOut()}
        className="flex cursor-pointer items-center gap-2 text-red-500 hover:text-red-600 transition font-medium"
      >
        <FaSignOutAlt />
        Logout
      </button>
    </nav>
  );
}