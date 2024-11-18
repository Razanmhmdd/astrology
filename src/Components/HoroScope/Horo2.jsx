
import React from 'react';
import typewriterImage from '/assets/image/num3.jpg';

function Horo2() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12 bg-gradient-to-r from-pink-200 to-violet-200 p-6 md:p-8 lg:p-12">
      
      {/* Text Section */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 flex flex-col justify-center items-center text-center lg:text-left">
        {/* Heading */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-extralight text-gray-900 mb-4 sinhala-text tracking-wider">
        fcHda;sYh mdGud,dj

        </h2>
        <ul className="list-disc text-gray-800 text-lg md:text-3xl font-extralight leading-relaxed pl-4 lg:pl-6 space-y-2 sinhala-text tracking-wider">
          <li>ksrhk o</li>
          <li>Ndj flakaø iE§u          </li>
          <li>m,dM, l:kh          </li>
          <li>Y=N ,.ak iaMqG w,,d Y=N uQ¾;s iE§u          </li>
          <li>fmdfrdkaoï mÍlaIdj          </li>
          <li>kdulrKh          </li>
          <li>jdia;= úoHdj wkqj ie,iqï we§u          </li>
          <li>l%sIaK uQ¾;s Ndj flakaø iE§u iy tA </li>
          <li>Y%sm;s uQ¾;s Ndj flakaø iE§u iy tA </li>
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
