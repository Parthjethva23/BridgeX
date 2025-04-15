"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pageVariants, cardVariants, heroVariants, textVariants } from "@/animations/variants";

const companies = [
  {
    name: "Obelisk Infotech",
    logo: "/images/companies/obelisk.png",
    description: "Offers comprehensive digital marketing solutions.",
    locations: "India"
  },
  {
    name: "Espial Solutions LLP",
    logo: "/images/companies/espial.png",
    description: "Specializes in connecting brands with their audiences.",
    locations: "India"
  },
  {
    name: "Digi Strikers",
    logo: "/images/companies/digistrikers.png",
    description: "Provides innovative digital marketing strategies.",
    locations: "India"
  },
  {
    name: "Navicosoft",
    logo: "/images/companies/navicosoft.png",
    description: "Leading digital marketing agency with a global clientele.",
    locations: "Pakistan"
  },
  {
    name: "Icreativez Technologies",
    logo: "/images/companies/icreativez.png",
    description: "Offers holistic marketing solutions and branding.",
    locations: "Pakistan"
  },
  {
    name: "Artimization",
    logo: "/images/companies/artimization.png",
    description: "Specializes in creative digital marketing campaigns.",
    locations: "Pakistan"
  }
];

const DigitalMarketingPage = () => {
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
                src="/images/DigitalMarketing-hero.jpg"
                alt="Digital Marketing"
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
              Explore Digital Marketing
            </motion.h1>
            <motion.p 
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="text-xl text-blue-600 mb-8"
            >
              Drive brands forward in the digital age
            </motion.p>
          </div>
        </motion.div>

        {/* Top DigitalMarketing Firms Section */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <motion.h2 
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="text-3xl font-bold text-blue-600 mb-12 text-center"
          >
            Top Marketing Agencies
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={cardVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
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
                             ₹700,000
                           </h3>
                           <p className="text-gray-600">Average Starting Salary</p>
                         </motion.div>
                         <motion.div
                           whileHover="hover"
                           variants={cardVariants}
                           className="bg-blue rounded-xl shadow-lg p-6 text-center"
                         >
                           <h3 className="text-4xl font-bold text-blue-600 mb-2">14%</h3>
                           <p className="text-gray-600">Job Growth Rate</p>
                         </motion.div>
                         <motion.div
                           whileHover="hover"
                           variants={cardVariants}
                           className="bg-blue rounded-xl shadow-lg p-6 text-center"
                         >
                           <h3 className="text-4xl font-bold text-blue-600 mb-2">89%</h3>
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
                             PKR 500,000
                           </h3>
                           <p className="text-gray-600">Average Starting Salary</p>
                         </motion.div>
                         <motion.div
                           whileHover="hover"
                           variants={cardVariants}
                           className="bg-blue rounded-xl shadow-lg p-6 text-center"
                         >
                           <h3 className="text-4xl font-bold text-blue-600 mb-2">10%</h3>
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

export default DigitalMarketingPage;
