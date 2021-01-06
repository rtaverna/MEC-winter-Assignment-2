function dealCards (deck) {
  // Randomly take cards from deck and put in hand
  
  let random1 = Math.floor(Math.random() * Math.floor(deck.length));
 //console.log (deck[random1])
  //console.log (deck)
  let random2 = Math.floor(Math.random() * Math.floor(deck.length));
 // console.log (deck[random2])
 let temphand = deck.splice (random2, 1)
 let newArray = temphand.concat(deck.splice (random1, 1))
return newArray

}

// export default dealCards

//testing code we will delete this

let deck_of_cards = [1,2,3,4,5,6,7,8,9,10,10,10,10, 1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10]
let hand = dealCards( deck_of_cards)

console.log(hand)
console.log(deck_of_cards)