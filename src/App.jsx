import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header,{NavBar,Setting,SearchBar} from './Components/header'
import Usercomponent, { Userkey } from './Components/UserComponent'
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
     </div>
  )
}
export default App;