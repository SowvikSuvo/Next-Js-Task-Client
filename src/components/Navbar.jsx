"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { AuthContext } from "@/components/AuthContext";
import Swal from "sweetalert2";
import { FaPlus, FaTasks, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown

  const { user, logOut } = useContext(AuthContext);

  // Base links
  const baseLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const links = user
    ? [...baseLinks, { name: "Add Product", href: "/addProduct" }]
    : baseLinks;

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
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-amber-600 md:text-3xl lg:text-4xl">
          MyShop
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
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            // Show dropdown for logged-in user
            <div className="relative">
              <div
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white/70 backdrop-blur-md shadow-lg rounded-lg border p-2 flex flex-col z-50">
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
          ) : (
            // Show Login/Register when no user
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
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
        <div className="md:hidden bg-white shadow-md border-t flex flex-col p-4 gap-2">
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

          {/* Mobile Auth Section */}
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
                  <span className="font-medium">
                    {user?.displayName || "User"}
                  </span>
                </div>

                <Link
                  href="/addProduct"
                  className="px-3 py-2 rounded hover:bg-gray-100"
                >
                  Add Product
                </Link>
                <Link
                  href="/manageProducts"
                  className="px-3 py-2 rounded hover:bg-gray-100"
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
