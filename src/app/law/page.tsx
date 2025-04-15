"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pageVariants, cardVariants, heroVariants, textVariants } from "@/animations/variants";

const indianFirms = [
  {
    name: "AZB & Partners",
    description: "Leading firm specializing in corporate law and mergers.",
    logo: "/images/companies/azb.jpg"
  },
  {
    name: "Khaitan & Co",
    description: "Offers comprehensive legal services across various sectors.",
    logo: "/images/companies/khaitan.jfif"
  },
  {
    name: "J Sagar Associates",
    description: "Known for its expertise in commercial and corporate law.",
    logo: "/images/companies/jsa.jpg"
  }
];

const pakistaniFirms = [
  {
    name: "Haidermota & Co Advocates",
    description: "Renowned for corporate and commercial legal services.",
    logo: "/images/companies/haidermota.jfif"
  },
  {
    name: "Akhund Forbes",
    description: "Specializes in dispute resolution and legal consultancy.",
    logo: "/images/companies/akhund.jfif"
  },
  {
    name: "Khalid Anwer & Co.",
    description: "Offers a wide range of legal services with a strong reputation.",
    logo: "/images/companies/khalidanwer.jfif"
  }
];


const LawPage = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="min-h-screen bg-gradient-to-b from-blue-50 to-blue"
      >
        {/* Hero Section */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={heroVariants}
          className="relative h-[60vh] flex items-center justify-center"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0] 
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
              className="w-full h-full"
            >
              <Image
                src="/images/law-hero.jpg"
                alt="Legal Professional"
                fill
                className="object-cover blur-sm"
              />
            </motion.div>
          </div>
          
          <div className="bg-blue relative z-10 text-center">
            <motion.h1 
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="text-5xl font-bold text-blue-600 mb-4"
            >
              Explore Law
            </motion.h1>
            <motion.p 
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="text-xl text-blue-600 mb-8"
            >
              Champion justice and legal excellence
            </motion.p>
          </div>
        </motion.div>

        {/* Top Law Firms Section */}
        <section className="bg-white max-w-6xl mx-auto py-16 px-4">
          <motion.h2 
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="text-3xl font-bold text-blue-600 mb-12 text-center"
          >
            Top Law Firms
          </motion.h2>
          
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">India</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {indianFirms.map((firm) => (
  <motion.div
    key={firm.name}
    whileHover="hover"
    variants={cardVariants}
    className="bg-blue rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
  >
    {firm.logo && (
      <Image
        src={firm.logo}
        alt={`${firm.name} logo`}
        width={80}
        height={80}
        className="mb-4 object-contain"
      />
    )}
    <h4 className="text-xl font-bold text-gray-800 mb-2">{firm.name}</h4>
    <p className="text-gray-600">{firm.description}</p>
  </motion.div>
))}

          </div>

          <h3 className="text-2xl font-semibold text-blue-500 mb-6">Pakistan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pakistaniFirms.map((firm) => (
  <motion.div
    key={firm.name}
    whileHover="hover"
    variants={cardVariants}
    className="bg-blue rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
  >
    {firm.logo && (
      <Image
        src={firm.logo}
        alt={`${firm.name} logo`}
        width={80}
        height={80}
        className="mb-4 object-contain"
      />
    )}
    <h4 className="text-xl font-bold text-gray-800 mb-2">{firm.name}</h4>
    <p className="text-gray-600">{firm.description}</p>
  </motion.div>
))}

          </div>
        </section>

   {/* Career Impact Section */}
          <motion.section
            initial="initial"
            animate="animate"
            variants={pageVariants}
            className="bg-white-50 py-16"
          >
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">
                Career Impact
              </h2>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* India Stats */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-blue-600 text-center">
                    India
                  </h3>
                  <motion.div
                    whileHover="hover"
                    variants={cardVariants}
                    className="bg-blue rounded-xl shadow-lg p-6 text-center"
                  >
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">
                      ₹1.5 million
                    </h3>
                    <p className="text-gray-600">Average Starting Salary</p>
                  </motion.div>
                  <motion.div
                    whileHover="hover"
                    variants={cardVariants}
                    className="bg-blue rounded-xl shadow-lg p-6 text-center"
                  >
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">7%</h3>
                    <p className="text-gray-600">Job Growth Rate</p>
                  </motion.div>
                  <motion.div
                    whileHover="hover"
                    variants={cardVariants}
                    className="bg-blue rounded-xl shadow-lg p-6 text-center"
                  >
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">88%</h3>
                    <p className="text-gray-600">Employment Rate</p>
                  </motion.div>
                </div>
  
                {/* Pakistan Stats */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-blue-600 text-center">
                    Pakistan
                  </h3>
                  <motion.div
                    whileHover="hover"
                    variants={cardVariants}
                    className="bg-blue rounded-xl shadow-lg p-6 text-center"
                  >
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">
                      PKR 1.2 million
                    </h3>
                    <p className="text-gray-600">Average Starting Salary</p>
                  </motion.div>
                  <motion.div
                    whileHover="hover"
                    variants={cardVariants}
                    className="bg-blue rounded-xl shadow-lg p-6 text-center"
                  >
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">6%</h3>
                    <p className="text-gray-600">Job Growth Rate</p>
                  </motion.div>
                  <motion.div
                    whileHover="hover"
                    variants={cardVariants}
                    className="bg-blue rounded-xl shadow-lg p-6 text-center"
                  >
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">85%</h3>
                    <p className="text-gray-600">Employment Rate</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
      </motion.div>
    </AnimatePresence>
  );
};

export default LawPage;