import React from 'react';
import typewriterImage from '/assets/image/num3.jpg';

function Horo2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-pink-200 to-violet-200 p-6 md:p-8 lg:p-12 text-sin">
      
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center text-center md:text-left">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 mb-6 sinhala-text tracking-wide ">
        fcHda;sYh mdGud,dj
        </h2>
        
        {/* List Items */}
        <ul className="list-disc text-gray-800 text-base md:text-lg lg:text-2xl font-medium leading-relaxed pl-4 md:pl-6 space-y-3 sinhala-text">
          <li>{" ksrhk o< flakao% iE§u"}</li>
          <li>Ndj flakao% iE§u</li>
          <li>m,dM, l:kh</li>
          <li>YqN ,.ak iajqG w,,d YqN uQ¾;s iE§u</li>
          <li>fmdfrdkaoï mÍlaIdj</li>
          <li>kdulrKh</li>
          <li>jdia;= úoHdj wkqj ie,iqï we§u</li>
          <li>{"C%sIaK uQ¾;s Ndj flakao% iE§u iy ta ;=<ska m,dm, l;kh"}</li>
          <li>{"Y‍%sm;s uQ¾;s Ndj flakao% iE§u iy ta ;=<ska m,dm, l;kh"}</li>
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
