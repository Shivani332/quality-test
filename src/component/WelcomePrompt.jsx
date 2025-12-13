import React from 'react';
//import { motion } from 'framer-motion';
import {motion } from 'framer-motion'

const WelcomePrompt = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] overflow-hidden py-20 px-6 md:px-16">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/lab-testing.jpg')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Precision Testing for Wood Products
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Trusted laboratory for comprehensive quality testing of plywood, furniture, timber, and all wooden products. Ensuring safety and compliance with international standards.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#request"
            className="bg-[#007BFF] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#005FCC] transition duration-300"
          >
            Request Testing
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#services"
            className="bg-white text-[#007BFF] border border-[#007BFF] px-6 py-3 rounded-lg shadow-md hover:bg-[#f0f8ff] transition duration-300"
          >
            View Services
          </motion.a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <h3 className="text-2xl font-semibold">15+ Years Experience</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <h3 className="text-2xl font-semibold">5000+ Tests Conducted</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl p-6 shadow-md"
          >
            <h3 className="text-2xl font-semibold">48h Quick Reports</h3>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WelcomePrompt;