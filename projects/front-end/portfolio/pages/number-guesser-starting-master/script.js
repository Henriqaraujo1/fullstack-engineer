let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
 const generateTarget = () => {
     return Math.floor(Math.random() * 9)
 }

 const compareGuesses = (userNumber,pcNumber, targetNumber) => {
     if (Math.abs(userNumber - targetNumber) > Math.abs(pcNumber - targetNumber)) {
         return true
     } else if (Math.abs(userNumber - targetNumber) === Math.abs(pcNumber = targetNumber)) {
        return true
     } else {
         return false
     }
 }

const updateScore = (winner) => {
        if (winner === 'human') {
            ++humanScore
        }else if (winner === 'computer') {
            ++computerScore;
        } else {
            return 'error'
        }
    }

const advanceRound = () => {
    ++currentRoundNumber;
}

const getAbsoluteDistance = (number1, number2) => {
    return Math.abs(number1, number2)

}
const alert = () => {
    console.log("Make sure you type  between 0 and 9");
}
