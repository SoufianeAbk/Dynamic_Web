class Student {
    constructor(naam, vakken) {
      this.naam = naam;
      this.vakken = vakken.reduce((acc, vak) => ((acc[vak] = []), acc), {});
    }
  
    voegPuntToe(vak, punt) {
      if (this.vakken[vak]) this.vakken[vak].push(punt);
    }
  
    gemiddelde() {
      let punten = Object.values(this.vakken).flat();
      return punten.length ? (punten.reduce((a, b) => a + b) / punten.length).toFixed(2) : 0;
    }
  
    toonRapport() {
      return `${this.naam}\n${Object.entries(this.vakken)
        .map(([vak, punten]) => `${vak}: ${punten.join(", ") || "geen punten"}`)
        .join("\n")}\nGemiddelde: ${this.gemiddelde()}`;
    }
  }
  
  const student1 = new Student("Alice", ["Wiskunde", "Engels", "Geschiedenis"]);
  const student2 = new Student("Bob", ["Wiskunde", "Natuurkunde", "Aardrijkskunde"]);
  const student3 = new Student("Amar", ["Wiskunde", "Wetenschape", "Aardrijkskunde"]);

  student1.voegPuntToe("Wiskunde", 8);
  student1.voegPuntToe("Engels", 7);
  student1.voegPuntToe("Geschiedenis", 9);
  
  student2.voegPuntToe("Wiskunde", 6);
  student2.voegPuntToe("Natuurkunde", 7);
  student2.voegPuntToe("Aardrijkskunde", 8);

  student3.voegPuntToe("Wiskunde", 9);
  student3.voegPuntToe("Wetenschape", 6);
  student3.voegPuntToe("Aardrijkskunde", 7);

  const output = document.getElementById("output");
  output.innerText = `${student1.toonRapport()}\n\n${student2.toonRapport()}\n\n${student3.toonRapport()}`;

  