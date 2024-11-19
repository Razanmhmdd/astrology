import React from 'react';
import { motion } from 'framer-motion';
import typewriterImage from '/assets/image/content/q.jpg';

function ContentSection1() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12 bg-gradient-to-r from-violet-200 to-pink-200 p-6 md:p-8 lg:p-12">
      {/* Typewriter Image */}
      <motion.div
        className="col-span-1 md:col-span-4 lg:col-span-6 flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={typewriterImage}
          alt="Typewriter with stars"
          className="w-full md:w-4/5 lg:w-3/4 max-h-96 rounded-lg shadow-md object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-600 mb-6 text-sin"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ශ්‍රී සෙත් ජ්‍යොතිෂ සේවය
        </motion.h2>

        {/* List Items */}
        <motion.ul
          className="list-disc text-sin text-gray-800 text-sm sm:text-base md:text-lg lg:text-2xl font-bold leading-relaxed pl-6 lg:pl-8 space-y-3 sinhala-text tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <li>යෝග පිහිටීම් සදහා අදාළ පලාපල</li>
          <li>ඔබගේ චරින ලක්ෂණ</li>
          <li>විවාහය හා අදාළ ශුබ කාලයන්</li>
          <li>ධනය  රැකියාව ව්යාපාර</li>
          <li>දරු පල විස්තර</li>
          <li>ජීවිත කාලයටම විශේෂ අනාගත පලාපල</li>
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default ContentSection1;
