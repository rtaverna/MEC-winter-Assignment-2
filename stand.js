import determineOutcome from './determine_outcome'
import sumHand from './sum_hand'

function stand (player_hand, dealer_hand) {
  console.log('Your sum: ', sumHand(player_hand))
  console.log('Dealer\'s hand sum:', sumHand(dealer_hand))

  determineOutcome(player_hand, dealer_hand)
}

export default stand
