import { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import { CardImage } from '../models/card_image'
import { $selectedDifficulty } from '../stores/game_settings_store'
import { useStore } from '@nanostores/react'
// import { $flippedCards, $selectedCards, flipCard, $theseCanNotBeFlippedAgain } from '../stores/game_core_store'
import { flipCard, $theseCanNotBeFlippedAgain } from '../stores/game_core_store'
interface CardProps {
  card: CardImage
}

// function getCardFlippedState (card: CardImage) {
//   // ! TODO: FLIPPING DOESNT FLIP >:(
//   console.log('GET FLIP STATE')
//   if ($selectedCards.value.length > 0 && card.image_id === $selectedCards.value[0].image_id) {
//     return true
//   }

//   if ($flippedCards.value.length > 0 && card.image_id === $flippedCards.value[0].image_id) {
//     return true
//   }

//   return false
// }

export default function Card(props: CardProps) {
  const { card } = props
  const selectedDifficulty = useStore($selectedDifficulty)
  const theseCanNotBeFlippedAgain = useStore($theseCanNotBeFlippedAgain)
  const [flipped, set] = useState(false)
  const isFlipped = theseCanNotBeFlippedAgain.indexOf(card.id) > -1 // getCardFlippedState(card)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <div className={`stack ${selectedDifficulty.cardSize}`} onClick={() => { if (!isFlipped) flipCard(card); set(s => !s) }}>
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
  )
}

// export default function Card(props: CardProps) {
//   const selectedDifficulty = useStore($selectedDifficulty)
//   const [flipped, set] = useState(false)
//   const { transform, opacity } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 },
//   })



//   const { body } = props

//   return (
//     <div className="stack" onClick={() => set(state => !state)}>
//       <a.figure style={{ opacity: opacity.to(o => 1 - o), transform }}>
//         <img
//           src="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop"
//           alt={body.image_title}
//           className={`rounded-xl shadow-xl object-cover ${selectedDifficulty.cardSize}`}
//           />
//       </a.figure>

//       <a.figure style={{
//         opacity,
//         transform,
//         rotateX: '180deg',
//       }}>
//         <img
//           src={ body.image_url }
//           alt="Shoes"
//           className={`rounded-xl shadow-xl object-cover ${selectedDifficulty.cardSize}`}
//           />
//       </a.figure>
//     </div>
//   )
// }
