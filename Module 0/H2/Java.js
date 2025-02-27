"use strict";
document.addEventListener('DOMContentLoaded', function() {
    // Selecteer elementen
    const nav = document.querySelector('#mainMenu');
    const content = document.querySelector('.content');
    
    // Maak hoofdmenu
    const menuList = document.createElement('ul');
    let currentChapterList;
    
    // Loop door alle headings
    Array.from(content.children).forEach(heading => {
        if (heading.tagName.match(/H[12]/)) {
            // Maak ID voor de heading
            heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
            
            // Maak menu item
            const menuItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;
            
            if (heading.tagName === 'H1') {
                // Hoofdstuk
                const subList = document.createElement('ul');
                menuItem.appendChild(link);
                menuItem.appendChild(subList);
                menuList.appendChild(menuItem);
                currentChapterList = subList;
            } else {
                // Sectie
                menuItem.appendChild(link);
                currentChapterList.appendChild(menuItem);
            }
        }
    });
    
    // Voeg menu toe
    nav.appendChild(menuList);
    
    // Voeg smooth scroll toe
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        });
    });
});