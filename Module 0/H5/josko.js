class Voertuig {
    constructor(merk, model, jaar, verhuurPrijs) {
        this.merk = merk;
        this.model = model;
        this.jaar = jaar;
        this.verhuurPrijs = verhuurPrijs;
        this.beschikbaar = true;
    }

    verhuur() {
        if (this.beschikbaar) {
            this.beschikbaar = false;
            return `${this.merk} ${this.model} is verhuurd.`;
        } else {
            return `${this.merk} ${this.model} is al verhuurd.`;
        }
    }

    retourneer() {
        if (!this.beschikbaar) {
            this.beschikbaar = true;
            return `${this.merk} ${this.model} is teruggebracht en nu beschikbaar.`;
        } else {
            return `${this.merk} ${this.model} is al beschikbaar.`;
        }
    }
}

class Auto extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, aantalDeuren, brandstofType) {
        super(merk, model, jaar, verhuurPrijs);
        this.aantalDeuren = aantalDeuren;
        this.brandstofType = brandstofType;
    }

    verhuur() {
        if (this.beschikbaar) {
            this.beschikbaar = false;
            return `De auto ${this.merk} ${this.model} (${this.aantalDeuren} deuren, ${this.brandstofType}) is verhuurd.`;
        } else {
            return `De auto ${this.merk} ${this.model} is al verhuurd.`;
        }
    }
}

class Motor extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, cilinderinhoud, type) {
        super(merk, model, jaar, verhuurPrijs);
        this.cilinderinhoud = cilinderinhoud;
        this.type = type;
    }

    verhuur() {
        if (this.beschikbaar) {
            this.beschikbaar = false;
            return `De motor ${this.merk} ${this.model} (${this.cilinderinhoud}cc, type: ${this.type}) is verhuurd.`;
        } else {
            return `De motor ${this.merk} ${this.model} is al verhuurd.`;
        }
    }
}

// Lijst van voertuigen
let voertuigen = [
    new Auto("Toyota", "Corolla", 2020, 50, 5, "Benzine"),
    new Auto("Tesla", "Model 3", 2022, 100, 4, "Elektrisch"),
    new Motor("Yamaha", "R1", 2021, 75, 998, "Sport"),
    new Motor("Harley-Davidson", "Softail", 2019, 80, 1745, "Cruiser")
];

function updateTabel() {
    let output = document.getElementById("output");
    let html = `
        <table>
            <tr>
                <th>Type</th>
                <th>Merk</th>
                <th>Model</th>
                <th>Jaar</th>
                <th>Prijs per dag (€)</th>
                <th>Extra Details</th>
                <th>Status</th>
                <th>Actie</th>
            </tr>
    `;

    voertuigen.forEach((voertuig, index) => {
        let extraDetails = "";
        if (voertuig instanceof Auto) {
            extraDetails = `${voertuig.aantalDeuren} deuren, ${voertuig.brandstofType}`;
        } else if (voertuig instanceof Motor) {
            extraDetails = `${voertuig.cilinderinhoud}cc, ${voertuig.type}`;
        }

        let status = voertuig.beschikbaar ? "Beschikbaar" : "Verhuurd";
        let verhuurButton = voertuig.beschikbaar
            ? `<button class="verhuur-btn" onclick="verhuurVoertuig(${index})">Verhuur</button>`
            : `<button class="retourneer-btn" onclick="retourneerVoertuig(${index})">Retourneer</button>`;

        html += `
            <tr>
                <td>${voertuig instanceof Auto ? "Auto" : "Motor"}</td>
                <td>${voertuig.merk}</td>
                <td>${voertuig.model}</td>
                <td>${voertuig.jaar}</td>
                <td>${voertuig.verhuurPrijs}</td>
                <td>${extraDetails}</td>
                <td>${status}</td>
                <td>${verhuurButton}</td>
            </tr>
        `;
    });

    html += `</table>`;
    output.innerHTML = html;
}

function verhuurVoertuig(index) {
    alert(voertuigen[index].verhuur());
    updateTabel();
}

function retourneerVoertuig(index) {
    alert(voertuigen[index].retourneer());
    updateTabel();
}

// Initialiseren van de tabel
updateTabel();
