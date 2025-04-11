import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | BridgeX",
  description:
    "BridgeX is a 1-month industry immersion program helping high school students explore careers through hands-on, real-world experiences.",
};

const AboutPage = () => {
  return (
    <>3
      <section className="bg-gradient-to-br from-white via-blue-50 to-white py-24 text-center relative overflow-hidden">
        <div className="container">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold text-blue-900 animate-fade-in-up"
           style={{ top:"50px", position:"relative", fontSize: "48px", lineHeight: "1.2" }}>
            About BridgeX
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in-up delay-100"
          style={{ top:"50px", position:"relative"}}>
            BridgeX is a 1-month industry immersion program that helps high school students explore real career paths through hands-on experiences. Say goodbye to confusion and make confident, informed decisions about your future.
          </p>
        </div>
        <div className="absolute -bottom-16 right-0 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-50 animate-float" />
      </section>

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
