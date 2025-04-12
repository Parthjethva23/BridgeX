"use client";
import { useState } from "react";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "exists">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        setStatus("success");
        setFormData({ name: "", email: "" });
      } else if (res.status === 409) {
        setStatus("exists");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="relative z-10 rounded-3xl bg-white p-8 shadow-2xl sm:p-11 border border-blue-100">
      <h3 className="mb-4 text-2xl font-bold text-blue-900 leading-tight">
        Stay Updated with BridgeX
      </h3>
      <p className="mb-10 border-b border-blue-100 pb-10 text-base text-gray-600">
        Get insights, new workshop announcements, and exclusive resources delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mb-4 w-full rounded-xl bg-blue-50 px-5 py-3 text-gray-900 placeholder:text-gray-400 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mb-4 w-full rounded-xl bg-blue-50 px-5 py-3 text-gray-900 placeholder:text-gray-400 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Subscribe"
          className="mb-5 w-full cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-700 transition duration-300"
        />
        {status === "success" && (
          <p className="text-center text-sm text-green-500">🎉 Subscribed successfully!</p>
        )}
        {status === "exists" && (
          <p className="text-center text-sm text-yellow-500">⚠️ Already subscribed.</p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-500">❌ Something went wrong. Try again.</p>
        )}
        <p className="text-center text-sm text-gray-500">No spam. Just genuine updates.</p>
      </form>

      {/* Optional SVG accent */}
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
