"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  pageVariants,
  cardVariants,
  heroVariants,
  textVariants,
} from "@/animations/variants";

const companiesIndia = [
  {
    name: "Infosys",
    description: "Global leader in consulting and IT services.",
    logo: "/images/companies/infosys.png",
  },
  {
    name: "Tata Consultancy Services (TCS)",
    description: "Offers a wide range of IT services and solutions.",
    logo: "/images/companies/tcs.png",
  },
  {
    name: "Zoho",
    description: "Provides cloud-based software solutions for businesses.",
    logo: "/images/companies/zoho.png",
  },
];

const companiesPakistan = [
  {
    name: "10Pearls",
    description: "Specializes in software development and digital transformation.",
    logo: "/images/companies/10pearls.jfif",
  },
  {
    name: "Folio3 Pvt Ltd",
    description: "Offers custom software development services.",
    logo: "/images/companies/folio.webp",
  },
  {
    name: "Techverx",
    description: "Provides comprehensive IT solutions and services.",
    logo: "/images/companies/techverx.webp",
  },
];

const statsIndia = {
  salary: "₹1.2 million",
  growth: "15%",
  employment: "95%",
};

const statsPakistan = {
  salary: "PKR 1 million",
  growth: "12%",
  employment: "92%",
};

const SoftwareEngineeringPage = () => {
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
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-full h-full"
            >
              <Image
                src="/images/SoftwareEngineering-hero.jpg"
                alt="Software Engineer"
                fill
                className="object-cover blur-sm"
              />
            </motion.div>
          </div>

          <div className="relative z-10 text-center">
            <motion.h1
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="text-5xl font-bold text-blue-600 mb-4"
            >
              Explore Software Development
            </motion.h1>
            <motion.p
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="text-xl text-blue-600 mb-8"
            >
              Build the digital world with code and creativity
            </motion.p>
          </div>
        </motion.div>

        {/* Top Software Development Companies Section */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <motion.h2
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="text-3xl font-bold text-blue-600 mb-12 text-center"
          >
            Top Tech Companies
          </motion.h2>

          {/* India */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={pageVariants}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-blue-600 text-center mb-8">
              India
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companiesIndia.map((company) => (
                <motion.div
                  key={company.name}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={cardVariants}
                  className="bg-blue rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 flex flex-col items-center text-center space-y-4">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    <h3 className="text-xl font-bold text-black-600">
                      {company.name}
                    </h3>
                    <p className="text-black">{company.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pakistan */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={pageVariants}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-blue-600 text-center mb-8">
              Pakistan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companiesPakistan.map((company) => (
                <motion.div
                  key={company.name}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={cardVariants}
                  className="bg-blue rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 flex flex-col items-center text-center space-y-4">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    <h3 className="text-xl font-bold text-black-600">
                      {company.name}
                    </h3>
                    <p className="text-black">{company.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
                    ₹1.2 million
                  </h3>
                  <p className="text-gray-600">Average Starting Salary</p>
                </motion.div>
                <motion.div
                  whileHover="hover"
                  variants={cardVariants}
                  className="bg-blue rounded-xl shadow-lg p-6 text-center"
                >
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">15%</h3>
                  <p className="text-gray-600">Job Growth Rate</p>
                </motion.div>
                <motion.div
                  whileHover="hover"
                  variants={cardVariants}
                  className="bg-blue rounded-xl shadow-lg p-6 text-center"
                >
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
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
                    PKR 1 million
                  </h3>
                  <p className="text-gray-600">Average Starting Salary</p>
                </motion.div>
                <motion.div
                  whileHover="hover"
                  variants={cardVariants}
                  className="bg-blue rounded-xl shadow-lg p-6 text-center"
                >
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">12%</h3>
                  <p className="text-gray-600">Job Growth Rate</p>
                </motion.div>
                <motion.div
                  whileHover="hover"
                  variants={cardVariants}
                  className="bg-blue rounded-xl shadow-lg p-6 text-center"
                >
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">92%</h3>
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

export default SoftwareEngineeringPage;
