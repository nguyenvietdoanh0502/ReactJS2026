import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/welcome/welcome'
import Goodbye from './components/Goodbye/Goodbye'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  )
}

export default App
