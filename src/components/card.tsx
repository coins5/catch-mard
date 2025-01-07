interface CardProps {
  image_url: string
}

export default function Card(props: CardProps) {
  const { image_url } = props

  return (
      <figure>
        <img
          src={ image_url }
          alt="Shoes"
          className="rounded-xl shadow-xl w-48 h-48 object-cover"
          />
      </figure>
  )
}
