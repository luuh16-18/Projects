// let firstCard = Math.floor(Math.random()*11) +2
// let secondCard = Math.floor(Math.random()*11) +2 randomly selects number between 2-11
let firstCard = 10
let secondCard = 1
let sumCard = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = ""
let cardsEl = document.getElementById("cards-el")

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  sumEl.textContent = "Sum: " + sumCard

  if (sumCard <= 20) {
    message = "Do you want another card!"
  } else if (sum === 21) {
    message = "You have got BlackJack!!!"
    hasBlackJack = true
  } else {
    message = "You have been eliminate!! :("
    isAlive = false
  }
   
  messageEl.textContent = message

}

function newCard() {
  let card = Math.floor(Math.random()*11) +1
  sumCard += card
  startGame()
  
}













