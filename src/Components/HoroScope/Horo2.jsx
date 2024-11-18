
import React from 'react';
import typewriterImage from '/assets/image/num3.jpg';

function Horo2() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12 bg-gradient-to-r from-pink-200 to-violet-200 p-6 md:p-8 lg:p-12">
      
      {/* Text Section */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center text-center lg:text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
          ජ්‍යෝතිශය පාඨමාලාව
        </h2>
        <ul className="list-disc text-gray-800 text-lg md:text-xl font-bold leading-relaxed pl-4 lg:pl-6 space-y-2">
          <li>නිරයන දුෂ්ට කැන්දු සැදීම</li>
          <li>තාව කැන්දු සැදීම</li>
          <li>පලපල කථනය</li>
          <li>ගුහ ලගයි ස්තුති අලම ගුහ මූර්ති සැදීම</li>
          <li>පොරොහදමි පරිකථනය</li>
          <li>නාමකරණය</li>
          <li>වාස්තු විද්‍යාත ආභූෂණ සකස් කිරීම</li>
          <li>කක‍්‍රිෂ්ණ මූර්ති භාව කේන්ද්‍ර සෑදීම සහ ඒ තුළින් පලාපල කතනයි</li>
          <li>ශ‍්‍රිපති මූර්ති භාව කේන්ද්‍ර සෑදීම සහ ඒ තුළින් පලාපල කතනය</li>
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

export default Horo2;
