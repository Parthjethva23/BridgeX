"use client";

import { motion } from "framer-motion";

export default function FaqsPage() {
  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-8 text-center"
          style={{}}
        >
          Frequently Asked Questions (Reference)
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-lg font-semibold mb-4">1. What is BridgeX?</div>
          <p className="text-lg leading-relaxed mb-6">
            BridgeX is currently in the prototype phase. It is a platform designed to help students explore different career paths. This website serves as a reference to what will be available once the platform is fully launched.
          </p>

          <div className="text-lg font-semibold mb-4">2. When will the platform go live?</div>
          <p className="text-lg leading-relaxed mb-6">
            The platform is in its prototype phase, and we are working hard to bring it to you. Specific timelines will be shared once we get closer to the official launch.
          </p>

          <div className="text-lg font-semibold mb-4">3. How can I get involved in the platform?</div>
          <p className="text-lg leading-relaxed mb-6">
            Currently, you can explore this reference website. We welcome your feedback, and you can sign up for updates to be notified when the platform launches.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
