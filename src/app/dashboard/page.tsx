"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const DashboardPage = () => {
  useEffect(() => {
    // Check if user is logged in when component mounts
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      window.location.href = "/"; // Redirect to login if not logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-white text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">BridgeX</h1>
        
          <ul className="flex space-x-6">
            <li><Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
            <li><Link href="/explored" className="hover:text-blue-600">Explore Careers</Link></li>
            <li><Link href="/my-journey" className="hover:text-blue-600">My Journey</Link></li>
            <li><Link href="/mentorship" className="hover:text-blue-600">Mentorship</Link></li>
            <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
          </ul>
        
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white shadow-md p-6">
          <h3 className="text-xl font-bold text-blue-600">Your Dashboard</h3>
          <ul className="mt-4 space-y-4">
            <li><Link href="/medicine" className="text-gray-700 hover:text-blue-600">Medicine</Link></li>
            <li><Link href="/law" className="text-gray-700 hover:text-blue-600">Law</Link></li>
            <li><Link href="/engineering" className="text-gray-700 hover:text-blue-600">Engineering</Link></li>
            <li><Link href="/software-development" className="text-gray-700 hover:text-blue-600">Software Development</Link></li>
            <li><Link href="/digital-marketing" className="text-gray-700 hover:text-blue-600">Digital Marketing</Link></li>
            <li><Link href="/entrepreneurship" className="text-gray-700 hover:text-blue-600">Entrepreneurship</Link></li>
          </ul>
        </aside>

        {/* Main Dashboard Content */}
        <section className="flex-1 p-6 space-y-12">
             {/* Student Progress Tracker */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600">Your Progress</h3>
            <p className="text-gray-600">1-Month Bridge Course</p>
            <div className="mt-4 bg-gray-200 rounded-full h-4">
              <div className="bg-blue-600 h-4 rounded-full" style={{ width: "65%" }}></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">65% Complete</p>
          </div>

          {/* Enrolled Tracks */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600">Enrolled Tracks</h3>
            <p className="text-gray-600">You are currently enrolled in the following tracks:</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-700">Medicine Workshop</li>
              <li className="text-gray-700">Engineering Bootcamp</li>
            </ul>
          </div>

          {/* Badges */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600">Badges</h3>
            <p className="text-gray-600">Your achievements:</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-700">Engineering Explorer</li>
              <li className="text-gray-700">Medicine Enthusiast</li>
            </ul>
          </div>

          {/* Messages from Mentors */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600">Messages from Mentors</h3>
            <p className="text-gray-600">You have 2 new messages:</p>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-700">"Great progress on the Medicine track!"</li>
              <li className="text-gray-700">"Keep up the good work in Engineering!"</li>
            </ul>
          </div>

         
          {/* Career Exploration Cards */}
          <div>
            <h3 className="text-xl font-bold text-blue-600">Explore Careers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
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

          {/* Upcoming Immersion Sessions */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600">Upcoming Immersion Sessions</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex justify-between items-center">
                <span>Medicine Workshop - April 20</span>
                <img src="/partner-logo1.png" alt="Partner Logo" className="h-8" />
              </li>
              <li className="flex justify-between items-center">
                <span>Engineering Bootcamp - April 25</span>
                <img src="/partner-logo2.png" alt="Partner Logo" className="h-8" />
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-xl font-bold text-blue-600">What Students & Mentors Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <blockquote className="bg-white shadow-md rounded-lg p-4">
                <p className="text-gray-600">
                  "BridgeX helped me find my passion for engineering!"
                </p>
                <footer className="mt-2 text-sm text-gray-500">- Alex, Student</footer>
              </blockquote>
              <blockquote className="bg-white shadow-md rounded-lg p-4">
                <p className="text-gray-600">
                  "Mentoring students through BridgeX has been incredibly rewarding."
                </p>
                <footer className="mt-2 text-sm text-gray-500">- Sarah, Mentor</footer>
              </blockquote>
            </div>
          </div>

          {/* Infographics */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600">Our Impact</h3>
            <p className="mt-4 text-gray-600">
              92% of students felt confident choosing their major after BridgeX.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
