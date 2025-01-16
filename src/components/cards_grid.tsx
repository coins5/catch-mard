import { useStore } from '@nanostores/react'
import { CardImage } from '../models/card_image'
import Card from './card'
import { $cards } from '../stores/card_store'
import { $isSelectedAlready, $isFlippedAlready, $gameStage } from '../stores/game_core_store'

export default function CardsGrid() {
  const cards = useStore($cards)
  const isSelectedAlready = useStore($isSelectedAlready)
  const isFlippedAlready = useStore($isFlippedAlready)
  const gameStage = useStore($gameStage)
  
  const renderCards = () => {
    return cards.map((cardImage: CardImage) => (
      <Card
        key={ cardImage.id }
        card={ cardImage }
        isAlreadyFlipped={
          isSelectedAlready.indexOf(cardImage.id) > -1 ||
          isFlippedAlready.indexOf(cardImage.id) > -1
        }
      />
    ));
  };
  
  // ! TODO: Problem with this columns
  return (
    <>
    <div>{ `gameStage=${JSON.stringify(gameStage)}` }</div>
      <div className="grid grid-cols-8 gap-4 justify-items-center">
        
        { renderCards() }
      </div>
    </>
    
  )
}
