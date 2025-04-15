"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Updated companies list with medical institutions in India and Pakistan
const companies = [
  {
    name: "All India Institute of Medical Sciences (AIIMS)",
    logo: "/images/companies/aiims.png",
    description: "Premier medical institute known for excellence in patient care and research.",
    locations: "India"
  },
  {
    name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
    logo: "/images/companies/PGIMER.png",
    description: "Renowned for advanced medical education and research.",
    locations: "India"
  },
  {
    name: "Manipal Academy of Higher Education",
    logo: "/images/companies/manipal.png",
    description: "Offers comprehensive medical programs with a global outlook.",
    locations: "India"
  },
  {
    name: "Aga Khan University",
    logo: "/images/companies/aku.png",
    description: "Internationally recognized for its medical education and research.",
    locations: "Pakistan"
  },
  {
    name: "Dow University of Health Sciences",
    logo: "/images/companies/dow.png",
    description: "Known for its diverse medical programs and healthcare services.",
    locations: "Pakistan"
  },
  {
    name: "Quaid-i-Azam University",
    logo: "/images/companies/quaid.png",
    description: "Offers quality medical education with a focus on research.",
    locations: "Pakistan"
  }
];

const MedicinePage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="min-h-screen bg-gradient-to-b from-blue-50 to-white"
      >
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] flex items-center justify-center"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.02, 1], rotate: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              className="w-full h-full"
            >
              <Image
                src="/images/medicine-hero.jpg"
                alt="Medical Professional"
                fill
                className="object-cover blur-sm"
              />
            </motion.div>
          </div>

          <div className="relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold text-blue-600 mb-4"
            >
              Explore Medicine
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-blue-600 mb-8"
            >
              Heal lives with compassion and cutting-edge science
            </motion.p>
          </div>
        </motion.div>

        {/* Top Institutions Section */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-3xl font-bold text-blue-600 mb-12 text-center"
          >
            Top Medical Institutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white
               rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="h-20 relative mb-4">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {company.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {company.locations}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

    {/* Career Impact Section */}
<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="bg-white-50 py-16"
>
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
      Career Impact
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* India Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-blue-600 text-center">
          India
        </h3>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Average Starting Salary</h3>
          <p className="text-gray-600">₹1.2 Millions </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-2">10%</h3>
          <p className="text-gray-600">Job Growth Rat</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Employment Rate</h3>
          <p className="text-gray-600">90%</p>
        </motion.div>
      </div>

      {/* Pakistan Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-blue-600 text-center">
          Pakistan
        </h3>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Average Starting Salary</h3>
          <p className="text-gray-600">PKR 1.5Millions</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-2">8%</h3>
          <p className="text-gray-600">Job Growth Rat</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Employment Rate</h3>
          <p className="text-gray-600">92%</p>
        </motion.div>
      </div>
    </div>
  </div>
</motion.section>

      </motion.div>
    </AnimatePresence>
  );
};

export default MedicinePage;
