import React from 'react';
import { MdWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 bg-gradient-to-r from-violet-200 to-pink-200 min-h-screen">
      <h2 className="text-4xl font-semibold text-gold-500 mb-8 text-center">අපට අමතන්න</h2>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mb-12">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg">
          <span className="text-3xl mb-2"><MdEmail/></span>
          <h3 className="text-lg font-semibold text-purple-700">Email</h3>
          <p className="text-gray-700">srisethastrologyofficial@gmail.com</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg">
          <span className="text-3xl mb-2"><MdWifiCalling3/></span>
          <h3 className="text-lg font-semibold text-purple-700">Contact</h3>
          <p className="text-gray-700">077 224 25251</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg">
          <span className="text-3xl mb-2"><RiWhatsappFill/></span>
          <h3 className="text-lg font-semibold text-purple-700">WhatsApp</h3>
          <p className="text-gray-700">0772242525</p>
        </div>
      </div>

      {/* Testimonials */}
      <h2 className="text-4xl font-semibold text-gold-500 mb-8 text-center">අපගේ පාරිභෝගික අදහස්</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Mr. Silva</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <p className="text-gray-700">
            ඔබගේ අස්තෝrologවිශේෂඥ පසුකාලීන වාර්තා මට වාසිදායක වේවි. මෙම වර්ෂයට සවිස්තරාත්මක පිළිබඳ විශ්ලේෂණ ඔබට
            දැනුම් දී ඇත.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Miss. Kaluarachchi</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <p className="text-gray-700">
            මගේ අත්දැකීම් හා පැරණි වාර්තා ඔබ සතුව ඇත. මෙම වර්ෂයට විශ්ලේෂණ වාර්තා මට විශ්වාසනීය බවක් දක්වයි.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Mr. Shantha</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <p className="text-gray-700">
            ඔබේ අස්තෝrologවිශේෂඥ වාර්තා මට හෝ සවිස්තරාත්මක අවශ්‍ය වේ. විශ්ලේෂණ වාර්තා ඉතා වැදගත් බවක් ඇති වේ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
