import { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
// import cardStyles from './styles/card.module.css'

interface CardProps {
  image_url: string
}

export default function Card(props: CardProps) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const { image_url } = props
  // console.log(image_url)

  return (
    <div className="stack" onClick={() => set(state => !state)}>
      <a.figure style={{ opacity: opacity.to(o => 1 - o), transform }}>
        <img
          src="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop"
          alt="Shoes"
          className="rounded-xl shadow-xl w-96 h-96 object-cover"
          />
      </a.figure>

      <a.figure style={{
        opacity,
        transform,
        rotateX: '180deg',
      }}>
        <img
          src={ image_url }
          alt="Shoes"
          className="rounded-xl shadow-xl w-96 h-96 object-cover"
          />
      </a.figure>
    </div>
  )
}
