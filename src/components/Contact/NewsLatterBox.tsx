"use client";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-3xl bg-white p-8 shadow-2xl sm:p-11 border border-blue-100">
      <h3 className="mb-4 text-2xl font-bold text-blue-900 leading-tight">
        Stay Updated with BridgeX
      </h3>
      <p className="mb-10 border-b border-blue-100 pb-10 text-base text-gray-600">
        Get insights, new workshop announcements, and exclusive resources delivered to your inbox.
      </p>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="mb-4 w-full rounded-xl bg-blue-50 px-5 py-3 text-gray-900 placeholder:text-gray-400 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded-xl bg-blue-50 px-5 py-3 text-gray-900 placeholder:text-gray-400 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Subscribe"
          className="mb-5 w-full cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-700 transition duration-300"
        />
        <p className="text-center text-sm text-gray-500">
          No spam. Just genuine updates.
        </p>
      </div>

      {/* Optional SVG Accent */}
      <span className="absolute left-2 top-7 opacity-30">
        <svg width="57" height="65" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
            fill={theme === "light" ? "#4A6CF7" : "#93C5FD"}
            opacity="0.4"
          />
        </svg>
      </span>
    </div>
  );
};

export default NewsLatterBox;
