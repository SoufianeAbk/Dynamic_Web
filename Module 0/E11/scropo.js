async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const resultElement = document.getElementById('result');
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP fout! Status: ${response.status}`);
        }
        
        const data = await response.json();
        resultElement.textContent = `Title: ${data.title}`;
    } catch (error) {
        resultElement.textContent = `Fout bij ophalen van data: ${error.message}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});
