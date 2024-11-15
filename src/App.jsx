import React from 'react'
import NavbarBasic from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import HoroscopeForm from './Components/HoroScope/HoroscopeForm'
import HoroscopeContent from './Components/HoroScope/HoroscopeContent'
import ContentSection from './Components/HoroScope/ContentSection'
import Horo1 from './Components/HoroScope/Horo1'
import Horo2 from './Components/HoroScope/Horo2'
import Planat from './Components/Planat/Planat'
import About from './Components/Mission&Vission/About'
import AstrologyInfo from './Components/AstrologyInfo/AstrologyInfo'
import CardSlider from './Components/CardSlider/CardSlider'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <NavbarBasic/>
      <Hero/>
      <HoroscopeForm/>
      <HoroscopeContent/>
      <ContentSection/>
      <Horo1/>
      <Horo2/>
      <Planat/>
      <About/>
      <AstrologyInfo/>
      <CardSlider/>
      <Footer/>
    </div>
  )
}

export default App