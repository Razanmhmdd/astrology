import React from 'react';
import typewriterImage from '/assets/image/content/9.jpg';

function ContentSection1() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-6 md:p-12 bg-gradient-to-r from-pink-200 to-violet-200 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6">
      
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={typewriterImage}
          alt="Typewriter with stars"
          className="w-4/5 md:w-full lg:w-3/4 max-h-96 rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          ආසිරි නිවාස සැලසුම් සේවය
        </h2>
        
        {/* List of Services */}
        <ul className="list-disc text-gray-800 text-xl font-bold leading-relaxed space-y-3 px-6 md:px-0">
          <li>වාස්තු විද්‍යාව අනුව ගෘහ සැලසුම් ඇදීම</li>
          <li>දෝෂ සහිත නිවාස නිදහස් කර දීම</li>
          <li>නිවාස ඵලදායිතාව වැඩිකර දීම</li>
          <li>භූමි පරීක්ෂාව</li>
          <li>සුභ මුහුර්ති කදා දීම</li>
          <li>ඇස්තමේන්තු සෑදීමද</li>
        </ul>
      </div>
      
    </div>
  );
}

export default ContentSection1;

