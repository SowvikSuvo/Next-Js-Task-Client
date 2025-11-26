"use client";

import { AuthContext } from "@/components/AuthContext";
import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import {
  FiTag,
  FiDollarSign,
  FiBox,
  FiImage,
  FiFileText,
} from "react-icons/fi";
import PrivateRoute from "@/privateRoute/PrivateRoute";

export default function ProductPage() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        title: "Error!",
        text: "Please login first!",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.date = new Date();
    data.email = user.email;

    axios
      .post("https://next-js-task-server.vercel.app/products", data)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Product Added Successfully!",
          icon: "success",
          confirmButtonColor: "#f59e0b",
        });
        form.reset();
        router.push("/manageProducts");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
        console.log("Error:", error);
      });
  };

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-gradient-to-r from-amber-100 via-amber-50 to-white flex items-center justify-center p-4 mt-18">
        <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-amber-200">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-600 text-center mb-8">
            Add New Product
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Product Name */}
            <div className="col-span-1 md:col-span-2 relative">
              <label className="block mb-2 font-semibold text-gray-700">
                Product Name
              </label>
              <FiFileText className="absolute top-[48px] left-4 text-gray-400" />
              <input
                type="text"
                name="title"
                placeholder="Product Name"
                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none transition focus:text-black text-gray-500"
                required
              />
            </div>

            {/* Short Description */}
            <div className="col-span-1 md:col-span-2 relative">
              <label className="block mb-2 font-semibold text-gray-700">
                Short Description
              </label>
              <FiFileText className="absolute top-[48px] left-4 text-gray-400" />
              <input
                type="text"
                name="shortDescription"
                placeholder="Short Description"
                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none transition focus:text-black text-gray-500"
                required
              />
            </div>

            {/* Full Description */}
            <div className="col-span-1 md:col-span-2 relative">
              <label className="block mb-2 font-semibold text-gray-700">
                Full Description
              </label>
              <FiFileText className="absolute top-[48px] left-4  text-gray-400" />
              <textarea
                name="fullDescription"
                placeholder="Full Description"
                className="w-full border border-gray-300 rounded-lg px-10 py-3 h-32 resize-none focus:ring-2 focus:ring-amber-400 focus:outline-none transition focus:text-black text-gray-500 "
                required
              />
            </div>

            {/* Price */}
            <div className="relative">
              <label className="block mb-2 font-semibold text-gray-700">
                Price ($)
              </label>
              <FiDollarSign className="absolute top-[48px] left-4  text-gray-400" />
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none transition focus:text-black text-gray-500"
                required
              />
            </div>

            {/* Category */}
            <div className="relative">
              <label className="block mb-2 font-semibold text-gray-700">
                Category
              </label>
              <FiTag className="absolute top-[48px] left-4 text-gray-400" />
              <select
                name="category"
                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none transition text-gray-700"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Accessories">Accessories</option>
                <option value="Sports">Sports</option>
              </select>
            </div>

            {/* Stock */}
            <div className="relative">
              <label className="block mb-2 font-semibold text-gray-700">
                Stock
              </label>
              <FiBox className="absolute top-[48px] left-4  text-gray-400" />
              <input
                type="number"
                name="stock"
                placeholder="Stock Quantity"
                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:ring-2 focus:ring-amber-400 focus:outline-none transition focus:text-black text-gray-500"
                required
              />
            </div>

            {/* Image URL */}
            <div className="col-span-1 md:col-span-2 relative">
              <label className="block mb-2 font-semibold text-gray-700">
                Image URL
              </label>
              <FiImage className="absolute top-[48px] left-4 text-gray-400" />
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                className="w-full border border-gray-300 rounded-lg px-10 py-3 focus:ring-2 text-gray-500 focus:ring-amber-400 focus:outline-none transition focus:text-black"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-bold py-3 rounded-xl hover:bg-amber-700 shadow-lg transform hover:-translate-y-1 transition-all"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </PrivateRoute>
  );
}
