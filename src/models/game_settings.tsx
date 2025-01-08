export interface IDifficultySpec {
  id: string;
  name: string;
  cardsCount: number;
  gridColumns: number;
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
    gridColumns: 4,
    itemsToCollect: 2,
    maxErrors: 3,
    randomMoveAfterPick: false,
    description: "The easy way, you noob"
  },
  {
    id: 'medium',
    name: 'Medium',
    cardsCount: 12,
    gridColumns: 6,
    itemsToCollect: 2,
    maxErrors: 4,
    randomMoveAfterPick: false,
    description: "There you go buddy, i'm sure you'll gonna get bored"
  },
  {
    id: 'hard',
    name: 'Hard',
    cardsCount: 24,
    gridColumns: 8,
    itemsToCollect: 3,
    maxErrors: 5,
    randomMoveAfterPick: false,
    description: "So, you wanna play for real"
  },
  {
    id: 'darksouls',
    name: 'Dark Souls',
    cardsCount: 48,
    gridColumns: 8,
    itemsToCollect: 4,
    maxErrors: 6,
    randomMoveAfterPick: true,
    description: "Oh man, don't do this"
  }
]
