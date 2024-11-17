import React from 'react';
import typewriterImage from '/assets/image/content/8.jpg';

function ContentSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-6 md:p-12 bg-gradient-to-r from-pink-200 to-violet-200 rounded-lg shadow-lg space-y-6 md:space-y-0">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <ul className="list-disc text-gray-800 text-lg md:text-xl font-bold leading-relaxed space-y-4 px-4 md:px-0">
          <li>යෝග ශික්සන සැණකෙල අවුල පතන</li>
          <li>වස්තු බවට ඉවත දැමූ ලෙඩින් හා නිවස ඉදිකිරිම සැනකළු කාලය</li>
          <li>අධයාපනම මානස හා බුද්ධිය විමසුම</li>
          <li>තහනම් අලුත් සෘතුන් රීතියටවම හා උපසම්මි වලට අලුත් කාලයේ</li>
          <li>ඔබට දිදුලුනු ගෙත දෙනු විශාරද හා දිදුලුනු ගෙත දෙනු සැනසීම</li>
          <li>අදමදි ශික්සන හා බල ශික්සන විශාරද</li>
          <li>කේටි කාලයයි සැනසුව මාන ගෙවීමේ පත විමසුම</li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
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
