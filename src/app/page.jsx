"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { FiTruck, FiStar, FiShield, FiHeadphones } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const images = [
  "https://images.unsplash.com/photo-1761207850745-d41a776ef897?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // your uploaded image
  "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1602526432604-029a709e131c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1709371824843-2b72258fbd71?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1709625454557-f0cf05f85e0b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1733989074425-1a3402a64ef1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1734712736019-f971fe35e9e4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1750712263185-edde9f359e33?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1702390796625-6dd9b46b1c0b?q=80&w=980&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713857297379-6fc26e70f581?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1703675858673-56aab77ccbec?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen max-w-7xl mx-auto">
      {/* ================== HERO SECTION ================== */}
      <section className="relative overflow-hidden pt-24 pb-20">
        {/* Floating Gadgets */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
          className="w-24 absolute top-20 left-10 opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-6">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Shop Smart.
              <span className="text-blue-500"> Live Better.</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Explore high-quality gadgets, electronics & accessories with
              unmatched pricing.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/products"
                className="px-7 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg hover:shadow-blue-600/40"
              >
                Shop Now →
              </Link>

              <Link
                href="/about"
                className="px-7 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition shadow-lg hover:shadow-pink-600/40"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              className="w-32 absolute bottom-10  right-10 left-90 opacity-20"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-3xl shadow-2xl border border-gray-700"
            />
          </motion.div>
        </div>
      </section>

      {/* ================== MARQUEE SECTION ================== */}

      <Marquee speed={60} className="my-15 bg-black/30 backdrop-blur-md">
        <p className="mx-10 text-xl text-gray-300">🔥 Best Gadget Deals</p>
        <p className="mx-10 text-xl text-gray-300">⚡ Fast Delivery</p>
        <p className="mx-10 text-xl text-gray-300">💳 Secure Payments</p>
        <p className="mx-10 text-xl text-gray-300">⭐ 5-Star Products</p>
        <p className="mx-10 text-xl text-gray-300">🚀 Latest Tech Arrivals</p>
        <p className="mx-10 text-xl text-gray-300">
          💡 Smart Gadgets for Smart People
        </p>
        <p className="mx-10 text-xl text-gray-300">
          🎧 Premium Audio Collection
        </p>
        <p className="mx-10 text-xl text-gray-300">
          📱 Trending Mobile Accessories
        </p>
        <p className="mx-10 text-xl text-gray-300">💸 Big Discounts Live Now</p>
        <p className="mx-10 text-xl text-gray-300">
          🎮 Gaming Essentials In Stock
        </p>
        <p className="mx-10 text-xl text-gray-300">
          🕹️ Pro Accessories for Creators
        </p>
      </Marquee>

      {/* gallery section */}
      <div className="w-full max-w-6xl mx-auto py-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className=" text-center space-y-3 ">
            <h2 className="text-amber-400 font-bold text-4xl ">
              Experience Technology Like Never Before
            </h2>
            <p className="mb-10 text-blue-400">
              Step into a new world of immersive tech. From high-performance
              devices to stylish everyday essentials, every product is
              handpicked to deliver unmatched value and performance.
            </p>
          </div>
        </motion.div>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 180,
            modifier: 1.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="w-72 h-48 sm:w-96 sm:h-60 lg:w-[500px] lg:h-[80px]"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                {/* Motion Blur effect */}
                <motion.img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  initial={{ filter: "blur(0px)" }}
                  animate={{
                    filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Neon Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/20 to-red-500/20 blur-xl opacity-0 hover:opacity-60 transition"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================== FEATURES SECTION ================== */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-blue-400">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {[
            {
              icon: FiTruck,
              text: "Fast Delivery",
              color: "from-blue-500 to-purple-500",
            },
            {
              icon: FiStar,
              text: "Top Rated Products",
              color: "from-yellow-400 to-orange-500",
            },
            {
              icon: FiShield,
              text: "Secure & Trusted",
              color: "from-green-400 to-emerald-600",
            },
            {
              icon: FiHeadphones,
              text: "24/7 Support",
              color: "from-pink-400 to-rose-600",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.12, rotateX: 8, rotateY: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`
        relative p-6 rounded-2xl shadow-xl border border-gray-700 
        bg-gray-900 group overflow-hidden
      `}
            >
              {/* Gradient Animated Glow Background */}
              <div
                className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 
          bg-gradient-to-br ${f.color} blur-2xl scale-150
        `}
              ></div>

              {/* Icon */}
              <f.icon
                className="relative mx-auto text-4xl mb-4 drop-shadow-xl 
          text-white transition duration-300 group-hover:scale-125"
              />

              {/* Text */}
              <h3 className="relative text-xl text-center font-semibold text-white">
                {f.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================== TESTIMONIALS ================== */}
      <section className="py-20 bg-black/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-amber-400">
            What Customers Say
          </h2>

          <div className=" flex justify-around gap-5 ">
            <Marquee speed={60}>
              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700  mr-11">
                <p className="italic text-gray-300">Amazing products!,</p>
                <h4 className="font-bold mt-3 text-blue-400">– David</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  This product changed my workflow completely!
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– Olivia</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  Super high quality and very easy to use.
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– Ethan</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  Absolutely worth the price. Highly recommended!
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– Sophia</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  Great design, smooth performance. Loved it!
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– Liam</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  Amazing user experience. Super fast delivery.
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– Ava</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  I loved the premium feel and smooth UI.
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– Noah</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  Perfect for my daily needs. Great work!
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– Emma</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  Very reliable and beautifully crafted.
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– Mason</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  Five stars! The best I’ve used so far.
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– Isabella</h4>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 mr-11">
                <p className="italic text-gray-300">
                  Top-notch quality with a stunning UI.
                </p>
                <h4 className="font-bold mt-3 text-blue-400">– James</h4>
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}
