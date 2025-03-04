// script.js

class Persoon {
    constructor(naam, email, leeftijd) {
        this.naam = naam;
        this.setEmail(email);
        this.leeftijd = leeftijd;
    }

    setEmail(email) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("Ongeldig e-mailadres");
        }
        this.email = email;
    }
}

class Student extends Persoon {
    constructor(naam, email, leeftijd, studentnummer, studiejaar) {
        super(naam, email, leeftijd);
        this.studentnummer = studentnummer;
        this.studiejaar = studiejaar;
    }
    
    static zoekOpStudentnummer(nummer, studenten) {
        return studenten.find(student => student.studentnummer === nummer);
    }
}

class Docent extends Persoon {
    constructor(naam, email, leeftijd, vakgebied, aanstellingsdatum) {
        super(naam, email, leeftijd);
        this.vakgebied = vakgebied;
        this.aanstellingsdatum = aanstellingsdatum;
    }
}

class Cursus {
    constructor(titel, beschrijving, docent, ects, maximumStudenten) {
        this.titel = titel;
        this.beschrijving = beschrijving;
        this.docent = docent;
        this.ects = ects;
        this.setMaximumStudenten(maximumStudenten);
        this.ingeschrevenStudenten = [];
    }

    setMaximumStudenten(maximum) {
        if (maximum < 0) {
            throw new Error("Maximum studenten kan niet negatief zijn");
        }
        this.maximumStudenten = maximum;
    }
    
    static zoekOpTitel(titel, cursussen) {
        return cursussen.find(cursus => cursus.titel === titel);
    }
}

class Inschrijving {
    constructor(student, cursus) {
        if (cursus.ingeschrevenStudenten.length >= cursus.maximumStudenten) {
            throw new Error("Deze cursus zit vol");
        }
        if (Inschrijving.controleerDubbele(student, cursus)) {
            throw new Error("Student is al ingeschreven voor deze cursus");
        }
        this.student = student;
        this.cursus = cursus;
        this.inschrijfdatum = new Date();
        this.status = "actief";
        this.beoordeling = null;
        cursus.ingeschrevenStudenten.push(student);
    }
    
    wijzigStatus(nieuweStatus) {
        this.status = nieuweStatus;
    }
    
    voegBeoordelingToe(beoordeling) {
        this.beoordeling = beoordeling;
    }
    
    static controleerDubbele(student, cursus) {
        return cursus.ingeschrevenStudenten.includes(student);
    }
}

// Voorbeeldgegevens
const studenten = [
    new Student("Jan Jansen", "jan@email.com", 22, "S1234", 2),
    new Student("Piet Pietersen", "piet@email.com", 21, "S5678", 1)
];

const docenten = [
    new Docent("Dr. Smits", "smits@email.com", 45, "Informatica", "2005-09-01"),
    new Docent("Dr. van Dijk", "vandijk@email.com", 50, "Wiskunde", "2010-08-15")
];

const cursussen = [
    new Cursus("Dynamic Web", "Introductie tot HTML, CSS en JavaScript", docenten[0], 5, 30),
    new Cursus("Database fundamentals", "Leer SQL en relationele databases", docenten[0], 4, 25)
];

const inschrijvingen = [new Inschrijving(studenten[0], cursussen[0])];

// UI bijwerken
function toonCursussen() {
    document.getElementById("course-list").innerHTML = cursussen.map(cursus => 
        `<div>${cursus.titel} - ${cursus.beschrijving} (Docent: ${cursus.docent.naam})</div>`
    ).join("");
}

function toonStudenten() {
    document.getElementById("student-list").innerHTML = studenten.map(student => 
        `<div>${student.naam} - Studentnummer: ${student.studentnummer} - Studiejaar: ${student.studiejaar}</div>`
    ).join("");
}

function toonDocenten() {
    document.getElementById("teacher-list").innerHTML = docenten.map(docent => 
        `<div>${docent.naam} - Vakgebied: ${docent.vakgebied}</div>`
    ).join("");
}

function toonInschrijvingen() {
    document.getElementById("enrollment-list").innerHTML = inschrijvingen.map(inschrijving => 
        `<div>${inschrijving.student.naam} - Cursus: ${inschrijving.cursus.titel} - Status: ${inschrijving.status}</div>`
    ).join("");
}

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function() {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
        
        this.classList.add("active");
        document.getElementById(this.dataset.tab).classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    toonCursussen();
    toonStudenten();
    toonDocenten();
    toonInschrijvingen();
});
