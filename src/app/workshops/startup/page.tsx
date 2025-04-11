import Image from "next/image";

const StartupWorkshop = () => {
  return (
    <section
      className="relative z-10 bg-[#F2F6FF] px-4 py-20 md:px-6 lg:px-12"
      style={{ position: "relative", left: "10px" }}
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
          Build a Startup
        </h1>

        <div
          className="relative mb-6"
          style={{
            top: "120px",
            left: "-350px",
            position: "relative",
          }}
        >
          {/* 🔵 Right-side SVG behind image */}
          <div className="absolute -top-16 -right-20 -z-10">
            <svg
              width="239"
              height="550"
              viewBox="0 0 239 601"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.2"
                x="184.451"
                y="0"
                width="196"
                height="541.607"
                rx="2"
                transform="rotate(51.3 184.451 0)"
                fill="url(#paint0_linear_right)"
              />
              <rect
                opacity="0.2"
                x="188.201"
                y="215.701"
                width="59.7544"
                height="541.607"
                rx="2"
                transform="rotate(51.3 188.201 215.701)"
                fill="url(#paint1_linear_right)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_right"
                  x1="90.1184"
                  y1="200"
                  x2="90.1184"
                  y2="911.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_right"
                  x1="159.441"
                  y1="415"
                  x2="159.441"
                  y2="1125.952"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <Image
            src="/images/workshop/startup1.jpeg"
            alt="Build a Startup"
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
          <li>Brainstorm and validate a business idea</li>
          <li>Learn about branding, marketing, and pitching</li>
          <li>Create a mini pitch deck</li>
          <li>Explore roles in a startup team</li>
          <li>Present your idea to peers</li>
        </ul>

        <button
          className="rounded-md bg-primary px-5 py-2 text-white hover:bg-opacity-90"
          style={{ top: "50px", position: "relative", fontSize: "18px" }}
        >
          Book Now
        </button>
      </div>

      {/* Left Background SVG (unchanged) */}
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
            fill="url(#paint0_linear_startup)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_startup)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_startup"
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
              id="paint1_linear_startup"
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
    </section>
  );
};

export default StartupWorkshop;
