import Card from './card'
import { uid } from 'uid'

interface CardListProps {
  image_urls: string[]
  columns: number
}


export default function CardsGrid(props: CardListProps) {
  const { image_urls, columns } = props

  const renderCards = () => {
    return image_urls.map((url: string) => (
      <Card key={ uid() } image_url={ url } />
    ));
  };
  
  // ! TODO: Problem with this columns
  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      { renderCards() }
    </div>
  )
}
