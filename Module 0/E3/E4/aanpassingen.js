"use strict";
document.getElementById("generateCard").addEventListener("click", function() {
    const name = document.getElementById("recipeName").value.trim();
    const prepTime = document.getElementById("prepTime").value.trim();
    const ingredients = document.getElementById("ingredients").value.trim().split("\n").filter(ing => ing);

    if (!name || !prepTime || ingredients.length === 0) {
        alert("Vul alle velden in!");
        return;
    }

    document.getElementById("result").innerHTML = `
        <h2>🥘 ${name}</h2>
        <p><strong>⏱️ Bereidingstijd:</strong> ${prepTime} minuten</p>
        <h3>Ingrediënten:</h3>
        <ul>${ingredients.map(ing => `<li>- ${ing}</li>`).join('')}</ul>
    `;
});
