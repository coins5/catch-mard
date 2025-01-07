import { atom, onMount } from 'nanostores'
import { getImages } from '../shared/images_service'

export const $cards = atom<string[]>([])
export const $isLoadingCards = atom<boolean>(false)

export function loadCards () {
  if ($isLoadingCards.value === false) {
    $isLoadingCards.set(true)
    
    getImages({ limit: 10 })
      .then((images) => {
        $cards.set(images)
        $isLoadingCards.set(false)
      })
  }
}

onMount($cards, () => {
  loadCards()

  return () => {
    $cards.set([])
  }
})
