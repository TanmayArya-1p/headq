import { useState } from 'react'
import { SparklesBackground } from './components/body.jsx'

import Navbar from './components/navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <title>~</title>
    <Navbar/>
    <SparklesBackground/>
    </>
  )
}

export default App
