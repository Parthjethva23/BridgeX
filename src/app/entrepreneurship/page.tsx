"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { pageVariants, cardVariants, heroVariants, textVariants } from "@/animations/variants";

const companies = [
  {
    name: "Y Combinator",
    logo: "/images/companies/yCombinator.png",
    description: "Silicon Valley’s most prestigious startup accelerator, helping launch Airbnb, Dropbox, and more.",
    locations: "India"
  },
  {
    name: "Techstars India",
    logo: "/images/companies/techstars.png",
    description: "Supports entrepreneurs across India with mentoring and funding opportunities.",
    locations: "India"
  },
  {
    name: "500 Global India",
    logo: "/images/companies/500.png",
    description: "Invests in startups from early to growth stages across India.",
    locations: "India"
  },
  {
    name: "Plan9",
    logo: "/images/companies/plan9.png",
    description: "Pakistan’s largest tech incubator, providing resources and support for startup founders.",
    locations: "Pakistan"
  },
  {
    name: "National Incubation Center (NIC) Islamabad",
    logo: "/images/companies/nic.png",
    description: "Nurtures innovative startups with guidance and seed funding.",
    locations: "Pakistan"
  },
  {
    name: "The Nest I/O",
    logo: "/images/companies/nest.png",
    description: "Pakistan’s tech incubator for tech startups with mentorship and global exposure.",
    locations: "Pakistan"
  }
];

const EntrepreneurshipPage = () => {
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
                src="/images/Entrepreneurship-hero.jpg"
                alt="Legal Professional"
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
              Explore Entrepreneurship
            </motion.h1>
            <motion.p 
              initial="initial"
              animate="animate"
              variants={textVariants}
              className="text-xl text-blue-600 mb-8"
            >
              Turn ideas into impactful ventures
            </motion.p>
          </div>
        </motion.div>

        {/* Top Entrepreneurship Firms Section */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <motion.h2 
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="text-3xl font-bold text-blue-600 mb-12 text-center"
          >
            Top Startup Hubs
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company) => (
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
                       60%
                     </h3>
                     <p className="text-gray-600">Startup Success Rate</p>
                   </motion.div>
                   <motion.div
                     whileHover="hover"
                     variants={cardVariants}
                     className="bg-blue rounded-xl shadow-lg p-6 text-center"
                   >
                     <h3 className="text-4xl font-bold text-blue-600 mb-2">35%</h3>
                     <p className="text-gray-600">Job Growth Rate</p>
                   </motion.div>
                   <motion.div
                     whileHover="hover"
                     variants={cardVariants}
                     className="bg-blue rounded-xl shadow-lg p-6 text-center"
                   >
                     <h3 className="text-4xl font-bold text-blue-600 mb-2">80%</h3>
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
                       45%
                     </h3>
                     <p className="text-gray-600">Startup Success Rate</p>
                   </motion.div>
                   <motion.div
                     whileHover="hover"
                     variants={cardVariants}
                     className="bg-blue rounded-xl shadow-lg p-6 text-center"
                   >
                     <h3 className="text-4xl font-bold text-blue-600 mb-2">30%</h3>
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

export default EntrepreneurshipPage;
