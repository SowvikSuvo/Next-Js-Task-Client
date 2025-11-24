export default function Home() {
  return (
    <div>
      <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <section className="w-full  py-20">
          <div className="max-w-7xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
            {/* Hero Text */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Discover Amazing Products at{" "}
                <span className="text-blue-600">MyShop</span>
              </h1>

              <p className="text-gray-100 text-lg">
                High-quality items, best prices, and a smooth shopping
                experience—built with Next.js & Firebase.
              </p>

              <div className="flex gap-4">
                <a
                  href="/products"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Shop Now
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 bg-pink-500 rounded-md hover:bg-pink-700"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1755053757569-1559444c1918?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="shopping illustration"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
      </div>
      <div>
        <section
          id="features"
          className="py-20 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200  rounded-2xl max-w-7xl mx-auto"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-5 text-purple-500">
              Features
            </h1>
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
              Why Choose Us?
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="p-6 bg-gray-50 text-teal-500 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
                <p className="text-gray-700">
                  Quick and reliable delivery right at your doorstep.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-gray-50 text-pink-500 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-2">Best Prices</h3>
                <p className="text-gray-700">
                  Affordable pricing without compromising quality.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-gray-50 text-orange-500  rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-2 ">Premium Quality</h3>
                <p className="text-gray-700">
                  Only high-quality and trusted products.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-gray-50 text-lime-500 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
                <p className="text-gray-700">
                  We are here to help you anytime you need.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ================= TESTIMONIAL SECTION ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 text-black shadow rounded-xl">
              <p className="italic">“Amazing quality products!”</p>
              <h4 className="font-bold mt-3">– Alex</h4>
            </div>

            <div className="p-6 bg-gray-50 shadow text-black rounded-xl">
              <p className="italic">“Fast delivery and best prices.”</p>
              <h4 className="font-bold mt-3">– Maria</h4>
            </div>

            <div className="p-6 text-black  bg-gray-50 shadow rounded-xl">
              <p className="italic">“Customer service is excellent.”</p>
              <h4 className="font-bold mt-3">– David</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
