import Image from "next/image";

const CodeWorkshop = () => {
  return (
    <section
      className="relative z-10 bg-[#F2F6FF] px-4 py-20 md:px-6 lg:px-12"
      style={{ top: "0px", left: "10px", position: "relative" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="mb-4 font-bold text-primary md:text-3xl"
          style={{
            top: "100px",
            left: "-475px",
            position: "relative",
            fontSize: "48px",
          }}
        >
          Tech & Coding Lab
        </h1>

        <div
          className="image-container mb-6"
          style={{ top: "120px", left: "-350px", position: "relative" }}
        >
          <Image
            src="/images/workshop/coder.webp"
            alt="Tech & Coding Lab"
            width={700}
            height={400}
            className="mx-auto rounded-3xl"
          />
        </div>

        <ul
          className="mb-6 text-left list-disc list-inside text-gray-700"
          style={{
            top: "120px",
            left: "-300px",
            position: "relative",
            fontSize: "18px",
          }}
        >
          <li>Learn to build a simple website</li>
          <li>Understand how apps and software work</li>
          <li>Get hands-on with fun tech tools</li>
          <li>Explore careers in software development</li>
          <li>Try real coding challenges</li>
        </ul>

        <button
          className="rounded-md bg-primary px-5 py-2 text-white hover:bg-opacity-90"
          style={{ top: "50px", position: "relative", fontSize: "18px" }}
        >
          Book Now
        </button>
      </div>

      {/* Bottom Left SVG */}
      <div className="absolute top-14 left-0 z-[-1]">
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
            fill="url(#paint0_linear_code)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_code)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_code"
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
              id="paint1_linear_code"
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

      {/* Bottom Right SVG */}
      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="200"
          height="300"
          viewBox="0 0 200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="250" r="100" fill="#4A6CF7" fillOpacity="0.1" />
        </svg>
      </div>
    </section>
  );
};

export default CodeWorkshop;
