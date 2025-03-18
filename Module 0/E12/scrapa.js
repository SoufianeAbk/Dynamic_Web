const users = [
    { id: 1, name: "Emma", role: "Admin", lastLogin: "2023-03-15" },
    { id: 2, name: "Thomas", role: "User", lastLogin: "2023-03-17" },
    { id: 3, name: "Sophie", role: "Editor", lastLogin: "2023-03-12" },
    { id: 4, name: "Lucas", role: "User", lastLogin: "2023-03-10" }
];

document.getElementById("showUsers").addEventListener("click", () => {
    console.clear();
    console.log("%cGebruikersoverzicht", "font-size: 16px; font-weight: bold; color: blue;");

    // Toon alle gebruikers in een tabel
    console.table(users);

    // Groepeer gebruikers per rol
    console.group("Gebruikersrollen");
    users.forEach(user => {
        let message = `ID: ${user.id}, Naam: ${user.name}, Laatste login: ${user.lastLogin}`;
        
        switch (user.role) {
            case "Admin":
                console.info(`%c[Admin] ${message}`, "color: green;");
                break;
            case "Editor":
                console.warn(`%c[Editor] ${message}`, "color: orange;");
                break;
            case "User":
                console.error(`%c[User] ${message}`, "color: red;");
                break;
            default:
                console.log(message);
        }
    });
    console.groupEnd();
});
