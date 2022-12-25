import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  )
}

export default App
