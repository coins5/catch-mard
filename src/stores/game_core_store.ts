import { atom, computed } from 'nanostores'
import { CardImage } from '../models/card_image'
import { $selectedDifficulty } from '../stores/game_settings_store'

export const $selectedCards = atom<CardImage[]>([])
export const $flippedCards = atom<CardImage[]>([])

export const $theseCanNotBeFlippedAgain = computed(
  [$selectedCards, $flippedCards],
  (selected, flipped) => 
    selected.map(s => s.id).concat(flipped.map(f => f.id))
)

export function flipCard (card: CardImage) {
  console.log('FLIPIINGGGG')
  
  if ($selectedCards.value.length === 0) {
    $selectedCards.value.push(card)
  } else {
    // ? Check if card is already selected
    if ($selectedCards.value[0].image_id === card.image_id && $theseCanNotBeFlippedAgain.value && $theseCanNotBeFlippedAgain.value.indexOf(card.id) > -1 ) {
      $selectedCards.value.push(card)

      // ? check if all cards requirement are selected
      if ($selectedDifficulty.value.itemsToCollect >= $selectedCards.value.length) {
        $flippedCards.set([...$flippedCards.value, ...$selectedCards.value])
        $selectedCards.value.length = 0
      }
    } else {
      $selectedCards.value.length = 0
    }
  }

  console.log(JSON.parse(JSON.stringify($selectedCards.value))  )
  console.log(JSON.parse(JSON.stringify($flippedCards.value)) )
}