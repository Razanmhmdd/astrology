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
      <section className="bg-purple-100 py-10 px-5 md:px-20">
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
            <h2 className="text-3xl md:text-4xl font-light text-purple-500 mb-4 text-sin">
            wmg f;dr .;Sug jvd iqÿiq jkafka ljqreo@
            </h2>
          <p className="text-sin ">
            {"wms › ,xldfõ wxl tfla fcHd;sI fiajhhs’ wms isxy, NdIdfjka Tka,hska flakaor lshùfï fiajdj imhkjd’ mqoa.,fhl=f.a wkd.; Ôú;h wjfndaO lr .ekSu i|yd flakaor lshùu mqrdK Êfhda;s# Ydia;arh fõ’ wmf.a oelau —iEu ñksfil= i|ydu flakaor— fõ’ wkd.;h .ek jvd fyd| wjfndaOhla ,nd .ekSug iy wkd.;hg iQodkï ùug ine¢ flakaor lshùu iEu flfkl=gu jvd jeo.;a fõ’ wms jir 25la mqrdjg wkdjels imhkafka fcHd;sI oYdj mokï lrf.khs’ wmf.a isxy, flakaor jd¾;dj ^flakaor m,dm, isxy,& flakaorhl ish¨u wx. wdjrKh jk msgq 30lg jvd jeäh’ Tn wmf.a Tka,hska fcHda;s# Ydia;%Sh fiajdj ,nd .;a miq wms Tnf.a újdyh” /lshdj” jD;a;sh” újdyhg fyd| ld,h” jHdmdr i|yd fyd| ld,h” /lshdjg fyd| ld,h hkd§ lreKq we;=<;a lrkafkuq’ wm úiska imhkq ,nk ud¾..; flakaor lshùfï isxy, fiajdj › ,xldfõ jvd;au úYajdiodhl fcHd;sI fiajdjhs’"}
            </p>
            <br/>
            <p className="text-sin ">
            {"jeä úia;r iy ksjerÈ wkdjels iys; Tka,hska flakaor isxy, Tng ,nd .; yels tlu ia:dkh fuhhs’ › ,dxlSh fcHd;sI m%;sl¾u ÿIalr;d wvq lr .ekSu i|yd nqÿoyfï mQcdj u; mokï fõ ^isxyf,ka wm, f,i ye¢kafõ& mQcd fjkqjg wms ks¾foaY lrkafka ÿIalr;d uÕyrjd .ekSu i|yd ^piritical& úi÷ï ^isxyf,ka wm, f,i ye¢kafõ&’ Tn ì;a ;rej fyda fcHd;sI rdYs pl%h isxyf,ka ,.akh f,i y÷kajk w;r flakaorfha msysàu wkqj Tfí Ôú;h ms<sn| jeä úia;r imhhs’ tlu ckau ;drldj fyda fcHd;sI rdYs pl%h isxy,fha ,.akh f,i ye¢kaùu o flakaorfha msysàu wkqj úúO o;a; imhhs’"}
            </p>
            <p className="text-gray-800 text-base md:text-sm font-semibold mb-4">
              Contact me: <br />
              <a href="tel:+94773544300" className="hover:underline">0772242525</a> <br />
            </p>
            <p className="text-gray-700 text-base md:text-sm mb-4">
              Yours Sincerely, <br />
              <span className="font-semibold text-gray-800">Astrologist</span> <br />
              Sri Seth
            </p>
      
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
