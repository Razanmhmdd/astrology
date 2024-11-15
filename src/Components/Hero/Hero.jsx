import React from 'react';

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/assets/image/img3.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center px-4 md:px-8">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-7xl font-bold  text-amber-500">
              SRI SETH ASTROLOGY
            </h1>
            <p className="mb-5 text-base md:text-lg lg:text-xl">
              Unlock the Stars: Discover Your True Path
            </p>
            <button className="btn btn-warning text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
