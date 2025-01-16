import { atom, computed } from 'nanostores'
import { CardImage } from '../models/card_image'
import { $selectedDifficulty } from '../stores/game_settings_store'

export const $selectedCards = atom<CardImage[]>([])
export const $flippedCards = atom<CardImage[]>([])
export const $gameStage = atom<"PLAYING" | "WON" | "LOSE">("PLAYING")

export const $isSelectedAlready = computed(
  $selectedCards,
  c => c.map(s => s.id)
)

export const $isFlippedAlready = computed(
  $flippedCards,
  c => c.map(s => s.id)
)


export function playCard (card: CardImage) {
  if ($selectedCards.value.length === 0) {
    $selectedCards.set([card])

    console.log('ITS ALONE, FLIP IT')
    return
  }

  if ($selectedCards.value.length >= $selectedDifficulty.value.itemsToCollect) {
    return
  }

  $selectedCards.value.push(card)
  $selectedCards.set([...$selectedCards.value])

  if ($selectedCards.value[0].image_id !== card.image_id) {
    console.log('ITS NOT A MATCH! FLIP THEM BACK')
    window.setTimeout(() => {
      $selectedCards.set([])
    }, 750)
    return
  }

  console.log('ITS A MATCH! CHECK IF YOU MEET ALL REQUIREMENTS!')
  const { cardsCount, itemsToCollect } = $selectedDifficulty.value

  // ? check if all cards requirement are selected
  if (itemsToCollect >= $selectedCards.value.length) {
    $flippedCards.set([...$flippedCards.value, ...$selectedCards.value])
    $selectedCards.set([])

    console.log('FLIPPED NOW!')
  }

  // ? check if all cards are flipped
  if ($flippedCards.value.length === cardsCount * itemsToCollect) {
    $gameStage.set("WON")
    console.log("I CAN'T! BELIEVE IT, YOU WON!")
  }

}