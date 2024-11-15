import React from "react";

const HoroscopeForm = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black px-4 py-8 lg:py-0 items-center justify-center gap-4">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/assets/image/img1.jpg"
          alt="Horoscope illustration"
          className="rounded-2xl shadow-2xl w-full lg:h-full object-cover border-2 border-amber-500"
          style={{ maxHeight: "500px" }} // Ensures it doesn't grow excessively tall
        />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl text-gray-700 border-2 border-amber-500">
          <h2 className="text-xl font-bold text-center mb-6 text-amber-700">
            අන්තිම වනාවට මුළු හදහනම එකවර බලාගන්න
          </h2>
          <h2 className="text-xl font-bold text-center mb-6 text-amber-700">
            Get Your Horoscope Report
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-600">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-amber-500 text-gray-700"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1 text-gray-600">
                  Sign
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-amber-500 text-gray-700">
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
                <label className="block text-sm font-semibold mb-1 text-gray-600">
                  Gender
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-amber-500 text-gray-700">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-600">
                Birth District
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-amber-500 text-gray-700"
                placeholder="Enter birth district"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-600">
                Birth Date & Time
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-amber-500 text-gray-700"
              />
            </div>

            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1 text-gray-600">
                  Hours
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-amber-500 text-gray-700">
                  <option>01</option>
                  <option>02</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1 text-gray-600">
                  Minutes
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-amber-500 text-gray-700">
                  <option>00</option>
                  <option>15</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1 text-gray-600">
                  AM/PM
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-amber-300 focus:border-amber-500 focus:ring-amber-500 text-gray-700">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-amber-500 to-amber-900 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition duration-200"
            >
              Get Report Within 24 Hrs
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HoroscopeForm;
