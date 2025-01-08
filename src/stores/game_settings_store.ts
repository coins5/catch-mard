import { atom } from "nanostores";
import { IDifficultySpec, availabelDifficulties } from "../models/game_settings";

export function findDifficultyById (difficultyid: string) {
  const result = availabelDifficulties.find(d => d.id === difficultyid)
  if (result) return result
  return availabelDifficulties[0]
}

export const $selectedDifficulty = atom<IDifficultySpec>(findDifficultyById('easy'))
export const $selectedCarsSearch = atom<string>('ai')

export function selectDifficulty (difficultyid: string) {
  $selectedDifficulty.set(
    findDifficultyById(difficultyid)
  )
}