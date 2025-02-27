"use strict";
const students = {
    Alex: [],
    Sami: [],
    Jo: []
};

document.getElementById("addGradeButton").addEventListener("click", function() {
    const student = document.getElementById("student").value;
    const course = document.getElementById("course").value.trim();
    const grade = parseFloat(document.getElementById("grade").value);
    
    if (course === "" || isNaN(grade) || grade < 0 || grade > 20) {
        alert("Vul alle velden correct in.");
        return;
    }
    
    students[student].push({ course, grade });
    updateOverview();
});

document.getElementById("clearResultsButton").addEventListener("click", function() {
    for (const student in students) {
        students[student] = [];
    }
    updateOverview();
});

function updateOverview() {
    const overview = document.getElementById("studentOverview");
    overview.innerHTML = "";
    
    for (const student in students) {
        if (students[student].length === 0) continue;
        
        let total = 0;
        let highest = -Infinity;
        let lowest = Infinity;
        let details = "";
        
        for (const entry of students[student]) {
            total += entry.grade;
            if (entry.grade > highest) highest = entry.grade;
            if (entry.grade < lowest) lowest = entry.grade;
            details += `<li>${entry.course}: ${entry.grade}/20</li>`;
        }
        
        const average = (total / students[student].length).toFixed(2);
        overview.innerHTML += `
            <div>
                <h3>${student}</h3>
                <ul>${details}</ul>
                <p>Gemiddelde score: ${average}</p>
                <p>Hoogste score: ${highest}</p>
                <p>Laagste score: ${lowest}</p>
            </div>
        `;
    }
}
