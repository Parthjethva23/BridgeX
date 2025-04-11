"use client";

import { Rocket, School, Brain, Briefcase, FlaskConical, Code2 } from "lucide-react";
import Link from "next/link";

const ExplorePage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 py-28 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-12"
      style={{ top: "60px", position: "relative" }}>
        <h1 className="text-5xl font-extrabold text-indigo-900 leading-tight animate-fade-in-up">
          Explore Career Tracks
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in"
        style={{ top: "-30px", position: "relative" }}>
          Not sure which path to pursue? Discover real-world experiences across fields to help you choose with clarity and confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-8 pt-12"
        style={{ top: "-60px", position: "relative" }}>
          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105">
            <School className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-indigo-800">Discover Medicine</h3>
            <p className="text-sm text-gray-600 mt-2">
              Explore hospitals, shadow doctors, and understand the human side of healthcare. Perfect for aspiring medical professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105">
            <Briefcase className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-indigo-800">Build a Startup</h3>
            <p className="text-sm text-gray-600 mt-2">
              Dive into entrepreneurship by ideating, building, and pitching your own business. Learn by doing with real mentors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105">
            <Code2 className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-indigo-800">Tech & Coding Lab</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get hands-on with code, AI, and hardware. Build real tech projects and gain experience in the world of innovation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105">
            <FlaskConical className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-indigo-800">Scientific Research</h3>
            <p className="text-sm text-gray-600 mt-2">
              Join labs and research teams, work on experiments, and see how science drives change. Great for curious minds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105">
            <Brain className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-indigo-800">Psychology & Mind</h3>
            <p className="text-sm text-gray-600 mt-2">
              Understand human behavior, visit therapy centers, and explore the mind's mechanics with professionals in psychology.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition hover:scale-105">
            <Rocket className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-indigo-800">Creative & Design</h3>
            <p className="text-sm text-gray-600 mt-2">
              Work with designers, create visual stories, and explore fields like UI/UX, branding, and storytelling.
            </p>
          </div>
        </div>

        <div className="mt-20"
        style={{ top: "-60px", position: "relative" }}>
          <h2 className="text-3xl font-semibold text-indigo-800 mb-4 animate-fade-in-up">
            Why Explore with BridgeX?
          </h2>
          <p className="text-md text-gray-700 max-w-3xl mx-auto animate-fade-in">
            BridgeX helps students make informed career choices by offering immersive, cross-functional exposure to real industries. Through 1-month industry immersions, you get to test, feel, and live the field before you commit to it.
          </p>
        </div>

        <Link href="/apply">
          <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-transform hover:scale-105 animate-fade-in-up"
          style={{ top: "-60px", position: "relative" }}>
            Apply for a Track
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExplorePage;
