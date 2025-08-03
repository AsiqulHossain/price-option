import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './Components/DaisyNavbar/DaisyNav'
import NavBar from './Components/Navbar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
        <NavBar></NavBar>
      </div>
    </>
  )
}

export default App
