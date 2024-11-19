import React from "react";

const HoroscopeForm = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-start px-4 lg:px-0"
      style={{
        backgroundImage: `url('/assets/image/num2.jpg')`, // Replace with your actual background image path
      }}
    >
      {/* Form Container */}
      <div
        className="bg-white w-full sm:w-full md:max-w-lg p-6 md:p-8 lg:p-10 rounded-xl shadow-xl border-2 border-purple-500"
        style={{
          margin: "10%",
        }}
      >
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-purple-700 leading-snug">
          අන්තිම වතාවට  මුළු හදහනම එකවර බලාගන්න
        </h2>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 text-purple-700">
          Get Your Horoscope Report
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-1 text-purple-600">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:border-purple-500 focus:ring-purple-500 text-gray-700"
              placeholder="Enter your name"
            />
          </div>

          {/* Sign and Gender */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm md:text-base font-semibold mb-1 text-gray-600">
                Sign
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:border-purple-500 focus:ring-purple-500 text-gray-700">
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
              <label className="block text-sm md:text-base font-semibold mb-1 text-gray-600">
                Gender
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:border-purple-500 focus:ring-purple-500 text-gray-700">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          {/* Birth District */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-1 text-gray-600">
              Birth District
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:border-purple-500 focus:ring-purple-500 text-gray-700"
              placeholder="Enter birth district"
            />
          </div>

          {/* Birth Date & Time */}
          <div>
            <label className="block text-sm md:text-base font-semibold mb-1 text-gray-600">
              Birth Date & Time
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:border-purple-500 focus:ring-purple-500 text-gray-700"
            />
          </div>

          {/* Hours, Minutes, AM/PM */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm md:text-base font-semibold mb-1 text-gray-600">
                Hours
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:border-purple-500 focus:ring-purple-500 text-gray-700">
                <option>01</option>
                <option>02</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm md:text-base font-semibold mb-1 text-gray-600">
                Minutes
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:border-purple-500 focus:ring-purple-500 text-gray-700">
                <option>00</option>
                <option>15</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm md:text-base font-semibold mb-1 text-gray-600">
                AM/PM
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:border-purple-500 focus:ring-purple-500 text-gray-700">
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-purple-500 to-purple-900 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition duration-200"
          >
            Get Report Within 24 Hrs
          </button>
        </form>
      </div>
    </div>
  );
};

export default HoroscopeForm;
