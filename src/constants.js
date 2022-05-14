export const FIGURES = {
  PAPER: 'paper',
  SCISSORS: 'scissors',
  ROCK: 'rock',
}

export const FIGURES_POWER = {
  [FIGURES.PAPER]: {
    winsAgainst: FIGURES.ROCK,
    losesAgains: FIGURES.SCISSORS,
  },
  [FIGURES.SCISSORS]: {
    winsAgainst: FIGURES.PAPER,
    losesAgains: FIGURES.ROCK,
  },
  [FIGURES.ROCK]: {
    winsAgainst: FIGURES.SCISSORS,
    losesAgains: FIGURES.PAPER,
  },
}

export const RESULTS = {
  WIN: 'win',
  LOSE: 'lose',
  DRAW: 'draw',
}
