import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header,{NavBar,Setting,SearchBar,Jsx} from './Components/header'
import Usercomponent, { Userkey } from './Components/UserComponent'
import Todo from './Components/Todo'
import Practice_jsx from './Components/jsx_Practice'
function App(){

  return  (
    <div>
    
    <NavBar/>
     <Header/>
    <h2>hello react</h2>
    <h2>hello world </h2>
    <Setting/>
    <SearchBar/>
     <Usercomponent/>
   
     <h1>{Userkey}</h1>
       <Jsx/>
         <Todo/>
         <Practice_jsx/>
     </div>
  )
}
export default App;