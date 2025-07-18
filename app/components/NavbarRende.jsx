"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarRende = () => {
  const pathname = usePathname();

  if (pathname === "/login") {
    return null;
  }

  return <Navbar />;
};

export default NavbarRende;
