import determineOutcome from './determine_outcome'
import displaySum from './display_sum'

function stand (player_hand, dealer_hand) {
  displaySum(player_hand, dealer_hand)
  determineOutcome(player_hand, dealer_hand)
}

export default stand
