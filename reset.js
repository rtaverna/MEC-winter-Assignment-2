function reset (deck, player_hand, dealer_hand) {
  // Needs to replenish deck of cards
  // Clear player_hand, dealer_hand

  deck.splice(0, deck.length)
  for (let i = 0; i < 10; i++) {
    deck.push(i + 1)
  }

  player_hand.splice(0, player.hand.length)
  dealer_hand.splice(0, dealer_hand.length)
}

export default reset
