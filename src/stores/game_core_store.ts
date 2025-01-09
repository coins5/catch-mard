import { atom } from 'nanostores'
import { CardImage } from '../models/card_image'
import { $selectedDifficulty } from '../stores/game_settings_store'

export const $selectedCards = atom<CardImage[]>([])
export const $flippedCards = atom<CardImage[]>([])

export function flipCard (card: CardImage) {
  console.log('FLIPIINGGGG')
  if ($selectedCards.value.length === 0) {
    $selectedCards.value.push(card)
  } else {
    // ? Check if card is already selected
    if ($selectedCards.value[0].image_id === card.image_id) {
      $selectedCards.value.push(card)

      // ? check if all cards are selected
      if ($selectedDifficulty.value.itemsToCollect >= $selectedCards.value.length) {
        $flippedCards.set([...$flippedCards.value, ...$selectedCards.value])
        $selectedCards.value.length = 0
      }
    } else {
      $selectedCards.value.length = 0
    }
  }
}