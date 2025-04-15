"use client";

import React from "react";

const MyJourneyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">My Journey</h1>
      <p className="text-lg text-gray-700 mb-4">
        Track your progress, view your achievements, and reflect on your career exploration journey with BridgeX.
      </p>

      {/* Progress Tracker */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-blue-600">Progress Tracker</h3>
        <p className="text-gray-600">1-Month Bridge Course</p>
        <div className="mt-4 bg-gray-200 rounded-full h-4">
          <div className="bg-blue-600 h-4 rounded-full" style={{ width: "75%" }}></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">75% Complete</p>
      </div>

      {/* Achievements */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-blue-600">Achievements</h3>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-700">Completed Medicine Workshop</li>
          <li className="text-gray-700">Earned "Engineering Explorer" Badge</li>
        </ul>
      </div>

      {/* Reflection Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-600">Reflection</h3>
        <p className="text-gray-600">
          Reflect on your journey so far and set goals for the future.
        </p>
        <textarea
          className="mt-4 w-full h-32 p-4 border border-gray-300 rounded-lg"
          placeholder="Write your reflections here..."
        ></textarea>
      </div>
    </div>
  );
};

export default MyJourneyPage;