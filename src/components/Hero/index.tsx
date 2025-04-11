import Link from "next/link";
import Image from "next/image";
import { Sparkles, Rocket, Star, Briefcase, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pb-32 pt-40 md:pt-48 lg:pt-56"
    >
      <div className="pl-6 sm:pl-10 md:pl-12 lg:pl-14 xl:pl-18 pr-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-blue-900 sm:text-5xl md:text-6xl">
              Empower Your Career<br />with <span className="text-blue-600">BridgeX</span>
            </h1>
            <p className="mb-5 text-lg text-gray-700 sm:text-xl md:text-2xl max-w-xl">
              Discover your path through real industry immersion, expert mentorship, and future-proof skills for long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" /> Apply Now
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-blue-600 px-8 py-4 text-blue-600 font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" /> Learn More
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="bg-white shadow-2xl p-10 rounded-3xl border-l-8 border-blue-500 hover:shadow-3xl transition duration-300">
                <div className="flex items-center gap-4 mb-4 text-blue-800">
                  <Briefcase className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">10+ Tracks</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">Tech, design, business, and more.</p>
              </div>

              <div className="bg-white shadow-2xl p-10 rounded-3xl border-l-8 border-green-500 hover:shadow-3xl transition duration-300">
                <div className="flex items-center gap-4 mb-4 text-green-800">
                  <GraduationCap className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Top Mentors</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">Learn from real industry experts.</p>
              </div>

              <div className="bg-white shadow-2xl p-10 rounded-3xl border-l-8 border-green-500 hover:shadow-3xl transition duration-300">
                <div className="flex items-center gap-4 mb-4 text-green-800">
                  <Star className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">1-Month Only</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">Real exposure, no burnout.</p>
              </div>

              <div className="bg-white shadow-2xl p-10 rounded-3xl border-l-8 border-indigo-500 hover:shadow-3xl transition duration-300">
                <div className="flex items-center gap-4 mb-4 text-indigo-800">
                  <Star className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Placement Skills</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">Build real projects and resume.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end relative">
            <div className="absolute top-[-450px] right-[-20px] z-30">
              <div className="relative ml-auto max-w-xs">
                <svg
                  className="w-72 h-auto text-white"
                  viewBox="0 0 300 120"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20 Q10 0 30 0 H270 Q290 0 290 20 V80 Q290 100 270 100 H60 L30 120 L40 100 H30 Q10 100 10 80 Z"
                    fill="white"
                    stroke="#CBD5E1"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute top-2 left-7 pr-6 text-gray-800 text-base leading-relaxed">
                  BridgeX helped me figure out exactly what I love__and now I’m actually doing it! 🚀
                </div>
              </div>
            </div>

            {/* Stand SVG below student */}
            <svg
              viewBox="0 0 300 380"
              className="absolute top-[100px] right-[10px] w-[500px] h-auto z-0"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(10px 10px 15px rgba(173, 216, 230, 0.6))", // Apply drop shadow
              }}
            >
              <ellipse cx="150" cy="40" rx="140" ry="30" fill="#D1E3F1"  />
            </svg>

            <div className="absolute top-[-200px] right-[-180px] md:top-[-280px] md:right-[-200px] lg:top-[-370px] lg:right-[-30px] z-10">
              <Image
                src="/images/hero/student_PNG66.png"
                alt="Student exploring career opportunities"
                width={640}
                height={740}
                className="object-cover rounded-none drop-shadow-2xl"
                priority
              />
            </div>

            <div className="absolute top-[-280px] right-[-160px] w-40 h-40 bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full blur-3xl opacity-70 z-0 animate-pulse"></div>
            <div className="absolute bottom-[-80px] left-[-60px] w-24 h-24 bg-pink-300 rounded-full blur-2xl opacity-60 z-0"></div>
            <div className="absolute top-10 left-[200px] w-16 h-16 bg-yellow-300 rounded-full blur-md opacity-50 z-0 animate-bounce"></div>
            <div className="absolute top-[80px] right-[100px] w-12 h-12 bg-green-300 rounded-full blur-xl opacity-60 z-0"></div>
            <div className="absolute bottom-[100px] right-[200px] w-16 h-16 bg-purple-300 rounded-full blur-xl opacity-70 z-0"></div>
            <div className="absolute top-[240px] left-[120px] w-14 h-14 bg-red-300 rounded-full blur-xl opacity-50 z-0 animate-ping"></div>
            <svg className="absolute bottom-[160px] left-[20px] w-10 h-10 z-0" viewBox="0 0 24 24" fill="none" stroke="#f9a8d4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="650" cy="100" r="180" fill="#e0f2fe" />
          <circle cx="20" cy="550" r="80" fill="#dbeafe" />
          <circle cx="410" cy="320" r="60" fill="#fcd34d" fillOpacity="0.4" />
          <circle cx="20" cy="10" r="38" fill="#c4b5fd" fillOpacity="0.5" />
          <circle cx="500" cy="600" r="50" fill="#f9a8d4" fillOpacity="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
