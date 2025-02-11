let donker = false;

function wisselThema() {
    donker = !donker;
    
    if (donker) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.querySelector('a').style.color = 'red';
        document.querySelector('button').textContent = 'Witte modus';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector('a').style.color = 'blue';
        document.querySelector('button').textContent = 'Donkere modus';
    }
}