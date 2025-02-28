function verwerkScore(naam = "Onbekend", score = 0) {
    // Controleer of de naam geldig is
    if (typeof naam !== 'string' || naam.trim() === '') {
        return { error: "Naam mag niet leeg zijn." };
    }
    
    score = Number(score);
    if (isNaN(score) || score < 0) {
        return { error: "Score moet een geldig positief nummer zijn." };
    }
    return { naam, score };
}

function voegScoreToe() {
    // Haal invoerwaarden op
    const playerName = document.getElementById('playerName').value.trim();
    const score = document.getElementById('score').value;
    const errorMessage = document.getElementById('errorMessage');
    const scoreList = document.getElementById('scoreList');

    errorMessage.textContent = '';
    
    const scoreObject = verwerkScore(playerName, score);
    
    if (scoreObject.error) {
        errorMessage.textContent = scoreObject.error;
        return;
    }

    // Nieuwe rij waar het toevoegen aan de scorelijst gebeurt
    const row = document.createElement('tr');
    row.innerHTML = `<td>${scoreObject.naam}</td><td>${scoreObject.score}</td><td><button onclick="verwijderScore(this)">Verwijderen</button></td>`;
    scoreList.appendChild(row);
    
    document.getElementById('playerName').value = '';
    document.getElementById('score').value = '';
}

function verwijderScore(button) {
    // Verwijder de rij waarin de knop zich bevindt
    const row = button.parentElement.parentElement;
    row.remove();
}
