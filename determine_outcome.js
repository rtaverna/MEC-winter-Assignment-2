import sumHand from "./sum_hand"

function determineOutcome (player_hand, dealer_hand) {
  if (sumHand(dealer_hand) > sumHand(player_hand)) {
    console.log('YOU LOSE')
  } else {
    console.log('YOU WON')
  }
}

export default determineOutcome
