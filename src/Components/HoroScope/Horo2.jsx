// import React from 'react';
// import typewriterImage from '/assets/image/img3.jpg';

// function Horo2() {
//   return (
//     <div className="bg-gradient-to-r from-violet-200 to-pink-200 min-h-screen py-10 px-4 md:px-20 lg:px-40 flex flex-col items-center">
//       {/* Main Section: Content and Image */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0">
//         {/* Content Section */}
//         <div className="flex-1 text-black text-lg md:text-xl font-bold space-y-4 md:pr-8">
//           {/* Header Section */}
//           <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-black mb-4">
//             ජ්‍යෝතිශය පාඨමාලාව
//           </h1>

//           {/* Subtitle Section */}
//           <div className="bg-amber-500 text-center md:text-left text-gray-200 text-xl md:text-2xl font-medium rounded-full px-8 py-2 mb-8">
//             2024 මැයි මස සිට ආරම්භ කෙරේ.
//           </div>

//           {/* List Section */}
//           <ul className="list-disc list-inside">
//             <li>නිරයන දුෂ්ට කැන්දු සැදීම</li>
//             <li>තාව කැන්දු සැදීම</li>
//             <li>පලපල කථනය</li>
//             <li>ගුහ ලගයි ස්තුති අලම ගුහ මූර්ති සැදීම</li>
//             <li>පොරොහදමි පරිකථනය</li>
//             <li>නාමකරණය</li>
//             <li>වාස්තු විද්‍යාත ආභූෂණ සකස් කිරීම</li>
//             <li>කක‍්‍රිෂ්ණ මූර්ති භාව කේන්ද්‍ර සෑදීම සහ ඒ තුළින් පලාපල කතනයි</li>
//             <li>ශ‍්‍රිපති මූර්ති භාව කේන්ද්‍ර සෑදීම සහ ඒ තුළින් පලාපල කතනය</li>
//           </ul>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1 w-full md:w-1/2 lg:w-1/3">
//           <img
//             src={typewriterImage}
//             alt="Astrology Illustration"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Horo2;
import React from 'react';
import typewriterImage from '/assets/image/content/new.jpg';

function Horo2() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-6 md:p-12 bg-gradient-to-r from-pink-200 to-violet-200 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6">
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          ජ්‍යෝතිශය පාඨමාලාව
        </h2>
        <ul className="list-disc text-gray-800 text-xl font-bold leading-relaxed space-y-3 px-6 md:px-0">
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

export default Horo2;
