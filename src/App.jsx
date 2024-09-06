import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Nav'
import { Route, Routes } from 'react-router-dom'
import View from './assets/components/View'
import Add from './assets/components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/view" element={<View />} />

        </Routes>
          
      </div>
      
    </>
  )
}

export default App
