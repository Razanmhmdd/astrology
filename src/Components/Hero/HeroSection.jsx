import React from 'react'

const HeroSection = () => {
  return (
     <div
        className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/image/nume.jpg')` }}
      >
      
        <div className="absolute inset-0 bg-black opacity-50"></div>

      
        <div className="relative z-10 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-amber-400 sm:text-7xl">
              SRI SETH <span className='text-purple-50'>ASTROLOGY</span>
            </h1>
            <p className="mt-8 text-pretty text-lg font-extrabold text-purple-200 sm:text-xl/8">
            අරමුණක් ඇති විටෙක පෙරමුණක් සැදෙනු ඇත. පෙරමුණේ යන අයගේ ජීවිතය සාක්ෂාත් වනු ඇත
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div> 
  )
}

export default HeroSection