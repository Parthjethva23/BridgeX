"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-8 text-center"
        >
          Privacy Policy (Reference)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg leading-relaxed mb-6"
        >
          This Privacy Policy applies to the current reference website for BridgeX. Please note that the actual privacy practices will be updated once the full version of the service is launched.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold text-blue-900 dark:text-white mt-6"
        >
          1. Information Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg leading-relaxed mb-6"
        >
          As this is a prototype, no personal information is actively collected from users. Once the service is live, the privacy policy will detail the types of information we collect and how it will be used.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-semibold text-blue-900 dark:text-white mt-6"
        >
          2. Data Usage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="text-lg leading-relaxed mb-6"
        >
          Currently, no data is being used for processing or marketing. Once the platform is live, this section will detail how user data is collected, stored, and used to improve your experience.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-2xl font-semibold text-blue-900 dark:text-white mt-6"
        >
          3. Changes to Privacy Policy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
          className="text-lg leading-relaxed mb-6"
        >
          This Privacy Policy is for the reference prototype only and will be updated once the service is fully launched. Changes will be communicated to users at that time.
        </motion.p>
      </div>
    </main>
  );
}
