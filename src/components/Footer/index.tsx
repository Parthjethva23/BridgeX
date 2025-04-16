"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-gray-300 pt-20 pb-10 overflow-hidden">
      <div className="container px-6 md:px-10 lg:px-20">
        <div className="flex flex-wrap justify-between gap-y-12"
        style={{ top: "-10px", position: "relative" }}>
          {/* Brand Info */}
          <div className="w-42 max-w-full px-4 xl:mr-12 flex flex-col"
          style={{ top: "10px", position: "relative" }}>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo/BridgeX-logo.png"
                alt="BridgeX Logo"
                width={150}
                height={40}
                className="dark:hidden"
              />
            </Link>
            <p className="text-base leading-relaxed max-w-sm">
              Helping students discover their future through real industry exposure, practical skills, and expert mentorship.
            </p>
            {/* Socials */}
            <div className="flex gap-5 mt-6">
              <a href="#" aria-label="Twitter" className="hover:text-blue-500 transition">
                {/* Twitter SVG */}
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                {/* LinkedIn SVG */}
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition">
                {/* Instagram SVG */}
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12">
            <h4 className="text-lg font-semibold mb-5 text-blue-900 dark:text-white">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/workshops" className="hover:text-blue-600 transition">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-blue-600 transition">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About BridgeX
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12">
            <h4 className="text-lg font-semibold mb-5 text-blue-900 dark:text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="hover:text-blue-600 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-blue-600 transition">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12">
            <h4 className="text-lg font-semibold mb-5 text-blue-900 dark:text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="hover:text-blue-600 transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-blue-600 transition">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-600"
        style={{ top: "-20px", position: "relative" }}>

        </div>

        {/* Copyright */}
        <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} BridgeX. All rights reserved.
        </p>
      </div>

      {/* Background SVG bubbles */}
      <div className="absolute top-[-40px] left-[-60px] w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-40 z-0"></div>
      <div className="absolute bottom-[-60px] right-[-50px] w-56 h-56 bg-blue-300 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute top-[40%] left-[50%] w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-30 z-0"></div>
    </footer>
  );
};

export default Footer;
