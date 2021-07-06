const randomWord = () =>{
    return Math.floor(Math.random() * 6)
}

const randomMsg = () => {
    return Math.floor(Math.random() * 3)
}

const wordPhrase = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    msgFelling: ['Strong', 'Happy', 'Funny', 'Smart', 'Gorgerous', 'Dedicated', 'Legendary'],
    country: ['Brazil', 'EUA', 'Japan', 'Canada', 'Italy', 'Chile', 'German']
}

const findWord = () => {
    const rdmWord = randomWord();
    const rdmMsg = randomMsg()
    let msg = document.getElementById('newMessage')
    switch(rdmMsg) {
        case 0:
            msg.textContent = `Today is ${wordPhrase.days[rdmWord]}`
            break;
        case 1:
            msg.textContent = `You can better ${wordPhrase.msgFelling[rdmWord]}`
            break;
        case 2:
            msg.textContent = `Your next Travel is ${wordPhrase.country[rdmWord]}`
            break;
        default:
            return `Error`
            break;
    }
} 


findWord()