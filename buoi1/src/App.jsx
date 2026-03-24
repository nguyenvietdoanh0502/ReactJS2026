import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table/Table'
import Button from './components/Button/Button'
import Chatbot from './components/Chatbot/Chatbot'


function App() {
  return (
    <>
      <div className='BTVN'>
        <Table />
        <Button />
        <Chatbot />
      </div>
      
    </>
    )
  
}
export default App
