import React from "react";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-6">
      <h1 className="text-4xl font-bold text-yellow-600 mb-6">Resources</h1>
      <p className="text-lg text-gray-700 mb-4">
        Access guides, articles, and tools to help you make informed career decisions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Career Guide</h3>
          <p className="text-sm text-gray-500">A comprehensive guide to choosing the right career path.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Resume Builder</h3>
          <p className="text-sm text-gray-500">Create a professional resume with our easy-to-use tool.</p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;