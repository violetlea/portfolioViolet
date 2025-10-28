import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './layout/Navigation'
import Card from './layout/Card'
function App() {
  

  return (
    <>
    <div className='border-2 border-black justify-items-center mt-10 p-4 grid grid-cols-1'>
      <Navigation />

    </div>
    <div className='border-2 border-red-400 justify-items-center mt-8 h-full grid grid-cols-1 p-8 w-full'>
      <Card />
    </div>
    
      
    </>
  )
}

export default App
