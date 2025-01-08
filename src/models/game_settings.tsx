export interface IDifficultySpec {
  id: string;
  name: string;
  cardsCount: number;
  itemsToCollect: number;
  maxErrors: number;
  randomMoveAfterPick: boolean;
  description: string;
}

export const availabelDifficulties: IDifficultySpec[] = [
  {
    id: 'easy',
    name: 'Easy',
    cardsCount: 4,
    itemsToCollect: 2,
    maxErrors: 3,
    randomMoveAfterPick: false,
    description: "The easy way, you noob"
  },
  {
    id: 'medium',
    name: 'Medium',
    cardsCount: 8,
    itemsToCollect: 2,
    maxErrors: 4,
    randomMoveAfterPick: false,
    description: "There you go buddy, i'm sure you'll gonna get bored"
  },
  {
    id: 'hard',
    name: 'Hard',
    cardsCount: 16,
    itemsToCollect: 3,
    maxErrors: 5,
    randomMoveAfterPick: false,
    description: "So, you wanna play for real"
  },
  {
    id: 'darksouls',
    name: 'Dark Souls',
    cardsCount: 64,
    itemsToCollect: 4,
    maxErrors: 6,
    randomMoveAfterPick: true,
    description: "Oh man, don't do this"
  }
]
