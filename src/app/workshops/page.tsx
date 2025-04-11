import workshopData from "@/components/Workshop/workshopData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import SingleWorkshop from "@/components/Workshop/SingleWorkshop";

export const metadata: Metadata = {
  title: "Workshops | BridgeX Career Immersion",
  description:
    "Explore our exciting one-day workshops designed to give students hands-on experience in various industries.",
};

const Workshops = () => {
  return (
    <>
      

      <section className="relative z-10 bg-gradient-to-br from-white via-blue-50 to-white py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4"
            style={{ top:"80px", position:"relative", fontSize: "48px", lineHeight: "1.2" }}>
              Upcoming <span className="text-blue-600">Workshops</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto"
            style={{ top:"90px", position:"relative"}}>
              Explore different career paths through short, high-impact experiences designed just for high school students.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center relative z-10"
          style={{ top:"100px", position:"relative"}}>
            {workshopData.map((workshop) => (
              <div
                key={workshop.id}
                className="relative w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mb-10 group transition duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                {/* Optional background glow or svg */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full blur-2xl opacity-30 group-hover:opacity-50 z-0"></div>
                <div className="relative z-10">
                  <SingleWorkshop workshop={workshop} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-left SVG */}
        <div className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="239"
            height="601"
            viewBox="0 0 239 601"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-184.451"
              y="600.973"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -184.451 600.973)"
              fill="url(#paint0_linear_93:235)"
            />
            <rect
              opacity="0.3"
              x="-188.201"
              y="385.272"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -188.201 385.272)"
              fill="url(#paint1_linear_93:235)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_93:235"
                x1="-90.1184"
                y1="420.414"
                x2="-90.1184"
                y2="1131.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_93:235"
                x1="-159.441"
                y1="204.714"
                x2="-159.441"
                y2="915.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom-right SVG */}
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Workshops;
