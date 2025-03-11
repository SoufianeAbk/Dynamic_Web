async function wacht(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function verlichtBlok(blok, tijd) {
    const origineleKleur = blok.style.backgroundColor;
    blok.style.backgroundColor = 'white';
    await wacht(tijd);
    blok.style.backgroundColor = origineleKleur;
}

async function startLichtshow() {
    const blokken = document.querySelectorAll('.block');
    const tijd = 500;

    // Van links naar rechts
    for (let i = 0; i < blokken.length; i++) {
        await verlichtBlok(blokken[i], tijd);
    }

    await wacht(500);

    // Van rechts naar links
    for (let i = blokken.length - 1; i >= 0; i--) {
        await verlichtBlok(blokken[i], tijd);
    }
}

document.getElementById('startBtn').addEventListener('click', async () => {
    await startLichtshow();
});
