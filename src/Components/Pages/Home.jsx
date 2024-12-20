import React from 'react'
import HoroscopeForm from "../HoroScope/HoroscopeForm"
import HoroscopeContent from "../HoroScope/HoroscopeContent"
import ContentSection from "../HoroScope/ContentSection"
import Horo2 from "../HoroScope/Horo2"
import Planat  from '../Planat/Planat'
import About from "../Mission&Vission/About"
import AstrologyInfo from "../AstrologyInfo/AstrologyInfo"
import CardSlider from "../CardSlider/CardSlider"
import Footer from '../Footer/Footer'
import ContentSection1 from '../HoroScope/ContentSection1'
import Example from '../Navbar/Navbar'
import HeroSection from '../Hero/HeroSection'
import Cardslider1 from '../CardSlider/Cardslider1'
const Home = () => {
  return (
    <div>
     {/* <NavbarBasic/> */}
      <Example Page={<HeroSection />}/>
    {/* <Hero/> */}
    <HoroscopeForm/>
    <HoroscopeContent/>
    <ContentSection/>
    <ContentSection1/>
    <Horo2/>
    <Planat/>
    <AstrologyInfo/>
    {/* <CardSlider/> */}
    <Cardslider1/>
    <About/>
    <Footer/>
    </div>
  )
}

export default Home

