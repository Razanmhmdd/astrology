import React from "react";
import foodImage from "/assets/image/about.jpg"
const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Top Section with Background */}
      <div
        className="relative bg-cover bg-center h-64 sm:h-80 md:h-96"
        style={{
          backgroundImage: "url('/assets/image/nume.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            About us
          </h1>
          <p className="text-yellow-300 text-lg sm:text-xl">
            Just a few words
          </p>
        </div>
      </div>

      {/* <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         
          <div className="flex justify-center md:justify-end">
            <img
              src="/path-to-your-profile-image.jpg"
              alt="Profile"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full shadow-lg"
            />
          </div>

         
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              අපට තොර ගතීමට වඩා සුදුසු වන්නේ කවුරුද?
            </h2>
            <p className="text-gray-600 text-justify text-sm sm:text-base leading-relaxed">
            අපි ශ්‍රී ලංකාවේ අංක එකේ ane සේවය අ8 සිංහල නානාවෙන් සිගින් යන්දුර කියවීමේ තේවාව කගෙවා පුද්ගලයෙකුගේ අනාගත ජිවීහය අවබෝධ කර ගැනීම සඳහා කේන්දර කියවීම පුරාණ ශාස්ත‍්‍රය වී අපගේ දැකම "me මිනිසෙකු සඳහා කේන්දර" වේ අනාගතය ගැන වඩා wඳ අවබෝධයක් ලබා ගැනීමට සහ අනාගතයට සුදානම් වීමට සඹදී කේන්දර කියවීම කෙනෙකුටම වඩා වැදගත් වේ අරි වසර 25ක් පුරාවට අනාවැකි යන්නේ ජෙns දශාව send කරගෙනයි අපයෝ සිංහල කෝන්දුර වාර්තාව (කේන්දර කලාප@ Bone) węරයක සියලුම අංග ආවරණය වන 8 30කට වඩා වැඩි 20 450 සිga : ශාස්ත්‍රිය වාව ලබා සහ SE අපි සිබගේ විවාහය රැකියාව වෘත්තිය විවාහයට හොඳ කාලය ව්‍යාර කඳහා ę eac රැකියාවට හොඳ නාලය යනාදි noy progs හරම් අප විසින් සපයනු ලබන මාර්ගගත කේන්දර කියවීමේ සිංහල සේවාව ශ්‍රී ලංකාවේ වඩාත්ම විවාxක යාති සෝවාවහි              <br />
              අපේ ජීවිතය අගනා මතකයන් සම්භාරයක් බවට පත්කර ගැනීමට සහ ඔබේ අරමුණ
              සපුරා ගැනීමට, අපි ඔබේ විශ්වාසවන්ත සහකරු වෙමු. ඔබේ විශ්වාසය
              සහය සමඟ, අපි නව අධිෂ්ඨාන මංමාවත් සොයා යාමට සූදානම්.
            </p>
          </div>
        </div>
      </div> */}
      <section className="bg-gray-100 py-10 px-5 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={foodImage}
              alt="Sri Lankan Authentic Food"
              className="rounded-lg shadow-lg object-cover w-full h-80 md:h-[400px]"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
            අපට තොර ගතීමට වඩා සුදුසු වන්නේ කවුරුද?
            </h2>
          <p>
              අපි ශ්‍රී ලංකාවේ අංක එකේව  සිංහල නානාවෙන් සිලයින් සෝන්දුර හියවීමෙ තේවාව සස්ථිනෙවා පුද්ගලයෙකුගේ අනාගත චිතය අවබෝධ කර ගැනීම සඳහා කේන්දර කියවීම පුරාණ ජි. ශාස්තරය වේ අපගේ දැව " සඳනාව කේන්දර" වේ අ වඩා හොඳ අවබෝධයක් ලබා ගැනීමට සහ අනාගතයට සුදානම් වීමට සබැදි කේන්දර කියවීම කම කෙනෙකුටම වඩා වැදගත් වේ අපි වසර ක් පුරාවට අගාව  ජෙහා දගාව නම් කරගෙන අපගේ සිංහල කේන්දර වාර්තාව (කේන්දර පලාපල සිංහල) කෙන්දරයක සියලුම අංග ආවරණය වන ටුකට වඩා වැඩි ඔබ අප සිga  සේවාව ලමා ගත් ඔබගේ විනය රැකියාව වෘය විවානයට හොඳ කාලය ව්‍යාන්තර ඥා x නාලය රැකියාවට කොඳ කාලය යනාදි කරනු ඇතමුන් හරන්නෙ අප විසින් සපයනු ලබන මාර්ගගත කේන්දුර කියවීමෙ සිංහල සේවාව ශ්‍රී ලංකාවේ වඩාත්ම විශ්වාසදායක යාතික සේවාවයි
            </p>
            <p className="text-gray-800 text-base md:text-sm font-normal mb-4">
              Contact me: <br />
              <a href="tel:+94773544300" className="hover:underline">0772242525</a> <br />
            </p>
            <p className="text-gray-700 text-base md:text-sm mb-4">
              Yours Sincerely, <br />
              <span className="font-normal text-gray-800">Astrologist</span> <br />
              Sri Seth
            </p>
      
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
