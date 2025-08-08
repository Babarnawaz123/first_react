import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header'
import Usercomponent, { Userkey } from './Components/UserComponent'
import Todo from './Components/Todo'
import Practice_jsx from './Components/jsx_Practice'
import States from './Components/states'

function App(){
  return  (
    <div>
     <Header/>

    <h2>hello react</h2>
    <h2>hello world </h2>
    
     <Usercomponent/>
     <h1>{Userkey}</h1>
       
         <Todo/>
         <Practice_jsx/>
         <States name="Babar Nawaz" age={22} stdName = "Tariq" stdId = "RCF-30121" ProName="Smart Watch" ProId="watch-4533"   ProDes="At the heart of our smartwatches lies a commitment to your well-being. With advanced health monitoring features including heart rate tracking, stress management and sleep monitoring, our smartwatches empower you to take control of your fitness journey like never before. Whether you're a fitness enthusiast striving to reach new milestones or someone prioritizing holistic wellness, our smartwatches provide actionable insights and personalized guidance to support your health and wellness goals."/>
         
     </div>

  )
}
export default App;