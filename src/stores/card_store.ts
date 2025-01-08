import { atom, onMount } from 'nanostores'
import { getImages } from '../shared/images_service'
import { $selectedDifficulty, $selectedCarsSearch } from '../stores/game_settings_store'

export const $cards = atom<string[]>([])
export const $isLoadingCards = atom<boolean>(false)


export function loadCards () {
  if ($isLoadingCards.value === false) {
    $isLoadingCards.set(true)
    
    getImages({
      search_query: $selectedCarsSearch.value,
      limit: $selectedDifficulty.value.cardsCount
    })
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
