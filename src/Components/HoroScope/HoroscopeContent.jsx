
import React from "react";
import typewriterImage from "/assets/image/num3.jpg";

function HoroscopeContent() {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-around p-6 md:p-12 bg-gradient-to-r from-pink-200 to-violet-200 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6">
      

      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          ජ්‍යෝතිශය පාඨමාලාව
        </h2>
        <ul className="list-disc text-gray-800 text-xl font-bold leading-relaxed space-y-3 px-6 md:px-0">
          <li>යොහෝ පිටිතී පද්ධති අදාල පැතලම</li>
          <li>ඔබගේ විචාර ලක්ෂණ</li>
          <li>විවාහය හා අලුත උප කාලය</li>
          <li>බාන ය, රැකියා , ධනය</li>
          <li>පොරොහදමි පරිකථනය</li>
          <li>දරු පල විස්තර</li>
          <li>ජීවිත කාලයට විශේෂ අතාල පලාපන</li>
        </ul>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={typewriterImage}
          alt="Typewriter with stars"
          className="w-4/5 md:w-full lg:w-3/4 max-h-96 rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
}

export default HoroscopeContent;

