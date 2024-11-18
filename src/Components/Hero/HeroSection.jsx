import React from 'react';
import vdeo from "/assets/image/vdeo.mp4"
const HeroSection = () => {
  return (
    <div
      className="relative isolate px-4 sm:px-6 lg:px-8 pt-14 bg-cover bg-center min-h-screen flex items-center justify-center"
      // style={{ backgroundImage: `url('/assets/image/vdeo.mp4')` }}
    >
{/* Background Video */}
<video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={vdeo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-amber-400 sm:text-6xl lg:text-8xl ">
          ශ්‍රී සෙත්
          <br />
          <span className="text-purple-50 text-3xl sm:text-5xl lg:text-6xl">ASTROLOGY</span>
        </h1>
        <p className="sinhala-text mt-6 text-lg sm:text-xl lg:text-2xl font-medium text-white">
          අරමුණක් ඇති විටෙක පෙරමුණක් සැදෙනු ඇත. පෙරමුණේ යන අයගේ ජීවිතය සාක්ෂාත් වනු ඇත
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-md bg-amber-500 px-5 py-3 text-base font-semibold text-white shadow-md hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
