// // let firstCard = Math.floor(Math.random()*11) +2
// // let secondCard = Math.floor(Math.random()*11) +2 randomly selects number between 2-11
let player = {
  playerName: "Siya Kolisi",
  playerChips: 1543
  
}
let sumCard = 0
let cards= []
let hasBlackJack = false
let isAlive = false

let message = ""
let cardsEl = document.getElementById("cards-el")

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.playerName + " : " + "$" + player.playerChips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random()*13) +1
  if (randomNumber > 10) {
    return 10
  }
  if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard + secondCard]
  sumCard = firstCard + secondCard

  renderGame()
}

function renderGame() {

  cardsEl.textContent = "Cards: "
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sumCard

  if (sumCard <= 20) {
    message = "Do you want another card!"
  } else if (sumCard === 21) {
    message = "You have got BlackJack!!!"
    hasBlackJack = true
  } else {
    message = "You have been eliminated!!"
    isAlive = false
  } 
  messageEl.textContent = message

}

function newCard() {
  if (isAlive === true && hasBlackJack ===false){
    let card = getRandomCard()
    sumCard += card
    cards.push(card)
    renderGame()
  } 
}

if (likesDocumentaries ===true || likesStartUps ===false) {
  recommendMovie()
}
