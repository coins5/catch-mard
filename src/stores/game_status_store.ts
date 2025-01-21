import { atom } from 'nanostores'
export const $gameStatus = atom<"SETTINGS" | "PLAYING" | "WON" | "LOSE">("SETTINGS")
export const $audioStatus = atom<"ON" | "OFF">("OFF")
