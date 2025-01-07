interface CardProps {
  gif_url: string
}

export default function Card(props: CardProps) {
  const { gif_url } = props

  return (
      <figure>
        <img
          src={ gif_url }
          alt="Shoes"
          className="rounded-xl shadow-xl w-96 h-96 object-cover"
          />
      </figure>
  )
}
