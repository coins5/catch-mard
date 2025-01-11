import { useStore } from '@nanostores/react'
import { CardImage } from '../models/card_image'
import Card from './card'
import { $cards } from '../stores/card_store'
import { $selectedDifficulty } from '../stores/game_settings_store'

export default function CardsGrid() {
  const cards = useStore($cards)
  const selectedDifficulty = useStore($selectedDifficulty)
  
  const renderCards = () => {
    return cards.map((cardImage: CardImage) => (
      <Card key={ cardImage.id } card={ cardImage } />
    ));
  };

  const renderGrid = () => {
    switch (selectedDifficulty.id) {
      case 'easy':
        return (
          <div className={`grid grid-cols-${selectedDifficulty.gridColumns} gap-4 justify-items-center`}>
            { renderCards() }
          </div>
        )

      case 'medium':
        return (
          <div className={`grid grid-cols-${selectedDifficulty.gridColumns} gap-4 justify-items-center`}>
            { renderCards() }
          </div>
        )
      
        case 'hard':
        return (
          <div className={`grid grid-cols-${selectedDifficulty.gridColumns} gap-4 justify-items-center`}>
            { renderCards() }
          </div>
        )

        case 'darksouls': 
        return (
          <div className={`grid grid-cols-${selectedDifficulty.gridColumns} gap-4 justify-items-center`}>
            { renderCards() }
          </div>
        )
    }
  }
  
  console.log(selectedDifficulty.gridColumns)
  // ! TODO: Problem with this columns
  return (

    renderGrid()
    // <div className={`grid grid-cols-${selectedDifficulty.gridColumns} gap-4 justify-items-center`}>
    // <div className={`grid grid-cols-8 gap-4 justify-items-center`}>
    //   { renderCards() }
    // </div>
  )
}
