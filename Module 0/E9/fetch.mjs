document.getElementById('haalTekstOp').addEventListener('click', async () => {
    const resultaatDiv = document.getElementById('resultaat');
    resultaatDiv.innerHTML = '<p>Bezig met ophalen...</p>';
    resultaatDiv.classList.remove('error');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error(`Fout: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const formattedText = `<h2>${data.title}</h2><p>${data.body}</p>`;
        resultaatDiv.innerHTML = formattedText;
    } catch (error) {
        resultaatDiv.innerHTML = `<p class="error">Er is iets misgegaan: ${error.message}</p>`;
    }
});
