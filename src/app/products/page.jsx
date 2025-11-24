"use client";

import ItemListPage from "@/components/ItemListPage";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Filter products based on search & category
  const filteredProducts = products.filter(
    (p) =>
      p.title?.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || p.category === category)
  );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      {/* Page Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-600 text-center mb-3">
        All Products
      </h2>
      <p className="text-pink-600 text-center mb-5 md:text-lg">
        Explore our diverse range of high-quality products.
      </p>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 ">
        <div className="relative w-full md:w-1/3">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 text-black transition bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/4 border border-gray-300 bg-amber-500 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition "
        >
          <option className="rounded" value="">
            All Categories
          </option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Accessories">Accessories</option>
          <option className="rounded" value="Sports">
            Sports
          </option>
        </select>
      </div>

      {/* Pass filtered array to ItemListPage */}
      <ItemListPage products={filteredProducts} />
    </div>
  );
}
