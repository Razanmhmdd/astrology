

import React from 'react';
import typewriterImage from '/assets/image/content/8.jpg';

function ContentSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12 bg-gradient-to-r from-violet-200 to-pink-200 p-6 md:p-8 lg:p-12">
      
      {/* Text Section */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center text-center lg:text-left text-sin">
        {/* Heading */}
       
        <ul className="list-disc text-gray-800 text-base md:text-lg lg:text-2xl font-medium leading-relaxed pl-4 md:pl-6 space-y-3 sinhala-text">
            <li>{"fhda. msysáï ioyd wod< m,dm"}</li>
           <li>{"jia;=j Okh bvï foam< ,eîfï yd ksjdi bÈlsÍï ioyd iqn ld,hla"}</li>
           <li>{"woymkh uki yd nqoaêh ms<sno"}</li>
           <li>{"yoyk wkqj iqÿiq /lshdjka yd Wiiaùï j,g wod< iqn ld,hka"}</li>
           <li>{"Tng ÈhqKqj f.k fok hdmr yd ÈhqKqj f.k fok iqn ld,hka"}</li>
           <li>{"wodhï úhoï yd mdvq ms<sno úia;r"}</li>
           <li>{"flá ld,hla ioyd ,nd fok f.dapr m, jd¾;dj"} </li>
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

export default ContentSection;
