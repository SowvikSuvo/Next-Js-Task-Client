"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiTag,
  FiDollarSign,
  FiBox,
  FiInfo,
} from "react-icons/fi";

export default function ProductDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id; // ✅ correct

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`https://next-js-task-server.vercel.app/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity loading-lg text-warning"></span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-xl">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 rounded-2xl mt-18">
      {/* Banner */}
      {/* Banner with Image Zoom + Overlay */}
      <div className="relative w-full h-80 md:h-[500px] overflow-hidden group">
        <img
          src={product.image || product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
        <button
          onClick={() => router.back()}
          className="absolute top-5 left-5 bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium shadow-lg transition transform hover:-translate-y-1"
        >
          <FiArrowLeft /> Back
        </button>
      </div>

      {/* Product Info */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 space-y-6">
        {/* Title & Description */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-amber-400"
        >
          {product.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          {product.fullDescription || product.shortDescription}
        </motion.p>

        {/* Cards: Category, Price, Stock */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <motion.div
            whileHover={{ scale: 1.5, rotate: 3 }}
            className="bg-blue-700 rounded-xl p-4 flex items-center gap-3 shadow-md transform transition-transform duration-300"
          >
            <FiTag className="text-amber-400 text-2xl transition-transform duration-300" />
            <div>
              <p className="text-gray-300 text-sm">Category</p>
              <p className="font-semibold text-white">{product.category}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.5, rotate: 3 }}
            className="bg-green-700 rounded-xl p-4 flex items-center gap-3 shadow-md transform transition-transform duration-300"
          >
            <FiDollarSign className="text-amber-400 text-2xl" />
            <div>
              <p className="text-gray-300 text-sm">Price</p>
              <p className="font-semibold text-white">${product.price}</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.5, rotate: 3 }}
            className="bg-purple-700 rounded-xl p-4 flex items-center gap-3 shadow-md transform transition-transform duration-300"
          >
            <FiBox className="text-amber-400 text-2xl" />
            <div>
              <p className="text-gray-300 text-sm">Stock</p>
              <p className="font-semibold text-white">{product.stock}</p>
            </div>
          </motion.div>
        </div>
        {/* Full Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-amber-400 mb-4">
            Full Description
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {product.fullDescription}
          </p>
        </motion.div>

        {/* Add to Cart Button */}
        <div className="mt-6 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.5, y: -2, rotate: -360 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-full shadow-xl transition-all text-lg"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </div>
  );
}
