"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container">
        <SectionTitle
          title="Experience BridgeX in Action"
          paragraph="Explore how BridgeX connects students with industry experts and professionals through immersive career experiences. Watch our video to see how it all works."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/video/BridgeX video.png"
                  alt="BridgeX video preview"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    aria-label="Watch BridgeX Video"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100 hover:scale-110 hover:shadow-2xl"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video Component */}
      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="hbVLjI6agT4"  // Replace with your actual BridgeX video ID
        onClose={() => setOpen(false)}
      />

      {/* Decorative Background Shape */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url('/images/video/shape.svg')] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
