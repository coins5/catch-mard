import { useStore } from '@nanostores/react'
import { CardImage } from '../models/card_image'
import Card from './card'
import { uid } from 'uid'
import { $cards } from '../stores/card_store'
import { $selectedDifficulty } from '../stores/game_settings_store'

export default function CardsGrid() {
  const cards = useStore($cards)
  const selectedDifficulty = useStore($selectedDifficulty)
  
  const renderCards = () => {
    return cards.map((cardImage: CardImage) => (
      <Card key={ uid() } body={ cardImage } />
    ));
  };
  
  console.log(selectedDifficulty.gridColumns)
  // ! TODO: Problem with this columns
  return (
    <div className={`grid grid-cols-${selectedDifficulty.gridColumns} gap-4`}>
      { renderCards() }
    </div>
  )
}
