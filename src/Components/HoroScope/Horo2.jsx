import React from 'react';
import typewriterImage from '/assets/image/num3.jpg';

function Horo2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-pink-200 to-violet-200 p-6 md:p-8 lg:p-12">
      
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center text-center md:text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-600 mb-6 sinhala-text tracking-wide">
          ජ්‍යෝතිශය පාඨමාලාව
        </h2>
        
        {/* List Items */}
        <ul className="list-disc text-gray-800 text-base md:text-lg lg:text-2xl font-bold leading-relaxed pl-4 md:pl-6 space-y-3 sinhala-text">
          <li>නිරයන දළ කේන්ද්‍ර සෑදීම</li>
          <li>භාව කේන්ද්‍ර සෑදීම</li>
          <li>පලාඵල කථනය</li>
          <li>ශුභ ලග්න ස්වුඨ අලලා ශුභ මූර්ති සෑදීම</li>
          <li>පොරොන්දම් පරීක්ෂාව</li>
          <li>නාමකරණය</li>
          <li>වාස්තු විද්‍යාව අනුව සැලසුම් ඇදීම</li>
          <li>ක‍්‍රිෂ්ණ මූර්ති භාව කේන්ද්‍ර සෑදීම සහ ඒ තුළින් පලාපල කතනය</li>
          <li>ශ‍්‍රිපති මූර්ති භාව කේන්ද්‍ර සෑදීම සහ ඒ තුළින් පලාපල කතනය</li>
        </ul>
      </div>

      {/* Typewriter Image */}
      <div className="flex justify-center items-center">
        <img
          src={typewriterImage}
          alt="Typewriter with stars"
          className="w-full sm:w-4/5 md:w-full lg:w-3/4 max-h-96 rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
}

export default Horo2;
