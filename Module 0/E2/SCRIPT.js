let naam = prompt("Wat is je naam?");
let score = 0;

let vragen = [
    { vraag: "Wat betekent HTML?", antwoord: "HyperText Markup Language" },
    { vraag: "Welke taal wordt gebruikt voor styling van webpagina's?", antwoord: "CSS" },
    { vraag: "Welke programmeertaal wordt vaak gebruikt voor webinteractie?", antwoord: "JavaScript" }
];

for (let i = 0; i < vragen.length; i++) {
    let antwoord = prompt(vragen[i].vraag);
    if (antwoord.trim().toLowerCase() === vragen[i].antwoord.toLowerCase()) {
        alert("Goed gedaan!");
        score++;
    } else {
        alert("Fout! Het juiste antwoord is: " + vragen[i].antwoord);
    }
}

alert(naam + ", je score is: " + score + " van de " + vragen.length + "!");
