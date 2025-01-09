import { atom, onMount } from 'nanostores'
import { getImages } from '../shared/images_service'
import { $selectedDifficulty, $selectedCardsSearch } from '../stores/game_settings_store'
import { CardImage } from '../models/card_imaage'

export const $cards = atom<CardImage[]>([])
export const $isLoadingCards = atom<boolean>(false)


export function loadCards () {
  if ($isLoadingCards.value === false) {
    $isLoadingCards.set(true)
    
    getImages({
      search_query: $selectedCardsSearch.value,
      limit: $selectedDifficulty.value.cardsCount,
      multiply: $selectedDifficulty.value.itemsToCollect
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
