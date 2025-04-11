import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="fill-current text-white animate-rotate"
      >
        <circle cx="25" cy="25" r="18" stroke="currentColor" strokeWidth="3" fill="none" />
        <line x1="25" y1="5" x2="25" y2="45" stroke="currentColor" strokeWidth="3" />
        <line x1="5" y1="25" x2="45" y2="25" stroke="currentColor" strokeWidth="3" />
        <circle cx="25" cy="25" r="6" stroke="currentColor" strokeWidth="3" fill="none" />
        <line x1="25" y1="25" x2="30" y2="15" stroke="currentColor" strokeWidth="3" />
        <line x1="25" y1="25" x2="20" y2="35" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    title: "Career Exploration",
    paragraph:
      "BridgeX helps students explore various careers through immersive experiences in different industries, guiding them toward making well-informed career decisions.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="fill-current text-white animate-rotate"
      >
        <rect x="10" y="15" width="30" height="20" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M10 15L25 5L40 15" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M10 35L25 45L40 35" stroke="currentColor" strokeWidth="3" fill="none" />
      </svg>
    ),
    title: "Hands-on Experience",
    paragraph:
      "Our program offers direct interaction with industry professionals, providing real-world insights and practical experience for students, guiding their career choices.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="fill-current text-yellow-500 animate-rotate"
      >
        <circle cx="25" cy="25" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="38" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="12" cy="38" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="38" cy="38" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    title: "Multiple Career Fields",
    paragraph:
      "BridgeX allows students to explore various career paths, helping them find industries that align with their skills and passions.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="fill-current text-white animate-rotate"
      >
        <circle cx="15" cy="15" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="35" cy="15" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
        <path
          d="M15 15C18 12 22 12 25 15C28 18 28 22 25 25C22 28 18 28 15 25C12 22 12 18 15 15Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M35 15C32 12 28 12 25 15C22 18 22 22 25 25C28 28 32 28 35 25C38 22 38 18 35 15Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
    title: "Professional Collaboration",
    paragraph:
      "We partner with industry professionals to provide mentorship, enabling students to build valuable networks and gain insights that will be crucial for their careers.",
  },
  {
    id: 5,
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="fill-current text-white animate-pulse"
      >
        <rect x="8" y="12" width="34" height="26" rx="6" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M20 18L20 32" stroke="currentColor" strokeWidth="3" />
        <path d="M25 18L25 32" stroke="currentColor" strokeWidth="3" />
        <path d="M30 18L30 32" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    title: "Industry-Relevant Skills",
    paragraph:
      "Students gain industry-specific skills through hands-on projects and exposure, preparing them for the real world with knowledge that is directly applicable.",
  },
  {
    id: 6,
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="fill-current text-white animate-pulse"
      >
        <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M25 10L25 40" stroke="currentColor" strokeWidth="3" />
        <path d="M25 10L35 20" stroke="currentColor" strokeWidth="3" />
        <path d="M25 10L15 20" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    title: "Real-World Exposure",
    paragraph:
      "BridgeX gives students real-world exposure to various industries, ensuring they have firsthand experience to make well-informed career choices.",
  },
];

export default featuresData;
