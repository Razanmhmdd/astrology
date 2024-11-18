

import React from 'react';
import typewriterImage from '/assets/image/content/8.jpg';

function ContentSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12 bg-gradient-to-r from-violet-200 to-pink-200 p-6 md:p-8 lg:p-12">
      
      {/* Text Section */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center text-center lg:text-left">
        {/* Heading */}
        {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
          ජ්‍යෝතිශය පාඨමාලාව
        </h2> */}
        <ul className="list-disc text-gray-800 text-lg md:text-xl font-bold leading-relaxed pl-4 lg:pl-6 space-y-2">
            <li>යෝග ශික්සන සැණකෙල අවුල පතන</li>
           <li>වස්තු බවට ඉවත දැමූ ලෙඩින් හා නිවස ඉදිකිරිම සැනකළු කාලය</li>
           <li>අධයාපනම මානස හා බුද්ධිය විමසුම</li>
           <li>තහනම් අලුත් සෘතුන් රීතියටවම හා උපසම්මි වලට අලුත් කාලයේ</li>
           <li>ඔබට දිදුලුනු ගෙත දෙනු විශාරද හා දිදුලුනු ගෙත දෙනු සැනසීම</li>
           <li>අදමදි ශික්සන හා බල ශික්සන විශාරද</li>
           <li>කේටි කාලයයි සැනසුව මාන ගෙවීමේ පත විමසුම</li>
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
