import React from "react";
import { motion } from "framer-motion";
import vdeo from "/assets/image/new.mp4";

const HeroSection = () => {
  return (
    <div
      className="relative isolate px-4 sm:px-6 lg:px-8 pt-14 bg-cover bg-center min-h-screen flex items-center justify-center"
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
        {/* Animated Heading */}
              <motion.h1
        className="text-balance text-8xl font-medium text-amber-400 sm:text-5xl lg:text-9xl text-sin"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Y%S fi;a
        <br />
        <motion.span
          className="text-purple-50 text-5xl sm:text-5xl lg:text-7xl "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
         ASTROLOGY
        </motion.span>
      </motion.h1>


        {/* Animated Paragraph */}
        <motion.p
          className="text-sin mt-6 text-lg sm:text-xl lg:text-2xl font-medium text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
      wruqKla we;s úfgl fmruqKla iefokq we;' fmruqfKa hk whf.a Ôú;h idlaId;a jkq we;
      </motion.p>

        {/* Animated Button */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a
            href="#"
            className="  rounded-md bg-amber-500 px-5 py-3 text-base font-semibold text-white shadow-md hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
