'use strict';

    const berekenKnop = document.getElementById('bereken');
    berekenKnop.addEventListener('click', berekenSom);

function berekenSom() {
    const getal1 = Number(document.getElementById('getal1').value);
    const getal2 = Number(document.getElementById('getal2').value);
    const resultaat = document.getElementById('resultaat');
    
    if (isNaN(getal1) || isNaN(getal2)) {
        resultaat.textContent = 'Voer geldige getallen in!';
        return;
    }
    
    resultaat.textContent = `De som is: ${getal1 + getal2}`;
}