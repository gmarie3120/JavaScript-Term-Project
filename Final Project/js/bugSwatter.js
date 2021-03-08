const square = document.querySelectorAll('.square')
const bug = document.querySelectorAll('.bug')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('bug')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('bug')

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveBug(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveBug()

function countDown(){
currentTime--
timeLeft.textContent = currentTime

if(currentTime === 0) {
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
 }

}

let timerId = setInterval(countDown, 1000)

