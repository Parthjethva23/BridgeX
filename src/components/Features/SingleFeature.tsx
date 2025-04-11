import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full relative z-10">
      {/* Soft Gradient Background Accent */}
      <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-tr from-indigo-300 to-teal-500 rounded-full blur-3xl opacity-25 -z-10"></div>

      {/* Main Container without Hover Effects */}
      <div className="w-full">
        {/* Icon Background without Hover Effects */}
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-gradient-to-tr from-green-400 to-blue-500 text-white shadow-lg">
          {icon}
        </div>

        {/* Title Styling without Hover Effects */}
        <h3 className="mb-5 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>

        {/* Paragraph Styling without Hover Effects */}
        <p className="text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300 pr-[10px] opacity-80">
          {paragraph}
        </p>
      </div>

      {/* SVG Accent - Elegant Circular Design with Smooth Hover Animation */}
      <svg
        className="absolute top-[-10px] right-[-10px] w-14 h-14 text-blue-400 opacity-50 animate-ping hover:animate-bounce hover:scale-125 hover:translate-x-3 hover:translate-y-3 transition-all duration-300 ease-in-out"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" fill="none" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" fill="none" />
      </svg>
    </div>
  );
};

export default SingleFeature;
