import { GiphyFetch } from '@giphy/js-fetch-api'
import { shuffle } from 'fast-shuffle'
const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)

interface ImageServiceProps {
  limit: number
}

export async function getGifs(props: ImageServiceProps) {
  const { limit } = props
  try {
    const response = await gf.search("ai", { limit })
    const result = response.data.map((gif) => gif.images.original.url)
    return shuffle([...result, ...result])
    // return result
  } catch (error) {
    console.error(error)
    return []
  }
}
