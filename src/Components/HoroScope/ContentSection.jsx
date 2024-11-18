

import React from 'react';
import typewriterImage from '/assets/image/content/8.jpg';

function ContentSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12 bg-gradient-to-r from-violet-200 to-pink-200 p-6 md:p-8 lg:p-12">
      
      {/* Text Section */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center text-center lg:text-left">
        {/* Heading */}
        {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
          ජ්‍යෝතිශය පාඨමාලාව
        </h2> */}
        <ul className="list-disc text-gray-800 text-lg md:text-3xl font-extralight leading-relaxed pl-4 lg:pl-6 space-y-2 sinhala-text tracking-wider">
            <li>fhda. msysáï ioyd wod mdm</li>
           <li>jia;=j Okh bvï foam eîï yd ksjdi bÈlsÍï ioyd iqn ld,hl</li>
           <li>woHdmkh uki yd nqoaêh ms</li>
           <li>yoyk wkqj iqÿiq /lshdjka yd Wiiaùï j,g wod</li>
           <li>Tng ÈhqKqj f.k fok úhdmr yd ÈhqKqj f.k fok iqn ld,hka</li>
           <li>wodhï úhoï yd mdvq ms</li>
           <li>flá ld,hla ioyd ,nd fok f.dapr m, jd¾;dj ^rú n%yiam;s yd fikiqre .%y n, mEu</li>
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
