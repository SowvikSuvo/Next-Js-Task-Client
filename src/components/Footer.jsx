import React from "react";

const Footer = () => {
  return (
    <div className=" md:mt-16">
      <footer className="bg-gray-900 py-10 text-white">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            {/* Logo */}
            <h2 className="text-2xl font-bold text-amber-600  md:text-3xl lg:text-4xl">
              Gadget<span className="text-pink-600">Hub</span>
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

          <div>
            <h4 className="font-bold mb-3">Follow Us</h4>
            <p className="text-gray-300">Social icons here</p>
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
