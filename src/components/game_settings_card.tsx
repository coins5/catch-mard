import {
  availabelDifficulties,
} from "../models/game_settings"

import {
  $audio,
  $selectedDifficulty,
  $difficultyLevelImage,
  selectDifficulty,
  selectCardsSearch
} from "../stores/game_settings_store"
import { loadCards } from "../stores/card_store"
import { useStore } from "@nanostores/react"
import { $audioStatus } from "../stores/game_status_store"

function updateGameSettings (e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  selectCardsSearch(
    (document.getElementById('search_image_text') as HTMLInputElement).value
  )
  loadCards()
}

function toggleAudio (e: React.ChangeEvent<HTMLInputElement>) {
  console.log(e.target.checked)
  if (e.target.checked) {
    $audioStatus.set("ON")
    $audio.value.play()
  } else {
    $audioStatus.set("OFF")
    $audio.value.pause()
  }
}

export default function Header () {
  const selectedDifficulty = useStore($selectedDifficulty)
  const difficultyLevelImage = useStore($difficultyLevelImage)

  return (
    
    <div className="card bg-base-100 w-96 shadow-xl">

      <figure>
        <img
          src={ difficultyLevelImage }
          alt="Shoes" />
      </figure>
    
      <div className="card-body">
        <h2 className="card-title">Settings</h2>
        <p className="mb-6">
          { selectedDifficulty.description }
        </p>

        <form onSubmit={ updateGameSettings }>
          <div className="form-control pb-4">
            <label className="label cursor-pointer">
              <span className="label-text">Wanna listen something while you lose?</span>
              <input type="checkbox" className="toggle" onChange={e => toggleAudio(e) } />
            </label>
          </div>

          <div className="join pb-4">
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
            <input id="search_image_text" className="input input-bordered join-item" placeholder="Theme cards, default ia" />
            <input type="submit" className="btn join-item rounded-r-full" value="Search" />
          </div>

        </form>
        <div className="card-actions justify-end mt-8">
          <button className="btn btn-primary">Done</button>
        </div>
      </div>
    </div>
  )
}