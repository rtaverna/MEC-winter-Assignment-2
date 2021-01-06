import dealCard from './deal_cards'
import determineOutcome from './determine_outcome'
import sumHand from './sum_hand'


export default function giveCard(deck, hand, num){
  for (i = 0; i < num; i++){
    hand.push(dealCard(deck))
  }
}

export default function hit (hand) {
  let res = prompt('Do you want another card? (yes/no)')

  if (res === 'yes') {
    giveCard(hand)
    console.log('Your sum: ', sumHand(hand))
  } else if (res === 'no') {
    console.log('Ok, type stand(player_hand, dealer_hand)')
  } else {
    console.log('Invalid input! Enter yes or no')
  }
}
