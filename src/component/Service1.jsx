import { useState, useEffect } from "react";
import plywood from "../assets/plywood.webp";
import wood from "../assets/wood.jpg";
import moisture from "../assets/moisture.webp";
import wood2 from "../assets/dimensional.jpg";
import time from "../assets/time.webp";

const saleProducts = [
  {
    image: plywood,
    title: "Plywood Testing",
    description:
      "Comprehensive testing for all grades of plywood including tensile strength, moisture content, and bonding quality.",
  },
  {
    image: wood,
    title: "Furniture Testing",
    description:
      "Complete evaluation of furniture durability, stability, and safety compliance for domestic and commercial use.",
  },
  {
    image: moisture,
    title: "Moisture Testing",
    description:
      "Accurate moisture content analysis critical for wood product quality and longevity.",
  },
  {
    image: wood2,
    title: "Dimensional Testing",
    description:
      "Precise measurement and verification of dimensions, tolerances, and consistency across wood products.",
  },
  {
    image: time,
    title: "Timber Analysis",
    description:
      "In-depth analysis of timber quality, grading, and suitability for various construction applications.",
  },
];

const Service1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // AutoPlay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === saleProducts.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === saleProducts.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? saleProducts.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative  h-full bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100 py-12 overflow-hidden ">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce"></div>

      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-8 relative z-10">
        <span className="inline-block text-indigo-600 font-semibold text-lg uppercase tracking-wider mb-3 mt-20">
          Our Services
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeIn">
          Comprehensive Wood Testing Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 animate-fadeIn delay-200">
          State-of-the-art laboratory equipped to handle all types of wood product testing
          with precision and reliability.
        </p>

        {/* View All Button */}
        <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition-transform transform hover:scale-105 animate-bounce">
          View All
        </button>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl bg-white animate-fadeInUp">
        <div
          key={saleProducts[currentIndex].title}
          className="flex flex-col items-center text-center p-6 transition-all duration-700 ease-in-out"
        >
          {/* Image Box */}
          <div className="w-full h-[350px] md:h-[450px] mb-6 rounded-lg overflow-hidden shadow-lg">
            <img
              src={saleProducts[currentIndex].image}
              alt={saleProducts[currentIndex].title}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-fadeIn">
            {saleProducts[currentIndex].title}
          </h3>
          <p className="text-gray-600 mb-4 animate-fadeIn delay-200">
            {saleProducts[currentIndex].description}
          </p>

          {/* Apply Button */}
          <button className="px-6 py-3 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 animate-pulse">
            Apply Now
          </button>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow-md hover:bg-gray-700 hover:scale-110 transition-transform"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full shadow-md hover:bg-gray-700 hover:scale-110 transition-transform"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Service1;