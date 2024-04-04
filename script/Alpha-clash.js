// function Play(){
// //step-1 : hide the home screen. to hide the screen add the class hidden to the home section.
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden')
// // console.log(homeSection.classList);

// const playGroundSection = document.getElementById('Play-ground ');
// playGroundSection.classList.remove('hidden');
// // console.log(playGroundSection.classList);
// }

// Capture Keyboard Keypress
document.addEventListener("keypress",function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
     console.log('player Pressed :', playerPressed);
    if(playerPressed === 'Escape'){
        gameOver();
    }
    

    // get the expected to the press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed , expectedAlphabet);

    // check Matched or not 
    if(playerPressed === expectedAlphabet){
        // console.log('You get a point')
//         const currentScore = getTextElementValueById('current-score'); 
// const updatedScore = currentScore + 1;
// setTextElementById('current-score',updatedScore);
// --------------------------------------------------------

        // Update score :
        // 1. Get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
        // 2. Increase the score by 1 
        const newScore = currentScore + 1;
        // 3. show the Updated Score
        currentScoreElement.innerText = newScore;
        // Start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // console.log('You Missed . You lost a life');

// const currentLife = getTextElementValueById('current-life');
// const updatedLife = currentLife-1;
// setTextElementById('current-life',updatedLife);
        // ----------------------------------------------
        // step 1. Get the current life number
const currentlifeElement = document.getElementById('current-life');
const currentLifeText = currentlifeElement.innerText;
const currentLife = parseInt(currentLifeText);
        // step 2. Reduce the life count
const newLife = currentLife - 1;
        // step 3. Display the updated life count
currentlifeElement.innerText = newLife;

if(newLife === 0){
    gameOver();
}

    }
});

// function handleKeyboardKeyupEvent(event){
//     const playerPressed = event.key;

//     // Key PLayer's Expected Pressed

// }

function continueGame(){
    // Step 1 : generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('Your random Alphabet : ', alphabet);

    // set randomly generated alphabet on the screen (show it) 
    
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    
    setBackgroundColorById(alphabet);
}

function Play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('Play-ground');
    // reset score and life
    const setElementById = document.getElementById('current-life');
    setElementById.innerText = 5;
    const setNewScore = document.getElementById('current-score');
    setNewScore.innerText= 0;
    continueGame();
    
    
}
function gameOver(){
hideElementById('Play-ground');
showElementById('final-score')
// update final score
// step 1. get the final score
const lastScore = getTextElementValueById('current-score');
// console.log(lastScore);
const setlastScore = document.getElementById('game-score');
setlastScore.innerText = lastScore;
// clear the last selected alphabet
const currentAlphabet= getElementTextById('current-alphabet');
// console.log(currentAlphabet);
removeBackgroundColorById(currentAlphabet)
}