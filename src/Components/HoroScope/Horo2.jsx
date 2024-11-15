import React from 'react';

function Horo2() {
  return (
    <div className="bg-black min-h-screen py-10 px-4 md:px-20 lg:px-40 flex flex-col items-center">
      {/* Header Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
      ජ්‍යෝතිශය පාඨමාලාව
      </h1>
      
      {/* Subtitle Section */}
      <div className="bg-yellow-500 text-center text-gray-200 text-xl md:text-2xl font-medium rounded-full px-8 py-2 mb-8">
      2024 මැයි මස සිට ආරම්භ කෙරේ.
      </div>

      {/* List Section */}
      <ul className="text-white text-lg md:text-xl font-semibold list-disc list-inside space-y-4 mb-12">
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
  );
}

export default Horo2;
