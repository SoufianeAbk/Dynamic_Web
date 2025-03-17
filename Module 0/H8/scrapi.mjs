let isCelsius = true;

document.getElementById('search-button').addEventListener('click', fetchWeather);
document.getElementById('city-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') fetchWeather();
});

async function fetchWeather() {
    let city = document.getElementById('city-input').value.trim();
    if (!city) return;

    // Controleer of de stad een alternatieve naam heeft
    const cityMapping = {
        'Brugge': 'Bruges',
        'Luik': 'Liege',
        'Antwerpen': 'Antwerp',
        'Kortrijk': 'Courtrai',
        'Gent': 'Ghent',
        'Leuven': 'Louvain',
        'Namen': 'Namur',
        'Charleroi': 'Charleroi',
        'Hasselt': 'Hasselt',
        'Mechelen': 'Mechelen',
        'Oostende': 'Ostend',
        'Aalst': 'Aalst',
        'Sint-Niklaas': 'Sint-Niklaas',
        'Turnhout': 'Turnhout',
        'Genk': 'Genk',
        'Roeselare': 'Roeselare',
        'Mons': 'Mons',
        'Tournai': 'Tournai',
        'Dendermonde': 'Dendermonde',
        'Bergen': 'Mons',
        'Ieper': 'Ypres'
    };
    if (cityMapping[city]) {
        city = cityMapping[city];
    }

    const url = `https://wttr.in/${encodeURIComponent(city)}?format=%C|%t|%h|%w`;
    console.log(`Fetching weather data from: ${url}`); // Debug log
    displayLoading();

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Kan geen weergegevens ophalen. Controleer of de stad correct is ingevoerd.');
        }
        const data = await response.text();
        console.log("API Response:", data); // Debug log

        displayWeatherText(data, city);
    } catch (error) {
        console.error("Foutmelding:", error); // Debug log
        displayError(error.message);
    }
}

function displayWeatherText(data, city) {
    const weatherDisplay = document.getElementById('weather-display');
    const [condition, temperature, humidity, wind] = data.split('|');

    weatherDisplay.innerHTML = `
        <div class="weather-card">
            <h2>${city}, België</h2>
            <p><strong>Temperatuur:</strong> <span id="temp">${temperature}</span></p>
            <p><strong>Weer:</strong> ${condition}</p>
            <p><strong>Luchtvochtigheid:</strong> ${humidity}</p>
            <p><strong>Windsnelheid:</strong> ${wind}</p>
        </div>
    `;
}

function displayError(message) {
    document.getElementById('weather-display').innerHTML = `<div class="error">${message}</div>`;
}

function displayLoading() {
    document.getElementById('weather-display').innerHTML = '<div class="loading">Laden...</div>';
}

displayFavorites();
