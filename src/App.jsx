import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './layout/Navigation'
import Card from './layout/Card'
function App() {
  

  return (
    <>
    <div className='w-full justify-items-center mt-10 p-4 grid grid-cols-1'>
      <Navigation />

    </div>
    <div className='justify-items-center mt-2 h-full grid grid-cols-1 p-4 md:p-10 w-full'>
      <Card />
    </div>

    <footer className='p-20 text-center'>
      <p>ich liebe pikachu</p>
      <p>Made with react</p>
    </footer>
    
      
    </>
  )
}

export default App
