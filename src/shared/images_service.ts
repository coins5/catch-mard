import { GiphyFetch } from '@giphy/js-fetch-api'
import { shuffle } from 'fast-shuffle'
import { CardImage } from '../models/card_imaage'
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
    // const rawResult = response.data.map(img => { image_ }  img.images.original.url)
    const rawResult: CardImage[] = response.data.map(img => ({
        image_url: img.images.original.url,
        image_id: img.id
      }) as CardImage
    )
    const result: CardImage[] = []
    for (let i = 0; i < props.multiply; i++) {
      result.push(...rawResult)
    }
    return shuffle(result)
    // return result
  } catch (error) {
    console.error(error)
    return []
  }
}
