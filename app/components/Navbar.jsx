"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { FaHome, FaClipboardList, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const stylingClass = (path) =>
    `flex items-center gap-2 px-2 py-1 rounded-md transition-all ${
      pathname === path
        ? "text-[#4E342E] font-semibold border-b-2 border-[#795548] bg-[#EBD9C4]"
        : "text-[#6D4C41] hover:text-[#3E2723] hover:bg-[#F0E0C6]"
    }`;

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  if (!session) return null;

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-[#F5E6D3] sticky top-0 z-50 border-b border-[#D7CCC8]">
      <div className="flex items-center space-x-6">
        <Link href="/" className={stylingClass("/")}>
          <FaHome />
          Home
        </Link>
        <Link href="/orders" className={stylingClass("/orders")}>
          <FaClipboardList />
          Orders
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 text-[#D84315] hover:text-[#BF360C] font-medium transition-all px-2 py-1 rounded-md hover:bg-[#FFEBEE]"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </nav>
  );
}
