import { useSpring, a } from '@react-spring/web'
import { CardImage } from '../models/card_image'
import { $selectedDifficulty } from '../stores/game_settings_store'
import { useStore } from '@nanostores/react'
// import { $flippedCards, $selectedCards, flipCard, $theseCanNotBeFlippedAgain } from '../stores/game_core_store'
import { playCard } from '../stores/game_core_store'
interface CardProps {
  card: CardImage
  isAlreadyFlipped: boolean
}

export default function Card(props: CardProps) {
  const { card, isAlreadyFlipped } = props
  const selectedDifficulty = useStore($selectedDifficulty)
  const { transform, opacity } = useSpring({
    opacity: isAlreadyFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isAlreadyFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <>
      <div className={`stack ${selectedDifficulty.cardSize}`} onClick={() => { if (!isAlreadyFlipped) { playCard(card) } }}>
        <a.figure
          className={selectedDifficulty.cardSize}
          style={{ opacity: opacity.to(o => 1 - o), transform }}
        >
          <img
            src="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop"
            alt={ card.image_title }
            className={`rounded-xl shadow-xl object-cover ${selectedDifficulty.cardSize}`}
            />
        </a.figure>
        

        <a.figure
          className={selectedDifficulty.cardSize}
          style={{
            opacity,
            transform,
            rotateX: '180deg',
          }}
        >
          <img
            src={ card.image_url }
            alt="Shoes"
            className={`rounded-xl shadow-xl object-cover ${selectedDifficulty.cardSize}`}
            />
        </a.figure>
        
      </div>
    </>
    
  )
}
