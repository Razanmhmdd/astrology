import React from 'react';
import typewriterImage from '/assets/image/img1.jpg';

function ContentSection1() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12 bg-gradient-to-r from-pink-200 to-violet-200 p-6 md:p-8 lg:p-12">
      
      {/* Typewriter Image */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex justify-center items-center">
        <img
          src={typewriterImage}
          alt="Typewriter with stars"
          className="w-full md:w-4/5 lg:w-3/4 max-h-96 rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center text-center lg:text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-extralight text-gray-900 mb-4 sinhala-text tracking-wider">
        wdisß ksjdi ie,iqï fiajh

        </h2>
        <ul className="list-disc text-gray-800 text-lg md:text-3xl font-extralight leading-relaxed pl-4 lg:pl-6 space-y-2 sinhala-text tracking-wider">
          <li>jdia;= úoHdj wkqj .Dy ie,iqï we§u</li>
          <li>fodaI iys; ksjdi ksoyia lr §u          </li>
          <li>ksjdi M,odhs;dj jeälr §u          </li>
          <li>N+ñ mÍlaIdj          </li>
          <li>iqN uqyq¾;s idod §u</li>
          <li>weia;fïka;= iE§u</li>
        </ul>
      </div>
    </div>
  );
}

export default ContentSection1;
