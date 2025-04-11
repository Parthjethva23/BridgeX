import Contact from "@/components/Contact";
import { Metadata } from "next";
import { relative } from "path";

export const metadata: Metadata = {
  title: "Get in Touch | BridgeX",
  description: "Have questions about our career workshops or programs? Connect with the BridgeX team — we're here to help you make confident career choices.",
};

const ContactPage = () => {
  return (
    <>
      <section className="pt-40 pb-12 bg-gradient-to-br from-white via-blue-50 to-white text-center"
      style={{ top: "0px", left: "10px", position: "relative" }}>
        <div className="container px-6 mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4"
            style={{ top:"-10px", position:"relative", fontSize: "48px", lineHeight: "1.2" }}>
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Got questions about our workshops or programs? Let’s connect and help you explore your path with BridgeX.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;
