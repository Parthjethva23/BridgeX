"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStoryPage() {
  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 py-20 px-6 md:px-20 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-8 text-center"
          style={{top:"50px",position:"relative"}}
        >
          Our Story
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.2 }}
          className="text-lg leading-relaxed mb-6"
          style={{top:"30px",position:"relative"}}
        >
          BridgeX isn't just a startup – it's a heartfelt mission born out of a shared experience. Both <strong>Parth Jethva</strong> from India and <strong>Hira Fatimaa</strong> from Pakistan faced the same confusion that many students encounter at a critical stage in their lives: <em>"What career path is right for me?"</em>
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.4 }}
          className="text-lg leading-relaxed mb-6"
          style={{top:"30px",position:"relative"}}
        >
          The idea for BridgeX emerged when Parth and Hira, despite being from different countries, found common ground in their shared struggle with career decisions. Their conversation revealed the universal challenge of choosing a path without real-world exposure, and that's when they knew they had to take action.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.6 }}
          className="text-lg leading-relaxed mb-6"
          style={{top:"30px",position:"relative"}}
        >
          What started as a desire to help each other, soon transformed into a shared vision. BridgeX was built out of the belief that students deserve more than theoretical advice when deciding on their future careers. It is designed to provide real-world exposure, hands-on experiences, and mentorship.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.8 }}
          className="text-lg leading-relaxed"
          style={{top:"30px",position:"relative"}}
        >
          From a dream shared between two passionate individuals, BridgeX became a movement that empowers students across India, Pakistan, and soon, the world. Our mission is simple: <strong>explore, experience, excel</strong>. We believe in learning by doing, in mentorship by real professionals, and in giving every student a glimpse into their future — before they have to decide it.
        </motion.p>
      </div>

      {/* Animated Background Circles */}
      <div className="absolute top-[-280px] right-[-160px] w-40 h-40 bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full blur-3xl opacity-70 z-0 animate-pulse"></div>
      <div className="absolute bottom-[-80px] left-[-60px] w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-60 z-0"></div>
      <div className="absolute top-10 left-[200px] w-16 h-16 bg-yellow-300 rounded-full blur-md opacity-50 z-0 animate-bounce"></div>
      <div className="absolute top-[80px] right-[100px] w-12 h-12 bg-green-300 rounded-full blur-xl opacity-60 z-0"></div>
      <div className="absolute bottom-[100px] right-[200px] w-16 h-16 bg-purple-300 rounded-full blur-xl opacity-70 z-0"></div>
      <div className="absolute top-[240px] left-[120px] w-14 h-14 bg-red-300 rounded-full blur-xl opacity-50 z-0 animate-ping"></div>

      {/* Checkmark Icon SVG */}
      <svg className="absolute bottom-[160px] left-[20px] w-10 h-10 z-0" viewBox="0 0 24 24" fill="none" stroke="#f9a8d4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5"/>
      </svg>

      {/* Background Gradient Circles */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="650" cy="100" r="180" fill="#e0f2fe" />
          <circle cx="20" cy="550" r="80" fill="#dbeafe" />
          <circle cx="410" cy="320" r="60" fill="#fcd34d" fillOpacity="0.4" />
          <circle cx="20" cy="10" r="38" fill="#c4b5fd" fillOpacity="0.5" />
          <circle cx="500" cy="600" r="50" fill="#f9a8d4" fillOpacity="0.5" />
        </svg>
      </div>
    </main>
  );
}
