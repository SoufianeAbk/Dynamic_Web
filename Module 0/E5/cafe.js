const maakBestelling = (drank = "cola", snack = "chips") => {
    return { drank, snack };
};


const bestelling1 = maakBestelling();
const bestelling2 = maakBestelling("fanta");
const bestelling3 = maakBestelling("sprite", "nootjes");


const output = document.getElementById("output");
output.innerHTML += `<p>Bestelling 1: ${JSON.stringify(bestelling1)}</p>`;
output.innerHTML += `<p>Bestelling 2: ${JSON.stringify(bestelling2)}</p>`;
output.innerHTML += `<p>Bestelling 3: ${JSON.stringify(bestelling3)}</p>`;
