
// import React from "react";
// import typewriterImage from "/assets/image/num3.jpg";

// function HoroscopeContent() {
//   return (
//     <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
      

//       {/* Text Section */}
//       <div className="col-span-4 lg:col-span-6">
//         {/* Heading */}
//         <h2 className="text-3xl font-semibold text-gray-900 mb-6">
//           ජ්‍යෝතිශය පාඨමාලාව
//         </h2>
//         <ul className="list-disc text-gray-800 text-xl font-bold leading-relaxed space-y-3 px-6 md:px-0">
//           <li>යොහෝ පිටිතී පද්ධති අදාල පැතලම</li>
//           <li>ඔබගේ විචාර ලක්ෂණ</li>
//           <li>විවාහය හා අලුත උප කාලය</li>
//           <li>බාන ය, රැකියා , ධනය</li>
//           <li>පොරොහදමි පරිකථනය</li>
//           <li>දරු පල විස්තර</li>
//           <li>ජීවිත කාලයට විශේෂ අතාල පලාපන</li>
//         </ul>
//       </div>
//       {/* Image Section */}
//       <div className="col-span-4 lg:col-span-6">
//         <img
//           src={typewriterImage}
//           alt="Typewriter with stars"
//           className="w-4/5 md:w-full lg:w-3/4 max-h-96 rounded-lg shadow-md object-cover"
//         />
//       </div>
//     </div>
//   );
// }

// export default HoroscopeContent;

import React from 'react';
import typewriterImage from '/assets/image/img3.jpg';

function ContentSection1() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12 bg-gradient-to-r from-violet-200 to-pink-200 p-6 md:p-8 lg:p-12">
      
      {/* Typewriter Image */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex justify-center items-center">
        <img
          src={typewriterImage}
          alt="Typewriter with stars"
          className="w-full md:w-4/5 lg:w-3/4 max-h-96 rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center text-center lg:text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 mb-4 sinhala-text">
        wdisß fcHd;sI fiajh
        </h2>
        <ul className="list-disc text-gray-800 text-lg md:text-3xl font-extralight leading-relaxed pl-4 lg:pl-6 space-y-2 sinhala-text tracking-wider ">
           <li>fhda. msysàï ioyd wodmdm</li>
           <li>Tnf.a pß; ,laIK</li>
           <li>újdyh yd wod Yn ld,hka</li>
           <li>Okh " /lshdj " úhdmdr</li>
           <li>ore m, úia;r</li>
           <li>Ôú; ld,hgu úfYaI wkd.; m,dm,</li>
        </ul>
      </div>
    </div>
  );
}

export default ContentSection1;
