document.addEventListener('DOMContentLoaded',() => {

const cardArray = [
    {
        name: 'bagpipes',
        img: 'media/Bagpipes.png'
    },
    {
        name: 'bagpipes',
        img: 'media/Bagpipes.png'
    },
    {
        name: 'drums',
        img: 'media/drums.png'
    },
    {
        name: 'drums',
        img: 'media/drums.png'
    },
    {
        name: 'guitar',
        img: 'media/electric-guitar.png'
    },
    {
        name: 'guitar',
        img: 'media/electric-guitar.png'
    },
    {
        name: 'piano',
        img: 'media/grand-piano.png'
    },
    {
        name: 'piano',
        img: 'media/grand-piano.png'
    },
    {
        name: 'saxophone',
        img: 'media/saxophone.png'
    },
    {
        name: 'saxophone',
        img: 'media/saxophone.png'
    },
    {
        name: 'violin',
        img: 'media/violin.png'
    },
    {
        name: 'violin',
        img: 'media/violin.png'
    }

]

cardArray.sort (() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//game board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++ ) {
        var card = document.createElement('img')
        card.setAttribute('src', 'media/music-note.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId  = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'media/white.png')
      cards[optionTwoId].setAttribute('src', 'media/white.png')
      cardsWon.push(cardsChosen)
  } else {
      cards[optionOneId].setAttribute('src', 'media/music-note.jpg')
      cards[optionTwoId].setAttribute('src', 'media/music-note.jpg')
      alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = ' Congratulations! You won!'
  }
}

//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
})