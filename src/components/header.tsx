import {
  availabelDifficulties,
} from "../models/game_settings"

import { $selectedDifficulty, selectDifficulty, selectCardsSearch } from "../stores/game_settings_store"
import { loadCards } from "../stores/card_store"
import { useStore } from "@nanostores/react"

function updateGameSettings (e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  selectCardsSearch(
    (document.getElementById('search_image_text') as HTMLInputElement).value
  )
  loadCards()
}
export default function Header () {
  const selectedDifficulty = useStore($selectedDifficulty)

  return (
    <div className="py-8">

      <form onSubmit={ updateGameSettings }>
        <div className="join pr-8">
          {
            availabelDifficulties.map(ad => 
              <input
                key={`gs-${ad.id}`}
                className="join-item btn"
                type="radio"
                name="difficulty"
                aria-label={ ad.name }
                value={ad.id}
                defaultChecked={ ad.id === selectedDifficulty.id }
                onChange={ () => selectDifficulty(ad.id) } 
              />
            )
          }
        </div>

        <div className="join">
          <input id="search_image_text" className="input input-bordered join-item" placeholder="Giphy images" />
          <input type="submit" className="btn join-item rounded-r-full" value="Start" />
        </div>
      </form>

      <div>
        { selectedDifficulty.description }
      </div>
      

    </div>
  )
}