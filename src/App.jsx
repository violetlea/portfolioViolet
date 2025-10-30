import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './layout/Navigation'
import Card from './layout/Card'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import RootPage from './root/root'
function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootPage />}>

  </Route>
))

  return (

    <RouterProvider router={router}/>

  )
}

export default App
