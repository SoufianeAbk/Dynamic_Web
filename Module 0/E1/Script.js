"use strict";
function toggleText() {
    const button = document.getElementById('toggleButton');
    button.textContent = button.textContent === 'Hallo!' ? 'Tot ziens!' : 'Hallo!';
}

document.getElementById('toggleButton').addEventListener('click', toggleText);