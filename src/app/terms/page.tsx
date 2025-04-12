"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-8 text-center"
        >
          Terms of Service (Reference)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg leading-relaxed mb-6"
        >
          Welcome to BridgeX! This website is currently in its reference phase, and the platform is not yet live. The following Terms of Service are for informational purposes to give you an understanding of what the actual terms will be once the service is live.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold text-blue-900 dark:text-white mt-6"
        >
          1. General Terms
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg leading-relaxed mb-6"
        >
          The website you are currently viewing is only a prototype and a reference for our future services. Once the platform is fully launched, updated Terms of Service will be provided to users.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-semibold text-blue-900 dark:text-white mt-6"
        >
          2. User Responsibilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="text-lg leading-relaxed mb-6"
        >
          As this is not a live service, there are no actual interactions or services provided at this time. However, we encourage you to explore the reference materials and provide feedback on the potential user experience.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-2xl font-semibold text-blue-900 dark:text-white mt-6"
        >
          3. Prototype Status and Updates
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
          className="text-lg leading-relaxed mb-6"
        >
          This website represents the early prototype version of BridgeX. We are continuously improving the service, and more information will be available once we are ready to launch.
        </motion.p>
      </div>
    </main>
  );
}
