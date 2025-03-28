const weatherBtn = document.getElementById('getWeather');
const weatherData = document.getElementById('weather-data');
const loader = document.getElementById('loader');
const cachedNotice = document.getElementById('cached-notice');

const API_KEY = 'f25299706f8379d9f3d236d87b3662c8';

function showLoader(show) {
    loader.style.display = show ? 'block' : 'none';
}

function showWeather(temp, city) {
    weatherData.innerHTML = `<p>🌡️ Temperatuur: ${temp}°C<br>📍 Locatie: ${city}</p>`;
}

function saveToLocalStorage(data) {
    localStorage.setItem('weatherData', JSON.stringify({
        data: data,
        timestamp: new Date().getTime()
    }));
}

function loadFromLocalStorage() {
    const stored = localStorage.getItem('weatherData');
    if (stored) {
        const { data, timestamp } = JSON.parse(stored);
        const age = (new Date().getTime() - timestamp) / 1000;
        if (age < 3600) {
            showWeather(data.main.temp, data.name);
            cachedNotice.textContent = '📦 Laatste opgeslagen gegevens (worden vernieuwd)...';
            return true;
        }
    }
    return false;
}

async function fetchWeather(lat, lon) {
    showLoader(true);
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=nl`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Fout bij ophalen van weergegevens');
        const data = await res.json();
        showWeather(data.main.temp, data.name);
        saveToLocalStorage(data);
        cachedNotice.textContent = '';
    } catch (err) {
        weatherData.innerHTML = `<p>⚠️ Er is een fout opgetreden: ${err.message}</p>`;
    } finally {
        showLoader(false);
    }
}

function getWeather() {
    if (!navigator.geolocation) {
        weatherData.innerHTML = `<p>❌ Geolocatie wordt niet ondersteund door deze browser.</p>`;
        return;
    }

    if (!loadFromLocalStorage()) {
        cachedNotice.textContent = '';
    }

    navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
        },
        error => {
            weatherData.innerHTML = `<p>📍 Kan locatie niet ophalen: ${error.message}</p>`;
        }
    );
}

weatherBtn.addEventListener('click', getWeather);
