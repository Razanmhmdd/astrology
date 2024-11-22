import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
          <div
        className="relative bg-cover bg-center h-64 sm:h-80 md:h-96"
        style={{
          backgroundImage: "url('/assets/image/nume.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
            Contact us
          </h1>
          <p className="text-yellow-300 text-lg sm:text-xl">
            Just a few words
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-purple-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
        {/* Contact Details */}
        <div className="md:w-1/2 p-4 border-r border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Details</h2>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-purple-600 text-xl mr-4" />
            <p className="text-gray-600">No: 86, Super Market Complex, Matale, Sri Lanka</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-purple-600 text-xl mr-4" />
            <p className="text-gray-600">0772242525</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-purple-600 text-xl mr-4" />
            <p className="text-gray-600">srisethastrology.official@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactUs