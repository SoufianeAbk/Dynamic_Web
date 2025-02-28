let speler = null;

const maakSpeler = (naam = "Player 1") => ({
    naam,
    level: 1,
    health: 100
});

const doeSchade = (speler, schade) => {
    speler.health = Math.max(speler.health - schade, 0);
};

const levelOmhoog = (speler) => {
    speler.level += 1;
    speler.health = 100;
};

const updatePlayerStats = () => {
    const statsDiv = document.getElementById("playerStats");
    if (speler) {
        statsDiv.innerHTML = `
            <p>Naam: ${speler.naam}</p>
            <p>Level: ${speler.level}</p>
            <p>Health: ${speler.health}</p>
        `;
    } else {
        statsDiv.innerHTML = "<p>Geen speler actief.</p>";
    }
};

const maakNieuweSpeler = () => {
    const naamInput = document.getElementById("playerName").value || "Player 1";
    speler = maakSpeler(naamInput);
    updatePlayerStats();
};

const doeSchadeBijSpeler = () => {
    if (speler) {
        doeSchade(speler, 25);
        updatePlayerStats();
    }
};

const levelSpelerOp = () => {
    if (speler) {
        levelOmhoog(speler);
        updatePlayerStats();
    }
};

updatePlayerStats();
