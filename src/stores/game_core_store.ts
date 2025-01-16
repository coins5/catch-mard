import { atom, computed } from 'nanostores'
import { CardImage } from '../models/card_image'
import { $selectedDifficulty } from '../stores/game_settings_store'

export const $selectedCards = atom<CardImage[]>([])
export const $flippedCards = atom<CardImage[]>([])

export const $isSelectedAlready = computed(
  $selectedCards,
  c => c.map(s => s.id)
)

export const $isFlippedAlready = computed(
  $flippedCards,
  c => c.map(s => s.id)
)


export function playCard (card: CardImage) {
  console.log('PLAYING')

  if ($selectedCards.value.length === 0) {
    $selectedCards.value.push(card)
    $selectedCards.set([...$selectedCards.value])

    console.log('ITS ALONE, FLIP IT')
  } else {
    $selectedCards.value.push(card)
    $selectedCards.set([...$selectedCards.value])

    // ? Check if card is already selected
    if ($selectedCards.value[0].image_id === card.image_id) {
      
      $selectedCards.set([...$selectedCards.value])

      console.log('ITS A MATCH! FLIP THEM')
      // ? check if all cards requirement are selected
      if ($selectedDifficulty.value.itemsToCollect >= $selectedCards.value.length) {
        $flippedCards.set([...$flippedCards.value, ...$selectedCards.value])
        $selectedCards.set([])

        console.log('FLIPPED NOW!')
      }
    } else {
      console.log('ITS NOT A MATCH! FLIP THEM BACK')
      window.setTimeout(() => {
        $selectedCards.set([])
      }, 750)
    }
  }
}