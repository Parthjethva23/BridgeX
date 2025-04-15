import React from "react";

const ExploreCareersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Explore Careers</h1>
      <p className="text-lg text-gray-700 mb-4">
        Discover various career paths and learn more about the opportunities available in fields like Medicine, Law, Engineering, and more.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {["Medicine", "Law", "Engineering", "Software Dev", "Digital Marketing", "Entrepreneurship"].map((career) => (
          <div
            key={career}
            className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold text-gray-700">{career}</h4>
            <p className="text-sm text-gray-500">Learn more about {career}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCareersPage;