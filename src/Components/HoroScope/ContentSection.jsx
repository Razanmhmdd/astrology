

import React from 'react';
import typewriterImage from '/assets/image/content/8.jpg';

function ContentSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12 bg-gradient-to-r from-violet-200 to-pink-200 p-6 md:p-8 lg:p-12">
      
      {/* Text Section */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center text-center lg:text-left text-sin">
        {/* Heading */}
       
        <ul className="list-disc text-gray-800 text-base md:text-lg lg:text-2xl font-bold leading-relaxed pl-4 md:pl-6 space-y-3 sinhala-text">
            <li>යෝග පිහිටිම් සදහා අදාළ පලාප</li>
           <li>වස්තුව ධනය ඉඩම් දේපළ ලැබීමේ හා නිවාස ඉදිකිරීම් සදහා සුබ කාලයක්</li>
           <li>අදහපනය මනස හා බුද්ධිය පිළිබද</li>
           <li>හදහන අනුව සුදුසු රැකියාවන් හා උසස්වීම් වලට අදාළ සුබ කාලයන්</li>
           <li>ඔබට දියුණුව ගෙන දෙන යාපර හා දියුණුව ගෙන දෙන සුබ කාලයන්</li>
           <li>අදායම් වියදම් හා පාඩු පිළිබද විස්තර</li>
           <li>කෙටි කාලයක් සදහා ලබා දෙන ගෝචර පල වාර්තාව </li>
        </ul>
      </div>

      {/* Typewriter Image */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex justify-center items-center">
        <img
          src={typewriterImage}
          alt="Typewriter with stars"
          className="w-full md:w-4/5 lg:w-3/4 max-h-96 rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
}

export default ContentSection;
