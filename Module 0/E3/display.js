"use strict";
let scores = [];

const scoreInput = document.getElementById('score');
const addScoreButton = document.getElementById('addScore');
const averageDisplay = document.getElementById('average');
const highestDisplay = document.getElementById('highest');
const scoreList = document.getElementById('scoreList');

addScoreButton.addEventListener('click', () => {
    const score = parseInt(scoreInput.value);
    if (!isNaN(score) && score >= 0 && score <= 20) {
        scores.push(score);
        updateStats();
        updateScoreList();
        scoreInput.value = '';
    } else {
        alert('Voer een geldige score in tussen 0 en 20.');
    }
});

function updateStats() {
    const total = scores.reduce((acc, val) => acc + val, 0);
    const average = (scores.length > 0) ? (total / scores.length).toFixed(2) : 0;
    const highest = (scores.length > 0) ? Math.max(...scores) : 0;
    
    averageDisplay.textContent = average;
    highestDisplay.textContent = highest;
}

function updateScoreList() {
    scoreList.innerHTML = '';
    scores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = score;
        scoreList.appendChild(li);
    });
}
