import { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import { CardImage } from '../models/card_image'
import { $selectedDifficulty } from '../stores/game_settings_store'
import { useStore } from '@nanostores/react'
interface CardProps {
  body: CardImage
}

export default function Card(props: CardProps) {
  const selectedDifficulty = useStore($selectedDifficulty)
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const { body } = props

  return (
    <div className="stack" onClick={() => set(state => !state)}>
      <a.figure style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <img
          src="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop"
          alt={body.image_title}
          className={`rounded-xl shadow-xl object-cover ${selectedDifficulty.cardSize}`}
          />
      </a.figure>

      <a.figure style={{
        opacity,
        transform,
        rotateX: '180deg',
      }}>
        <img
          src={ body.image_url }
          alt="Shoes"
          className={`rounded-xl shadow-xl object-cover ${selectedDifficulty.cardSize}`}
          />
      </a.figure>
    </div>
  )
}
