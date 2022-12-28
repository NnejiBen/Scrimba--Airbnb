import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import cardData from '../cardData'

function App() {
  const [count, setCount] = useState(0)
  const cardElements = cardData.map((card) => {
    return (
      <Cards 
        key={card.id}
        coverImg={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cardElements}
      </section>
    </div>
  )
}

export default App