import React, { useState } from 'react'
import Backgorund from './Components/Background/Backgorund';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  let heroData =[
    {text1:"Drive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"what you love"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus]=useState(true);
  return (
    <div>
      <Backgorund playStatus={playStatus} heroCount={heroCount}></Backgorund>
      <Navbar></Navbar>
      <Hero heroCount={setHeroCount}
            playStatus={setPlayStatus}
            setHeroCount={setHeroCount}
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}>  

       </Hero>
    </div>
  )
}

export default App
