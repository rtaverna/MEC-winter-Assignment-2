import dealCard from './deal_cards'
import determineOutcome from './determine_outcome'
import sumHand from './sum_hand'


function giveCard(deck, hand, num){
  for (i = 0; i < num; i++){
    hand.push(dealCard(deck))
  }
}

function hit (hand) {
  giveCard(hand)
}

export { giveCard, hit }
