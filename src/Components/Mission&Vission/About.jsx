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
          ඔබගේ සවිස්තරාත්මක ජෝතිෂ්‍ය වාර්තාවට ස්තූතියි. එය මට මඟපෙන්වීම සහ ආනුභාවය අවශ්‍ය විටෙක මට යොමු කළ හැකි වටිනා සම්පතකි. ඔබේ තීක්ෂ්ණ බුද්ධිය මගේ ජීවිතයට ධනාත්මක බලපෑමක් ඇති කර ඇත
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Miss. Kaluarachchi</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <p className="text-gray-700">
          මම සම්පූර්ණයෙන්ම ජෝතිෂ්‍ය අනාවැකි මත තීරණ ගන්නේ නැහැ. නමුත් ආසිරි ජ්‍යොතිෂ්‍ය වාර්තාව මගේ ජීවිතයේ සහ අනාගතයේ විවිධ පැති ගැන තීක්ෂ්ණ බුද්ධියක් ලබා දුන්නේය. ඔබගේ සේවයට ස්තුතියි.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Mr. Shantha</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <p className="text-gray-700">
          මට සම්පූර්ණ සහ නිවැරදි කේන්දර අනාවැකි වාර්තාව ලැබුණා. මට මඟ පෙන්වීම සහ ආශ්වාදය අවශ්‍යයි. ඔබේ තීක්ෂ්ණ බුද්ධිය මගේ ජීවිතයට ධනාත්මක බලපෑමක් ඇති කර ඇත. පැය 24ක් ඇතුළත සවිස්තර වාර්තාවක් ලබා දීම ගැන ස්තුතියි
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
