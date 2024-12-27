import React from "react";

const HoroscopeForm = () => {
  return (
    <div
      className=" bg-cover bg-center flex flex-col items-center justify-start px-4 lg:px-0 py-8"
      style={{
        backgroundImage: `url('/assets/image/num2.jpg')`,
      }}
    >
      {/* Top Banner */}
      <div className="w-full max-w-[600px] mb-6 text-center">
        <div className="bg-gradient-to-r from-red-500 to-red-900 text-white rounded-xl p-4 shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Professional Horoscope Reading</h1>
          <p className="text-red-100">Expert Analysis of Your Celestial Path</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white w-full max-w-[600px] p-6 md:p-8 lg:p-10 rounded-xl shadow-xl border-2 border-red-900 mb-6">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-medium text-center mb-4 text-red-700 leading-snug text-sin">
          wka;su j;djg  uq¿ yoyku tljr n,d.kak
        </h2>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-red-700">
          Get Your Horoscope Report
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-1 text-red-600">
              Name <span>(නම)</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-red-300 focus:border-red-500 focus:ring-red-500 text-red-700"
              placeholder="Enter your name"
            />
          </div>

          {/* Sign and Gender */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm md:text-base font-semibold mb-1 text-red-600">
                Sign <span>(ලකුණ)</span>
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-red-300 focus:border-red-500 focus:ring-red-500 text-red-700">
                <option>Aries</option>
                <option>Taurus</option>
                <option>Gemini</option>
                <option>Cancer</option>
                <option>Leo</option>
                <option>Virgo</option>
                <option>Libra</option>
                <option>Scorpio</option>
                <option>Sagittarius</option>
                <option>Capricorn</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm md:text-base font-semibold mb-1 text-red-600">
                Gender<span>( පුරුෂ භාවය)</span>
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-red-300 focus:border-red-500 focus:ring-red-500 text-red-700">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          {/* Birth District */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-1 text-red-600">
              Birth District<span>(උපන් දිස්ත්රික්කය)</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-red-300 focus:border-red-500 focus:ring-red-500 text-red-700"
              placeholder="Enter birth district"
            />
          </div>

          {/* Birth Date & Time */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-1 text-red-600">
              Birth Date & Time<span>(උපන් දිනය සහ වේලාව)</span>
            </label>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 rounded-lg border border-red-300 focus:border-red-500 focus:ring-red-500 text-red-700"
            />
          </div>

          {/* Hours, Minutes, AM/PM */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm md:text-base font-semibold mb-1 text-red-600">
                Hours<span>(පැය)</span>
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-red-300 focus:border-red-500 focus:ring-red-500 text-red-700">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm md:text-base font-semibold mb-1 text-red-600">
                Minutes<span>(මිනිත්තු)</span>
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-red-300 focus:border-red-500 focus:ring-red-500 text-red-700">
                <option>00</option>
                <option>15</option>
                <option>30</option>
                <option>45</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm md:text-base font-semibold mb-1 text-red-600">
                AM/PM <span></span>
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-red-300 focus:border-red-500 focus:ring-red-500 text-red-700">
                <option>AM (පෙ.ව.)</option>
                <option>PM (ප.ව.)</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-red-500 to-red-900 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition duration-200"
          >
            Get Report Within 7 Days 
          </button>
        </form>
      </div>

      {/* Bottom Info Cards */}
      {/* <div className="w-full max-w-[600px] grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/90 p-4 rounded-xl shadow-lg border border-red-300">
          <h3 className="text-lg font-semibold text-red-700 mb-2">Why Choose Us?</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✨ Expert Astrologers</li>
            <li>🌟 Detailed Analysis</li>
            <li>⚡ Quick Turnaround</li>
          </ul>
        </div>
        <div className="bg-white/90 p-4 rounded-xl shadow-lg border border-red-300">
          <h3 className="text-lg font-semibold text-red-700 mb-2">Important Notice</h3>
          <p className="text-sm text-gray-600">
            Please ensure all details are accurate for the most precise reading. Your report will be delivered within 7 days.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HoroscopeForm;
