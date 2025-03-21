const toggleButton = document.getElementById('themeToggle');
const body = document.body;

// Functie om thema toe te passen op basis van opgeslagen voorkeur
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        toggleButton.textContent = 'Schakel naar Licht Thema';
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        toggleButton.textContent = 'Schakel naar Donker Thema';
    }
}

// Thema wisselen bij klikken op de knop
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        toggleButton.textContent = 'Schakel naar Donker Thema';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        toggleButton.textContent = 'Schakel naar Licht Thema';
        localStorage.setItem('theme', 'dark');
    }
});

// Pas het thema toe bij het laden van de pagina
applySavedTheme();
