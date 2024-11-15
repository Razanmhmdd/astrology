import React from 'react';
import img1 from "/assets/image/content/1.png"
import img2 from "/assets/image/content/2.png"
import img3 from "/assets/image/content/3.png"
import img4 from "/assets/image/content/4.png"
import img5 from "/assets/image/content/5.png"



export default function HoroscopeContent() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-4 py-10 text-center">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      ආසිරි ජ්‍යොතිෂ සේවය
      </h1>

      {/* Icon Row */}
      <div className="flex justify-center space-x-6 mb-8">
        <img src={img1} alt="Icon 1" className="w-8 h-8 md:w-10 md:h-10" />
        <img src={img2} alt="Icon 2" className="w-8 h-8 md:w-10 md:h-10" />
        <img src={img3} alt="Icon 3" className="w-8 h-8 md:w-10 md:h-10" />
        <img src={img4} alt="Icon 3" className="w-8 h-8 md:w-10 md:h-10" />
      </div>

      {/* Horoscope Chart Image */}
      <div className="flex justify-center mb-8">
        <img src={img5} alt="Horoscope Chart" className="w-64 h-64 md:w-80 md:h-80 opacity-80" />
      </div>

      {/* Horoscope Details */}
      <div className="space-y-4 mb-8">
        {[
          'යොහෝ පිටිතී පද්ධති අදාල පැතලම',
          'ඔබගේ විචාර ලක්ෂණ',
          'විවාහය හා අලුත උප කාලය',
          'බාන ය, රැකියා , ධනය',
          'දරු පල විස්තර',
          'ජීවිත කාලයට විශේෂ අතාල පලාපන'
        ].map((text, index) => (
          <button key={index} className="w-full md:w-96 bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            {text}
          </button>
        ))}
      </div>

      {/* Planet Icons */}
      <div className="flex justify-center space-x-4">
      {/* <img src={img6} alt="Horoscope Chart" className="w-auto h-auto md:w-80 md:h-80 opacity-80" /> */}
      </div>
    </div>
  );
}
