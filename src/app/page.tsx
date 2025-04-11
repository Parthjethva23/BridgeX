import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";
import Workshops from "./workshops/page";

export const metadata: Metadata = {
  title: "BridgeX",
  description: "Discover your path through real industry immersion, expert mentorship, and future-proof skills for long-term success",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Workshops />
      <Contact />
    </>
  );
}
