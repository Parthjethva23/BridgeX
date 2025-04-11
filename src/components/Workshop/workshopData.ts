export interface Workshop {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  link: string;
}

const workshopData: Workshop[] = [
  {
    id: 1,
    title: "Discover Medicine",
    description:
      "Try your hand at real medical tools, simulate diagnoses, and explore the path to becoming a doctor.",
    details:
      "In this one-day workshop, you'll dive deep into the world of medicine. Learn how doctors approach diagnosis, try out tools used in the field, and hear from real healthcare professionals about their journey. This session is perfect for students curious about biology, health sciences, and medical careers.",
    image: "/images/blog/medical.jpg",
    link: "/workshops/medical",
  },
  {
    id: 2,
    title: "Build a Startup",
    description:
      "Brainstorm ideas, design your brand, and pitch like a real founder—all in one immersive day.",
    details:
      "This workshop puts you in the shoes of a startup founder. From building a business idea to branding and pitching to a mock investor panel, experience the hustle and creativity of entrepreneurship. Ideal for problem-solvers, innovators, and future CEOs.",
    image: "/images/blog/startup1.jpeg",
    link: "/workshops/startup",
  },
  {
    id: 3,
    title: "Tech & Coding Lab",
    description:
      "Build a mini web app and explore the world of tech through hands-on coding activities.",
    details:
      "Get introduced to front-end development and digital tools in a fast-paced coding lab. By the end of the day, you’ll build your first web project and gain insights into software careers from industry mentors. No prior coding knowledge required!",
    image: "/images/blog/code.jpg",
    link: "/workshops/code",
  },
];

export default workshopData;
