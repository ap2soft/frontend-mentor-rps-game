export const getScore = () => {
  return parseInt(localStorage.RPS_Game_Score || 0)
}

export const incrementScore = () => {
  localStorage.RPS_Game_Score = getScore() + 1
}

export const decrementScore = () => {
  localStorage.RPS_Game_Score = getScore() - 1
}
