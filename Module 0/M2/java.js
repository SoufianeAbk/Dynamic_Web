document.querySelectorAll('.special').forEach(el => el.style.color = 'red');

document.getElementsByTagName('p')[1].style.textDecoration = 'underline';

document.getElementById('output').textContent = `Aantal elementen met class 'special': ${document.querySelectorAll('.special').length}`;
