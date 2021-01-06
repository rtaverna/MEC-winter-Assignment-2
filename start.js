import dealCards from './deal_cards'
import {hit} from './hit'
import stand from './stand'
import sumHand from './sum_hand'
import reset from './reset'
import displaySum from './display_sum'

let deck = [1,2,3,4,5,6,7,8,9,10]
let dealer_hand = []
let player_hand = []

function start() {
  dealCards(deck, player_hand, dealer_hand)
  displaySum(dealer_hand, player_hand)


  let res = prompt('Do you want another card? (yes/no)')
  if (res === 'yes') {
    hit()
  } else if (res === 'no') {
    stand(player_hand, dealer_hand)
  } else {
    console.log('Invalid input! Enter yes or no')
  }

  let playAgain = confirm('Do you want to play again?')
  if (playAgain) {
    reset()
  }
}