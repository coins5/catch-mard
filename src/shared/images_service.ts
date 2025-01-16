import { GiphyFetch } from '@giphy/js-fetch-api'
import { shuffle } from 'fast-shuffle'
import { CardImage } from '../models/card_image'
import { uid } from 'uid'
const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)

interface ImageServiceProps {
  search_query?: string
  limit: number,
  multiply: number
}

export async function getImages(props: ImageServiceProps) {
  const { search_query = 'ai', limit } = props
  try {
    const response = await gf.search(search_query, { limit })
    const result: CardImage[] = []
    response.data.forEach(img => {
      for (let i = 0; i < props.multiply; i++) {
        result.push({
          id: uid(), // card id, used in react
          image_url: img.images.original.url, 
          image_id: img.id as string, // image_id from giphy
          image_title: img.title
        })
      }
    })
    return shuffle(result)
    // return result
  } catch (error) {
    console.error(error)
    return []
  }
}
