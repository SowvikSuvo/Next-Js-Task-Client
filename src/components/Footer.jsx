import React from "react";
import { CgHeadset } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" md:mt-16">
      <footer className="bg-gray-900 py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            {/* Logo */}
            <h2 className="text-2xl font-bold flex   gap-1 text-pink-600  md:text-3xl lg:text-4xl">
              <CgHeadset color="teal" size={35} /> Gadget
              <span className="text-blue-600">Hub</span>
            </h2>
            <p className="text-gray-300">
              Your trusted place for high-quality products.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/sowvik.karmokersuvo/"
                target="_blank"
                className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                target="_blank"
                className="p-3 bg-teal-600 rounded-full text-white hover:bg-teal-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 bg-pink-500 rounded-full text-white hover:bg-pink-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/sowvik-suvo/"
                target="_blank"
                className="p-3 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-8">
          © 2025 GadgetHub — All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
