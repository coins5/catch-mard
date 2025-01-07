import CardsGrid from './components/cards_grid'
import { useStore } from '@nanostores/react'
import { $cards, $isLoadingCards } from './stores/card_store'
import Header from './components/header'

function App () {
  const cards = useStore($cards)
  const isLoadingCards = useStore($isLoadingCards)
  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      {
        isLoadingCards ?
          <span className="loading loading-spinner loading-lg"></span>
          :
          <CardsGrid image_urls={ cards } ></CardsGrid>   
      }
    </div>
  )
}

export default App
