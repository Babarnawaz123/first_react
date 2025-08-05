import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
function hello(){

  return  (
    <div>
    <h2>hello react</h2>
    <h2>hello world {sum()} </h2>
     <Header/>
     <Fruit/>
     <Color/>
     </div>
  )

 
}
function Fruit(){
  return (
   <h1>this fruit is Apple </h1>
  )
}
function Color(){
  return(
  <h4>color of this fruit is Red</h4>) 
}
function sum(){
  return(1000+1000)
}

export default hello;