document.addEventListener("DOMContentLoaded", function () {
    const gebruikersContainer = document.getElementById("gebruikers-container");
    
    // Gebruikersgegevens ophalen van de API
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Fout bij het ophalen van gebruikersgegevens");
            }
            return response.json();
        })
        .then(gebruikers => {
            // Verwijder de laad-indicator
            gebruikersContainer.innerHTML = "";
            
            // Het maken en toevoegen van gebruikerskaarten
            gebruikers.forEach(gebruiker => {
                const kaart = document.createElement("div");
                kaart.classList.add("gebruiker-kaart");
                
                kaart.innerHTML = `
                    <div class="gebruiker-naam">${gebruiker.name}</div>
                    <div class="gebruiker-email">📧 ${gebruiker.email}</div>
                    <div class="gebruiker-telefoon">📞 ${gebruiker.phone}</div>
                `;
                
                gebruikersContainer.appendChild(kaart);
            });
        })
        .catch(error => {
            gebruikersContainer.innerHTML = `<div class="error-melding">${error.message}</div>`;
        });
});
