"use client";

import { motion } from "framer-motion";

export default function RefundPolicyPage() {
  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-8 text-center"
          style={{top:"30px",position:"relative"}}
        >
          Refund Policy (Reference)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg leading-relaxed mb-6"
          style={{top:"30px",position:"relative"}}
        >
          As BridgeX is currently in the prototype phase, there are no active services for purchase. This Refund Policy is for informational purposes, describing the refund process that will be in place once the platform is officially live.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold text-blue-900 dark:text-white mt-6"
          style={{top:"30px",position:"relative"}}
        >
          1. Refund Eligibility
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg leading-relaxed mb-6"
          style={{top:"30px",position:"relative"}}
        >
          No refunds are applicable at this stage as the platform is a reference only. Once live, users will be provided with a clear refund policy for their purchases.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-semibold text-blue-900 dark:text-white mt-6"
          style={{top:"30px",position:"relative"}}
        >
          2. Refund Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="text-lg leading-relaxed mb-6"
          style={{top:"30px",position:"relative"}}
        >
          At this time, no purchases are being processed. Once the service is live, we will provide a clear procedure for requesting and processing refunds.
        </motion.p>
      </div>
    </main>
  );
}
