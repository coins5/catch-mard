import CardsGrid from './components/cards_grid'
import { useStore } from '@nanostores/react'
import { $isLoadingCards } from './stores/card_store'
import Header from './components/header'
import { $gameStatus } from './stores/game_status_store'
import GameSettingsCard from './components/game_settings_card'
function App () {
  const isLoadingCards = useStore($isLoadingCards)
  const gameStatus = useStore($gameStatus)

  return (
    gameStatus === "SETTINGS" ?
    <div className="h-screen flex items-center justify-center">
      <GameSettingsCard />
    </div>
    
    :

    <div className="container mx-auto px-4">
      <Header></Header>
      {
        isLoadingCards ?
          <span className="loading loading-spinner loading-lg"></span>
          :
          <CardsGrid></CardsGrid>
      }
    </div>
  )
}

export default App
