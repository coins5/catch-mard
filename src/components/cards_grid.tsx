import { CardImage } from '../models/card_imaage'
import Card from './card'
import { uid } from 'uid'

interface CardListProps {
  cardImages: CardImage[]
  columns: number
}


export default function CardsGrid(props: CardListProps) {
  const { cardImages, columns } = props

  const renderCards = () => {
    return cardImages.map((cardImage: CardImage) => (
      <Card key={ uid() } image_url={ cardImage.image_url } />
    ));
  };
  
  console.log(columns)
  // ! TODO: Problem with this columns
  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      { renderCards() }
    </div>
  )
}
