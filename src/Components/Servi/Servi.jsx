import React from 'react'
import Horo2 from '../HoroScope/Horo2'
import ContentSection1 from '../HoroScope/HoroscopeContent'
import ContentSection from '../HoroScope/ContentSection'

const Servi = () => {
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
            Our Services
          </h1>
          <p className="text-yellow-300 text-lg sm:text-xl">
            Just a few words
          </p>
        </div>
      </div>
      <ContentSection/>
      <ContentSection1/>
    <Horo2/>
    </div>
  )
}

export default Servi