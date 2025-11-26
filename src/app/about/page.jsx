"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 mt-18">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About GadgetHub</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Your trusted destination for cutting‑edge gadgets, premium
          accessories, and a smarter digital lifestyle — all in one place.
        </p>
      </section>
      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="leading-relaxed mb-4">
            GadgetHub started with a passion for technology and the belief that
            quality gadgets should be accessible to everyone. From smartwatches
            to headphones, power banks to gaming accessories — we bring products
            that make your life easier, smarter, and more fun.
          </p>
          <p className="leading-relaxed">
            We work with trusted suppliers and ensure that every item you see on
            our platform is tested, reliable, and worth your investment.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Gadgets"
          className="w-full rounded-xl shadow-lg"
        />
      </section>
      {/* Mission Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            Our mission is simple: Deliver high‑quality, reliable, and
            innovative tech gadgets that help people stay connected, productive,
            and entertained. We aim to inspire your tech journey by offering
            modern products at affordable prices.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose GadgetHub?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="leading-relaxed">
              We carefully select every item to ensure you only get the best
              quality gadgets in the market.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Affordable Pricing</h3>
            <p className="leading-relaxed">
              Our goal is to make modern tech accessible, with fair prices and
              trustworthy service.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Exceptional Support</h3>
            <p className="leading-relaxed">
              Our support team is always here to help you with product
              recommendations or order issues.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Meet Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto">
            A passionate group of tech enthusiasts dedicated to bringing the
            best gadgets to your hands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={`https://randomuser.me/api/portraits/men/${num + 10}.jpg`}
                className="w-28 h-28 mx-auto rounded-full mb-4"
                alt="Team Member"
              />
              <h3 className="text-xl font-semibold">Team Member {num}</h3>
              <p className="text-gray-600">Tech Specialist</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
