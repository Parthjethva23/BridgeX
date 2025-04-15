import React from "react";

const MentorshipPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6">
      <h1 className="text-4xl font-bold text-purple-600 mb-6">Mentorship</h1>
      <p className="text-lg text-gray-700 mb-4">
        Connect with industry mentors to gain insights, ask questions, and receive guidance on your career journey.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-600">Your Mentors</h3>
        <ul className="mt-4 space-y-4">
          <li className="text-gray-700">Dr. Smith (Medicine)</li>
          <li className="text-gray-700">Eng. Johnson (Engineering)</li>
          <li className="text-gray-700">Ms. Davis (Digital Marketing)</li>
        </ul>
      </div>
    </div>
  );
};

export default MentorshipPage;