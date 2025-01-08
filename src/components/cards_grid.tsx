import Card from './card'
import { uid } from 'uid'

interface CardListProps {
  image_urls: string[]
}


export default function CardsGrid(props: CardListProps) {
  const { image_urls } = props

  const renderCards = () => {
    return image_urls.map((url: string) => (
      <Card key={ uid() } image_url={ url } />
    ));
  };
  
  return (
    <div className={`grid grid-cols-8 gap-4`}>
      { renderCards() }
    </div>
  )
}
