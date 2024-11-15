import React from 'react';
import typewriterImage from '/assets/image/content/7.png';

function ContentSection() {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 md:flex-row md:justify-around md:items-start md:space-y-0 md:p-12 bg-gray-100 rounded-lg shadow-lg">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left">
      
        <ul className="list-disc text-gray-800 text-lg font-bold leading-relaxed space-y-3 px-6 md:px-0">
          <li>යෝග ශික්සන සැණකෙල අවුල පතන</li>
          <li>වස්තු බවට ඉවත දැමූ ලෙඩින් හා නිවස ඉදිකිරිම සැනකළු කාලය</li>
          <li>අධයාපනම මානස හා බුද්ධිය විමසුම</li>
          <li>තහනම් අලුත් සෘතුන් රීතියටවම හා උපසම්මි වලට අලුත් කාලයේ</li>
          <li>ඔබට දිදුලුනු ගෙත දෙනු විශාරද හා දිදුලුනු ගෙත දෙනු සැනසීම</li>
          <li>අදමදි ශික්සන හා බල ශික්සන විශාරද</li>
          <li>කේටි කාලයයි සැනසුව මාන ගෙවීමේ පත විමසුම (රජ බුද්ධතාන සැනසීම ගුල මො හම)</li>
        </ul>
      </div>

      {/* Typewriter Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
        <img src={typewriterImage} alt="Typewriter with stars" className="w-5/6 md:w-full lg:w-3/4 rounded-lg shadow-md" />
      </div>
    </div>
  );
}

export default ContentSection;
