"use client";
import { Rocket } from "lucide-react";
import Link from "next/link";

const ApplyPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-28 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-extrabold text-blue-900 leading-tight"
        style={{ top: "50px", position: "relative", fontSize: "48px", lineHeight: "1.2" }}>
          Ready to Launch Your Career Journey?
        </h1>
        <p className="text-lg text-gray-700"
        style={{ top: "30px", position: "relative" }}>
          Apply for a 1-month immersive experience across industries—from medicine to startups to tech labs. Gain real exposure, mentorship, and clarity before choosing your path.
        </p>

        <form className="space-y-6 bg-white shadow-2xl rounded-2xl p-8 mt-10">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-4 rounded-xl w-full focus:outline-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-4 rounded-xl w-full focus:outline-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 p-4 rounded-xl w-full focus:outline-blue-500"
            />
            <select
              className="border border-gray-300 p-4 rounded-xl w-full focus:outline-blue-500"
              required
            >
              <option value="">Choose Interest Track</option>
              <option value="medicine">Discover Medicine</option>
              <option value="startup">Build a Startup</option>
              <option value="tech">Tech & Coding Lab</option>
            </select>
          </div>

          <textarea
            rows={4}
            placeholder="Why do you want to join BridgeX?"
            className="w-full border border-gray-300 p-4 rounded-xl focus:outline-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-white font-semibold rounded-xl shadow-xl transition transform hover:scale-105 flex gap-2 items-center mx-auto"
          >
            <Rocket className="w-5 h-5" />
            Submit Application
          </button>
        </form>

        <p className="text-gray-500 pt-4 text-sm">
          We’ll be live soon — you’ll be notified once applications open!
        </p>
      </div>
    </section>
  );
};

export default ApplyPage;
