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
        card={card}
        // Note: The individually listed props below are replaced by card={card}
        // coverImg={card.coverImg}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewCount}
        // location={card.location}
        // title={card.title}
        // price={card.price}
        // openSpots={card.openSpots}
        /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
        {...card} can replace card={card} above (see link above for detais).
        If using this method, remove all "card" after "props" in Card.jsx */
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