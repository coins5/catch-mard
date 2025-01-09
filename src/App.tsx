import CardsGrid from './components/cards_grid'
import { useStore } from '@nanostores/react'
import { $cards, $isLoadingCards } from './stores/card_store'
import Header from './components/header'
import { $selectedDifficulty } from './stores/game_settings_store'

function App () {
  const cards = useStore($cards)
  const isLoadingCards = useStore($isLoadingCards)
  const selectedDifficulty = useStore($selectedDifficulty)
  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      {
        isLoadingCards ?
          <span className="loading loading-spinner loading-lg"></span>
          :
          <CardsGrid cardImages={ cards } columns={selectedDifficulty.gridColumns} ></CardsGrid>   
      }
    </div>
  )
}

export default App
