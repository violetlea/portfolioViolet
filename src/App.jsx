import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './layout/Navigation'
import Card from './layout/Card'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import RootPage from './root/root'
import AboutMe from './pages/About'
import EducationMe from './pages/Education'
import WorkMe from './pages/Work'
import ProjectsMe from './pages/Projects'
import InspirationMe from './pages/Inspiration'
function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootPage />}>
    <Route path='about' element={<AboutMe />}/>
    <Route path='education' element={<EducationMe />}/>
    <Route path='work' element={<WorkMe />}/>
    <Route path='projects' element={<ProjectsMe />}/>
    <Route path='inspiration' element={<InspirationMe />}/>

  </Route>
))

  return (

    <RouterProvider router={router}/>

  )
}

export default App
