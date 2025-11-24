"use client";

import { FiInfo } from "react-icons/fi";

export default function ItemListPage({ products }) {
  // Ensure products is always an array
  const productsArray = Array.isArray(products) ? products : [];

  return (
    <div className="min-h-screen">
      {productsArray.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsArray.map((item) => (
            <div
              key={item.id || item._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={item.image || item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-xl font-bold text-amber-600">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.shortDescription}
                </p>
                <span className="text-lg font-semibold text-gray-800">
                  ${item.price}
                </span>

                {/* Details Button */}
                <button className="mt-2 flex items-center justify-center gap-2 bg-amber-600 text-white py-2 rounded-xl hover:bg-amber-700 font-medium transition">
                  <FiInfo />
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // No products found message
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500 font-semibold">
            No products found
          </p>
        </div>
      )}
    </div>
  );
}
