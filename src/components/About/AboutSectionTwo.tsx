"use client";
import Image from "next/image";
import { Sparkles, Rocket } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const imageList = [
  "/images/about/exposure4.jpeg",
  "/images/about/exposure2.jpg",
  "/images/about/exposure3.jpg",
];

const AboutSectionTwo = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageList.length);
    }, 4000); // Change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 leading-tight">
              Experience Careers Before You Choose One
            </h2>
            <p className="text-lg text-gray-700 max-w-xl">
              At <span className="font-semibold text-blue-600">BridgeX</span>, we take you beyond lectures. Our 1-month immersion journeys give you real industry exposure, mentorship from top professionals, and hands-on learning that fuels clarity and confidence.
            </p>
            <p className="text-lg text-gray-700 max-w-xl">
              Whether it's building apps, exploring medicine, or launching a startup—you’ll discover what drives you <em>before</em> making long-term decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/apply" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-white font-semibold rounded-xl shadow-xl transition transform hover:scale-105 flex gap-2 items-center">
                <Rocket className="w-5 h-5" />
                Apply Now
              </Link>
              <Link href="/explore" className="border border-blue-600 px-8 py-4 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl transition transform hover:scale-105 flex gap-2 items-center">
                <Sparkles className="w-5 h-5" />
                Explore Tracks
              </Link>
            </div>
          </div>

          {/* Image Carousel with fixed size */}
          <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {imageList.map((src, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full relative">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

            {/* Bubble blur effect */}
            <div className="absolute -top-10 left-10 w-24 h-24 bg-indigo-300 blur-2xl opacity-50 rounded-full" />

            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {imageList.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? "bg-blue-600" : "bg-blue-300"
                  } transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
