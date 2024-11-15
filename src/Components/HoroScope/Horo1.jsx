import React from 'react';
import typewriterImage from '/assets/image/content/img7.jpg';

function Horo1() {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 md:flex-row md:justify-around md:items-start md:space-y-0 md:p-12 bg-gray-100 rounded-lg shadow-lg">

      {/* Typewriter Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <img src={typewriterImage} alt="Typewriter with stars" className="w-5/6 md:w-full lg:w-3/4 rounded-lg shadow-md" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left ">
      <h1 className="text-4xl font-extrabold text-amber-500">ආසිරි නිවාස සැලසුම් සේවය</h1>
        <ul className="list-disc text-gray-800 text-lg font-bold leading-relaxed space-y-3 px-6 md:px-0">
          <li>වාස්තු විද්‍යාව අනුව ගෘහ සැලසුම් ඇදීම</li>
          <li>දෝෂ සහිත නිවාස නිදහස් කර දීම</li>
          <li>නිවාස ඵලදායිතාව වැඩිකර දීම</li>
          <li>භූමි පරීක්ෂාව</li>
          <li>සුභ මුහුර්ති කදා දීම</li>
          <li>ඇස්තමේන්තු සෑදීම</li>
        </ul>
      </div>
    </div>
  );
}

export default Horo1;
