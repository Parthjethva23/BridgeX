"use client";
import Image from "next/image";
import { Compass, Briefcase, Users, Rocket } from "lucide-react";

const IconCard = ({ icon: Icon, title, color }) => (
  <div
    className={`bg-white border-l-8 ${color} shadow-xl rounded-3xl p-6 hover:scale-105 transition duration-300 ease-in-out animate-fade-in-up`}
  >
    <div className={`flex items-center gap-4 mb-2 text-lg`}>
      <Icon className="w-6 h-6" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  </div>
);

const AboutSectionOne = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-24 overflow-hidden">
      <div className="container px-6 lg:px-16">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left text content */}
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-blue-900 animate-fade-in-up">
              Discover Your Career <br /> Before You Commit
            </h2>
            <p className="text-lg text-gray-700 max-w-xl animate-fade-in-up delay-100">
              BridgeX is a one-month immersion program crafted to help high schoolers explore multiple fields, gain clarity, and feel confident in their future.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <IconCard icon={Compass} title="Career Discovery" color="border-blue-500" />
              <IconCard icon={Briefcase} title="Real Industry Visits" color="border-green-500" />
              <IconCard icon={Users} title="Peer Learning" color="border-indigo-500" />
              <IconCard icon={Rocket} title="Future-Ready Skills" color="border-pink-500" />
            </div>
          </div>

          {/* Right image + floating effects */}
          <div className="w-full lg:w-1/2 relative flex justify-center animate-fade-in-up delay-200">
            <div className="relative w-full max-w-6xl"
            style={{ position: "relative", right: "-200px"}}>
              <Image
                src="/images/about/confused1.png"
                alt="BridgeX immersion experience"
                layout="responsive"
                width={1000}
                height={550}
                className="rounded-3xl object-contain"
              />
              
             
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-300 rounded-full blur-2xl opacity-60 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Bottom-right SVG */}
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg width="179" height="158" viewBox="0 0 179 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.5" d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z" fill="url(#paint0_linear_70:153)" />
            <path opacity="0.3" d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z" fill="url(#paint1_linear_70:153)" />
            <defs>
              <linearGradient id="paint0_linear_70:153" x1="69.6694" y1="29.9033" x2="196.108" y2="83.2919" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear_70:153" x1="165.348" y1="-75.4466" x2="-3.75136" y2="103.645" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
