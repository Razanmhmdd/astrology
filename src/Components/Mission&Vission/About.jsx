import React from 'react';
import { MdWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 bg-gradient-to-r from-violet-200 to-pink-200 min-h-screen ">
      <h2 className="text-4xl font-medium text-gold-500 mb-8 text-center text-sin"> wmg wu;kak
      </h2>

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
      <h2 className="text-4xl font-normal text-gold-500 mb-8 text-center text-sin">wmf.a mdßfNda.sl woyia
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md ">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Mr. Silva</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <p className="text-gray-500 text-sin">
            {"Tnf.a iúia;rd;aul fcda;sIH jd¾;djg ia;+;shs' th ug uÕfmkaùu iy wdkqNdjh wjYH úfgl ug fhduq l< yels jákd iïm;ls' Tfí ;SlaIaK nqoaêh uf.a Ôú;hg Okd;aul n,mEula we;s lr we;'"}
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md ">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Miss. Kaluarachchi</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <p className="text-gray-500 text-sin">
          {"uu iïmQ¾Kfhkau fcda;sIH wkdjels u; ;SrK .kafka keye' kuq;a wdisß fcHd;sIH jd¾;dj uf.a Ôú;fha iy wkd.;fha úúO me;s .ek ;SlaIaK nqoaêhla ,nd ÿkafkah' Tnf.a fiajhg ia;=;shs'"}
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md ">
          <h3 className="text-lg font-semibold text-purple-700 mb-2">Mr. Shantha</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★★</span>
          </div>
          <p className="text-gray-500 text-sin">
          {"ug iïmQ¾K iy ksjerÈ flakaor wkdjels jd¾;dj ,enqKd' ug uÕ fmkaùu iy wdYajdoh wjYHhs' Tfí ;SlaIaK nqoaêh uf.a Ôú;hg Okd;aul n,mEula we;s lr we;' meh 24la we;=<; iúia;r jd¾;djla ,nd §u .ek ia;=;shs'"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
