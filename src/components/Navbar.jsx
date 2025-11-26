"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useContext, useRef, useEffect } from "react";
import { AuthContext } from "@/components/AuthContext";
import { CgHeadset } from "react-icons/cg";
import Swal from "sweetalert2";
import { FaPlus, FaTasks, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown
  const dropdownRef = useRef(null);

  const { user, logOut } = useContext(AuthContext);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged out!",
          text: "You have successfully logged out.",
          icon: "success",
          timer: 1500,
          willClose: () => router.push("/"),
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold flex   gap-1 text-pink-600  md:text-3xl lg:text-4xl">
          <CgHeadset color="teal" size={35} /> Gadget
          <span className="text-blue-600">Hub</span>
        </h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {baseLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md font-medium ${
                  pathname === link.href
                    ? "text-[#CAEB66] bg-black"
                    : "text-amber-600 hover:text-amber-800"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth + Dropdown */}
        <div
          className="hidden md:flex items-center gap-4 relative"
          ref={dropdownRef}
        >
          {user ? (
            <div
              className="flex items-center  gap-2 cursor-pointer select-none"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <img
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-4 py-2  text-red-600 hover:bg-red-50 rounded transition-colors duration-200"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
              >
                Register
              </Link>
            </>
          )}

          {/* Dropdown Menu */}
          {user && (
            <div
              className={`absolute right-0 mt-3 w-56 bg-white/70 backdrop-blur-md shadow-lg rounded-lg border p-2 flex flex-col z-50 transform transition-all duration-300 ease-in-out
              ${
                dropdownOpen
                  ? "opacity-100 translate-y-30"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-1 px-4 py-3 border-b border-gray-300">
                <span className="font-semibold text-center text-gray-800">
                  {user?.displayName || "User"}
                </span>
                <span className="text-sm text-center text-gray-700">
                  {user?.email}
                </span>
              </div>
              <Link
                href="/addProduct"
                className="flex items-center gap-2 px-4 py-2 hover:bg-amber-100 rounded transition-colors duration-200 text-gray-700"
              >
                <FaPlus className="text-amber-600" /> Add Product
              </Link>
              <Link
                href="/manageProducts"
                className="flex items-center gap-2 px-4 py-2 hover:bg-amber-100 rounded transition-colors duration-200 text-gray-700"
              >
                <FaTasks className="text-amber-600" /> Manage Products
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 mt-2 text-red-600 hover:bg-red-50 rounded transition-colors duration-200"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center text-black">
          <button
            className="px-3 py-2 border rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden shadow-md border-t flex flex-col p-4 gap-2">
          {baseLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md font-medium ${
                pathname === link.href
                  ? "text-[#CAEB66] bg-black"
                  : "text-amber-600 hover:text-amber-800"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-2">
            {user ? (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={
                      user?.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    className="w-8 h-8 rounded-full border"
                  />
                  <span className="font-medium text-black">
                    {user?.displayName || "User"}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-black text-center">
                    {user?.email || "User"}
                  </span>
                </div>

                <Link
                  href="/addProduct"
                  className="px-3 py-2 rounded hover:bg-pink-700 bg-pink-600"
                >
                  Add Product
                </Link>
                <Link
                  href="/manageProducts"
                  className="px-3 py-2 rounded hover:bg-blue-700 bg-blue-500"
                >
                  Manage Products
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
