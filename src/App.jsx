import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import SignUp from './components/Sign/SignUp'


function App() {
  

  return (
    <>
      
      <Navbar/>
      <SignUp />
      <Home/>
      <Footer/>
    
     
      
      
    </>
  )
}

export default App