import Card from './card'
import { uid } from 'uid'

interface CardListProps {
  gif_urls: string[]
}


export default function CardsGrid(props: CardListProps) {
  const { gif_urls } = props

  const renderCards = () => {
    return gif_urls.map((url: string) => (
      <Card key={ uid() } gif_url={ url } />
    ));
  };
  
  return (
    <div className="grid grid-cols-4 gap-4">
      { renderCards() }
    </div>
  )
}
