import { roShambo, checkResult, getThrowFromNumber } from './roshambo.js';

const Result = document.getElementById('result');
const Wins = document.getElementById('win');
const lossDisplay = document.getElementById('loss');
const drawDisplay = document.getElementById('draw');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');
const resultImage = document.getElementById('result-image');
const resultDisplay = document.getElementById('result-display');

let wins = 0;
let losses = 0;
let draws = 0;

submitButton.addEventListener('click', () => {
    const userClick = document.querySelector('input:checked');
    const userValue = userClick.value;
    const computerValue = roShambo();
    const result = checkResult(userValue, computerValue);
    console.log('user', userValue);
    console.log(result);

    if(computerValue === 'rock') resultImage.src='http://pngimg.com/uploads/stone/stone_PNG13598.png';
    if(computerValue === 'scissors') resultImage.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5q-BkvPNMkby9YjxwYjf-iWfkMwl3YeCdREVFJ6D38Z-LpkcT&s';
    if(computerValue === 'paper')resultImage.src='data:image/jpeg;base64,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';

    if(result === 'win') {
        wins++;
        Wins.textContent = wins;
        Result.textContent = 'You win';
        resultImage.classList.remove('hidden');
    } else if(result === 'lose') {
        losses++;
        lossDisplay.textContent = losses;
        Result.textContent = 'You lose...'
        resultImage.classList.remove('hidden');
    } else {
        draws++
        drawDisplay.textContent = draws
        Result.textContent = 'Looks like a draw!'
        resultImage.classList.remove('hidden');
    }
});

resetButton.addEventListener ('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    Wins.textContent = wins;
    lossDisplay.textContent = losses;
    drawDisplay.textContent = draws;
});


const myH1 = document.getElementsByTagName('body')
const instruments = ['guitar', 'violin', 'mayonnaise', 'horseradish'];
for(let i = 0; i < instruments.length; i++) {
     const music = instruments[i]
     console.log (music)
    myH1.appendChild = music

  
 }







