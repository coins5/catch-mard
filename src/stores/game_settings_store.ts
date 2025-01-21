import { atom } from "nanostores";
import { IDifficultySpec, availabelDifficulties } from "../models/game_settings";
import { $audioStatus } from "./game_status_store";

import easy from '../assets/easy.wav'
import medium from '../assets/medium.wav'
import hard from '../assets/hard.wav'
import darksouls from '../assets/darksouls.wav'

const audios : Record<string, HTMLAudioElement> = {
  'easy': new Audio(easy),
  'medium': new Audio(medium),
  'hard': new Audio(hard),
  'darksouls': new Audio(darksouls)
}
export const $audio = atom<HTMLAudioElement>(audios['easy'])

const difficultyImage : Record<string, string> = {
  'easy': 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDB0cWt2YWlqMWI2NDF3YjdiMmN0bTZqd2NxdDlpeWtkcjgzbzR3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tsX3YMWYzDPjAARfeg/giphy.gif',
  'medium': 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ29wejJpMWk5YnkwZjF3ejNlcmM3bzJ3aHB2enc4NG9hZTRjMWw3OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tPo9rksWnfPo4HS/giphy.gif',
  'hard': 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnF1cmdkOTkzNmRrb3N0N2liMWkyNW9vcjl6dWl4ejdhczVmbmZkcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gheod1PbjHOFa1ppeD/giphy.gif',
  'darksouls': 'https://media4.giphy.com/media/ckJF143W1gBS8Hk833/200.gif?cid=92b4f2786hcpvygsnajtka7r74do51uaz9pw42od84va97s4&ep=v1_gifs_search&rid=200.gif&ct=g'
}
export const $difficultyLevelImage = atom<string>(difficultyImage['easy'])


export function findDifficultyById (difficultyid: string) {
  const result = availabelDifficulties.find(d => d.id === difficultyid)
  if (result) return result
  return availabelDifficulties[0]
}

export const $selectedDifficulty = atom<IDifficultySpec>(findDifficultyById('easy'))
export const $selectedCardsSearch = atom<string>('ai')

export function selectDifficulty (difficultyid: string) {
  
  $audio.value.pause()
  $audio.set(audios[difficultyid])
  $audio.value.loop = true
  if ($audioStatus.get() === "ON") {
    $audio.value.play()  
  } else {
    $audio.value.pause()
  }
  


  $selectedDifficulty.set(
    findDifficultyById(difficultyid)
  )

  $difficultyLevelImage.set(difficultyImage[difficultyid])
}

export function selectCardsSearch (search: string) {
  $selectedCardsSearch.set(search)
}
